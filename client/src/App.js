import React from "react"

import "./App.css"
import { io } from "socket.io-client";
import HomePage from "./pages/HomePage.jsx"
import Specialist from "./pages/Specialists.jsx"
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };
  
  return (
    
    <div className="App">
	   <Router>
      <nav>
        <Link to="/blog"> Home </Link>

        {!isAuth ? (
          <Link to="/login"> Login </Link>
        ) : (
          <>
            <Link to="/createpost"> Create Post </Link>
            <button onClick={signUserOut}> Log Out</button>
          </>
        )}
      </nav>
      <BrowserRouter>
				<Routes>          
					<Route path="/" element={<HomePage />} />
          <Route path="/talk" element={<Specialist />} />
         <Route path="/blog" element={<Home isAuth={isAuth} />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/form" element={<Form />} />
				</Routes>
		  </BrowserRouter>
    </div>
  );
}
export default App;

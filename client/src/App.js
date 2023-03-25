import React from "react"

import "./App.css"
import HomePage from "./pages/HomePage.jsx"
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";

export default function App() {
  return (
    const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

    <BrowserRouter>
	     <nav>
		<Link to="/"> Home </Link>

		{!isAuth ? (
		  <Link to="/login"> Login </Link>
		) : (
		  <>
		    <Link to="/createpost"> Create Post </Link>
		    <button onClick={signUserOut}> Log Out</button>
		  </>
		)}
	    </nav>
			<div className="App">
				<Routes>          
					
					<Route path="/blog" element={<Home isAuth={isAuth} />} />
					<Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
					<Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
	                                <Route path="/" component={HomePage} exact />
				</Routes>
			</div>	
		</BrowserRouter>
  );
}

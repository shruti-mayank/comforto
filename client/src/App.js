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
import DocDash from "./pages/DocDash.jsx"
import Form from "./pages/Form.jsx"
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
      <BrowserRouter> 
      <Routes>
					<Route path="/" element={<HomePage />} />
          <Route path="/talk" element={<Specialist />} />
          <Route path="/DoctorDashboard" element={<DocDash />} />
          <Route path="/blog" element={<Home />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/form" element={<Form />} />
				</Routes>
		  </BrowserRouter>
    </div>
  );
}
export default App;
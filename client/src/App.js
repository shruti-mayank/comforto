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
  return (
    <div className="App">
      <BrowserRouter>
				<Routes>          
					<Route path="/" element={<HomePage />} />
          <Route path="/talk" element={<Specialist />} />
				</Routes>
		  </BrowserRouter>
    </div>
  );
}
export default App;

import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import { io } from "socket.io-client";
import HomePage from "./pages/HomePage.jsx"
import Specialist from "./pages/Specialists.jsx"

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
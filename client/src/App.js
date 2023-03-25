import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import HomePage from "./pages/HomePage.jsx"

export default function App() {
  return (
    <BrowserRouter>
			<div className="App">
				<Routes>          
					<Route path="/" component={HomePage} exact />
				</Routes>
			</div>	
		</BrowserRouter>
  );
}
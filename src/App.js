import React from "react";
import Home from "./Home";
import Check from "./Check";
import Answers from "./Answers";
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/check" element={<Check />} />
				<Route exact path="/answers" element={<Answers />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

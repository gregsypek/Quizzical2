import React from "react";
import Home from "./Home";
import Check from "./Check";
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/check" element={<Check />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

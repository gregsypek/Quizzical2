import React from "react";
import Home from "./Home";
import Check from "./Check";
import ErrorPage from "./ErrorPage";
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route path="/check" element={<Check />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

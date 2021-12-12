import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
	function handleClick() {
		console.log("klik");
	}

	return (
		<div className="wrapper wrapper-home grid bg-white">
			<main className="home flex ">
				<h1 className="fs-700 ff-sans-normal text-accent">Quizzical</h1>
				<p className="fs-sans-cond fs-400">Some description if needed</p>
				<Link to="/check" onClick={handleClick} className="btn btn--full">
					Start quiz
				</Link>
			</main>
		</div>
	);
}

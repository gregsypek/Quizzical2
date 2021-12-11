import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
	return (
		<div className="home flex">
			<h1 className="fs-700 ff-sans-normal text-accent">Quizzical</h1>
			<p className="fs-sans-cond fs-400">Some description if needed</p>
			<Link to="/check" className="btn btn--full">
				Start quiz
			</Link>
		</div>
	);
}

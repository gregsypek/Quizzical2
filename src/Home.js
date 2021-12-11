import React from "react";

export default function Home() {
	return (
		<div className="home flex">
			<h1 className="fs-700 ff-sans-normal text-accent">Quizzical</h1>
			<p className="fs-sans-cond fs-400">Some description if needed</p>
			<a href="index.html" className="btn btn--full">
				Start quiz
			</a>
		</div>
	);
}

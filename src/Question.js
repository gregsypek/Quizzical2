import React from "react";
import Button from "./Button";
export default function Question({
	question,
	incorrect_answers,
	correct_answer,
}) {
	const allOptions = [...incorrect_answers, correct_answer];
	const buttons = allOptions.map((btn) => <Button text={btn} />);
	// console.log("all", allOptions);
	console.log(allOptions);
	return (
		<div className="box grid">
			<p className="fs-400">{question}</p>
			<div className="answers flex fs-200">{buttons}</div>
			<hr />
		</div>
	);
}

// <div className="answers flex fs-200">
// 	<button className="btn btn--option btn--checked">Adidos</button>
// 	<button className="btn btn--option">Hola</button>
// 	<button className="btn btn--option">Au Revoir</button>
// 	<button className="btn btn--option">Salir</button>
// </div>;

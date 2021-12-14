import React, { useState } from "react";

import Button from "./Button";

export default function Question({
	question,
	incorrect_answers,
	correct_answer,
	mix_answers,
	id,
	questionsLength,
	answer,
}) {
	// const [answers, setAnswers] = useState([
	// 	{
	// 		[id]: answer,
	// 	},
	// ]);
	const [answers, setAnswers] = useState([]);

	function markButton(name, id) {
		const box = document.querySelector(`.box[data-id="${id}"]`);
		const allButtons = box.querySelectorAll(".btn--option");
		allButtons.forEach((btn) => btn.classList.remove("btn--checked"));

		document
			.querySelector(`[data-name="${name}"]`)
			.classList.add("btn--checked");

		console.log(answers);
		console.log("id", id);
		setAnswers((prev) => [{ ...prev }, { [id]: name }]);
	}
	console.log("bbbb", answers);

	const buttons = mix_answers.map((btn, i) => {
		return (
			<Button
				key={i}
				text={btn}
				markButton={() => markButton(btn, id)}
				id={id}
				name={btn}
			/>
		);
	});

	return (
		<div className="box grid" data-id={id}>
			<p className="fs-400">{question}</p>
			<div className="answers flex fs-200">{buttons}</div>
			<hr />
		</div>
	);
}

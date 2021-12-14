// import { nanoid } from "nanoid";
import React, { useState } from "react";
import Button from "./Button";

export default function Question({
	question,
	incorrect_answers,
	correct_answer,
	mix_answers,
	id,
}) {
	const [answers, setAnswers] = useState([]);

	function markButton(name) {
		console.log("click", name);
		const box = document.querySelector(`.box[data-id="${id}"]`);
		const allButtons = box.querySelectorAll(".btn--option");
		console.log("all", allButtons);
		allButtons.forEach((btn) => btn.classList.remove("btn--checked"));

		document
			.querySelector(`[data-name="${name}"]`)
			.classList.add("btn--checked");

		console.log(answers);
		// console.log(answers);
		setAnswers(() => [name]);
	}
	console.log(answers);

	// allOptions = allOptions.sort(() => Math.random() - 0.5);

	const buttons = mix_answers.map((btn, i) => {
		// let id = nanoid();
		return (
			<Button
				key={i}
				text={btn}
				markButton={() => markButton(btn)}
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

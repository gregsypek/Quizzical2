import React from "react";

import Button from "./Button";

export default function Question({ question, isCheck, mix_answers, id }) {
	function markButton(name, id) {
		if (!isCheck) {
			const box = document.querySelector(`.box[data-id="${id}"]`);
			const allButtons = box.querySelectorAll(".btn--option");
			allButtons.forEach((btn) => {
				btn.classList.remove("btn--checked");
				btn.classList.remove("btn--correct");
			});

			document
				.querySelector(`[data-name="${name}"]`)
				.classList.add("btn--checked");
		} else return;
		// console.log("id", id);
		// setAnswers((prev) =>
		// 	prev.length > 0 ? [({ ...prev }, { [id]: name })] : [{ [id]: name }]
		// );
		// console.log(answers);
	}

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

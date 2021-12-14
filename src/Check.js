import React, { useEffect, useState } from "react";
import Question from "./Question";

import { nanoid } from "nanoid";

export default function Check() {
	const [data, setData] = useState([]);
	const [isCheck, setIsCheck] = useState(false);

	useEffect(() => {
		fetch(
			"https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple"
		)
			.then((res) => res.json())
			.then((data) =>
				setData(
					data.results.map((obj) => ({
						id: nanoid(),
						question: obj.question,
						incorrect_answers: obj.incorrect_answers,
						correct_answer: obj.correct_answer,
						all_answers: [...obj.incorrect_answers, obj.correct_answer],
						mix_answers: [...obj.incorrect_answers, obj.correct_answer].sort(
							() => Math.random() - 0.5
						),
					}))
				)
			);
	}, []);
	console.log(data);

	const allQuestions = data.map((item, i) => (
		<Question
			key={item.id}
			question={item.question}
			incorrect_answers={item.incorrect_answers}
			correct_answer={item.correct_answer}
			mix_answers={item.all_answers}
			id={i}
			questionsLength={data.length}
		/>
	));

	const correct = data.map((item) => item.correct_answer);

	function checkAnswer() {
		// const mark = document.querySelector(`.box[data-id="${id}"]`);
		const mark = document.querySelectorAll(".btn--checked");
		console.log(mark);
		let answers = [];
		mark.forEach((item) => answers.push(item.dataset.name));
		console.log(answers);
		answers.map((answer) =>
			correct.includes(answer)
				? document
						.querySelector(`[data-name="${answer}"]`)
						.classList.add("btn--correct")
				: document
						.querySelector(`[data-name="${answer}"]`)
						.classList.add("btn--wrong")
		);
	}
	return (
		<div className="wrapper wrapper-check grid bg-white">
			<main className="check grid">
				{allQuestions}

				<button onClick={checkAnswer} className="btn btn--check-answer">
					Check answers
				</button>
			</main>
		</div>
	);
}

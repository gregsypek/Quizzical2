import React, { useEffect, useState } from "react";
import Question from "./Question";
import { Link } from "react-router-dom";

import { nanoid } from "nanoid";

export default function Check() {
	const [data, setData] = useState([]);
	const [isCheck, setIsCheck] = useState(false);
	const [score, setScore] = useState(0);

	useEffect(() => {
		fetch(
			"https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple"
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

	const allQuestions = data.map((item, i) => (
		<Question
			key={item.id}
			question={item.question}
			incorrect_answers={item.incorrect_answers}
			correct_answer={item.correct_answer}
			mix_answers={item.all_answers}
			id={i}
			questionsLength={data.length}
			isCheck={isCheck}
		/>
	));

	const allCorrectAnswers = data.map((item) => item.correct_answer);

	function showCorrectAnswers() {
		allCorrectAnswers.map((answer) =>
			document
				.querySelector(`[data-name="${answer}"]`)
				.classList.add("btn--correct")
		);
	}
	function checkAnswer() {
		// const mark = document.querySelector(`.box[data-id="${id}"]`);
		if (!isCheck) {
			const mark = document.querySelectorAll(".btn--checked");
			let answers = [];
			mark.forEach((item) => answers.push(item.dataset.name));
			answers.map((answer) => {
				if (allCorrectAnswers.includes(answer)) {
					setScore((prev) => prev + 1);
					document
						.querySelector(`[data-name="${answer}"]`)
						.classList.add("btn--correct");
				} else {
					document
						.querySelector(`[data-name="${answer}"]`)
						.classList.add("btn--wrong");
				}
				//what return
				return setScore;
			});
			showCorrectAnswers();
			setIsCheck((state) => !state);
		} else return;
	}
	function resetGame() {
		setIsCheck(false);
	}

	return (
		<div className="wrapper wrapper-check grid bg-white">
			<main className="check grid">
				{allQuestions}

				<div className="results flex">
					{isCheck ? (
						<p>
							You scored {score}/{data.length} correct answers
						</p>
					) : (
						""
					)}
					{!isCheck ? (
						<button onClick={checkAnswer} className="btn btn--check-answer">
							Check answers
						</button>
					) : (
						<Link to="/" onClick={resetGame} className="btn btn--check-answer">
							Play again
						</Link>
					)}
				</div>
			</main>
		</div>
	);
}

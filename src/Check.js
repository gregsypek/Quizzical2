import React, { useEffect, useState } from "react";
import Question from "./Question";

import { Link } from "react-router-dom";
import { nanoid } from "nanoid";

export default function Check() {
	const [data, setData] = useState([]);
	// const [userAnswers, setUserAnswers] = useState([]);
	// const [sortedAnswers, setSortedAnswers] = useState([]);

	// const [answer, setAnswer] = useState([]);

	// function setArrayWithNumbers() {
	// 	let arr = [];
	// 	for (let i = 0; i < questionsLength; i++) {
	// 		arr.push(i);
	// 	}
	// 	return arr;
	// }

	// const [answer, setAnswer] = useState([]);

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
	return (
		<div className="wrapper wrapper-check grid bg-white">
			<main className="check grid">
				{allQuestions}

				<Link to="/answers" className="btn btn--check-answer">
					Check answers
				</Link>
			</main>
		</div>
	);
}

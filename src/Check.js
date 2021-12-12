import React, { useEffect, useState } from "react";
import Question from "./Question";

import { Link } from "react-router-dom";
import { nanoid } from "nanoid";

export default function Check() {
	const [data, setData] = useState([]);

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
					}))
				)
			);
	}, []);

	console.log(data);

	const allQuestions = data.map((item) => (
		<Question
			key={item.id}
			question={item.question}
			incorrect_answers={item.incorrect_answers}
			correct_answer={item.correct_answer}
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

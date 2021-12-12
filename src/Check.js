import React, { useEffect, useState } from "react";
import Question from "./Question";

import { Link } from "react-router-dom";

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
			question={item.question}
			incorrect_answers={item.incorrect_answers}
			correct_answer={item.correct_answer}
		/>
	));
	return (
		<div className="wrapper wrapper-check grid bg-white">
			<main className="check grid">
				{allQuestions}
				{/* <div className="box grid">
					<p className="fs-400">How would one say goodbye in Spanish?</p>
					<div className="answers flex fs-200">
						<button className="btn btn--option btn--checked">Adidos</button>
						<button className="btn btn--option">Hola</button>
						<button className="btn btn--option">Au Revoir</button>
						<button className="btn btn--option">Salir</button>
					</div>
					<hr />
				</div> */}
				{/* <div className="box grid">
					<p className="fs-400">
						{" "}
						Which best selling toy of 1983 caused hysteria, resulting in riots
						breaking in stores?
					</p>
					<div className="answers flex fs-200">
						<button className="btn btn--option btn--checked">Adidos</button>
						<button className="btn btn--option">Hola</button>
						<button className="btn btn--option">Au Revoir</button>
						<button className="btn btn--option">Salir</button>
					</div>
					<hr />
				</div>
				<div className="box grid">
					<p className="fs-400">How would one say goodbye in Spanish?</p>
					<div className="answers flex fs-200">
						<button className="btn btn--option btn--checked">Adidos</button>
						<button className="btn btn--option">Hola</button>
						<button className="btn btn--option">Au Revoir</button>
						<button className="btn btn--option">Salir</button>
					</div>
					<hr />
				</div>
				<div className="box grid">
					<p className="fs-400">How would one say goodbye in Spanish?</p>
					<div className="answers flex fs-200">
						<button className="btn btn--option btn--checked">Adidos</button>
						<button className="btn btn--option">Hola</button>
						<button className="btn btn--option">Au Revoir</button>
						<button className="btn btn--option">Salir</button>
					</div>
					<hr />
				</div> */}
				<Link to="/answers" className="btn btn--check-answer">
					Check answers
				</Link>
			</main>
		</div>
	);
}

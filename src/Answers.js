import React from "react";
import { Link } from "react-router-dom";

export default function Answers() {
	return (
		<div className="wrapper wrapper-answers grid bg-white">
			<main className="check grid">
				<div className="box grid">
					<p className="fs-400">How would one say goodbye in Spanish?</p>
					<div className="answers flex fs-200">
						<button className="btn btn--option btn--correct">Adidos</button>
						<button className="btn btn--option">Hola</button>
						<button className="btn btn--option">Au Revoir</button>
						<button className="btn btn--option">Salir</button>
					</div>
					<hr />
				</div>
				<div className="box grid">
					<p className="fs-400">
						{" "}
						Which best selling toy of 1983 caused hysteria, resulting in riots
						breaking in stores?
					</p>
					<div className="answers flex fs-200">
						<button className="btn btn--option btn--wrong">Adidos</button>
						<button className="btn btn--option">Hola</button>
						<button className="btn btn--option btn--correct">Au Revoir</button>
						<button className="btn btn--option">Salir</button>
					</div>
					<hr />
				</div>
				<div className="box grid">
					<p className="fs-400">How would one say goodbye in Spanish?</p>
					<div className="answers flex fs-200">
						<button className="btn btn--option btn--wrong">Adidos</button>
						<button className="btn btn--option">Hola</button>
						<button className="btn btn--option btn--correct">Au Revoir</button>
						<button className="btn btn--option">Salir</button>
					</div>
					<hr />
				</div>
				<div className="box grid">
					<p className="fs-400">How would one say goodbye in Spanish?</p>
					<div className="answers flex fs-200">
						<button className="btn btn--option btn--correct">Adidos</button>
						<button className="btn btn--option">Hola</button>
						<button className="btn btn--option">Au Revoir</button>
						<button className="btn btn--option">Salir</button>
					</div>
					<hr />
				</div>
				<div className="results flex">
					<p>You scored 3/5 correct answers</p>
					<Link to="/" className="btn btn--play">
						Play again
					</Link>
				</div>
			</main>
		</div>
	);
}

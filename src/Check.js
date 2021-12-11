import React from "react";

export default function Check() {
	return (
		<div className="wrapper wrapper-check grid bg-white">
			<main className="check grid">
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
				</div>
				<button className="btn btn--check-answer">Check answers</button>
			</main>
		</div>
	);
}

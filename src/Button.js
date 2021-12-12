import React from "react";

export default function Button({ text, correct_answer, id, markButton }) {
	return (
		<button data-id={id} className="btn btn--option" onClick={markButton}>
			{text}
		</button>
	);
}

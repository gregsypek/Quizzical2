import React from "react";

export default function Button({ text, name, answer, id, markButton }) {
	return (
		<button
			data-name={name}
			data-id={id}
			className="btn btn--option"
			onClick={markButton}
		>
			{text}
		</button>
	);
}

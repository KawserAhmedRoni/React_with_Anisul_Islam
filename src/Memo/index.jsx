import React from "react";
import Memo2 from "./index2";

const Memo = () => {
	console.log("Randering Memo");
	const [number, setNumber] = React.useState(0);
	return (
		<>
			<div className="container">
				<h1>Count : {number}</h1>
				<button onClick={() => setNumber(number + 1)}>+</button>
				<Memo2 goCount={0} />
			</div>
		</>
	);
};

export default Memo;

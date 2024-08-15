import React, { memo } from "react";

const Memo2 = ({ goCount }) => {
	console.log("Randering Memo2");
	return (
		<>
			<h1>Memo2 {goCount}</h1>
		</>
	);
};

export default memo(Memo2);

import React, { useState } from "react";

const useSlideDown = () => {
	const [slideDownRow, setSlideDownRow] = useState("");
	const [slideDownContent, setSlideDownContent] = useState("");

	const slideDown = (e) => {
		if (slideDownContent === "") {
			setSlideDownContent("slide-down");
			setSlideDownRow(`slide-down-row-${articleNum}`);
		} else {
			setSlideDownContent("");
			setSlideDownRow("");
		}
	};
	return [slideDownContent, slideDownRow];
};

export default useSlideDown;

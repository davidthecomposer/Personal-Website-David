import React, { useState, useEffect, useCallback } from "react";

import operaContempoHeader from "../../../images/news/OCHeader.png";

const OCTComposerInRes = ({ articleNum }) => {
	const [slideDownRow, setSlideDownRow] = useState("");
	const [slideDownContent, setSlideDownContent] = useState("");
	const [height, setHeight] = useState(0);

	const articleHeight = useCallback((article) => {
		if (article !== null) {
			const articleHeightObj = new ResizeObserver((entries) => {
				setHeight(entries[0].contentRect.height.toFixed(1));
			});

			articleHeightObj.observe(article);
		}
	}, []);

	useEffect(() => {
		document.documentElement.style.setProperty(
			`--news-height-${articleNum}`,
			`${height}px`
		);
	}, [height, articleNum]);

	const slideDown = (e) => {
		if (slideDownContent === "") {
			setSlideDownContent("slide-down");
			setSlideDownRow(`slide-down-row-${articleNum}`);
		} else {
			setSlideDownContent("");
			setSlideDownRow("");
		}
	};

	return (
		<div className={`news-row ${slideDownRow}`}>
			<h2 className='news-item-title' onClick={slideDown}>
				Composer-In-Residence
			</h2>
			<div
				className={`news-wrapper-${articleNum} ${slideDownContent}`}
				ref={articleHeight}>
				<div className='news-slot-main'>
					<p className='news-text'>
						I have accepted an invitation to be the composer-in-residence for
						Opera Contempo. I look forward to helping to grow this important new
						outlet for modern voices and stories. One of the goals of Opera
						Contempo is to create space for new composers to debut new works
						about contemporary topics. Along with composing an opera I'll be
						serving on the board of directors and giving input and
						composition-related support to other projects. There are some really
						exciting things planned for this upcoming season!
					</p>
				</div>
				<div className='news-slot-one'>
					<img
						src={operaContempoHeader}
						className='news-image-full'
						alt='Opera Contempo Season Events'
					/>
				</div>
			</div>
		</div>
	);
};

export default OCTComposerInRes;

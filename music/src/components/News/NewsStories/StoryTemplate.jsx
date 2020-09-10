import React, { useState, useEffect, useCallback } from "react";

const StoryTemplate = ({
	articleNum,
	title,
	mainText,
	image1,
	image1Class,
	image2Class,
	altText1,
	supportingText1,
	image2,
	altText2,
	supportingText2,
}) => {
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
	if (image2 || supportingText2) {
		return (
			<div className={`news-row ${slideDownRow}`}>
				<h2 className='news-item-title' onClick={slideDown}>
					{title}
				</h2>
				<div
					className={`news-wrapper-${articleNum} ${slideDownContent}`}
					ref={articleHeight}>
					<div className='news-slot-main'>{mainText}</div>
					<div className='news-slot-one'>
						<div className={`news-info`}>
							<img src={image1} className={image1Class} alt={altText1} />

							{supportingText1}
						</div>
						<div className={`news-info`}>
							<img src={image2} className={image2Class} alt={altText2} />
							{supportingText2}
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className={`news-row ${slideDownRow}`}>
				<h2 className='news-item-title' onClick={slideDown}>
					{title}
				</h2>
				<div
					className={`news-wrapper-${articleNum} ${slideDownContent}`}
					ref={articleHeight}>
					<div className='news-slot-main'>{mainText}</div>
					<div className='news-slot-one'>
						<div className={`news-info`}>
							<img src={image1} className={image1Class} alt={altText1} />

							{supportingText1}
						</div>
					</div>
				</div>
			</div>
		);
	}
};

export default StoryTemplate;

import React from "react";
import davidImage from "../../../Images/ShareLinks/David_Smile.webp";
import davidImageBU from "../../../Images/ShareLinks/David_Smile.jpeg";
import "../../../Styles/Author.scss";

const Author = ({ date }) => {
	return (
		<div className='author'>
			<p className='article-date'>{date}</p>
			<picture>
				<source srcSet={davidImageBU} />
				<source srcSet={davidImage} />
				<img
					className='author-image'
					src={davidImage}
					alt='David Campbell Head Shot Smiling'
				/>
			</picture>

			<p className='author-name'>David Campbell</p>
		</div>
	);
};

export default Author;

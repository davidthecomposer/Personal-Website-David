import React from "react";
import davidImage from "../../../Images/ShareLinks/David_Smile.webp";
import "../../../Styles/Author.scss";

const Author = ({ date }) => {
	return (
		<div className='author'>
			<p className='article-date'>{date}</p>
			<img className='author-image' src={davidImage} alt='' />
			<p className='author-name'>David Campbell</p>
		</div>
	);
};

export default Author;

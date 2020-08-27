import React from "react";
import davidImage from "../../../Images/ShareLinks/David_Smile.png";
import "../../../Styles/Author.scss";

const Author = () => {
	return (
		<div className='author'>
			<img className='author-image' src={davidImage} alt='' />
			<p className='author-name'>David Campbell</p>
		</div>
	);
};

export default Author;

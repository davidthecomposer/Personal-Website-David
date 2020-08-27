import React from "react";
import "../../../Styles/MoreArticles.scss";
import { Link } from "react-router-dom";

const MoreArticles = ({ version, mainImage, title }) => {
	return (
		<Link className='article-nav-link' to={`/${version}`}>
			<figure className='more-articles-figure'>
				<img className='more-articles-image' src={mainImage} alt={title} />
				<figcaption className='more-articles-title'>{title}</figcaption>
			</figure>
		</Link>
	);
};

export default MoreArticles;

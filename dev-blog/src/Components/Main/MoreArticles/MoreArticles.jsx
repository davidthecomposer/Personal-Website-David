import React from "react";
import "../../../Styles/MoreArticles.scss";
import { Link } from "react-router-dom";

const MoreArticles = ({
	articleName,
	mainImage,
	title,
	date,
	navigateToTop,
}) => {
	return (
		<Link className='article-nav-link' to={`/${articleName}`}>
			<figure className='more-articles-figure' onClick={navigateToTop}>
				<img className='more-articles-image' src={mainImage} alt={title} />
				<figcaption className='more-articles-title'>{title}</figcaption>
				<p className='article-date'>{date}</p>
			</figure>
		</Link>
	);
};

export default MoreArticles;

import React from "react";
import { Link } from "react-router-dom";
import articles from "../Main/Articles/ArticlesData/ArticlesData";

const FooterLatestStories = ({ navigateToTop }) => {
	const latestArticles = Object.entries(articles)
		.map(([version, { title, date }]) => {
			date = date.toDateString();
			return (
				<div className='latest-stories-info' key={version}>
					<Link
						to={`/${version}`}
						className='footer-stories-link'
						onClick={navigateToTop}>
						<p className='latest-stories-title'>{title}</p>
						<p className='latest-stories-date'>{date}</p>
					</Link>
				</div>
			);
		})
		.slice(0, 3);

	return (
		<div className='latest-stories'>
			<p className='footer-section-header'>Latest Stories</p>
			{latestArticles}
		</div>
	);
};

export default FooterLatestStories;

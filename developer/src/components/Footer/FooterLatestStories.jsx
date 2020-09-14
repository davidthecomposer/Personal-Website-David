import React from "react";

import articles from "./IndividualContent/ArticlesData";

const FooterLatestStories = () => {
	const latestArticles = Object.entries(articles)
		.map(([version, { title, date }]) => {
			date = date.toDateString();
			return (
				<div className='latest-stories-info' key={version}>
					<a
						href={`https://www.blog.davidhalcampbell.com/${version}`}
						className='footer-stories-link'>
						<p className='latest-stories-title'>{title}</p>
						<p className='latest-stories-date'>{date}</p>
					</a>
				</div>
			);
		})
		.slice(0, 3);

	return (
		<div className='latest-stories'>
			<p className='footer-section-header'>Composing Code: Latest Stories</p>
			{latestArticles}
		</div>
	);
};

export default FooterLatestStories;

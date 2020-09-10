import React from "react";
import "../../Styles/Main.scss";
import { Outlet } from "react-router-dom";
import articles from "./Articles/ArticlesData/ArticlesData";

import MoreArticles from "./MoreArticles/MoreArticles";

const Main = ({ navigateToTop }) => {
	const moreArticles = Object.entries(articles).map(
		([articleName, { title, mainImage, date }]) => {
			date = date.toDateString();

			return (
				<MoreArticles
					key={articleName}
					title={title}
					articleName={articleName}
					mainImage={mainImage}
					date={date}
					navigateToTop={navigateToTop}
				/>
			);
		}
	);

	return (
		<section className='main'>
			<section className='main-content'>
				<Outlet />
			</section>

			<aside className='more-articles'>
				<h2>More Articles</h2>
				{moreArticles}
			</aside>
		</section>
	);
};

export default Main;

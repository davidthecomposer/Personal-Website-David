import React from "react";
import "../../Styles/Main.scss";
import { Outlet } from "react-router-dom";
import { articles } from "./Articles/ArticlesData";
import ShareLinks from "./Links/ShareLinks";

import MoreArticles from "./MoreArticles/MoreArticles";

const Main = () => {
	const moreArticles = Object.entries(articles).map(
		([version, { title, mainImage }]) => {
			return (
				<MoreArticles
					key={version}
					title={title}
					version={version}
					mainImage={mainImage}
				/>
			);
		}
	);

	return (
		<section className='main'>
			<section className='main-content'>
				<Outlet />
				<section className='newsletter'>
					<ShareLinks />
					NewsLetter sign-up
				</section>
				<section>comments</section>
			</section>

			<aside className='more-articles'>
				<h2>More Articles</h2>
				{moreArticles}
			</aside>
		</section>
	);
};

export default Main;

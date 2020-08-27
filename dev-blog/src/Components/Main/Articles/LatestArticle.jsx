import React from "react";
import { articles } from "./ArticlesData";
import "../../../Styles/SingleArticle.scss";
import Author from "./Author";
import ShareLinks from "../Links/ShareLinks";

const LatestArticle = () => {
	const latest = Object.keys(articles)[0];
	const article = articles[latest];

	const { date, title, mainImage, content } = article;
	const versionNum = `${latest.slice(0, 1)}.${latest.slice(1)}`;

	return (
		<article className='single-article'>
			<header className='article-header'>
				<div className='title-content'>
					<h4 className='article-date'>{`Version: ${versionNum}`}</h4>
					<div className={"title-row"}>
						<h2 className='article-title'>{title}</h2>
					</div>
				</div>
				<div className='header-bottom-row'>
					<Author />
					<ShareLinks
						date={date}
						version={latest}
						title={title}
						mainImage={mainImage}
					/>
				</div>
			</header>

			<figure className='article-main-figure'>
				<img className='article-main-image' src={mainImage} alt='' />
				<figcaption>Caption to this image</figcaption>
			</figure>
			<div className={"article-content"}> {content}</div>
		</article>
	);
};

export default LatestArticle;

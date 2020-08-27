import React from "react";
import { articles } from "./ArticlesData";
import { useParams } from "react-router-dom";
import "../../../Styles/SingleArticle.scss";
import Author from "./Author";
import ShareLinks from "../Links/ShareLinks";

const SingleArticle = () => {
	const { version } = useParams();

	const article = articles[version];

	const { date, title, mainImage, content } = article;

	const versionNum = `${version.slice(0, 1)}.${version.slice(1)}`;

	return (
		<article className='single-article'>
			<header className='article-header'>
				<div className='title-content'>
					<h4 className='article-version'>{`Version: ${versionNum}`}</h4>
					<div className={"title-row"}>
						<h2 className='article-title'>{title}</h2>
					</div>
				</div>
				<div className='header-bottom-row'>
					<Author />
					<ShareLinks
						date={date}
						version={version}
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

export default SingleArticle;

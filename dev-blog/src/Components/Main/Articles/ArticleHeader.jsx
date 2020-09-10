import React from "react";
import Author from "./Author";
import ShareLinks from "../Links/ShareLinks";
import "../../../Styles/ArticleHeader.scss";

const ArticleHeader = ({
	version,
	title,
	synopsis,
	authorDate,
	articleName,
	commentNumber,
	navigateToComments,
	mainImage,
	mainImageCaption,
}) => {
	return (
		<header className='article-header'>
			<div className='title-content'>
				<p className='article-version'>{`Version: ${version}`}</p>

				<div className={"title-row"}>
					<h2 className='article-title'>{title}</h2>
				</div>
			</div>
			<div className='header-bottom-row'>
				<Author date={authorDate} />
				<div className='synopsis'>
					<strong>Preview:</strong> {synopsis}
				</div>
				<ShareLinks
					articleName={articleName}
					title={title}
					synopsis={synopsis}
					commentNumber={commentNumber}
					navigateToComments={navigateToComments}
					topOrBottom={"top"}
				/>
			</div>

			<figure className='article-main-figure'>
				<img className='article-main-image' src={mainImage} alt='' />
				<figcaption>{mainImageCaption}</figcaption>
			</figure>
		</header>
	);
};

export default ArticleHeader;

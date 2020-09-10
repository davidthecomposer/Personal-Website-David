import React, { useState, useRef } from "react";
import articles from "./ArticlesData/ArticlesData";
import "../../../Styles/SingleArticle.scss";
import ArticleEnding from "./ArticleEnding";
import ArticleHeader from "./ArticleHeader";
import AllMessagesContainer from "../../Comments/AllMessagesContainer";

const LatestArticle = ({ modeSwitch }) => {
	const [commentNumber, setCommentNumber] = useState("");
	const latest = Object.keys(articles)[0];
	const article = articles[latest];
	const {
		date,
		title,
		mainImage,
		content,
		synopsis,
		version,
		dbToQuery,
		mainImageCaption,
	} = article;
	const authorDate = date.toDateString();

	const commentsRef = useRef(null);

	const getCommentNumber = (number) => {
		setCommentNumber(number);
	};

	const navigateToComments = () => {
		commentsRef.current.focus();
	};

	return (
		<article className='single-article'>
			<ArticleHeader
				version={version}
				title={title}
				synopsis={synopsis}
				authorDate={authorDate}
				articleName={latest}
				commentNumber={commentNumber}
				navigateToComments={navigateToComments}
				mainImage={mainImage}
				mainImageCaption={mainImageCaption}
			/>

			<div className={"article-content"}> {content}</div>
			<ArticleEnding
				articleName={latest}
				title={title}
				synopsis={synopsis}
				commentNumber={commentNumber}
				topOrBottom={"bottom"}
				navigateToComments={navigateToComments}
				modeSwitch={modeSwitch}
			/>
			<button className='load-comments-button' ref={commentsRef}>
				Comments ( {commentNumber} )
			</button>
			<AllMessagesContainer
				getCommentNumber={getCommentNumber}
				dbToQuery={dbToQuery}
			/>
		</article>
	);
};

export default LatestArticle;

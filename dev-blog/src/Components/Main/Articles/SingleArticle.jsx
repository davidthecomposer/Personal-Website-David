import React, { useState, useRef } from "react";
import articles from "./ArticlesData/ArticlesData";
import { useParams } from "react-router-dom";
import "../../../Styles/SingleArticle.scss";
import ArticleHeader from "./ArticleHeader";
import ArticleEnding from "./ArticleEnding";

import AllMessagesContainer from "../../Comments/AllMessagesContainer";

const SingleArticle = ({ modeSwitch }) => {
	const [commentNumber, setCommentNumber] = useState("");
	const { articleName } = useParams();

	const article = articles[articleName];
	const commentsRef = useRef(null);
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

	const getCommentNumber = (number) => {
		setCommentNumber(number);
	};

	const navigateToComments = (e) => {
		if (e.type === "touchend") {
			e.preventDefault();
		}
		commentsRef.current.focus();
	};

	return (
		<article className='single-article'>
			<ArticleHeader
				version={version}
				title={title}
				synopsis={synopsis}
				authorDate={authorDate}
				articleName={articleName}
				commentNumber={commentNumber}
				navigateToComments={navigateToComments}
				mainImage={mainImage}
				mainImageCaption={mainImageCaption}
			/>

			<div className={"article-content"}> {content}</div>
			<ArticleEnding
				articleName={articleName}
				title={title}
				mainImage={mainImage}
				synopsis={synopsis}
				commentNumber={commentNumber}
				navigateToComments={navigateToComments}
				topOrBottom={"bottom"}
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

export default SingleArticle;

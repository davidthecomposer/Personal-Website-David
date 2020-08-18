import React from "react";
import "./News.css";
import NewsItemsContainer from "./NewsItemsContainer";

class News extends React.Component {
	render() {
		return (
			<section className='news anchor' id='news'>
				<h2 className='section-title'>News</h2>
				<NewsItemsContainer />
			</section>
		);
	}
}

export default News;

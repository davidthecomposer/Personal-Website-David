import React from "react";
import StoryTemplate from "./NewsStories/StoryTemplate";
import storyContent from "./NewsStories/storyContent";
const NewsItemsContainer = (props) => {
	const newsItems = storyContent.map((story, index) => {
		const {
			title,
			mainText,
			image1,
			image1Class,
			altText1,
			supportingText1,
			image2,
			image2Class,
			altText2,
			supportingText2,
		} = story;

		return (
			<StoryTemplate
				title={title}
				mainText={mainText}
				image1={image1}
				image1Class={image1Class}
				image2={image2}
				image2Class={image2Class}
				altText1={altText1}
				altText2={altText2}
				supportingText1={supportingText1}
				supportingText2={supportingText2}
				key={index}
				articleNum={index}
			/>
		);
	});

	return <div className='news-items-container'>{newsItems}</div>;
};

export default NewsItemsContainer;

// Should have logic for mapping out all audio players including date etc.
//Where is that data held? In Props?

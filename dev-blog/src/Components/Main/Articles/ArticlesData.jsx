import React, { Fragment } from "react";
import { LoremIpsum } from "lorem-ipsum";
import blog1Main from "./MainImages/after.png";
import blog1Sup1 from "./MainImages/flatline.png";
import blog1Sup2 from "./MainImages/love-story.png";
import blog1Sup3 from "./MainImages/rescue.png";

const lorem = new LoremIpsum({
	sentencesPerParagraph: {
		max: 12,
		min: 4,
	},
	wordsPerSentence: {
		max: 24,
		min: 6,
	},
});

const paragraph = lorem.generateParagraphs(1);

export const articles = {
	"002": {
		title: "My Second Blog Post",
		mainImage: blog1Sup2,
		date: "August 25, 2020",
		content: (
			<Fragment>
				<p>{paragraph}</p>
				<p>{paragraph}</p>
				<p>{paragraph}</p>
				<figure className='article-image-figure'>
					<img className='article-image' src={blog1Sup1} alt='' />
					<figcaption>figure caption</figcaption>
				</figure>

				<p>{paragraph}</p>
				<p>{paragraph}</p>
				<figure className='article-image-figure'>
					<img className='article-image' src={blog1Sup2} alt='' />
					<figcaption>figure caption</figcaption>
				</figure>
				<p>{paragraph}</p>
				<figure className='article-image-figure'>
					<img className='article-image' src={blog1Sup3} alt='' />
					<figcaption>figure caption</figcaption>
				</figure>
				<p>{paragraph}</p>
				<p>{paragraph}</p>
			</Fragment>
		),
	},
	"001": {
		title: "An Introduction",
		mainImage: blog1Main,
		date: "August 24, 2020",
		content: (
			<Fragment>
				<p>{paragraph}</p>
				<p>{paragraph}</p>
				<p>{paragraph}</p>
				<figure className='article-image-figure'>
					<img className='article-image' src={blog1Sup1} alt='' />
					<figcaption>figure caption</figcaption>
				</figure>

				<p>{paragraph}</p>
				<p>{paragraph}</p>
				<figure className='article-image-figure'>
					<img className='article-image' src={blog1Sup2} alt='' />
					<figcaption>figure caption</figcaption>
				</figure>
				<p>{paragraph}</p>
				<figure className='article-image-figure'>
					<img className='article-image' src={blog1Sup3} alt='' />
					<figcaption>figure caption</figcaption>
				</figure>
				<p>{paragraph}</p>
				<p>{paragraph}</p>
			</Fragment>
		),
	},
};

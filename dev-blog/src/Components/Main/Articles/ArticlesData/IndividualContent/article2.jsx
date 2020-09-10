import React, { Fragment } from "react";
import MultiLineCodeBlock from "./MultiLineCodeBlock";
import mainImage from "../../../../../Images/ArticleImages/002/main_image.png";
import demoGif from "../../../../../Images/ArticleImages/002/newsSlide.gif";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

const codeExample0 = `return (
	<div className={\`news-row \${slideDownRow}\`}>
		<h2 className='news-item-title' onClick={slideDown}>
			{title}
		</h2>
		<div
			className={\`news-wrapper-\${articleNum} \${slideDownContent}\`}
			ref={articleHeight}>
		</div>
	</div>
);`;

const cssCode0 = `$news-index: 0, 1, 2;

@mixin slide-down-element($index) {
	.slide-down-row-#{$index} {
		height: calc(var(--news-height-#{$index}) + 3rem);
		transition: 0.5s;
	}
	.news-wrapper-#{$index} {
		transform: translateY(calc((var(--news-height-#{$index}) * -1) - 3rem));
		transition: 0.5s;
		opacity: 0;
		position: absolute;
		z-index: 0;
	}
}
`;
const cssCode1 = `
.news-row {
	position: relative;
	background: rgb(15, 0, 12);
	width: calc(100vw - 6px);
	overflow: hidden;
	height: 3rem;
	transition: 0.5s;
	z-index: 1;
}

.news-item-title {
	font-family: "Julius Sans One", sans-serif;
	font-size: 2.5rem;
	height: 3rem;
	color: rgb(236, 236, 236);
	width: 100%;
	z-index: 3;
	line-height: 3rem;
	cursor: pointer;
	background: rgb(37, 9, 33);
}`;

const cssCode2 = `@each $index in $news-index {
	@include slide-down-element($index);
}
	
.slide-down {
	transform: translateY(calc(0 + 3rem));
	opacity: 1;
	transition: 0.5s;
	z-index: 2;
}`;

const codeExample1 = `useEffect(() => {
	document.documentElement.style.setProperty(
		\`--news-height-\${articleNum}\`,
		\`\${height}px\`
	);
}, [height, articleNum]);`;

const codeExample2 = `const slideDown = () => {
	if (slideDownContent === "") {
		setSlideDownContent("slide-down");
		setSlideDownRow(\`slide-down-row-\${articleNum}\`);
	} else {
		setSlideDownContent("");
		setSlideDownRow("");
	}
};
`;

const codeExample3 = `const [slideDownRow, setSlideDownRow] = useState("");
const [slideDownContent, setSlideDownContent] = useState("");
const [height, setHeight] = useState(0);

const articleHeight = useCallback((article) => {
	if (article !== null) {
		const articleHeightObj = new ResizeObserver((entries) => {
			setHeight(entries[0].contentRect.height.toFixed(1));
		});

		articleHeightObj.observe(article);
	}
}, []);
`;

const fullJSXCode = `
import React, { useState, useEffect, useCallback } from "react";

const StoryTemplate = ({
	articleNum,
	title,
	mainText,
	image1,
	image1Class,
	altText1,
	supportingText1,
}) => {
	const [slideDownRow, setSlideDownRow] = useState("");
	const [slideDownContent, setSlideDownContent] = useState("");
	const [height, setHeight] = useState(0);

	const articleHeight = useCallback((article) => {
		if (article !== null) {
			const articleHeightObj = new ResizeObserver((entries) => {
				setHeight(entries[0].contentRect.height.toFixed(1));
			});

			articleHeightObj.observe(article);
		}
	}, []);

	useEffect(() => {
		document.documentElement.style.setProperty(
			\`--news-height-\${articleNum}\`,
			\`\${height}px\`
		);
	}, [height, articleNum]);

	const slideDown = () => {
		if (slideDownContent === "") {
			setSlideDownContent("slide-down");
			setSlideDownRow(\`slide-down-row-\${articleNum}\`);
		} else {
			setSlideDownContent("");
			setSlideDownRow("");
		}
	};
		return (
			<div className={\`news-row \${slideDownRow}\`}>
				<h2 className='news-item-title' onClick={slideDown}>
					{title}
				</h2>
				<div
					className={\`news-wrapper-\${articleNum} \${slideDownContent}\`}
					ref={articleHeight}>
					<div className='news-slot-main'>{mainText}</div>
					<div className='news-slot-one'>
						<div className={\`news-info\`}>
							<img src={image1} className={image1Class} alt={altText1} />
							{supportingText1}
						</div>
					</div>
				</div>
			</div>
		);
	}
};

export default StoryTemplate;`;

const allCSSCode = `
$news-index: 0, 1, 2;

@mixin slide-down-element($index) {
	.slide-down-row-#{$index} {
		height: calc(var(--news-height-#{$index}) + 3rem);
		transition: 0.5s;
	}

	.news-wrapper-#{$index} {
		transform: translateY(calc((var(--news-height-#{$index}) * -1) - 3rem));
		display: flex;
		flex-direction: column;
		transition: 0.5s;
		opacity: 0;
		position: absolute;
		z-index: 0;
	}
}

.news {
	user-select: none;
}

.news-items-container {
	display: flex;
	flex-direction: column;
	position: relative;
	align-items: center;
	justify-content: space-evenly;
}

.news-row {
	position: relative;
	background: rgb(15, 0, 12);
	margin-bottom: 0.2rem;
	width: calc(100vw - 6px);
	max-width: calc(100vw - 6px);
	overflow: hidden;
	height: 3rem;
	transition: 0.5s;
	z-index: 1;
}
.news-item-title {
	font-family: "Julius Sans One", sans-serif;
	font-size: 2.5rem;
	height: 3rem;
	color: rgb(236, 236, 236);
	width: 100%;
	z-index: 3;
	line-height: 3rem;
	cursor: pointer;
	background: rgb(37, 9, 33);
}

@each $index in $news-index {
	@include slide-down-element($index);
}

.slide-down {
	transform: translateY(calc(0 + 3rem));
	opacity: 1;
	transition: 0.5s;
	z-index: 2;
}`;

export const article = {
	"Using-Custom-Variables-to-Smooth-Out-Container-Transitions_08-25-20": {
		title:
			"Using Custom Variables to Smooth Out Container Transitions: A Love Story",
		mainImage: mainImage,
		mainImageCaption: "slideout demo example",
		date: new Date("September 9, 2020"),
		version: "0.02",
		dbToQuery: "article 2",
		synopsis:
			"I love a good puzzle. So, when I couldn’t figure out how to make an accordion-like feature work as I wanted to I went down a small rabbit hole into CSS transitions, custom variables, and a cool little API called the Intersection Observer. I have to admit that I'm as close to in love as you can be with a Web API at this point. And on top of it all I now have a highly flexible adaptive container for variable-sized content. I'm calling it a smooth accordion slider and I want to show you how I built it. ",
		content: (
			<Fragment>
				<h2 className='section-subtitle'>::Before</h2>
				<h3>
					<strong>The Challenge:</strong>
				</h3>
				<p className='first-paragraph'>
					I wanted to change the layout of some news elements on my music site.
					I had originally designed primarily with only a classic monitor size
					in mind, but mobile implementation was a bit clunky. As I started
					taking mobile concerns more seriously in my app designs I realized
					that what I really wanted was a simple UI to let users expand the news
					headlines to get more info if desired without crowding the screen real
					estate. I needed a smooth intelligent slider that knew the size of
					each container at full height, and one that would adapt with the
					screen size.
				</p>
				<p>
					I have been aware for some time that there are significant issues with
					creating a truly smooth and adaptive slider with CSS alone. Until now,
					the best design I'd seen was one using max-height to transition
					instead of height. If you know that most of your content is going to
					be about the same size then maybe this idea is a decent solution. But,
					when you need a truly dynamic sliding logic that can go anywhere from
					5-1500px it just doesn't work. In the case of my music news section
					there were very different sizes of content depending on the screen
					size, orientation, and the news item itself. Relying on max-height
					just wasn’t going to work.
				</p>

				<p>
					Then, two things happened. The first was that I had to fix a problem
					with my copernicus audio app where the IOS implementation had a
					different definition of vh units than most other devices. The solution
					to that ended up being a custom CSS variable that read the screen
					height. The second thing was sumbling accros a reference to something
					called the Intersection Observer API in the react documentation. That
					got me thinking about how I could implement a similar pattern to an
					element instead of a screen.{" "}
				</p>
				<p>
					So now I present a step-by-step guide to how I did it using React,
					Sass, and the IntersectionObserver API.
				</p>
				<h3>
					<strong>Step 1: Design The React Component Structure</strong>
				</h3>
				<MultiLineCodeBlock lang='jsx' code={codeExample0} />

				<p>
					The setup is pretty straightforward. There are three main elements at
					play in this component:
				</p>
				<ul>
					<li>The parent container ('news-row') </li>
					<li>The title element that will be clicked ('news-item-title)</li>
					<li>
						The div that holds whatever content is desired ('news-wrapper') and
						the ref that React will use to access that element.
					</li>
				</ul>
				<p>
					Inside of the 'news-wrapper' div would be the place to insert the
					actual content that you want the element to contain.
				</p>

				<h3>
					<strong>
						Step 2: Set Up State, Our Ref, And The ResizeObserver To Keep Track
						Of Element Height.
					</strong>
				</h3>

				<p>
					So now we want to set up all our state using the useState hook. There
					are three pieces of state that we need.{" "}
				</p>

				<ul>
					<li>
						<strong>slideDownRow</strong> will inject the new class into our
						'news-row' element when we click on the title element
					</li>
					<li>
						<strong>slideDownContent</strong> will do the same for our
						'news-wrapper' element
					</li>
					<li>
						<strong>height</strong> will be used to house the current height of
						our 'news-wrapper' element as read by the Resize Observer
					</li>
				</ul>

				<MultiLineCodeBlock lang='js' code={codeExample3} />

				<p>
					Setting up the state is simple enough, but dealing with the ref was a
					little bit of a unique challenge. The problem is that useRef, which
					would generally be the way that you would want to access the element
					in most situations functions more like a snapshot in this case. It
					will give you a picture of the element when it first renders. That is
					fine and good for elements that won't need to ever change size, but in
					this case we need the ref info to update and more importantly to force
					a new render. useRef just doesn't do this, and there is not a good way
					to set this up using another useEffect hook. There is some more info
					about this both in the react docs and in some developer blog posts.{" "}
					<a href='https://dev.to/thekashey/the-same-useref-but-it-will-callback-8bo'>
						I'll credit this one
					</a>{" "}
					as it's where I found the info first.
				</p>
				<p>
					Luckily for me, <strong>useCallback</strong> came to the rescue here
					where useRef had fallen short. The logic inside the useCallback is
					pretty simple, but I would recommend going to the {""}
					<a href='https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver'>
						ResizeObserver documentation on MDN
					</a>{" "}
					to better understand the API.
				</p>
				<p>
					Walking through the code, the null check at the top is important as it
					will make sure that we don't try to read the height of something that
					doesn't exist yet, causing the code to throw an error. The callback
					takes an argument that just represents our "ref" object. We
					instantiate a new variable and create a new ResizeObserver.
				</p>

				<p>
					From here there are a couple different ways to access the attributes
					of our element, but just going into the object and accessing the
					attribute directly seemed the simplest way to me. We are setting our
					height state with this value, and the toFixed part is just to simplify
					the number and avoid some annoying value such as
					53.3434293874928374928374px in our code.
				</p>
				<p>
					The last step to remember is to call the observe method on the Object
					we just created, and pass in the article ref. Now this cool API will
					continuously keep track of changes to height and set that height state
					dynamically. This will re-render our component with our new size and
					update the custom variable in our useEffect function below.
				</p>

				<h3>
					<strong>
						Step 3: Create A Custom Variable And Inject It Into CSS
					</strong>
				</h3>

				<MultiLineCodeBlock lang='js' code={codeExample1} />
				<p>
					Within the component we can set up a useEffect hook and tap into the
					documentElement object. The double dashes (- -) are just the accepted
					syntax for CSS custom variables. Using string literal syntax we
					interpolate (love that word) a unique ending onto the variable. The
					<strong> articleNum</strong> variable in my case was generated with
					the list of articles in the parent component of this one, but you
					could conceivably add any unique identifier in various ways. The
					essential thing is to make sure that they are unique so when called
					later on you will only target the single element you want. We really
					don't want to be adding the same class to multiple elements and having
					them all open whenever we click one. It's possible that I learned this
					from my own experience.
				</p>
				<p>
					The second argument will be pulling from the height state that we set
					up to dynamically update whenever the element size changes. In the
					dependency array of useEffect we see that whenever height is updated
					we will re-inject that new value as a custom CSS variable!
				</p>

				<h3>
					<strong>Step 4: Handle Logic For Dynamic Class Changes.</strong>
				</h3>
				<p>
					This second-to-last step is definitely the simplest. We simply need to
					set up the logic for what happens when we click on the
					'news-item-title' element. A simple if/else statement will handle
					that. The key here is obviously to make sure the string that we use
					for state in each case corresponds to the CSS class selector that we
					use in the next step.
				</p>
				<MultiLineCodeBlock lang='js' code={codeExample2} />
				<p>
					With that last JS-related step out of the way we are ready to go to
					our stylesheet and use our variable(s) to set up some simple CSS
					transitions{" "}
				</p>
				<h3>
					<strong>
						Step 5: Use Sass Lists And Mixins To Dynamically Create Element
						Class Names
					</strong>
				</h3>
				<p>
					The first thing to do is set up our Sass (or Scss) list. The cool
					thing about this is that it has the same syntax as a normal Sass
					variable ($variable) but adds the ability to iterate for each item.
					With that functionality we can create a mixin that will generate a
					custom selector for each of our news elements (I have 3). This list
					will need to be updated to represent however many items we want this
					to apply to.
				</p>
				<MultiLineCodeBlock lang='css' code={cssCode0} />
				<p>
					You'll notice that the item in the list matches the articleNum
					variable from our component. This is obviously essential for our index
					to correctly name a class selector for each component. If we used a
					different naming scheme for the injected variables such as
					--news-height-banana, --news-height-apple, --news-height-pear then the
					list would need to be $news-index: banana, apple, pear;.
				</p>
				<p>
					We will use the transform:translateY property to move our
					'news-wrapper' element from its hiding place outside the parent
					container to a position where we can see the entire element height. To
					achieve this we also need to transition the height of 'news-row' the
					same distance since 'news-wrapper' has an absolute position. Calc
					comes in very handy here as we can dynamically update our
					--news-height variable for each element and take into account the size
					of the 'news-item-title' element as well (3rem in this case)
				</p>
				<p>
					There are a couple of key points about the CSS Code that I want to
					highlight:
				</p>

				<strong>news-wrapper</strong>
				<ul>
					<li>The position must be absolute</li>
				</ul>
				<strong>news-row</strong>
				<ul>
					<li>The height just needs to be the same as the 'news-items-title</li>
					<li>overflow must be hidden</li>
				</ul>

				<MultiLineCodeBlock lang='css' code={cssCode1} />
				<strong>slide-down</strong>
				<ul>
					<li>
						Switching the z-index to 2 here allows for the user to interact with
						any elements contained in the 'news-wrapper' div.
					</li>
				</ul>
				<strong>@each</strong>
				<ul>
					<li>
						This just prints out the mixin above for each element of
						$news-index.
					</li>
				</ul>
				<MultiLineCodeBlock lang='css' code={cssCode2} />
				<h3>
					<strong>
						Step 6: Enjoy The Smooth Sliding As Much As Grandpa Loves His
						Accordion
					</strong>
				</h3>
				<p>
					And that's basically it. Once you set all the code up you can now be
					confident that your element will slide down onClick (or onTouchEnd)
					and always be correctly sized no matter what device is being used. If
					you want to see the code in action head over to{" "}
					<a href='https://www.music.davidhalcampbell.com#news'>
						my music website
					</a>{" "}
					or copy and paste the code below to get started on running it
					yourself.
				</p>
				<p>
					{" "}
					<strong>StoryTemplate.jsx</strong>
				</p>
				<MultiLineCodeBlock lang='jsx' code={fullJSXCode} />
				<p>
					<strong>News.scss</strong> {""} (would be imported into
					StoryTemplate.jsx or parent component)
				</p>
				<MultiLineCodeBlock lang='css' code={allCSSCode} />
				<h3>
					<strong>Final Result:</strong>
				</h3>

				<figure className='article-image-figure full-figure'>
					<img
						className='article-image'
						src={demoGif}
						alt='slider element in action. '
					/>
					<figcaption>
						Slider Element In The Wild At A Stunning 8FPS.
					</figcaption>
				</figure>
				<h2 className='section-subtitle'>::After</h2>
				<h3>
					<strong>Going Deeper</strong>
				</h3>
				<p>
					There are definitely some ways to increase the automation in this
					design. The first would be to dynamically inject the list element into
					css so that it just counts how many news items are present and creates
					a list without having to manually change the numbers in the list. It's
					fairly trivial to update that value manually, but why not automate it
					for a very small cost? The second way could be to make use of the{" "}
					<a href='https://developer.mozilla.org/en-US/docs/Web/API/Element/animate'>
						<code>animate()</code>
					</a>{" "}
					API , or even possibly just use inline styling through react to
					accomplish the same granularity as my Sass scheme. There are lots of
					ways to attack this and I'm always on the lookout for interesting new
					ways to solve problems.
				</p>
				<p>
					One great, sometimes frustrating thing about JS and front-end
					development in general is how often new tech comes on the scene.
					Sometimes it forces headaches and refactoring, and then other times it
					just makes life better. In this case, I think that the ResizeObserver
					and custom CSS variables nicely solve one common issue that impacts
					user experience.
				</p>
			</Fragment>
		),
	},
};

const article2 = Object.entries(article)[0];

export default article2;

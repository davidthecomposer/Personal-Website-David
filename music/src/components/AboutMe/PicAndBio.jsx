import React from "react";
import davidSmileBU from "../../images/headshots/David-Smile.jpeg";
import davidSmile from "../../images/headshots/David-Smile.webp";

class PicAndBio extends React.Component {
	render() {
		return (
			<div className='about-me-text'>
				<picture>
					<source srcSet={davidSmileBU} />
					<source srcSet={davidSmile} />
					<img
						src={davidSmile}
						className='my-image'
						alt='David Campbell Smiling'
					/>
				</picture>

				<p>
					I am a composer living in Salt Lake City Utah. When I was first
					introduced to writing music I was immediately fascinated with the
					sheer amount of possibilities that existed from the simple combination
					of notes and rhythms. That a composer can create art that has the
					potential to be breathtakingly beautiful, devastatingly hideous,
					heart-wrenching, horrific, silly, intricate, or even incomprehensible
					is such an amazing reality.
				</p>
				<p>
					Over the years I’ve had the chance to learn about music more formally
					at Southern Utah University, Western Washington University, and Stony
					Brook University where I had the privilege to study with composers
					whose music and knowledge I greatly admire including Hal Campbell,
					Keith Bradshaw, Leslie Sommer, Roger Briggs, Sheila Silver, and Perry
					Goldstein. Their lessons and the knowledge gained through studying
					great and obscure composers has helped shape my own musical voice.
				</p>
				<p>
					I find myself of two minds more recently. I love the freedom of
					writing concert music in my own style, but I’ve found great enjoyment
					and challenge in writing music for media. This site represents that
					musical duality. Here you can find a sample of some of my media works
					as well as scores and music for my concert works. I’m very excited
					about new projects on the horizon in both areas and hope that you will
					come back and listen as I compose new works and add new projects to
					this site.
				</p>
				<p>
					Outside of music I am learning{" "}
					<a href='https://www.developer.davidhalcampbell.com'>
						web development.
					</a>{" "}
					I am an avid weightlifter, I love playing most sports including a new
					love for pickle-ball, attending cultural and intellectually
					stimulating events, and nights out on the town dancing until 2 AM with
					friends. I am perpetually hoping to finish my science fiction novel. I
					love to create!
				</p>
			</div>
		);
	}
}

export default PicAndBio;

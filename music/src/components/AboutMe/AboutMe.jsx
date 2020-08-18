import React from "react";
import PicAndBio from "./PicAndBio";
import "./AboutMe.css";

class AboutMe extends React.Component {
	render() {
		return (
			<div className='about-me anchor' id='about-me'>
				<h2 className='section-title'>About Me</h2>
				<div className='about-me-bg'>
					<PicAndBio />
				</div>
			</div>
		);
	}
}

export default AboutMe;

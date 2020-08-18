import React from "react";
import { ChoralVocalPieces } from "./CreateCompCards";

class VocalChoralMusic extends React.Component {
	render() {
		return (
			<section
				className={`vocal-choral music-sections ${this.props.visibilityClass}`}>
				<h3 className='contact-nav-text'>
					If you would like to use or perform one of the following scores,
					please use the <a href='#contact'>contact</a> section form below
				</h3>
				<ChoralVocalPieces />
			</section>
		);
	}
}

export default VocalChoralMusic;

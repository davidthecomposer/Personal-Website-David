import React from "react";
import { ChamberMusicPieces } from "./CreateCompCards";

class ChamberMusic extends React.Component {
	render() {
		return (
			<section
				className={`Chamber music-sections ${this.props.visibilityClass}`}>
				<h3 className='contact-nav-text'>
					If you would like to use or perform one of the following scores,
					please use the <a href='#contact'>contact</a> section form below
				</h3>
				<ChamberMusicPieces />
			</section>
		);
	}
}

export default ChamberMusic;

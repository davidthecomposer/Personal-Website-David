import React from "react";
import { SoloPieces } from "./CreateCompCards";

class SoloMusic extends React.Component {
	render() {
		return (
			<section className={`solo music-sections ${this.props.visibilityClass}`}>
				<h3 className='contact-nav-text'>
					If you would like to use or perform one of the following scores,
					please use the <a href='#contact'>contact</a> section form below
				</h3>
				<SoloPieces />
			</section>
		);
	}
}

export default SoloMusic;

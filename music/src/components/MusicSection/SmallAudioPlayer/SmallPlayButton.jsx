import React from "react";
import "./SmallPlayButton.css";

class SmallPlayButton extends React.Component {
	render() {
		return (
			<img
				src={this.props.image}
				alt='play and pause button'
				className='small-button'
				onClick={this.props.playState}
			/>
		);
	}
}

export default SmallPlayButton;

import React from "react";
import "./PlayButton..css";

class PlayButton extends React.Component {
	render() {
		return (
			<img
				src={this.props.image}
				alt='play and pause button'
				className={`play-button ${this.props.secondClass}`}
				onClick={this.props.playState}
				ref={this.ref}
			/>
		);
	}
}

export default PlayButton;

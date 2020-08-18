import React from "react";
import "./SmallAudioCenter.css";
import SmallAudioProgress from "./SmallAudioProgress";
import SmallAudioTimers from "./SmallAudioTimers";
import SmallAudioPlayerTitle from "./SmallAudioPlayerTitle";

class SmallAudioCenter extends React.Component {
	render() {
		return (
			<div className='small-audio-center'>
				<SmallAudioPlayerTitle
					title={this.props.title}
					composer={this.props.composer}
				/>

				<SmallAudioProgress
					pureTime={this.props.pureTime}
					pureDuration={this.props.pureDuration}
					onClick={this.changeLocation}
					updateCurrentTime={this.props.updateCurrentTime}
				/>
				<SmallAudioTimers
					currentTime={this.props.currentTime}
					timeRemaining={this.props.timeRemaining}
				/>
			</div>
		);
	}
}
export default SmallAudioCenter;

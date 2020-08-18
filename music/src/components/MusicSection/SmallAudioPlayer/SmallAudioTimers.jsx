import React from "react";
import "./SmallAudioCenter.css";

class SmallAudioTimers extends React.Component {
	render() {
		return (
			<div className='small-atrow'>
				<div className='small-acp'>
					<p>{this.props.currentTime}</p>
				</div>
				<div className='small-atr'>
					<p className='time-remaining-text'>{this.props.timeRemaining}</p>
				</div>
			</div>
		);
	}
}
export default SmallAudioTimers;

// Get time (this.audio.currentTime) update state with it, and then add that as prop to render spots here. Might just need to add as props and not update state.

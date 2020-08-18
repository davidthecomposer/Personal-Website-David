import React from "react";
import PaneTicker from "./PaneTicker";
import goBack from "../../../images/slideshow/goBack.png";
import goForward from "../../../images/slideshow/goForward.png";
import autoPlayStart from "../../../images/slideshow/autoPlayStart.png";
import pauseAutoPlay from "../../../images/slideshow/pauseAutoPlay.png";

class ManualNavigation extends React.Component {
	state = { playOrPause: pauseAutoPlay };

	toggleButton = () => {
		return this.state.playOrPause === pauseAutoPlay
			? this.setState({ playOrPause: autoPlayStart })
			: this.setState({ playOrPause: pauseAutoPlay });
	};
	render() {
		return (
			<div className='manual-navigation'>
				<img
					className='navigate backward hidden'
					src={goBack}
					alt='navigate back one slide'
					onClick={this.props.changeSlide}
				/>
				<PaneTicker
					allSlides={this.props.allSlides}
					activePane={this.props.activePane}
					inactivePane={this.props.inactivePane}
					activeImage={this.props.activeImage}
				/>
				<img
					className='navigate forward hidden'
					src={goForward}
					alt='navigate forward one slide'
					onClick={this.props.changeSlide}
				/>
				<img
					className='pause hidden'
					src={this.state.playOrPause}
					alt='pause automatic playback'
					onClick={this.props.changeAutoPlayState}
					onMouseUp={this.toggleButton}
				/>
			</div>
		);
	}
}

export default ManualNavigation;

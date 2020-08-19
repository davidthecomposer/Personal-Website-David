import React from "react";
import "./SmallAudioPlayer.css";

import SmallPlayButton from "./SmallPlayButton";
import SmallAudioCenter from "./SmallAudioCenter";
import SmallAudioVolume from "./SmallAudioVolume";

import playButtonImage from "../../../images/audio-player/play_button.svg";
import pauseButtonImage from "../../../images/audio-player/pause_button.svg";
import volumeIcon from "../../../images/audio-player/volumeIcon.svg";
import volumeIconMute from "../../../images/audio-player/volumeMute.svg";

class SmallAudioPlayer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentTime: "0:00",
			pureTime: 0,
			pureDuration: 0,
			buttonImage: playButtonImage,
			volumeImage: volumeIcon,
			volumeBarVisibility: "hide",
			volume: 1,
		};
		this.audio = React.createRef();
		this.playButton = React.createRef();
	}

	playState = (e) => {
		if (this.audio.current.ended) {
			this.audio.current.load();
			this.setState({
				buttonImage: playButtonImage,
			});
		} else if (this.audio.current.currentTime === 0) {
			this.setState({ buttonImage: pauseButtonImage });
			this.audio.current.play();
		} else if (this.state.buttonImage === pauseButtonImage) {
			this.setState({ buttonImage: playButtonImage });

			this.audio.current.pause();
		} else if (this.state.buttonImage === playButtonImage) {
			this.setState({ buttonImage: pauseButtonImage });
			this.audio.current.play();
		}
	};

	getTimeCalc = (event) => {
		const audio = this.audio.current;
		const currentTime =
			Math.floor(audio.currentTime.toFixed(0) / 60) +
			":" +
			(audio.currentTime.toFixed(0) < 10
				? `0${audio.currentTime.toFixed(0)}`
				: audio.currentTime.toFixed(0) % 60 < 10
				? `0${audio.currentTime.toFixed(0) % 60}`
				: audio.currentTime.toFixed(0) % 60
				? audio.currentTime.toFixed(0) % 60
				: "00");
		this.setState({ currentTime: currentTime });
		this.getDuration();
	};

	getDuration = (event) => {
		const time =
			Math.floor(this.audio.current.duration.toFixed(0)) -
			Math.floor(this.audio.current.currentTime.toFixed(0));

		const timeRemaining =
			Math.floor(time / 60) +
			":" +
			(time < 10
				? `0${time}`
				: time % 60 < 10
				? `0${time % 60}`
				: time % 60
				? time % 60
				: "00");

		this.setState({ timeRemaining: timeRemaining });
		this.pureTimeAndDuration();
	};

	pureTimeAndDuration = () => {
		this.setState({
			pureTime: this.audio.current.currentTime,
			pureDuration: this.audio.current.duration,
		});
	};

	updateCurrentTime = (newTime) => {
		this.audio.current.currentTime = newTime;
	};

	changeVolume = (event) => {
		this.setState({ volume: event.target.value });
	};

	muteVolume = () => {
		if (this.state.volumeImage === volumeIcon) {
			this.setState({ volumeImage: volumeIconMute });
			this.audio.current.muted = true;
		} else {
			this.setState({ volumeImage: volumeIcon });
			this.audio.current.muted = false;
		}
	};

	volumeBarVisibility = (event) => {
		if (event.type === "mouseover") {
			this.setState({ volumeBarVisibility: "show" });
		} else {
			this.setState({ volumeBarVisibility: "hide" });
		}
	};

	render() {
		return (
			<div
				className={`small-audio-player ${this.props.secondClass}`}
				data-index={this.props.index}>
				<div className='small-player-row'>
					<audio
						className={`audio-file `}
						src={this.props.audioFile}
						ref={this.audio}
						onTimeUpdate={this.getTimeCalc}
						onDurationChange={this.getDuration}
						onEnded={this.playState}
						onLoad={this.playState}
					/>
					<SmallPlayButton
						playState={this.playState}
						image={this.state.buttonImage}
					/>
					<SmallAudioCenter
						title={this.props.title}
						composer={this.props.composer}
						currentTime={this.state.currentTime}
						timeRemaining={this.state.timeRemaining}
						pureTime={this.state.pureTime}
						pureDuration={this.state.pureDuration}
						updateCurrentTime={this.updateCurrentTime}
					/>
					<SmallAudioVolume
						changeVolume={this.changeVolume}
						volumeIcon={this.state.volumeImage}
						muteVolume={this.muteVolume}
						volumeBarVisibility={this.volumeBarVisibility}
						volumeBarVisibilityState={this.state.volumeBarVisibility}
						volume={this.state.volume}
					/>
				</div>
			</div>
		);
	}
}

export default SmallAudioPlayer;

//Need to add callback function here and send it down to AudioProgress to get  time data to update currentTime in state here.
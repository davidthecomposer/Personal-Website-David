import React from "react";
import "./SmallAudioCenter.css";

class SmallAudioProgress extends React.Component {
	constructor(props) {
		super(props);
		this.state = { progressBarValue: "0" };
		this.progressButton = React.createRef();
		this.progressBar = React.createRef();
	}

	defaultValue = 0;
	componentDidMount = () => {
		this.progressTimer = setInterval(() => this.progressFollow(), 200);
	};

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	progressFollow = () => {
		let progressWidth = this.progressBar.current.clientWidth / 100;

		const progressBarValue =
			(this.props.pureTime / this.props.pureDuration) * 100;
		const buttonPosition = `${
			this.progressBar.current.value * progressWidth - 4
		}px`;

		this.setState({ progressBarValue: progressBarValue });
		this.setState({ progressButton: { left: buttonPosition } });
	};

	changeLocation = (event) => {
		let progressWidth = this.progressBar.current.clientWidth;
		let percent = event.nativeEvent.offsetX / event.target.offsetWidth;
		let newTime = this.props.pureDuration * percent;

		const buttonPosition = `${percent * progressWidth - 4}px`;
		const progressBarValue = percent * 100;

		this.setState({
			progressBarValue: Number(progressBarValue),
			progressButton: { left: buttonPosition },
		});
		this.props.updateCurrentTime(newTime);
		// this.audio.currentTime = this.audio.duration * percent;
	};

	render() {
		return (
			<div className='small-progress-container' onClick={this.changeLocation}>
				<progress
					className='small-progress'
					type='number'
					max='100'
					value={this.state.progressBarValue || 0}
					ref={this.progressBar}></progress>
				<div
					className='small-progress-button'
					ref={this.progressButton}
					style={this.state.progressButton}></div>
			</div>
		);
	}
}

export default SmallAudioProgress;

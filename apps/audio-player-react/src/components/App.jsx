import React from "react";
import AudioPlayerList from "./AudioPlayerList";

class App extends React.Component {
	render() {
		return (
			<div>
				<AudioPlayerList />
			</div>
		);
	}
}

export default App;

/* <div className='audio-player turning-point'>
	<div className='audio-player-row'>
		<audio className='audio-file' src='audio/Turning Point.wav'></audio>
		<img
			src='images/playbutton.svg'
			className='audio-buttons'
			alt='play and pause button'
		/>

		<div className='audio-center'>
			<p className='audio-player-title'>
				<strong className='audio-strong'>Turning Point </strong>
				<small className='audio-small'>|</small> David Campbell
			</p>
			<div className='audio-player-ghost'></div>

			<div className='prog-button-container'>
				<progress className='audio-progress' max='100' value='0'></progress>
				<div className='audio-progress-button'></div>
			</div>
			<div className='audio-timers-row'>
				<div className='audio-current-position'>
					<p>0:00</p>
				</div>
				<div className='audio-time-remaining'>
					<p className='time-remaining-text'></p>
				</div>
			</div>
		</div>

		<div className='volume-span'>
			<input
				className='audio-volumeBar'
				type='range'
				min='0'
				max='1'
				step='0.01'
				value='1'
			/>
			<img
				className='audio-volume'
				src='images/volumeIcon.svg'
				alt='Volume Icon'
			/>
		</div>
		<img src='images/turningpoint.jpg' className='audio-album-cover' />
	</div>
</div>; */

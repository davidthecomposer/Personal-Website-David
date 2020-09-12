import React, { useState, useRef } from "react";
import "./AudioPlayer.css";
import "./PlayButton.css";

import AudioCenter from "./AudioCenter";
import AudioVolume from "./AudioVolume";

import playButtonImage from "../../../images/audio-player/play_button.svg";
import pauseButtonImage from "../../../images/audio-player/pause_button.svg";
import volumeIcon from "../../../images/audio-player/volumeIcon.svg";
import volumeIconMute from "../../../images/audio-player/volumeMute.svg";

const AudioPlayer = ({
	secondClass,
	changeImage,
	index,
	audioFile,
	title,
	composer,
	nextAudioTrack,
}) => {
	const [currentTime, setCurrentTime] = useState("0:00");
	const [pureTime, setPureTime] = useState(0);
	const [timeRemaining, setTimeRemaining] = useState(null);
	const [pureDuration, setPureDuration] = useState(0);
	const [buttonImage, setButtonImage] = useState(playButtonImage);
	const [volumeImage, setVolumeImage] = useState(volumeIcon);
	const [volumeBarVisibility, setVolumeBarVisibility] = useState("hide");
	const [volume, setVolume] = useState(1);

	const audio = useRef();
	const playButton = useRef();

	const playState = (e) => {
		stopAllAudio();
		if (audio.current.ended) {
			audio.current.load();
			setButtonImage(playButtonImage);
			nextAudioTrack(audio);
		} else if (audio.current.currentTime === 0) {
			setButtonImage(pauseButtonImage);
			audio.current.play();
		} else if (buttonImage === pauseButtonImage) {
			setButtonImage(playButtonImage);

			audio.current.pause();
		} else if (buttonImage === playButtonImage) {
			setButtonImage(pauseButtonImage);
			audio.current.play();
		}
	};

	const stopAllAudio = () => {
		const allAudio = [...document.querySelectorAll(".audio-file")];
		allAudio.forEach((audio) => {
			if (audio.paused === false) {
				audio.nextElementSibling.click();
			}
		});
	};

	const getTimeCalc = (event) => {
		const audioElement = audio.current;
		const currentTime =
			Math.floor(audioElement.currentTime.toFixed(0) / 60) +
			":" +
			(audioElement.currentTime.toFixed(0) < 10
				? `0${audioElement.currentTime.toFixed(0)}`
				: audioElement.currentTime.toFixed(0) % 60 < 10
				? `0${audioElement.currentTime.toFixed(0) % 60}`
				: audioElement.currentTime.toFixed(0) % 60
				? audioElement.currentTime.toFixed(0) % 60
				: "00");
		setCurrentTime(currentTime);
		getDuration();
	};

	const getDuration = (event) => {
		const time =
			Math.floor(audio.current.duration.toFixed(0)) -
			Math.floor(audio.current.currentTime.toFixed(0));

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

		setTimeRemaining(timeRemaining);
		pureTimeAndDuration();
	};

	const pureTimeAndDuration = () => {
		setPureTime(audio.current.currentTime);
		setPureDuration(audio.current.duration);
	};

	const updateCurrentTime = (newTime) => {
		audio.current.currentTime = newTime;
	};

	const changeVolume = (event) => {
		setVolume(event.target.value);
	};

	const muteVolume = () => {
		if (volumeImage === volumeIcon) {
			setVolumeImage(volumeIconMute);
			audio.current.muted = true;
		} else {
			setVolumeImage(volumeIcon);
			audio.current.muted = false;
		}
	};

	const volumeBarVisibilityEvent = (event) => {
		if (event.type === "mouseover") {
			setVolumeBarVisibility("show");
		} else {
			setVolumeBarVisibility("hide");
		}
	};

	return (
		<div
			className={`audio-player ${secondClass}`}
			onMouseEnter={changeImage}
			data-index={index}>
			<div className='audio-player-row'>
				<audio
					className={`audio-file ${secondClass}`}
					src={audioFile}
					ref={audio}
					onTimeUpdate={getTimeCalc}
					onDurationChange={getDuration}
					onEnded={playState}
					onLoad={playState}
					data-index={index}
				/>

				<img
					ref={playButton}
					src={buttonImage}
					alt='play and pause button'
					className={`play-button ${secondClass}`}
					onClick={playState}
				/>
				<AudioCenter
					title={title}
					composer={composer}
					currentTime={currentTime}
					timeRemaining={timeRemaining}
					pureTime={pureTime}
					pureDuration={pureDuration}
					updateCurrentTime={updateCurrentTime}
				/>
				<AudioVolume
					changeVolume={changeVolume}
					volumeIcon={volumeImage}
					muteVolume={muteVolume}
					volumeBarVisibility={volumeBarVisibilityEvent}
					volumeBarVisibilityState={volumeBarVisibility}
					volume={volume}
				/>
			</div>
		</div>
	);
};

export default AudioPlayer;

//Need to add callback function here and send it down to AudioProgress to get  time data to update currentTime in state here.

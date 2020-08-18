import React, { useState, useEffect } from "react";
import AudioPlayer from "./AudioPlayer";

const PlayerColumn = (props) => {
	const [allAudio, setAllAudio] = useState([]);

	useEffect(() => {
		const newPlaylist = [];
		props.musicData.forEach((item) => newPlaylist.push(item.secondClass));

		setAllAudio(newPlaylist);
	}, []);

	const nextAudioTrack = (lastTrack) => {
		const previousTrackIndex = Number(lastTrack.current.dataset.index);
		const playlist = [...allAudio];

		const nextTrackName =
			previousTrackIndex === playlist.length - 1
				? playlist[0]
				: playlist[previousTrackIndex + 1];

		const query = `.play-button.${nextTrackName}`;

		document.querySelector(query).click();
	};

	const players = props.musicData.map((player, index) => {
		return (
			<AudioPlayer
				title={player.title}
				key={index}
				audioFile={player.audioName}
				secondClass={player.secondClass}
				index={index}
				changeImage={props.changeImage}
				nextAudioTrack={nextAudioTrack}
			/>
		);
	});
	return <div className='player-column'>{players}</div>;
};

export default PlayerColumn;

// Should have logic for mapping out all audio players including date etc.
//Where is that data held? In Props?

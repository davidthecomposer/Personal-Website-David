import "./SmallAudioVolume.css";
import React from "react";

const SmallAudioVolume = (props) => {
	return (
		<div className='small-volume-container'>
			<img
				className='audio-volume'
				src={props.volumeIcon}
				alt='Volume Icon'
				onClick={props.muteVolume}
				onMouseOver={props.volumeBarVisibility}
				onMouseLeave={props.volumeBarVisibility}
			/>
		</div>
	);
};
export default SmallAudioVolume;

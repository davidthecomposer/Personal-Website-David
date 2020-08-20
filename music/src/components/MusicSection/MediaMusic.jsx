import React from "react";
import PlayerColumn from "./AudioPlayer/PlayerColumn";
import mediaMusic from "../../data/MediaMusic";

class MediaMusic extends React.Component {
	state = { mediaMusicData: mediaMusic, displayImage: mediaMusic[0].imageSrc };

	changeImage = async (event) => {
		await this.setState({
			displayIndex: Number(event.target.getAttribute("data-index")),
		});
		await this.setState({
			displayImage: mediaMusic[this.state.displayIndex].imageSrc,
		});
	};

	onMouseMove = (event) => {
		event.persist();
		this.changeImage(event);
	};

	render() {
		return (
			<section className={`media music-sections ${this.props.visibilityClass}`}>
				<div className='audio-row'>
					<PlayerColumn
						musicData={this.state.mediaMusicData}
						changeImage={this.onMouseMove}
					/>
					<div className='display-window'>
						<img
							src={this.state.displayImage}
							alt='turning-point info display'
							className='display-image'
						/>
					</div>
				</div>
			</section>
		);
	}
}

export default MediaMusic;

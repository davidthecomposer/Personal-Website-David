import React, { Fragment } from "react";
import PlayerColumn from "./AudioPlayer/PlayerColumn";
import mediaMusic from "../../data/MediaMusic";

class MediaMusic extends React.Component {
	state = {
		mediaMusicData: mediaMusic,
		displayImage: (
			<Fragment>
				<picture>
					<source srcSet={mediaMusic[0].imageBU} />
					<source srcSet={mediaMusic[0].imageSrc} />
					<img
						src={mediaMusic[0].imageSrc}
						alt={mediaMusic[0].title}
						className='display-image'
					/>
				</picture>
			</Fragment>
		),
	};

	changeImage = async (event) => {
		await this.setState({
			displayIndex: Number(event.target.getAttribute("data-index")),
		});
		await this.setState({
			displayImage: (
				<Fragment>
					<picture>
						<source srcSet={mediaMusic[this.state.displayIndex].imageBU} />
						<source srcSet={mediaMusic[this.state.displayIndex].imageSrc} />
						<img
							src={mediaMusic[this.state.displayIndex].imageSrc}
							alt={mediaMusic[this.state.displayIndex].title}
							className='display-image'
						/>
					</picture>
				</Fragment>
			),
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
					<div className='display-window'>{this.state.displayImage}</div>
				</div>
			</section>
		);
	}
}

export default MediaMusic;

import React from "react";
import "./Carousel.css";
import ManualNavigation from "./ManualNavigation";
import activePane from "../../../images/slideshow/activePane.png";
import inactivePane from "../../../images/slideshow/inactivePane.png";
import slideData from "../../../data/SlideData";

class Carousel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			slideImages: slideData.map((slide) => slide.image),
			slideLinks: slideData.map((slide) => slide.link),
			slideAlts: slideData.map((slide) => slide.alt),
			idKeys: slideData.map((slide, index) => index),
			actions: slideData.map((slide) => slide.action),
			activeImage: slideData[0].image,
			activeAlt: slideData[0].alt,
			activeLink: slideData[0].link,
			autoPlayState: true,
			slideAnimationClass: "fade",
			activeID: 0,
			action: "play",
			findClass: slideData[0].findClass,
		};
		this.timer = setInterval(this.changeSlide, 10000);
	}

	changeSlide = (e) => {
		const allSlides = this.state.slideImages;
		const currentIndex = allSlides.indexOf(this.state.activeImage);
		const nextIndex = currentIndex + 1;

		if (nextIndex === allSlides.length) {
			this.setState({
				activeImage: allSlides[0],
				activeAlt: this.state.slideAlts[0],
				activeLink: this.state.slideLinks[0],
				activeID: 0,
				action: this.state.actions[0],
			});
		} else {
			this.setState({
				activeImage: allSlides[nextIndex],
				activeAlt: this.state.slideAlts[nextIndex],
				activeLink: this.state.slideLinks[nextIndex],
				activeID: this.state.idKeys[nextIndex],
				action: this.state.actions[nextIndex],
			});
		}

		if (e) {
			this.manualSlideChange(allSlides, currentIndex, e);
		}
	};

	manualSlideChange = (allSlides, currentIndex, e) => {
		let previousIndex = currentIndex - 1;
		let lastIndex = allSlides.length - 1;
		if (e.target.classList[1] === "forward") {
			this.changeSlide();
			if (this.state.autoPlayState === true) {
				clearInterval(this.timer);
				this.timer = setInterval(this.changeSlide, 10000);
			}
		} else {
			if (previousIndex === -1) {
				this.setState({
					activeImage: allSlides[lastIndex],
					activeAlt: this.state.slideAlts[lastIndex],
					activeLink: this.state.slideLinks[lastIndex],
				});
			} else {
				this.setState({
					activeImage: allSlides[previousIndex],
					activeAlt: this.state.slideAlts[previousIndex],
					activeLink: this.state.slideLinks[previousIndex],
				});
			}
		}
	};

	changeAutoPlayState = async () => {
		if (this.state.autoPlayState === true) {
			await this.setState({
				autoPlayState: false,
			});
			clearInterval(this.timer);
		} else {
			this.timer = await setInterval(this.changeSlide, 10000);
			await this.setState({
				autoPlayState: true,
			});
		}
	};

	playSpotlightPiece = (e) => {
		const firstAudioTrackPlayButton =
			e.target.parentElement.parentElement.parentElement.nextElementSibling
				.children[2].children[0].children[0].children[0].children[0]
				.children[1];
		console.log(this.state.action);
		if (this.state.action === "play") {
			firstAudioTrackPlayButton.click();
		}
	};

	render() {
		return (
			<div className='carousel'>
				<ManualNavigation
					changeSlide={this.changeSlide}
					allSlides={this.state.slideImages}
					activeImage={this.state.activeImage}
					activePane={activePane}
					inactivePane={inactivePane}
					changeAutoPlayState={this.changeAutoPlayState}
				/>

				<a
					href={this.state.activeLink}
					className={`slide-image ${this.state.slideAnimationClass}`}
					key={this.state.activeID}>
					<img
						src={this.state.activeImage}
						alt={this.state.activeAlt}
						className='pane-image'
						onClick={this.playSpotlightPiece}
					/>
				</a>
			</div>
		);
	}
}

export default Carousel;

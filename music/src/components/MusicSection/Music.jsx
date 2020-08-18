import "./Music.css";
import React from "react";
import MusicTabsSection from "./MusicTabsSection";
import MediaMusic from "./MediaMusic";
import OrchestralMusic from "./OrchestralMusic";
import ChamberMusic from "./ChamberMusic";
import VocalChoralMusic from "./VocalChoralMusic";
import SoloMusic from "./SoloMusic";

class Music extends React.Component {
	state = {
		mediaMusicVisibility: "",
		chamberMusicVisibility: "invisible",
		orchestralMusicVisibility: "invisible",
		vocalChoralMusicVisibility: "invisible",
		soloMusicVisibility: "invisible",
	};

	handleMusicSectionNav = (e) => {
		switch (e.target.innerHTML) {
			case "Media":
				this.setState({
					mediaMusicVisibility: "",
					chamberMusicVisibility: "invisible",
					orchestralMusicVisibility: "invisible",
					vocalChoralMusicVisibility: "invisible",
					soloMusicVisibility: "invisible",
				});
				break;
			case "Chamber":
				this.setState({
					mediaMusicVisibility: "invisible",
					chamberMusicVisibility: "",
					orchestralMusicVisibility: "invisible",
					vocalChoralMusicVisibility: "invisible",
					soloMusicVisibility: "invisible",
				});
				break;
			case "Orchestral":
				this.setState({
					mediaMusicVisibility: "invisible",
					chamberMusicVisibility: "invisible",
					orchestralMusicVisibility: "",
					vocalChoralMusicVisibility: "invisible",
					soloMusicVisibility: "invisible",
				});
				break;
			case "Vocal/Choral":
				this.setState({
					mediaMusicVisibility: "invisible",
					chamberMusicVisibility: "invisible",
					orchestralMusicVisibility: "invisible",
					vocalChoralMusicVisibility: "",
					soloMusicVisibility: "invisible",
				});
				break;
			case "Solo":
				this.setState({
					mediaMusicVisibility: "invisible",
					chamberMusicVisibility: "invisible",
					orchestralMusicVisibility: "invisible",
					vocalChoralMusicVisibility: "invisible",
					soloMusicVisibility: "",
				});
				break;
			default:
				break;
		}

		this.setState({});
	};

	render() {
		return (
			<section className='music-container anchor' id='music-container'>
				<h2 className='section-title'>Music</h2>
				<MusicTabsSection handleMusicSectionNav={this.handleMusicSectionNav} />

				<MediaMusic visibilityClass={this.state.mediaMusicVisibility} />
				<ChamberMusic visibilityClass={this.state.chamberMusicVisibility} />
				<OrchestralMusic
					visibilityClass={this.state.orchestralMusicVisibility}
				/>
				<VocalChoralMusic
					visibilityClass={this.state.vocalChoralMusicVisibility}
				/>
				<SoloMusic visibilityClass={this.state.soloMusicVisibility} />
			</section>
		);
	}
}

export default Music;

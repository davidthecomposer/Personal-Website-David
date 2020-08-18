import React from "react";
import "./MusicTabsSection.css";

class MusicTabsSection extends React.Component {
	render() {
		return (
			<div className='music-tabs-section'>
				<h3 className='divider'>|</h3>

				<div className='music-tab-container'>
					<div className='music-tab-button'>
						<h3
							className='music-button-title'
							onClick={this.props.handleMusicSectionNav}>
							Media
						</h3>
						<div className='underline'></div>
					</div>
				</div>

				<h3 className='divider'>|</h3>

				<div className='music-tab-container'>
					<div className='music-tab-button'>
						<h3
							className='music-button-title'
							onClick={this.props.handleMusicSectionNav}>
							Chamber
						</h3>
						<div className='underline'></div>
					</div>
				</div>

				<h3 className='divider'>|</h3>

				<div className='music-tab-container'>
					<div className='music-tab-button'>
						<h3
							className='music-button-title'
							onClick={this.props.handleMusicSectionNav}>
							Orchestral
						</h3>
						<div className='underline'></div>
					</div>
				</div>

				<h3 className='divider'>|</h3>

				<div className='music-tab-container'>
					<div className='music-tab-button'>
						<h3
							className='music-button-title'
							onClick={this.props.handleMusicSectionNav}>
							Vocal/Choral
						</h3>
						<div className='underline'></div>
					</div>
				</div>

				<h3 className='divider'>|</h3>

				<div className='music-tab-container'>
					<div className='music-tab-button'>
						<h3
							className='music-button-title'
							onClick={this.props.handleMusicSectionNav}>
							Solo
						</h3>
						<div className='underline'></div>
					</div>
				</div>

				<h3 className='divider'>|</h3>
			</div>
		);
	}
}

export default MusicTabsSection;

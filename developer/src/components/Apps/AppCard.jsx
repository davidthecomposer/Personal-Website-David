import "./appCard.css";
import React from "react";

class AppCard extends React.Component {
	constructor(props) {
		super(props);

		this.state = { isFlipped: "" };

		this.navigationButton = React.createRef();
	}

	flipCard = (e) => {
		if (e.target !== this.navigationButton.current) {
			return this.state.isFlipped === "is-flipped"
				? this.setState({ isFlipped: "" })
				: this.setState({ isFlipped: "is-flipped" });
		}
	};
	linkNavigation = () => {
		window.open(this.props.dataURL, "_blank");
	};
	render() {
		return (
			<div className={`scene ${this.props.uniqueClass}`}>
				<div className={`card ${this.state.isFlipped}`} onClick={this.flipCard}>
					<div className='panel-container front'>
						<h1 className='panel-title'>{this.props.title}</h1>
						<div
							className='panel-picture'
							style={{ backgroundImage: `url(${this.props.image})` }}></div>
						<div className='panel-stats'>
							<div className='stats-left'>
								<i className={this.props.icon1}></i>
								<i className={this.props.icon2}></i>
							</div>
							<button
								className='navigate'
								data-url={this.props.dataURL}
								ref={this.navigationButton}
								onClick={this.linkNavigation}>
								{this.props.buttonText}
							</button>
							<div className='stats-right'>
								<i className={this.props.icon3}></i>
								<i className={this.props.icon4}></i>
								<i className={this.props.icon5}></i>
							</div>
						</div>
					</div>
					<div className='panel-container back'>
						<h1 className='panel-title'>{this.props.title}</h1>
						<div className='panel-description'>
							<p>{this.props.descriptionP1}</p>
							<p>{this.props.descriptionP2}</p>{" "}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AppCard;

// Still need to update php styling for email.

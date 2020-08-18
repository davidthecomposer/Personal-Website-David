import React from "react";
import spotlightQuotes from "../../data/SpotLightQuotes";
import "./ComposerQuotes.css";

class ComposerQuotes extends React.Component {
	state = { spotlightText: "filler", authorName: "anon" };

	componentDidMount = () => {
		const allQuotes = Object.entries(spotlightQuotes);
		let randomNumber = Math.floor(Math.random() * allQuotes.length);
		let quote = allQuotes[randomNumber][1];
		let author = allQuotes[randomNumber][0];

		this.setState({
			spotlightText: quote,
			authorName: author,
		});
	};

	render() {
		return (
			<div>
				<h2 className='spotlight-text'>{this.state.spotlightText}</h2>
				<h2 className='author-name'>- {this.state.authorName}</h2>
			</div>
		);
	}
}
export default ComposerQuotes;

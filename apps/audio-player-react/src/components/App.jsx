import React from "react";
import AudioPlayerList from "./AudioPlayerList";

class App extends React.Component {
	render() {
		return (
			<div>
				<AudioPlayerList />
				<a
					class='home-button'
					href='https://www.developer.davidhalcampbell.com'>
					<p className='back-to-app'>Back to Apps</p>
				</a>
			</div>
		);
	}
}

export default App;

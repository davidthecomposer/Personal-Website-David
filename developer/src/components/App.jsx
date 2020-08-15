import React from "react";
import Header from "./Header/Header";
import MyApps from "./Apps/MyApps";
import ContactSection from "./Contact/ContactMe";
import Footer from "./Footer/Footer";

class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<div className='intro anchor' id='home'>
					Welcome to a collection of snapshots from my front-end development
					journey. Below are all the apps and projects that I have built on my
					own (with copious amounts of googling at times). Some are simple, some
					are more complex, and some are better than others, but they are all my
					creations and I love them. Click anywhere other than the button on
					each card to read the details on the back. Click on the button to see
					a full version of the apps or websites. Feel free to leave feedback,
					or contact me using the appropriate interfaces. You can find the code
					for all of these on my gitHub. Keep coming back for new updates!
				</div>
				<MyApps />
				<ContactSection />
				<Footer />
			</div>
		);
	}
}

export default App;

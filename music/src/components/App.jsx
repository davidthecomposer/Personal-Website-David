import React from "react";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Music from "./MusicSection/Music";
import News from "./News/News";
import AboutMe from "./AboutMe/AboutMe";
import ContactSection from "./ContactSection/ContactMe";
import Footer from "./Footer/Footer";

class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Home />
				<Music />
				<News />
				<AboutMe />
				<ContactSection />
				<Footer />
			</div>
		);
	}
}

export default App;

// Some kind of transition effect for SLideShow
//any transitions that could happen? Image change from Liz to MAndi?
// Text of Music navigation header changes color when selected
// Check media Queries - there was a problem with icon position of volume at smallest width
// Update Meta Data etc for Main page
//fix any broken links in footer

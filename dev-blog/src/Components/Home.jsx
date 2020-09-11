import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import "../Styles/App.scss";

const Home = ({ modeSwitch, themeMode, lightOrDarkMode }) => {
	const navigateToTop = (e) => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	};
	return (
		<div className={themeMode}>
			<Header lightOrDarkMode={lightOrDarkMode} modeSwitch={modeSwitch} />
			<Main navigateToTop={navigateToTop} modeSwitch={modeSwitch} />
			<Footer navigateToTop={navigateToTop} />
		</div>
	);
};

export default Home;

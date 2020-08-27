import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import "../Styles/App.scss";

const Home = () => {
	return (
		<div className='App'>
			<Header />
			<Main />
			<Footer />
		</div>
	);
};

export default Home;

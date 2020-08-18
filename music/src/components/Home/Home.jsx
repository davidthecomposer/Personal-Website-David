import React from "react";
import "./Home.css";
import Carousel from "./Carousel/Carousel";

class Home extends React.Component {
	render() {
		return (
			<section className='home anchor' id='home'>
				<Carousel />
			</section>
		);
	}
}

export default Home;

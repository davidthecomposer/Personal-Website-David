import React from "react";
import "./SolarSystem.scss";

const SolarSystem = () => {
	return (
		<div className='solar-system'>
			<div className='sun'></div>
			<div className='orbit-mercury'>
				<div className='mercury'></div>
			</div>
			<div className='orbit-venus'>
				<div className='venus'></div>
			</div>
			<div className='orbit-earth'>
				<div className='earth'></div>
			</div>
			<div className='orbit-mars'>
				<div className='mars'></div>
			</div>
			<div className='orbit-jupiter'>
				<div className='jupiter'></div>
			</div>
			<div className='orbit-saturn'>
				<div className='saturn'></div>
			</div>
			<div className='orbit-uranus'>
				<div className='uranus'></div>
			</div>
			<div className='orbit-neptune'>
				<div className='neptune'></div>
			</div>
			<div className='orbit-pluto'>
				<div className='pluto'></div>
			</div>
		</div>
	);
};

export default SolarSystem;

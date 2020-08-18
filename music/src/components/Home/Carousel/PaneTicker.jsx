import React from "react";

const PaneTicker = (props) => {
	const allPanes = props.allSlides.map((slide) => {
		return slide === props.activeImage ? props.activePane : props.inactivePane;
	});
	const paneOrder = allPanes.map((pane, index) => {
		return (
			<img
				src={pane}
				className='pane-tick'
				key={index}
				alt='shows which pane is active'></img>
		);
	});
	return <div className='pane-ticker'>{paneOrder}</div>;
};

export default PaneTicker;

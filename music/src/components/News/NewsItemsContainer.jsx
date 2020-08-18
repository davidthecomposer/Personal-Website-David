import React from "react";
import SongCycleCommission from "./NewsStories/SongCycleCommission";
import ChamberOperaCommission from "./NewsStories/ChamberOperaCommission";
import OCTComposerInRes from "./NewsStories/OCTComposerInRes";

const NewsItemsContainer = (props) => {
	// Example of destructuring and extracting variables to use in map

	return (
		<div className='news-items-container'>
			<SongCycleCommission />
			<ChamberOperaCommission />
			<OCTComposerInRes />
		</div>
	);
};

export default NewsItemsContainer;

// Should have logic for mapping out all audio players including date etc.
//Where is that data held? In Props?

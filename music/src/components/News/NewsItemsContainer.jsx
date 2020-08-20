import React from "react";
import SongCycleCommission from "./NewsStories/SongCycleCommission";
import ChamberOperaCommission from "./NewsStories/ChamberOperaCommission";
import OCTComposerInRes from "./NewsStories/OCTComposerInRes";

const NewsItemsContainer = (props) => {
	return (
		<div className='news-items-container'>
			<SongCycleCommission articleNum='0' />
			<ChamberOperaCommission articleNum='1' />
			<OCTComposerInRes articleNum='2' />
		</div>
	);
};

export default NewsItemsContainer;

// Should have logic for mapping out all audio players including date etc.
//Where is that data held? In Props?

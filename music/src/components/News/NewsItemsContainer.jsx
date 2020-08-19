import React, { useState } from "react";
import SongCycleCommission from "./NewsStories/SongCycleCommission";
import ChamberOperaCommission from "./NewsStories/ChamberOperaCommission";
import OCTComposerInRes from "./NewsStories/OCTComposerInRes";

const NewsItemsContainer = (props) => {
	const [slideDownClass, setSlideDownClass] = useState("");

	const slideDown = () => {
		slideDownClass === ""
			? setSlideDownClass("slide-down")
			: setSlideDownClass("");
	};

	return (
		<div className='news-items-container'>
			<SongCycleCommission
				slideDown={slideDown}
				slideDownClass={slideDownClass}
			/>
			<ChamberOperaCommission
				slideDown={slideDown}
				slideDownClass={slideDownClass}
			/>
			<OCTComposerInRes slideDown={slideDown} slideDownClass={slideDownClass} />
		</div>
	);
};

export default NewsItemsContainer;

// Should have logic for mapping out all audio players including date etc.
//Where is that data held? In Props?

import React from "react";

import operaContempoHeader from "../../../images/news/OCHeader.png";

const OCTComposerInRes = (props) => {
	// Example of destructuring and extracting variables to use in map

	return (
		<div className='news-row'>
			<div className='news-slot-main'>
				<h2 className='news-item-title'>Composer-In-Residence</h2>
				<p className='news-text'>
					I have accepted an invitation to be the composer-in-residence for
					Opera Contempo. I look forward to helping to grow this important new
					outlet for modern voices and stories. One of the goals of Opera
					Contempo is to create space for new composers to debut new works about
					contemporary topics. Along with composing an opera I'll be serving on
					the board of directors and giving input and composition-related
					support to other projects. There are some really exciting things
					planned for this upcoming season!
				</p>
			</div>
			<div className='news-slot-one-safari'>
				<img
					src={operaContempoHeader}
					className='news-image-full'
					alt='Opera Contempo Season Events'
				/>
			</div>
		</div>
	);
};

export default OCTComposerInRes;

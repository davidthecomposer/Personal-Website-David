import React from "react";

import jennyImage from "../../../images/news/jennyHead.JPG";

const ChamberOperaCommission = (props) => {
	// Example of destructuring and extracting variables to use in map

	return (
		<div className='news-row'>
			<h2 className='news-item-title'>Chamber Opera Commission</h2>
			<div className='news-slot-main'>
				<p className='news-text'>
					I will be composing a chamber opera to be premiered in the Fall 2021
					in association with Opera Contempo. The Libretto will be written by
					the extremely talented Jennifer Campbell, who I have previously worked
					with on the song cycle 'Habit'. I can't reveal too much about the plot
					at this point, but it centers around technology and what it means to
					be human. Look for updates and insights about the process on my blog
					(to be created soon) as the year progresses!
				</p>
			</div>
			<div className='news-slot-one'>
				<div className='news-info-center'>
					<img
						src={jennyImage}
						className='news-image-square'
						alt='Jennifer Campbell'
					/>
					<p className='news-text'>
						Jennifer Campbell is a writer with a background in history,
						journalism and video. Her articles have appeared on Faithcounts.org
						and in Utah Stories Magazine. She is currently working on a fantasy
						novel set in alt-world ancient Persia. When not writing she's busy
						getting called "noob" by her 11-year-old son, escaping to the Uintas
						and ripping it up on the flag football field.
					</p>
				</div>
			</div>
		</div>
	);
};

export default ChamberOperaCommission;

import React from "react";
import davidIcon from "../../Images/Icons/david_logo_alt.webp";

const CopyRight = () => {
	return (
		<div className='copyright-column'>
			<a href='https://www.davidhalcampbell.com'>
				<img src={davidIcon} alt='davidIcon' className='david-icon' />
			</a>
			<p className='copyright'>© Copyright David Campbell 2020-2021</p>
			<p className='copyright'>All rights reserved.</p>
		</div>
	);
};

export default CopyRight;

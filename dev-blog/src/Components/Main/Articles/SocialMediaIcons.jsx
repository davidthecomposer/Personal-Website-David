import React from "react";
import gitHubIcon from "../../../Images/Icons/github.svg";
import facebookIcon from "../../../Images/Icons/facebook.svg";
import instagramIcon from "../../../Images/Icons/instagram.svg";
import twitterIcon from "../../../Images/Icons/twitter.svg";
import linkedInIcon from "../../../Images/Icons/LI-In-Bug.png";
import "../../../Styles/SocialMediaIcons.scss";

const SocialMediaIcons = () => {
	return (
		<div className='nav-icons-row'>
			<a href='https://github.com/davidthecomposer'>
				<img src={gitHubIcon} alt='github link' className='follow-icons' />
			</a>
			<a href='https://www.facebook.com/davidthecomposer/'>
				<img src={facebookIcon} alt='facebook link' className='follow-icons' />
			</a>
			<a href='https://www.instagram.com/david_the_composer/'>
				<img
					src={instagramIcon}
					alt='instagram link'
					className='follow-icons'
				/>
			</a>
			<a href='https://twitter.com/dhccomposer'>
				<img src={twitterIcon} alt='twitter link' className='follow-icons' />
			</a>
			<a href='https://www.linkedin.com/in/dhcampbell/'>
				<img src={linkedInIcon} alt='linkdn link' className='follow-icons' />
			</a>
		</div>
	);
};

export default SocialMediaIcons;

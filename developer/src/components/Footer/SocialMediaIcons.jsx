import React from "react";
import gitHubIcon from "../../images/Icons/github.webp";
import gitHubIconBU from "../../images/Icons/github.png";
import facebookIcon from "../../images/Icons/facebook.svg";
import instagramIcon from "../../images/Icons/instagram.webp";
import instagramIconBU from "../../images/Icons/instagram.png";
import twitterIcon from "../../images/Icons/twitter.svg";
import linkedInIcon from "../../images/Icons/LI-In-Bug.png";
import "./SocialMediaIcons.scss";

const SocialMediaIcons = () => {
	return (
		<div className='nav-icons-row'>
			<a href='https://github.com/davidthecomposer'>
				<picture>
					<source srcSet={gitHubIconBU} />
					<source srcSet={gitHubIcon} />
					<img src={gitHubIcon} alt='github link' className='follow-icons' />
				</picture>
			</a>
			<a href='https://www.facebook.com/davidthecomposer/'>
				<img src={facebookIcon} alt='facebook link' className='follow-icons' />
			</a>
			<a href='https://www.instagram.com/david_the_composer/'>
				<picture>
					<source srcSet={instagramIconBU} />
					<source srcSet={instagramIcon} />
					<img
						src={instagramIcon}
						alt='instagram link'
						className='follow-icons'
					/>
				</picture>
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

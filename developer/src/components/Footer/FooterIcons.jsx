import React from "react";
import SocialMediaIcons from "./SocialMediaIcons";

const FooterIcons = () => {
	return (
		<div className='footer-icons'>
			<p className='footer-section-header'>Follow</p>
			<SocialMediaIcons />
			<div className='website-links'>
				<a href='https://www.music.davidhalcampbell.com'>Composer</a>
				<a href='https://www.developer.davidhalcampbell.com'>Developer</a>
				<a href='https://www.blog.davidhalcampbell.com'>Blog</a>
			</div>
		</div>
	);
};

export default FooterIcons;

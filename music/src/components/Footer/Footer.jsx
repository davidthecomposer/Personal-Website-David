import React from "react";
import "./footer.css";

import davidSigWhiteShadow from "../../images/main/david-sig-white-shadow.png";
import gitHubIcon from "../../images/main/github.svg";
import facebookIcon from "../../images/main/facebook.svg";
import instagramIcon from "../../images/main/instagram.svg";
import twitterIcon from "../../images/main/twitter.svg";
import linkedInIcon from "../../images/main/LI-In-Bug.png";

class Footer extends React.Component {
	render() {
		return (
			<footer>
				<div className='by-me'>
					<p>A</p>
					<a href='https://www.davidhalcampbell.com'>
						<img
							className='signature'
							src={davidSigWhiteShadow}
							alt='David Campbell Signature'
						/>
					</a>

					<p>Website</p>
				</div>
				<div className='nav-icons-footer'>
					<a href='https://github.com/davidthecomposer'>
						<img src={gitHubIcon} alt='github link' className='footer-icons' />
					</a>
					<a href='https://www.facebook.com/davidthecomposer/'>
						<img
							src={facebookIcon}
							alt='facebook link'
							className='footer-icons'
						/>
					</a>
					<a href='https://www.instagram.com/david_the_composer/'>
						<img
							src={instagramIcon}
							alt='instagram link'
							className='footer-icons'
						/>
					</a>
					<a href='https://twitter.com/dhccomposer'>
						<img
							src={twitterIcon}
							alt='twitter link'
							className='footer-icons'
						/>
					</a>
					<a href='https://www.linkedin.com/in/dhcampbell/'>
						{" "}
						<img
							src={linkedInIcon}
							alt='linkdn link'
							className='footer-icons'
						/>
					</a>
				</div>
			</footer>
		);
	}
}

export default Footer;

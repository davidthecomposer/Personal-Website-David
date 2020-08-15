import React from "react";
import "./footer.css";

import davidSigWhiteShadow from "../../images/david-sig-white-shadow.png";
import gitHubIcon from "../../images/github.svg";
import linkedInIcon from "../../images/LI-In-Bug.png";

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

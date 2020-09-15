import React from "react";
import "../../Styles/Footer.scss";

import NewsLetterForm from "./NewsLetterForm";
import Copyright from "./Copyright";

import FooterIcons from "./FooterIcons";
import ContactPageLinks from "./ContactPageLinks";
import FooterLatestStories from "./FooterLatestStories";
const Footer = ({ navigateToTop }) => {
	return (
		<footer className='blog-footer'>
			<div className='footer-row full'>
				<div className=' footer-row half'>
					<NewsLetterForm />
					<ContactPageLinks />
				</div>

				<div className='footer-row half'>
					<FooterLatestStories navigateToTop={navigateToTop} />
					<FooterIcons />
				</div>
			</div>
			<Copyright />
		</footer>
	);
};

export default Footer;
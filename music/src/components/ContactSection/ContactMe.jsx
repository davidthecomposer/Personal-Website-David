import "./contactMe.css";
import React from "react";
import ContactForm from "./ContactForm";

class contactSection extends React.Component {
	state = { name: "", email: "", message: "" };

	render() {
		return (
			<section className='contact anchor' id='contact'>
				<h2 className='section-title'>Contact</h2>
				<div className='contact-body'>
					<p>
						Send me an email with any questions or requests using the form
						below.
					</p>
					<ContactForm />
				</div>
			</section>
		);
	}
}

export default contactSection;

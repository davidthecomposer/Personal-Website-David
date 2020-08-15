import "./contactMe.css";
import React from "react";
import UserName from "./UserName";
import UserEmail from "./UserEmail";
import UserMessage from "./UserMessage";

class ContactForm extends React.Component {
	state = {
		name: "",
		email: "",
		userMessage: "",
		errorMessage: "",
		errorClass: "",
	};

	handleChange = (e) => {
		this.setState({ errorMessage: "", errorClass: "" });
		switch (e.target.name) {
			case "user-name":
				this.setState({ name: e.target.value });
				break;
			case "user-email":
				this.setState({ email: e.target.value });
				break;
			case "email-content":
				this.setState({ userMessage: e.target.value });
				break;
			default:
				break;
		}
	};

	validateFormData = (name, email, userMessage) => {
		const emailValidation = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+(?:[a-zA-Z]{2}|aero|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel)$/;
		const userNameValidation = /^[a-zA-Z0-9 ][a-zA-Z0-9_ ]{2,29}$/;
		this.setState({ errorClass: "fail" });
		if (userNameValidation.test(name) === false) {
			this.setState({
				errorMessage:
					"Names should be between 3 and 30 characters long and not have special characters",
			});
			return false;
		}
		if (emailValidation.test(email) === false) {
			this.setState({ errorMessage: "Please use a valid e-mail address" });
			return false;
		}
		if (userMessage === "") {
			this.setState({ errorMessage: "Please add a message before submitting" });
			return false;
		} else {
			return true;
		}
	};

	handleSentEmailMessage = (response) => {
		if (response.ok) {
			this.setState({
				errorClass: "success",
				errorMessage: "Message Sent. Thanks!",
				name: "",
				email: "",
				userMessage: "",
			});
			setTimeout(
				() =>
					this.setState({
						errorMessage: "",
					}),
				3000
			);
		} else {
			this.setState({
				errorMessage:
					"Mail Not Sent. If you are sure there are no errors please submit again",
			});
		}
	};

	handleRequest = async (emailContent) => {
		const response = await fetch("/form-to-email.php", {
			method: "POST",
			body: emailContent,
		});
		this.handleSentEmailMessage(response);
	};

	handleSubmit = (e) => {
		e.preventDefault();

		const { name, email, userMessage } = this.state;
		let emailContent = new FormData();
		emailContent.append("name", name);
		emailContent.append("email", email);
		emailContent.append("userMessage", userMessage);

		this.validateFormData(name, email, userMessage);
		if (this.validateFormData(name, email, userMessage) === true) {
			this.handleRequest(emailContent);
		}
	};

	render() {
		return (
			<form className='contact-form' method='POST' onSubmit={this.handleSubmit}>
				<div className='form-row'>
					<UserName
						handleChange={this.handleChange}
						nameText={this.state.name}
					/>
					<UserEmail
						handleChange={this.handleChange}
						emailText={this.state.email}
					/>
				</div>
				<div className={`error-message ${this.state.errorClass}`}>
					{this.state.errorMessage}
				</div>
				<UserMessage
					handleChange={this.handleChange}
					messageText={this.state.userMessage}
				/>

				<input type='submit' className='email-submit' value='Submit' />
			</form>
		);
	}
}

export default ContactForm;

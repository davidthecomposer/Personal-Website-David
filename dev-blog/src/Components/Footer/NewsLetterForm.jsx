import React, { useState } from "react";

const NewsLetterForm = () => {
	const [email, setEmail] = useState("");
	const [responseText, setResponseText] = useState("");
	const [placeholderText, setPlaceholderText] = useState("add email");

	const handleResponseText = (response) => {
		if (responseText === "") {
			setResponseText(response);
		}
		setTimeout(() => {
			setResponseText("");
		}, 3000);
	};

	const signUpForNewsletter = async (e) => {
		e.preventDefault();

		const response = await fetch(
			"https://cors-anywhere.herokuapp.com/https://david-newsletter-subscribe.herokuapp.com/",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: email,
					list: "developer",
				}),
			}
		);
		const answer = await response.json();
		handleResponseText(answer);
		setEmail("");
	};

	const recordEmail = (event) => {
		setEmail(event.target.value);
	};

	const removePlaceholder = () => {
		setPlaceholderText("");
	};
	const addPlaceholder = () => {
		setPlaceholderText("add email");
	};
	return (
		<div className='news-letter'>
			<form onSubmit={signUpForNewsletter}>
				<p className='footer-section-header'> Mailing List</p>
				<p>
					Want to stay up to date on new blog posts, events, music releases, and
					apps? Join my mailing list with your preferred email below:{" "}
				</p>
				<div className='news-letter-input-row'>
					<input
						type='text'
						placeholder={placeholderText}
						className='news-letter-input'
						value={email}
						onChange={recordEmail}
						onSelect={removePlaceholder}
						onBlur={addPlaceholder}
						required
					/>
					<input
						type='submit'
						value='subscribe'
						className='news-letter-button'
					/>
				</div>
			</form>
			<div className='news-letter-response'>{responseText}</div>
		</div>
	);
};

export default NewsLetterForm;

// client side key: 6LdSJ8kZAAAAADCudRCwHxx3ROH7cttd86AfiFTL
// server side key: 6LdSJ8kZAAAAALV3td7wycBC8ddZIjRrJtmVWfrW

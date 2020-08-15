import React from "react";

const UserMessage = (props) => {
	return (
		<div className='user-message'>
			<label htmlFor='email-content' className='form-labels-message'>
				{" "}
				Message:{" "}
			</label>
			<textarea
				name='email-content'
				id='email-content'
				rows='10'
				cols='80'
				onChange={props.handleChange}
				value={props.messageText}></textarea>
		</div>
	);
};

export default UserMessage;

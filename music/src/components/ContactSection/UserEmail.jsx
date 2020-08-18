import React from "react";

const UserEmail = (props) => {
	return (
		<div className='user-email'>
			<label htmlFor='user-email' className='form-labels'>
				{" "}
				E-mail:{" "}
			</label>
			<input
				type='text'
				name='user-email'
				id='user-email'
				onChange={props.handleChange}
				value={props.emailText}
			/>
		</div>
	);
};

export default UserEmail;

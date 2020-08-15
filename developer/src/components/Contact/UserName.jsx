import React from "react";

const UserName = (props) => {
	return (
		<div className='user-name'>
			<label htmlFor='user-name' className='form-labels'>
				{" "}
				Name:{" "}
			</label>
			<input
				type='text'
				name='user-name'
				id='user-name'
				onChange={props.handleChange}
				value={props.nameText}
			/>
		</div>
	);
};

export default UserName;

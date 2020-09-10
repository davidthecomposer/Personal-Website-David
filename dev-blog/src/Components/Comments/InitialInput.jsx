import React from "react";
import "../../Styles/Comments/InitialInput.scss";
import plusSign from "../../Images/Comments/plus_sign.png";

const InitialInput = ({
	addNewComment,
	name,
	message,
	recordName,
	recordMessage,
	showHideForm,
	formVisibility,
	buttonVisibility,
}) => {
	return (
		<form
			className={`comment-form-initial ${formVisibility}`}
			method='POST'
			name='form'
			id='form'
			onSubmit={addNewComment}>
			<div className='first-column'>
				<input
					type='text'
					className='name-input'
					placeholder='Name'
					name='name'
					value={name}
					required
					onChange={recordName}
					tabIndex='1'
				/>

				<button type='submit' className='submit-button' tabIndex='0'>
					Submit
				</button>
			</div>

			<textarea
				className='message-input'
				name='message'
				id='message'
				cols='30'
				rows='8'
				placeholder='write new message here'
				value={message}
				onChange={recordMessage}
				tabIndex='2'
				required></textarea>

			<div className={`make-new-comment ${buttonVisibility}`}>
				<img
					src={plusSign}
					className='add-comment'
					onClick={showHideForm}
					onTouchEnd={showHideForm}
					alt='click to add a new comment'
				/>
				<div>Add a New Comment</div>
			</div>
		</form>
	);
};

export default InitialInput;

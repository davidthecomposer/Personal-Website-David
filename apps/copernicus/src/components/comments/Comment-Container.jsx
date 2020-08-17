import React, { useState, useReducer } from "react";
import "./Comment-Container.scss";

const CommentContainer = ({
	musicData,
	currentTime,
	currentTrack,
	pureTime,
}) => {
	const [formVisibility, setFormVisibility] = useState("");
	const [formOpenClose, setFormOpenClose] = useState("");
	const [formData, setFormData] = useReducer(
		(state, newState) => ({ ...state, ...newState }),
		{
			name: "",
			message: "",
		}
	);

	const [toolTipMessage, setToolTipMessage] = useState(" ");
	const [toolTipVisibility, setToolTipVisibility] = useState("");

	const showCommentForm = () => {
		if (formOpenClose !== "close-form-icon") {
			setFormOpenClose("close-form-icon");
			setFormVisibility("visible-form");
		} else {
			setFormOpenClose("switch-to-icon");
			setFormVisibility("");
		}
	};

	const showCommentFormTouch = (e) => {
		e.preventDefault();
		if (formOpenClose !== "close-form-icon") {
			setFormOpenClose("close-form-icon");
			setFormVisibility("visible-form");
		} else {
			setFormOpenClose("switch-to-icon");
			setFormVisibility("");
		}
	};

	const updateFormState = (e) => {
		const name = e.target.name;
		const newValue = e.target.value;

		setFormData({ [name]: newValue });
	};

	const setToolTip = async (tTMessage, tTVisibility) => {
		await setToolTipMessage(tTMessage);
		await setToolTipVisibility(tTVisibility);
	};

	const validateFormData = () => {
		if (formData.name === "" || !formData.name.match(/[A-Z]/gi)) {
			setToolTip("please input a valid name (A-Z)", "tooltip-visible");

			return false;
		} else if (currentTime === "-:--" || currentTrack === "-") {
			setToolTip("please play a track to comment", "tooltip-visible");

			return false;
		} else {
			return true;
		}
	};

	const submitComment = async (e) => {
		try {
			await e.preventDefault();

			const permission = await validateFormData();

			if (permission === true) {
				const track_id = musicData.find((track) => track.title === currentTrack)
					._id;

				const body = JSON.stringify({
					track_id: track_id,
					name: formData.name,
					timestamp: pureTime,
					comment: formData.message,
				});
				const response = await fetch(
					`https://cors-anywhere.herokuapp.com/https://copernicus-api.herokuapp.com/tracks/${currentTrack}/comments`,
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							// Origin: "https://www.apps.davidhalcampbell.com/digitalClock/index.html
						},
						body: body,
					}
				);

				const userResponse = await response.json();
				const clearData = {
					name: " ",
					message: "",
				};
				setFormData(clearData);
				setToolTip(userResponse, "tooltip-visible");

				setTimeout(() => setToolTip(" ", ""), 4000);
			}
			setTimeout(() => setToolTip("", ""), 4000);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className='comment-container'>
			<div
				className={`comment-icon ${formOpenClose}`}
				onClick={showCommentForm}
				onTouchEnd={showCommentFormTouch}
			/>
			<form
				className={`track-comment-form ${formVisibility}`}
				onSubmit={submitComment}>
				<div className={`tooltip ${toolTipVisibility}`}>{toolTipMessage}</div>
				<div className='first-column'>
					<div className='current-track-comment'>
						{currentTrack || "current"}
					</div>
					<div className='track-time'>{currentTime}</div>

					<input
						onChange={updateFormState}
						className='name'
						type='text'
						placeholder='name'
						value={formData.name}
						name='name'
					/>
				</div>

				<textarea
					type='text'
					placeholder='make a comment about the track here. '
					value={formData.message}
					onChange={updateFormState}
					name='message'
					maxLength='50'
				/>

				<input type='submit' className='submit' value='Submit' />
			</form>
		</div>
	);
};

export default CommentContainer;

import React, { useState, useEffect } from "react";
import SingleMessageContainer from "./SingleMessageContainer";
import buildAllNestedObjects from "./helpers.mjs";
import InitialInput from "./InitialInput";

import "../../Styles/App.scss";

const AllMessagesContainer = ({
	dbToQuery,
	commentsVisibility,
	getCommentNumber,
}) => {
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");
	const [allMessages, setAllMessages] = useState([]);
	const [formVisibility, setFormVisibility] = useState("");
	const [buttonVisibility, setButtonVisibility] = useState("add-visible");

	useEffect(() => {
		const loadAllMessagesInit = async () => {
			try {
				const response = await fetch(
					"https://cors-anywhere.herokuapp.com/https://blog-comments-api.herokuapp.com/",
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							dbToQuery: dbToQuery,
						}),
					}
				);
				const allComments = await response.json();
				if (allComments) {
					getCommentNumber(allComments.length);
					allComments.forEach(
						(comment) =>
							(comment.date = generateDateString(new Date(comment.date)))
					);
					buildAllNestedObjects(allComments);
					setAllMessages(allComments);
				}
			} catch (err) {
				console.log(err);
			}
		};
		loadAllMessagesInit();
	}, [dbToQuery, getCommentNumber]);

	const deleteFormData = () => {
		setName("");
		setMessage("");
	};

	const generateDateString = (dateObject) => {
		const options = {
			year: "numeric",
			month: "long",
			day: "numeric",
			hour: "numeric",
			minute: "numeric",
			timeZoneName: "short",
		};
		const dateString = dateObject.toLocaleDateString("en-US", options);

		return dateString;
	};

	const recordName = (event) => {
		setName(event.target.value);
	};

	const recordMessage = (event) => {
		setMessage(event.target.value);
	};

	const addNewComment = async (e) => {
		e.preventDefault();

		const date = new Date();

		try {
			const response = await fetch(
				"https://cors-anywhere.herokuapp.com/https://blog-comments-api.herokuapp.com/new",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						// Origin: `http://localhost:3000/${version}`,
					},
					body: JSON.stringify({
						name: name,
						message: message,
						date: date,
						dbToQuery: dbToQuery,
					}),
				}
			);
			const data = await response.json();
			getCommentNumber(data.length);
			if (data) {
				data.forEach(
					(comment) =>
						(comment.date = generateDateString(new Date(comment.date)))
				);
				buildAllNestedObjects(data);

				deleteFormData();
				showHideForm();
				setAllMessages(data);
			}
		} catch (err) {
			console.log(err);
		}
	};

	const updateCommentsFromReply = (data) => {
		data.forEach(
			(comment) => (comment.date = generateDateString(new Date(comment.date)))
		);
		buildAllNestedObjects(data);
		setAllMessages(data);
	};

	const showHideForm = (e) => {
		if (e.type === "touchend") {
			e.preventDefault();
		}
		if (formVisibility === "") {
			setFormVisibility("form-visible");
			setButtonVisibility("");
		} else {
			setFormVisibility("");
			setButtonVisibility("add-visible");
		}
	};

	return (
		<div className={`all-messages-container ${commentsVisibility}`}>
			{(allMessages || []).map((comment) => {
				return (
					<SingleMessageContainer
						key={comment["_id"]}
						comment={comment}
						updateCommentsFromReply={updateCommentsFromReply}
						generateDateString={generateDateString}
						buildAllNestedObjects={buildAllNestedObjects}
						dbToQuery={dbToQuery}
						getCommentNumber={getCommentNumber}
					/>
				);
			})}
			<InitialInput
				recordName={recordName}
				recordMessage={recordMessage}
				addNewComment={addNewComment}
				name={name}
				message={message}
				showHideForm={showHideForm}
				formVisibility={formVisibility}
				buttonVisibility={buttonVisibility}
			/>
		</div>
	);
};

export default AllMessagesContainer;

import React from "react";
import "../../Styles/Comments/Content.scss";

const Content = ({
	comment,
	handleRepliesPress,
	handleReplyButtonPress,
	replyButtonText,
	handleIncrement,
	handleDecrement,
	voteTally,
	voteColorClass,
	handleAllRepliesPress,
}) => {
	return (
		<div className='content'>
			<p className='comment-date'>{comment.date}</p>
			<div className='message'>
				<p> {comment.message}</p>
			</div>
			<div className='interactions'>
				<button
					className='reply-btn'
					onClick={handleReplyButtonPress}
					onTouchEnd={handleReplyButtonPress}>
					{" "}
					{replyButtonText}
				</button>
				<p
					className='replies'
					onClick={handleRepliesPress}
					onTouchEnd={handleRepliesPress}>
					{" "}
					<i className='comment outline icon'></i>
					{`${(comment.replies || []).length}`}
				</p>
				<p
					className='all-replies'
					onClick={handleAllRepliesPress}
					onTouchEnd={handleAllRepliesPress}>
					<i className='comments outline icon'></i>
					{comment.allChildComments}
				</p>
				<div className='vote'>
					<div className='vote-display'> {voteTally}</div>
					<div className='vote-buttons'>
						<i
							className={`thumbs up icon ${voteColorClass.thumbsUp}`}
							onClick={handleIncrement}
							onTouchEnd={handleIncrement}></i>
						<i
							className={`thumbs down icon ${voteColorClass.thumbsDown}`}
							onClick={handleDecrement}
							onTouchEnd={handleDecrement}></i>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Content;

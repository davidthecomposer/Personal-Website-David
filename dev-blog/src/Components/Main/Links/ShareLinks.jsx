import React, { useState } from "react";
import "../../../Styles/Links.scss";

import facebookLink from "../../../Images/ShareLinks/facebook.png";
import twitterLink from "../../../Images/ShareLinks/twitter.png";
import mailLink from "../../../Images/ShareLinks/mail.png";
import redditIcon from "../../../Images/ShareLinks/redditIcon.png";

import linkLink from "../../../Images/ShareLinks/link.png";
import Meta from "./Meta";
import {
	FacebookShareButton,
	TwitterShareButton,
	RedditShareButton,
} from "react-share";

const ShareLinks = ({
	articleName,
	title,
	synopsis,
	commentNumber,
	navigateToComments,
	topOrBottom,
}) => {
	const [shareClass, setShareClass] = useState("");

	const copyToClipboard = async (e) => {
		if (e.type === "touchend") {
			e.preventDefault();
		}
		if (!navigator.clipboard) {
			return;
		}

		try {
			await navigator.clipboard.writeText(
				`https://www.blog.davidhalcampbell.com/${articleName}`
			);
			checkShareAndUpdate();
		} catch (err) {
			console.error("Failed to copy!", err);
		}
	};

	const checkShareAndUpdate = () => {
		setShareClass("slide-confirm");

		setTimeout(() => {
			setShareClass("");
		}, 3000);
	};

	const mailToManual = (e) => {
		if (e.type === "touchend") {
			e.preventDefault();
		}

		window.location.href = `mailto:?subject=${title}&body=Check out this blog post: https://www.blog.davidhalcampbell.com/${articleName}`;
	};

	return (
		<nav className={`article-links-${topOrBottom}`}>
			<Meta title={title} synopsis={synopsis} />
			<p className='share-label'>Share This Story</p>
			<div className='icons-container'>
				<div
					className='nav-icon comment-count'
					onClick={navigateToComments}
					onTouchEnd={navigateToComments}>
					<p className='comment-num'>{commentNumber}</p>{" "}
				</div>
				<RedditShareButton
					url={`https://www.blog.davidhalcampbell.com/${articleName}`}
					title={title}>
					<img src={redditIcon} alt='reddit' className='nav-icon' />
				</RedditShareButton>
				<FacebookShareButton
					url={`https://www.blog.davidhalcampbell.com/${articleName}`}
					quote={title}>
					<img
						src={facebookLink}
						alt='share to facebook'
						className='nav-icon'
					/>
				</FacebookShareButton>
				<TwitterShareButton
					url={`https://www.blog.davidhalcampbell.com/${articleName}`}
					title={title}>
					<img src={twitterLink} alt='twitter' className='nav-icon' />
				</TwitterShareButton>
				<img
					className='nav-icon'
					href={`mailto:?subject=${title}&body=Check out this blog post: https://www.blog.davidhalcampbell.com/${articleName}`}
					onClick={mailToManual}
					onTouchEnd={mailToManual}
					src={mailLink}
					alt='mail'></img>
				<img
					className='nav-icon'
					src={linkLink}
					alt='link'
					onClick={copyToClipboard}
					onTouchEnd={copyToClipboard}
				/>
			</div>
			<div className={`confirm-copy ${shareClass}`}>
				{" "}
				link copied to clipboard
			</div>
		</nav>
	);
};

export default ShareLinks;

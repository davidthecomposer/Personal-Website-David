import React from "react";
import "../../../Styles/Links.scss";
import commentLink from "../../../Images/ShareLinks/comment.png";
import facebookLink from "../../../Images/ShareLinks/facebook.png";
import twitterLink from "../../../Images/ShareLinks/twitter.png";
import mailLink from "../../../Images/ShareLinks/mail.png";
import linkLink from "../../../Images/ShareLinks/link.png";
// import { FacebookShareButton, TwitterShareButton } from "react-share";

const ShareLinks = ({ date, version, title, mainImage }) => {
	const url = `https://www.blog.davidhalcampbell.com/${version}`;
	const appID = "314644933107837";
	console.log(mainImage);
	const shareToFaceBook = async () => {
		try {
			await window.FB.ui(
				{
					display: "popup",
					app_id: appID,
					method: "feed",
					picture: `https://www.blog.davidhalcampbell.com${mainImage}`,
					description: title,
					link: url,
				},
				await function (response) {
					console.log(response);
				}
			);
		} catch (err) {
			console.log(err);
		}
	};

	const copyToClipboard = async () => {
		if (!navigator.clipboard) {
			// Clipboard API not available
			return;
		}

		try {
			await navigator.clipboard.writeText(url);
		} catch (err) {
			console.error("Failed to copy!", err);
		}
	};

	return (
		<nav className='article-links-top'>
			<h4 className='article-date'>{date}</h4>
			<div className='icons-container'>
				<img className='nav-icon' src={commentLink} alt='comment' />
				<img
					className='nav-icon'
					src={facebookLink}
					alt='share to facebook'
					onClick={shareToFaceBook}
				/>
				<img className='nav-icon' src={twitterLink} alt='twitter' />
				{/* <FacebookShareButton
					className='nav-icon-twitter'
					url={url}
					quote={title}>
					<img
						className='nav-icon'
						src={facebookLink}
						alt='share to facebook'
					/>
				</FacebookShareButton>
				<TwitterShareButton
					className='nav-icon-twitter'
					url={url}
					title={title}>
					<img className='nav-icon' src={twitterLink} alt='twitter' />
				</TwitterShareButton> */}
				<a
					href={`mailto:?body=Check out this blog post: ${url}&subject=${title}`}
					target='_top'>
					<img className='nav-icon' src={mailLink} alt='mail' />
				</a>
				<img
					className='nav-icon'
					src={linkLink}
					alt='link'
					onClick={copyToClipboard}
				/>
			</div>
		</nav>
	);
};

export default ShareLinks;

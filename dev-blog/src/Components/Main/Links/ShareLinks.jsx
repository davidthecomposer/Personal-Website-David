import React from "react";
import "../../../Styles/Links.scss";
import commentLink from "../../../Images/ShareLinks/comment.png";
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

const ShareLinks = ({ date, version, title, mainImage }) => {
	const appID = "314644933107837";

	const copyToClipboard = async () => {
		if (!navigator.clipboard) {
			// Clipboard API not available
			return;
		}

		try {
			await navigator.clipboard.writeText(
				`https://www.blog.davidhalcampbell.com/${version}`
			);
		} catch (err) {
			console.error("Failed to copy!", err);
		}
	};

	return (
		<nav className='article-links-top'>
			<Meta version={version} title={title} mainImage={mainImage} />
			<h4 className='article-date'>{date}</h4>
			<div className='icons-container'>
				<img className='nav-icon' src={commentLink} alt='comment' />
				<RedditShareButton
					className='nav-icon-twitter'
					url={`https://www.blog.davidhalcampbell.com/${version}`}
					title={title}>
					<img className='nav-icon' src={redditIcon} alt='reddit' />
				</RedditShareButton>
				<FacebookShareButton
					className='nav-icon-twitter'
					url={`https://www.blog.davidhalcampbell.com/${version}`}
					quote={title}>
					<img
						className='nav-icon'
						src={facebookLink}
						alt='share to facebook'
					/>
				</FacebookShareButton>
				<TwitterShareButton
					className='nav-icon-twitter'
					url={`https://www.blog.davidhalcampbell.com/${version}`}
					title={title}>
					<img className='nav-icon' src={twitterLink} alt='twitter' />
				</TwitterShareButton>
				<a
					href={`mailto:?body=Check out this blog post: https://www.blog.davidhalcampbell.com/${version}&subject=${title}`}
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

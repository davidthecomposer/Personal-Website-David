import React from "react";
import ShareLinks from "../Links/ShareLinks";
import davidSigBlack from "../../../Images/ArticleImages/david-sig-black-shadow.png";
import davidSigWhite from "../../../Images/ArticleImages/david-sig-white-shadow.png";
import SocialMediaIcons from "./SocialMediaIcons";
import "../../../Styles/ArticleEnding.scss";

const ArticleEnding = ({
	articleName,
	title,
	mainImage,
	synopsis,
	commentNumber,
	modeSwitch,
}) => {
	return (
		<div className='article-ending'>
			<div className='subscribe-column'>
				<div className='goodbye-message'>
					Thanks for reading!
					<p className='italic smaller-text'>
						Please feel free to connect with me at any of the links below or
						scroll all the way down to the bottom to add your email to my
						mailing list or send me an email through the contact links. Comments
						are always welcome from relatively sentient humans or AI.
					</p>
				</div>

				<img
					src={modeSwitch === "dark" ? davidSigWhite : davidSigBlack}
					alt='david campbell signature'
					className='david-sig'
				/>
				<div className='my-sites'>
					<a
						href='https://www.music.davidhalcampbell.com'
						className='site-links'>
						Composer
					</a>
					<a
						href='https://www.developer.davidhalcampbell.com'
						className='site-links'>
						Developer
					</a>
				</div>
				<div className='icons-underline'>
					<SocialMediaIcons />
				</div>
			</div>
			<ShareLinks
				articleName={articleName}
				title={title}
				mainImage={mainImage}
				synopsis={synopsis}
				commentNumber={commentNumber}
				topOrBottom={"bottom"}
			/>
		</div>
	);
};

export default ArticleEnding;

import React, { useState, useEffect } from "react";
import "../../Styles/Comments/Profile.scss";
import blueProfile from "../../Images/Comments/blue_headshot.svg";
import greenProfile from "../../Images/Comments/green_headshot.svg";
import purpleProfile from "../../Images/Comments/purple_headshot.svg";
import redProfile from "../../Images/Comments/red_headshot.svg";
import tealProfile from "../../Images/Comments/teal_headshot.svg";
import yellowProfile from "../../Images/Comments/yellow_headshot.svg";

const Profile = ({ comment: { profileImage, name } }) => {
	const [profileImageState, setProfileImageState] = useState("");

	useEffect(() => {
		switch (profileImage) {
			case "blueProfile":
				setProfileImageState(blueProfile);
				break;
			case "greenProfile":
				setProfileImageState(greenProfile);
				break;
			case "purpleProfile":
				setProfileImageState(purpleProfile);
				break;
			case "redProfile":
				setProfileImageState(redProfile);
				break;
			case "tealProfile":
				setProfileImageState(tealProfile);
				break;
			case "yellowProfile":
				setProfileImageState(yellowProfile);
				break;
			default:
				setProfileImageState(greenProfile);
		}
	}, [profileImage]);

	return (
		<div className='profile'>
			<img src={profileImageState} alt='profile' className='avatar' />
			<p className='comment-author'>{name}</p>
		</div>
	);
};

export default Profile;

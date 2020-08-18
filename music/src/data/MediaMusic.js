import flatLineImage from "../images/media-music-display/flatline.png";
import afterImage from "../images/media-music-display/after.png";
import forceOfNatureImage from "../images/media-music-display/force-of-nature.png";
import loveStoryImage from "../images/media-music-display/love-story.png";
import mischievousImage from "../images/media-music-display/mischievous.png";
import redemptionImage from "../images/media-music-display/redemption.png";
import rescueImage from "../images/media-music-display/rescue.png";
import starBrightImage from "../images/media-music-display/starflight-starbright.png";
import starLightImage from "../images/media-music-display/starlight-starflight.png";
import turningPointImage from "../images/media-music-display/turning-point.png";

import flatLineAudio from "../audio/media-music/FlatLine.wav";
import forceOfNatureAudio from "../audio/media-music/Force-of-Nature.wav";
import mischievousAudio from "../audio/media-music/mischievous.wav";
import loveStoryAudio from "../audio/media-music/Music-for-a-Love-Story.wav";
import afterAudio from "../audio/media-music/Post-Apocalyptic-Rock-Intro.wav";
import redemptionAudio from "../audio/media-music/Redemption.wav";
import rescueAudio from "../audio/media-music/Rescue.wav";
import starBrightAudio from "../audio/media-music/Starflight-Starbright.wav";
import starFlightAudio from "../audio/media-music/Starlight-Starflight.wav";
import turningPointAudio from "../audio/media-music/Turning-Point.wav";

const mediaMusic = [
	{
		title: "Flat-Line",
		audioName: flatLineAudio,
		imageSrc: flatLineImage,
		secondClass: "flatline",
	},
	{
		title: "Rescue",
		audioName: rescueAudio,
		imageSrc: rescueImage,
		secondClass: "rescue",
	},
	{
		title: "Mischievous Endeavors",
		audioName: mischievousAudio,
		imageSrc: mischievousImage,
		secondClass: "mischievous-endeavors",
	},
	{
		title: "Turning Point",
		audioName: turningPointAudio,
		imageSrc: turningPointImage,
		secondClass: "turning-point",
	},
	{
		title: "After",
		audioName: afterAudio,
		imageSrc: afterImage,
		secondClass: "after",
	},
	{
		title: "Redemption",
		audioName: redemptionAudio,
		imageSrc: redemptionImage,
		secondClass: "redemption",
	},
	{
		title: "StarLight, Star Flight",
		audioName: starFlightAudio,
		imageSrc: starLightImage,
		secondClass: "starlight-starflight",
	},
	{
		title: "Starflight, Starbright",
		audioName: starBrightAudio,
		imageSrc: starBrightImage,
		secondClass: "starflight-starbright",
	},
	{
		title: "Music for a Love Story",
		audioName: loveStoryAudio,
		imageSrc: loveStoryImage,
		secondClass: "music-for-a-love-story",
	},
	{
		title: "Force Of Nature",
		audioName: forceOfNatureAudio,
		imageSrc: forceOfNatureImage,
		secondClass: "force-of-nature",
	},
];

export default mediaMusic;

import flatLineNew from "../images/slideshow/slides/flatline-new.jpeg";
import composerInResidence from "../images/slideshow/slides/composer-in-residence.jpeg";
import operaConTempo from "../images/slideshow/slides/OperaConTempo.jpeg";
import songCycle from "../images/slideshow/slides/song-cycle.jpeg";

const slideData = [
	{
		image: flatLineNew,
		alt: "new piece: Flat-line",
		link: "#music-container",
		action: "play",
		findClass: ".flat-line",
	},
	{
		image: composerInResidence,
		alt: "Opera Con Tempo season events",
		link: "#news",
		action: "navigate",
	},
	{
		image: operaConTempo,
		alt: "David and Jennifer Campbell",
		href: "#news",
		action: "navigate",
	},
	{
		image: songCycle,
		alt: "David Campbell, Liz Christensen, Mandi Barrus",
		link: "#news",
		action: "navigate",
	},
];

export default slideData;

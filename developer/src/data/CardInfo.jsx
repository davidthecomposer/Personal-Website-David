import reactAudioPlayerImage from "../images/apps/react-audio-player.png";
import colorSelectorImage from "../images/apps/color-selector.png";
import davidWebsiteImage from "../images/apps/music-website.png";
import audioPlayerImage from "../images/apps/audio-player-1.png";
import calculatorImage from "../images/apps/calculator.png";
import commissionFormImage from "../images/apps/commission-form.png";
import digitalClockImage from "../images/apps/digital-clock.png";
import drumKitImage from "../images/apps/drum-kit.png";
import simonGameImage from "../images/apps/simon-game.png";
import slideShowImage from "../images/apps/slide-show-creator.png";
import tipCalculatorImage from "../images/apps/tip-calculator.png";
import toDoListImage from "../images/apps/to-do-list.png";
import videoPlayerImage from "../images/apps/video-player-1.png";
import newsLetterSignupImage from "../images/apps/newsletter-signup.png";
import comment_system from "../images/apps/comment_system.png";
import copernicusApp from "../images/apps/copernicus-app.png";
import copernicusAPI from "../images/apps/copernicus_API.jpeg";

const jsIcon = "devicon-javascript-plain code-icon";
const html5Icon = "devicon-html5-plain code-icon";
const cssIcon = "devicon-css3-plain code-icon";
const reactIcon = "devicon-react-plain code-icon";
const phpIcon = "devicon-php-plain code-icon";
const nodeJSIcon = "devicon-nodejs-plain code-icon";
const expressIcon = "devicon-express-original code-icon";
const mongoDBIcon = "devicon-mongodb-plain-wordmark code-icon";
const sassIcon = "devicon-sass-original code-icon";

const app = "Go To App";
const site = "Go To Site";

const appInfo = [
	{
		uniqueClassName: "copernicus-media",
		title: "Copernicus Album Player",
		image: copernicusApp,
		dataURL:
			"https://www.apps.davidhalcampbell.com/copernicus/build/index.html",
		icon1: mongoDBIcon,
		icon2: expressIcon,
		icon3: reactIcon,
		icon4: nodeJSIcon,
		icon5: sassIcon,
		descriptionP1:
			"I wanted a way to present some more information about some of the music that I had written. Then I started thinking about what features I might want in such an app and how it might be used for other types of projects. I started using SASS recently and so I tried to incorporate more css animations in this one. There is also a commenting system that plays user comments at the moment they are sent during a given song. I once again used the MERN stack to do this but this time I used the little API that I made previously to house the data for each song.",
		buttonText: app,
	},
	{
		uniqueClassName: "copernicus-API",
		title: "Copernicus Etudes API",
		image: copernicusAPI,
		dataURL:
			"https://cors-anywhere.herokuapp.com/https://copernicus-api.herokuapp.com/tracks",
		icon1: mongoDBIcon,
		icon2: expressIcon,
		icon3: nodeJSIcon,
		descriptionP1:
			"I thought it would be a good idea to understand how APIs are built using the backend tech that I have been learning. I used some information about some piano pieces I had written and built the routes to my little Copernicus API. I definitely wouldn't use an API to house this data normally, but I just wanted the experience of building a RESTful architecture. Clicking on the app link will execute a get call on the main route.",
		buttonText: app,
	},
	{
		uniqueClassName: "comment-system",
		title: "Comment System",
		image: comment_system,
		dataURL: "https://dhc-comment-system.herokuapp.com/",
		icon1: mongoDBIcon,
		icon2: expressIcon,
		icon3: reactIcon,
		icon4: nodeJSIcon,
		descriptionP1:
			" This is a comment system that would function best in a blog or personal page type setting. It features reply buttons and architecture, automatic comment tree population, the ability to hide comment threads or open them at any level, and (theoretically) infinite nesting of comments. I'm hoping to incorporate this with my own upcoming blog site, although I'll probably need to move from a free to paid mongoDB account at that time.",
		buttonText: app,
	},
	{
		uniqueClassName: "newsletter-signup",
		title: "Newsletter Sign-Up Form",
		image: newsLetterSignupImage,
		dataURL: "https://infinite-beach-71630.herokuapp.com/",
		icon1: html5Icon,
		icon2: cssIcon,
		icon3: nodeJSIcon,
		icon4: expressIcon,
		descriptionP1:
			"I made a quick newsletter sign-up form but this was also my first Node.js server setup with express and mailChimp. I can't host this on my normal bluehost account so I sent it over to Heroku for the node environment there. I'll probably update this in React and incorporate it with my blog projects that are in production. ",
		buttonText: app,
	},
	{
		uniqueClassName: "react-audio-player",
		title: "React Audio Player",
		image: reactAudioPlayerImage,
		dataURL:
			"https://www.apps.davidhalcampbell.com/audio-player-react/build/index.html",
		icon1: html5Icon,
		icon2: cssIcon,
		icon3: jsIcon,
		icon4: reactIcon,
		descriptionP1:
			"This is my first solo React project after a couple of guided attempts. It has all the same functionality of the original, but all attributes can now be updated from a central data.jsx file using props. Having seen the advantages of using React I am considering re-writing this site using React principles!",
		buttonText: app,
	},
	{
		uniqueClassName: "color-selector",
		title: "Color Selector",
		image: colorSelectorImage,
		dataURL: "https://www.apps.davidhalcampbell.com/colorSelector/index.html",
		icon1: html5Icon,
		icon2: cssIcon,
		icon3: jsIcon,
		descriptionP1: `This app allows the user to select a color or group of colors
        in various ways. All the different values are updated in
        real-time no matter which method is used for selection. The
        user can save the colors onto the color swatches on the right
        side.`,
		descriptionP2: `At the bottom right, there is a filterable list that shows
		several common value types for each color. Because of the
		nature of this app it is not available for mobile use at this
		time. I plan to make a mobile version at some point.`,
		buttonText: app,
	},
	{
		uniqueClassName: "music-website",
		title: "Music Website",
		image: davidWebsiteImage,
		dataURL: "https://www.music.davidhalcampbell.com",
		icon1: html5Icon,
		icon2: cssIcon,
		icon3: jsIcon,
		icon4: phpIcon,
		icon5: reactIcon,
		descriptionP1: `This is my personal music website. The main feature here is an
        expanded "Music" section that includes sortable music genre
        lists of my works, a playlist of media music, and score
        downloads
        There are blog, news, and contact sections as well. At the top
		of the page I used a version of the slideshow app to make a
		marquee that links to the news section.`,
		buttonText: site,
	},
	{
		uniqueClassName: "slide-show-creator",
		title: "Slideshow Creator",
		image: slideShowImage,
		dataURL:
			"https://www.apps.davidhalcampbell.com/customSlideShow/SlideShow Full/index.html",
		icon1: html5Icon,
		icon2: cssIcon,
		icon3: jsIcon,

		descriptionP1: `With this App a user can load their own pictures into the interface, edit the text content, size, transition styles and many other options and then print out the HTML, CSS, and JS code to make a streamlined version of the slideshow  that they have created. 
        The output uses OOP principles so that in theory multiple slideshows can be used on the same page.`,
		buttonText: app,
	},
	{
		uniqueClassName: "to-do-list",
		title: "To-Do List",
		image: toDoListImage,
		dataURL: "https://www.apps.davidhalcampbell.com/ToDo/index.html",
		icon1: html5Icon,
		icon2: cssIcon,
		icon3: jsIcon,
		descriptionP1: `
        The To-Do List app allows a user to write a number of tasks to
        accomplish. It also allows the user to add an accordion style
        longer note for each entry that can be recalled by clicking on
        the notes icon. A User can also set an alarm as desired. When
        the user has accomplished the task they can choose to
        highlight it or delete as desired.`,
		buttonText: app,
	},
	{
		uniqueClassName: "video-player-1",
		title: "Video Player",
		image: videoPlayerImage,
		dataURL:
			"https://www.apps.davidhalcampbell.com/customVideoPlayer/index.html",
		icon1: html5Icon,
		icon2: cssIcon,
		icon3: jsIcon,
		descriptionP1: `
        This video player has a bunch of custom features including:
		4-speed control, skip forward and back, user-controllable
       progress bar and button, restart, pause, play, time remaining
		and time elapsed, full-screen mode, attachable control panel,
		and "lights-off" dark mode.
    `,
		descriptionP2: `It was designed using OOP principles so it could theoretically
    be used in a modular fashion multiple times on the same page`,
		buttonText: app,
	},
	{
		uniqueClassName: "digital-clock",
		title: "Digital Clock",
		image: digitalClockImage,
		dataURL: "https://www.apps.davidhalcampbell.com/digitalClock/index.html",
		icon1: html5Icon,
		icon2: cssIcon,
		icon3: jsIcon,
		descriptionP1: `
        This is a simple digital clock. The interesting features are
		the animated analog clock face, the seasonal icons, and the
		time of day recognition. I have some plans to expand this by
		taking pictures for every hour of the day at a certain
		location, and adding an alarm functionality.`,
		buttonText: app,
	},
	{
		uniqueClassName: "audio-player-1",
		title: "Audio Player",
		image: audioPlayerImage,
		dataURL:
			"https://www.apps.davidhalcampbell.com/customVideoPlayer/index.html",
		icon1: html5Icon,
		icon2: cssIcon,
		icon3: jsIcon,
		descriptionP1: `
        The custom audio player has basic features. Play and pause
        buttons, a user-controllable progress bar, time updates, and a
        spot to add a cover. When the user hovers over the volume icon
        a volumes slider appears and remains until the user exits the
        element. on mobile the user would just have the option to mute
        the volume by pressing as volume control is generally found on
        the device.
    `,
		buttonText: app,
	},
	{
		uniqueClassName: "tip-calculator",
		title: "Tip Calculator",
		image: tipCalculatorImage,
		dataURL: "https://www.apps.davidhalcampbell.com/tipCalc/index.html",
		icon1: html5Icon,
		icon2: cssIcon,
		icon3: jsIcon,
		descriptionP1: `
        This is a fully functional tip calculator with a few extra
		design features. The first is that a user can input any 2
		fields and the other two will be computed. This can be useful
		in some real-life use cases. The second feature is that I have
		written some custom validations to disallow user input error.
		attempting to write anything other than a valid input will
		cause the entry to be deleted.
    `,
		buttonText: app,
	},
	{
		uniqueClassName: "commission-form",
		title: "Commission Form",
		image: commissionFormImage,
		dataURL: "https://www.apps.davidhalcampbell.com/commissionForm/index.html",
		icon1: html5Icon,
		icon2: cssIcon,
		icon3: jsIcon,
		descriptionP1: `
        Composers sometimes are asked to write custom music for events
		or performers. This is a small mockup of some information that
		would be useful to know when developing a price quote. I added
		some custom validation messages to make sure that users input
		the most important data. I might include some version of this
		on my website in the future`,
		buttonText: app,
	},

	{
		uniqueClassName: "drum-kit",
		title: "Drum Kit",
		image: drumKitImage,
		dataURL: "https://www.apps.davidhalcampbell.com/drumKit/index.html",
		icon1: html5Icon,
		icon2: cssIcon,
		icon3: jsIcon,
		descriptionP1: `
        This drum kit is the first project that I completed without
		completely following the guidelines given by Angela at App
		Brewery. about half way through the exercise I decided that I
		just wanted to try to find my own solutions. So technically
		this is more of a hybrid project. It's pretty basic. You touch
		a key and a drum sound and accompanying animation play.`,
		buttonText: app,
	},

	{
		uniqueClassName: "simon-game",
		title: "Simon Game",
		image: simonGameImage,
		dataURL: "https://www.apps.davidhalcampbell.com/simonGame/index.html",
		icon1: html5Icon,
		icon2: cssIcon,
		icon3: jsIcon,
		descriptionP1: `
        This project was the first guided project that I did entirely
		on my own. I did go back and check the answers throughout, but
		didn't cheat! It's a basic memory game like the game Simon.
		See how far you can get! I made it to about 30 on my best
		attempt. I might add a leader board section at some point in
		the future.`,
		buttonText: app,
	},
	{
		uniqueClassName: "calculator",
		title: "Basic Calculator",
		image: calculatorImage,
		dataURL:
			"https://www.apps.davidhalcampbell.com/customCalculator/index.html",
		icon1: html5Icon,
		icon2: cssIcon,
		icon3: jsIcon,
		descriptionP1: `
        This was my first completely solo project. I made a simple
		calculator with limited functionality. I was pretty proud of
		the fact that I was able to get the screen to light up when
		buttons were pressed. Not too much else going on here.`,
		buttonText: app,
	},
];

appInfo.forEach((item) => (item.key = appInfo.indexOf(item)));

export default appInfo;

 /* jshint esversion: 6 */


//  ----------------------- IMPORTS ------------------------- //

 import {composerQuotes} from './composer-quotes.js';
 import {blogTitleNames, blogPreviews} from './blog-pages/blog-titles.js';
 import {NavLinkMain} from './blog-pages/blogLink.js';
 import {SlideShow} from './modules/slideshow.js';
 import {AudioPlayer} from './modules/audio-player.js';
 import {SmallAudioPlayer} from './modules/small-audio-player.js';
 import {Musicsections} from './modules/music-section.js';
 import {NewsRow} from './modules/news-row.js';
 


 //  ---------------- HELPER FUNCTIONS  ------------------------  //

 const createAudioPlayers = () => {

   // Large Audio Players

   const audioPlayers = document.querySelectorAll('.audio-player');
   const playerNames = [...audioPlayers].map((player) => player.classList[1]);

   playerNames.forEach((name) => {
     let playerSpace = {};
     let player = `player${playerNames.indexOf(name) + 1}`;
     playerSpace[player] = new AudioPlayer(name);
     playerSpace[player].initEventHandlers();
   });

   //Small Audio players

   const smallAudioPlayers = document.querySelectorAll('.small-player');
   const smallPlayerNames = [...smallAudioPlayers].map((player) => player.classList[1]);

   smallPlayerNames.forEach((name) => {
     let playerSpace = {};
     let player = `smallPlayer${smallPlayerNames.indexOf(name) + 1}`;
     playerSpace[player] = new SmallAudioPlayer(name);
     playerSpace[player].initEventHandlers();
   });

 };


 const createNavRules = () => {

   const nav = document.querySelector('nav');
   const pageNav = nav.querySelectorAll('.header-tab');

   const handleTabLeave = (e) => {
     e.target.classList.add('retract');
   };

   pageNav.forEach((btn) => {
     btn.addEventListener('mouseout', handleTabLeave);
   });
 };


 const createNewsRows = () => {
   const newsRows = document.querySelectorAll('.news-row');
   const newsRowNames = [...newsRows].map((row) => row.classList[1]);

   newsRows.forEach((row) => {
     let newsSpace = {};
     let rowName = `${newsRowNames[newsRowNames.indexOf(row.classList[1])]}`;
     newsSpace[rowName] = new NewsRow(rowName);
     newsSpace[rowName].eventHandlersInit();
   });
 };


 const createBlogs = () => {
   const otherStories = document.querySelectorAll('.other-story');

   otherStories.forEach((story) => {
     let preview = document.querySelector('.blog-preview-window');
     preview.innerHTML =
       `<h1 class= 'preview-title'> Preview:</h1>
       ${blogPreviews[0]}`;
     let newSpace = {};
     let storyName = `${blogTitleNames[[...otherStories].indexOf(story)]}`;
     newSpace[storyName] = new NavLinkMain(storyName);
     newSpace[storyName].createNewLink();
     newSpace[storyName].eventListeners();
   });
 };


 const createSlideShow = () => {
   const firstShow = new SlideShow('one');
   firstShow.initHandlers();
 };


 const createMusicSections = () => {
   const musicSections = new Musicsections();
   musicSections.assignHandlers();
 };

 
 const composerQuoteChange = () => {
   const composerQuote = document.querySelector('.spotlight-text');
   const composerName = document.querySelector('.author-name');
   const allQuotes = Object.entries(composerQuotes);
   let randomNumber = Math.floor((Math.random() * allQuotes.length));

   composerQuote.innerHTML = allQuotes[randomNumber][1];
   composerName.innerHTML = `- ${allQuotes[randomNumber][0]}`;
 };


 //--------------------  ACTIVE FUNCTIONS ---------------------- //


 composerQuoteChange();
 createSlideShow();
 createMusicSections();
 createAudioPlayers();
 createNavRules();
 createNewsRows();
 createBlogs();








 /* -------------------------- To-Do ---------------------------- //
              

 Head shot of myself for Artist statement section
 Update Artist's statement
 Add all sound and pdf files and add player code

 Create blog pages and blog page architecture
 create at least one or two blog posts
 Security for contact form.
 research and fill in footer content as needed - add links! 
 
 General Design issues - style buttons, animations etc. 
 RESPONSIVE DESIGN
 STYLE ISSUES FOR DIFFERENT BROWSERS


 create front end project pages

 fix auto play feature issue {namespace?}
 
 players not showing time remaining on init
 
 
 */
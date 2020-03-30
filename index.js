 /* jshint esversion: 6 */


//  ----------------------- IMPORTS ------------------------- //

 import {composerQuotes} from './modules/composer-quotes.js';
 import {blogTitleNames, blogPreviews} from './blog-pages/blog-titles.js';
 import {NavLinkMain} from './blog-pages/blogLink.js';
 import {SlideShow} from './modules/slideshow.js';
 import {AudioPlayer} from './modules/audio-player.js';
 import {SmallAudioPlayer} from './modules/small-audio-player.js';
 import {Musicsections} from './modules/music-section.js';
 import {NewsRow} from './modules/news-row.js';
 import{allPlayersArray} from './modules/audio-helpers.js';


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
     allPlayersArray.playersArray.push(playerSpace[player]);
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

 const morphHeaderInit = () => {
  const isScrolled = () => {
    const body = document.querySelector('body');
  const headerTitle = document.querySelector('.header-title');
   let scrollPosition = body.getBoundingClientRect().top;
  
    if (scrollPosition !== 0) {
      headerTitle.classList.remove('header-full');
      headerTitle.classList.add('header-thin');

    } else {
      // header.classList.remove('header-thin');
      headerTitle.classList.add('header-full');
     
    }
  };
  
  window.addEventListener('scroll', isScrolled);
  
  };



//--------------------  ACTIVE FUNCTIONS ---------------------- //

createSlideShow();
 composerQuoteChange();
 
 createMusicSections();
 createAudioPlayers();
 createNavRules();
 createNewsRows();
 createBlogs();
 morphHeaderInit();
 



//  ----------------------- EXPORTS -------------------------------  //
export {allPlayersArray};





 /* -------------------------- To-Do ---------------------------- //
        


 Spotlight Section - 
    
    Add links? 
    Logic for making links automatically.

Artist's Statement: 
 Better Head SHot
 Update About Me -

 Music Sections -
 Decide on which pieces to try to render or parts
 create score samples from full .pdfs
 Add all sound and pdf files and add player code


 Blog -
 Update blog posts

 -Contact
 
 Make sure email hookup is correct.

 
 General Design issues - style buttons, animations etc. 
 RESPONSIVE DESIGN
 STYLE ISSUES FOR DIFFERENT BROWSERS

Go through each webpage set and look for inconsistencies. then write them down and fix them one by one:
First slide doesn't load fast enough

index.html

custom slider audio buttons not lined up correctly in Firefox or Edge (but small one works):
re-code using 
var bodyRect = document.body.getBoundingClientRect(),
get the position of the progressBar and make the starting position the same as that




frontend.html
submit button is different and should be uniform for all 3
header shrink not working in Edge.

musicblog.html

Edge Font of Title is nt working - change to PNG?
All images that embed fonts are not working well in Edge.
sidewas scroll color/custom not working in edge. (should I change to vertical scroll?
 
 
 devblog.html
 scrollbars not showing custom in edge and firefox
 Embedded fonts in pictures not working in Edge.
 
 
 */
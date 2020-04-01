 /* jshint esversion: 6 */


//  ----------------------- IMPORTS ------------------------- //

 import {composerQuoteChange} from './modules/composer-quotes.js';
 import {createBlogs} from './blog-pages/blogLink.js';
 import {createSlideShow} from './modules/slideshow.js';
 import {createAudioPlayers} from './modules/audio-player.js';
 import {createSmallAudioPlayers} from './modules/small-audio-player.js';
 import {createMusicSections} from './modules/music-section.js';
 import {createNewsRows} from './modules/news-row.js';
 import {allPlayersArray} from './modules/audio-helpers.js';
 import {morphHeaderInit} from './modules/morphHeaderInit.js';
 import {underlineGraphics} from './modules/graphics-helpers.js';
 
 //  ---------------- HELPER FUNCTIONS  ------------------------  //


 

 



//--------------------  ACTIVE FUNCTIONS ---------------------- //

createSlideShow();
composerQuoteChange();
createMusicSections();
createAudioPlayers();
createSmallAudioPlayers();
underlineGraphics();
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


 -Contact
 
 Make sure email hookup is correct.

 
 General Design issues - style buttons, animations etc. 
 RESPONSIVE DESIGN
 STYLE ISSUES FOR DIFFERENT BROWSERS

Go through each webpage set and look for inconsistencies. then write them down and fix them one by one:
First slide doesn't load fast enough

index.html


re-code using 

left instead of margin-left




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
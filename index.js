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

morphHeaderInit();
createSlideShow();
composerQuoteChange();
createMusicSections();
createAudioPlayers();
createSmallAudioPlayers();
underlineGraphics();
createNewsRows();
createBlogs();

 



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
improve small audio player

 -Contact
 
 Make sure email hookup is correct.

 
 General Design issues - style buttons, animations etc. 
 

frontend.html
submit button is different and should be uniform for all 3
header shrink not working in Edge.


 
 
 */
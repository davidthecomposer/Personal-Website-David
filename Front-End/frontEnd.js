/* jshint esversion: 6 */

import {createAllCards} from './modules/cards.js';
import {pageNavInit} from './modules/pageNavigation.js';
import {createBlogs} from './blog/modules/createDevBlogs.js';
import {morphHeaderInit} from './modules/morphHeader.js';



createAllCards();
pageNavInit();
createBlogs();
morphHeaderInit();



/* 

Edit card info and correct spelling or other errors
connect all links
RESPONSIVE DESIGN
 STYLE ISSUES FOR DIFFERENT BROWSERS
Write logic to determine header height and make css transitions depending on width of screen.

 
 Stretch: 

 Add comments that are stored on page
 Add captcha or other element to stop spammers


*/
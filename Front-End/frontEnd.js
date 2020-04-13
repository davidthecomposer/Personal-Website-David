/* jshint esversion: 6 */

import {createAllCards} from './modules/cards.js';
import {underlineGraphics} from './modules/graphic-helpers.js';
import {createBlogs} from './dev-blog/modules/createDevBlogs.js';
import {morphHeaderInit} from './modules/morphHeader.js';



createAllCards();
underlineGraphics();
createBlogs();
morphHeaderInit();



/* 

Edit card info and correct spelling or other errors

Edit all Apps - clean code if needed. Make responsive if feasible. 
 


 
 Stretch: 

 Add comments that are stored on page
 Add captcha or other element to stop spammers


*/
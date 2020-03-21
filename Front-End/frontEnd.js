/* jshint esversion: 6 */

import {Card, createAllCards} from './modules/cards.js';
import {pageNavInit} from './modules/pageNavigation.js';
import {createBlogs} from './blog/modules/createDevBlogs.js';


const morphHeaderInit = () => {
    const isScrolled = (event) => {
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

createAllCards();
pageNavInit();
createBlogs();
morphHeaderInit();



/* 

Edit card info and correct spelling or other errors
connect all links
RESPONSIVE DESIGN
 STYLE ISSUES FOR DIFFERENT BROWSERS
Write out all 3 blog posts.

 
 Stretch: 

 Add comments that are stored on page
 Add captcha or other element to stop spammers


*/
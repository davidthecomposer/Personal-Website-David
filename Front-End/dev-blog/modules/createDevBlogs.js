/* jshint esversion: 6 */
import {blogPreviews, blogTitleNames} from './dev-blog-titles.js';
import {NavLinkMain} from './devblogLink.js';

export const createBlogs = () => {
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

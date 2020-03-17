/* jshint esversion: 8 */
import {blogTitleNames, blogTitleWords, blogPreviews} from './dev-blog-titles.js';

export class NavLink {
    constructor(name) {
        this.articleList = document.querySelector('.article-list');
        this.name = name;
    }
    
    createNewLink() {
       let blogLink = document.createElement('a');
       blogLink.classList.add('nav-link');
       blogLink.setAttribute('href', `/David Campbell Website/Front-End/blog/dev-html-pages/${this.name}.html`);
       blogLink.innerHTML = 
       `<div class="article-card home">
       <img class="nav-image" src="/David Campbell Website/images/dev-blog/${this.name}.svg" alt="">
       <h1 class="nav-title">${blogTitleWords[blogTitleNames.indexOf(this.name)]} </h1>
         </div>`;

         this.articleList.appendChild(blogLink);
    }
}


// BLOG LINK OBJECT FOR MUSIC HOME PAGE. 
export class NavLinkMain {
    constructor(name) {
        this.blogRowTwo = document.querySelector('.blog-row-two');
        this.otherStories = document.querySelectorAll('.other-story');
        this.story = this.otherStories[blogTitleNames.indexOf(name)];
        this.index = blogTitleNames.indexOf(name);
        this.mainStory = document.querySelector('.main-story');
        this.name = name;
    }
    

    handlePreview(event) {
        let preview = document.querySelector('.blog-preview-window');
        preview.innerHTML = 
        `<h1 class= 'preview-title'> Preview:</h1>
        ${blogPreviews[this.index]}`;
    }

    createNewLink() {
        let otherStories = document.querySelectorAll('.other-story');
       let blogLink = document.createElement('a');
       blogLink.classList.add('nav-link');
       blogLink.setAttribute('href', `/David Campbell Website/Front-end/blog/dev-html-pages/${this.name}.html`);
       blogLink.innerHTML = 
       `
       <img class="nav-image" src="/David Campbell Website/images/dev-blog/${this.name}.svg" alt="">
       <h1 class="nav-title">${blogTitleWords[this.index]} </h1>
         </div>`;

         otherStories[blogTitleNames.indexOf(this.name)].appendChild(blogLink);
    }

    eventListeners() {
        
        this.story.onmouseenter = () => this.handlePreview(event);
    }


 }

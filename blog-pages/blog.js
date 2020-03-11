/* jshint esversion: 8 */

/*
Navigation to home page
Make logic to auto-populate stories on right side

comment section option with Database setup (Need to learn this!)


*/

// Add opus[i].svg, add opus[i].html, and fill in blogTitles entry
const blogTitles = {
    'opus1': 'Welcome To My Music Blog',
    'opus2': 'Opera Contempo - Beginnings',
    'opus3': 'Song Cycle Musings',
};

let blogTitleNames = Object.keys(blogTitles);
let blogTitleWords = Object.values(blogTitles);

class NavLink {
    constructor(name) {
        this.articleList = document.querySelector('.article-list');
        this.name = name;
    }
    
    createNewLink() {
       let blogLink = document.createElement('a');
       blogLink.classList.add('nav-link');
       blogLink.setAttribute('href', `/David Campbell Website/blog-pages/html-pages/${this.name}.html`);
       blogLink.innerHTML = 
       `<div class="article-card home">
       <img class="nav-image" src="/David Campbell Website/images/blog/${this.name}.svg" alt="">
       <h1 class="nav-title">${blogTitleWords[blogTitleNames.indexOf(this.name)]} </h1>
         </div>`;

         this.articleList.appendChild(blogLink);
    }
}


blogTitleNames.forEach((name) => {
    
    let nameSpace = {};
    nameSpace[name] = new NavLink(name);
    nameSpace[name].createNewLink();
});

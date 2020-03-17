/* jshint esversion: 8 */


// Add opus[i].svg, add opus[i].html, and fill in blogTitles entry
//Add new blog info at top
 const blogTitles = {


    'version02': 'version 0.2 -  Dev Article 3',
    'version01': 'version 0.1 - Dev Article 2',
    'version00': 'version 0.0 - My Development Journey',
    
};


const blogPreviews = [
    'Stuff about Article 3',
    'Stuff about Article 2',
    'Stuff about Article 1',

];

let blogTitleNames = Object.keys(blogTitles);
let blogTitleWords = Object.values(blogTitles);

export {blogTitleNames, blogTitleWords, blogPreviews};
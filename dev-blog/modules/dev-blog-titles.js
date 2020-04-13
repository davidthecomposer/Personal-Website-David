/* jshint esversion: 8 */


// Add opus[i].svg, add opus[i].html, and fill in blogTitles entry
//Add new blog info at top
 const blogTitles = {


    'version02': 'Version 0.2 -  Validation and Security',
    'version01': 'Version 0.1 - JS - Gobal this and namespaces',
    'version00': 'Version 0.0 - My Development Journey',
    
};


const blogPreviews = [
    'What I\'ve learned about form validation and security',
    'An interesting problem that I encountered using this and how I was able to resolve it',
    'Why I\'m learning development, why waste my time writing about it at this point?, and what I have been up to so far',

];

let blogTitleNames = Object.keys(blogTitles);
let blogTitleWords = Object.values(blogTitles);

export {blogTitleNames, blogTitleWords, blogPreviews};
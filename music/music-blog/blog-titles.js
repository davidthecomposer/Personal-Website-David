/* jshint esversion: 8 */


// Add opus[i].svg, add opus[i].html, and fill in blogTitles entry
//Add new blog info at top
 const blogTitles = {


    'opus3': 'Op. 3 -  Song Cycle: Early Stages',
    'opus2': 'Op. 2 - Opera Contempo Beginnings',
    'opus1': 'Op. 1 - What Is Note-Worthy?',
    
};


const blogPreviews = [
    'Wherein I talk about the process of starting a song cycle. Some ways to generate ideas, working with the text, thoughts about this current project.',
    'Working with the Opera Company, The new Opera, Sneak peak of the Libretto!',
    'An Introduction to my new blog and some really bad early music that I wrote. Not to be missed! '

]

let blogTitleNames = Object.keys(blogTitles);
let blogTitleWords = Object.values(blogTitles);

export {blogTitleNames, blogTitleWords, blogPreviews};
/* jshint esversion: 8 */

/* TO DO OPTIONS:
comment section option with Database setup (Need to learn this!)
*/

//IMPORTS
import {blogTitleNames} from './modules/dev-blog-titles.js';
import {NavLink} from './modules/devblogLink.js';

// Creates instances of blogLink Object
blogTitleNames.forEach((name) => {
    let nameSpace = {};
    nameSpace[name] = new NavLink(name);
    nameSpace[name].createNewLink();
});

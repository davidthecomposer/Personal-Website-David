(this.webpackJsonpdeveloper=this.webpackJsonpdeveloper||[]).push([[0],[,,,,,,,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/white-hamburger-icon.5b755fde.svg"},function(e,t,a){e.exports=a.p+"static/media/react-audio-player.1a1676c5.png"},function(e,t,a){e.exports=a.p+"static/media/color-selector.d1dc0130.png"},function(e,t,a){e.exports=a.p+"static/media/music-website.7b6d116d.png"},function(e,t,a){e.exports=a.p+"static/media/audio-player-1.4fb9c3e7.png"},function(e,t,a){e.exports=a.p+"static/media/calculator.ee8a50c0.png"},function(e,t,a){e.exports=a.p+"static/media/commission-form.b842cf51.png"},function(e,t,a){e.exports=a.p+"static/media/digital-clock.5197f0a8.png"},function(e,t,a){e.exports=a.p+"static/media/drum-kit.276bb163.png"},function(e,t,a){e.exports=a.p+"static/media/simon-game.fc80b26b.png"},function(e,t,a){e.exports=a.p+"static/media/slide-show-creator.5bba7356.png"},function(e,t,a){e.exports=a.p+"static/media/tip-calculator.3124ed9e.png"},function(e,t,a){e.exports=a.p+"static/media/to-do-list.4da49de4.png"},function(e,t,a){e.exports=a.p+"static/media/video-player-1.73e5329b.png"},,function(e,t,a){e.exports=a.p+"static/media/david-sig-white-shadow.edd02e4f.png"},function(e,t,a){e.exports=a.p+"static/media/github.4ebb6be8.svg"},function(e,t,a){e.exports=a.p+"static/media/facebook.7f93a05a.svg"},function(e,t,a){e.exports=a.p+"static/media/instagram.a88907b5.svg"},function(e,t,a){e.exports=a.p+"static/media/twitter.34ecc7a1.svg"},function(e,t,a){e.exports=a(43)},function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);a(30);var n=a(0),s=a.n(n),i=a(8),o=a.n(i),r=a(1),l=a(2),c=a(4),m=a(3),d=(a(35),a(36),function(e){return s.a.createElement("nav",{className:"nav-link-group"},s.a.createElement("div",{className:"nav-link-underline"},s.a.createElement("a",{className:"nav-link-text",href:"#home"},"Home"),s.a.createElement("div",{className:"underline"})),s.a.createElement("h3",{className:"divider"},"|"),s.a.createElement("div",{className:"nav-link-underline"},s.a.createElement("a",{className:"nav-link-text",href:"#contact"},"Contact"),s.a.createElement("div",{className:"underline"})))}),u=a(9),p=a.n(u),h=(a(37),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"dropdown-container"},s.a.createElement("img",{src:p.a,alt:"white menu icon",className:"hamburger-menu",onClick:this.props.slideMenu}),s.a.createElement("div",{className:"dropdown-content ".concat(this.props.dropDownClass)},s.a.createElement("div",{className:"dropdown-link-group"},s.a.createElement("div",{className:"dropdown-tabs-section drop"},s.a.createElement("a",{className:"dropdown-text",href:"#home"},"Home"),s.a.createElement("div",{className:"underline"})),s.a.createElement("div",{className:"dropdown-tabs-section drop"},s.a.createElement("a",{className:"dropdown-text",href:"#contact"},"Contact"),s.a.createElement("div",{className:"underline"})))))}}]),a}(s.a.Component)),f=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){window.addEventListener("scroll",n.isScrolled),window.onresize=function(){return n.isScrolled()}},n.isScrolled=function(){var e=document.querySelector("body"),t=window.innerWidth,a=e.getBoundingClientRect().top;"drop-menu"===n.state.dropDownClass&&n.setState({dropDownClass:"raise-menu"}),t<=700?0!==a?n.setState({headerClass:"header-thin1",displayClass:"no-display"}):n.setState({headerClass:"header-full2"}):t<=950?0!==a?n.setState({headerClass:"header-thin"}):n.setState({headerClass:"header-full1"}):0!==a?n.setState({headerClass:"header-thin"}):n.setState({headerClass:"header-full"})},n.slideMenu=function(){return"drop-menu"===n.state.dropDownClass?n.setState({dropDownClass:"raise-menu"}):n.setState({dropDownClass:"drop-menu"})},n.state={headerClass:"",dropDownClass:"",displayClass:""},n}return Object(l.a)(a,[{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return s.a.createElement("header",null,s.a.createElement("div",{className:"header-title ".concat(this.state.headerClass)}),s.a.createElement(h,{dropDownClass:this.state.dropDownClass,slideMenu:this.slideMenu}),s.a.createElement(d,{displayClass:this.state.displayClass}))}}]),a}(s.a.Component),g=(a(38),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).flipCard=function(e){if(e.target!==n.navigationButton.current)return"is-flipped"===n.state.isFlipped?n.setState({isFlipped:""}):n.setState({isFlipped:"is-flipped"})},n.linkNavigation=function(){window.open(n.props.dataURL,"_blank")},n.state={isFlipped:""},n.navigationButton=s.a.createRef(),n}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"scene ".concat(this.props.uniqueClass)},s.a.createElement("div",{className:"card ".concat(this.state.isFlipped),onClick:this.flipCard},s.a.createElement("div",{className:"panel-container front"},s.a.createElement("h1",{className:"panel-title"},this.props.title),s.a.createElement("div",{className:"panel-picture",style:{backgroundImage:"url(".concat(this.props.image,")")}}),s.a.createElement("div",{className:"panel-stats"},s.a.createElement("div",{className:"stats-left"},s.a.createElement("i",{className:this.props.icon1}),s.a.createElement("i",{className:this.props.icon2})),s.a.createElement("button",{className:"navigate","data-url":this.props.dataURL,ref:this.navigationButton,onClick:this.linkNavigation},this.props.buttonText),s.a.createElement("div",{className:"stats-right"},s.a.createElement("i",{className:this.props.icon3}),s.a.createElement("i",{className:this.props.icon4})))),s.a.createElement("div",{className:"panel-container back"},s.a.createElement("h1",{className:"panel-title"},this.props.title),s.a.createElement("div",{className:"panel-description"},s.a.createElement("p",null,this.props.descriptionP1),s.a.createElement("p",null,this.props.descriptionP2)," "))))}}]),a}(s.a.Component)),b=a(10),v=a.n(b),w=a(11),y=a.n(w),E=a(12),C=a.n(E),N=a(13),k=a.n(N),x=a(14),S=a.n(x),T=a(15),j=a.n(T),O=a(16),P=a.n(O),M=a(17),I=a.n(M),R=a(18),q=a.n(R),L=a(19),A=a.n(L),D=a(20),U=a.n(D),F=a(21),z=a.n(F),B=a(22),W=a.n(B),Z="devicon-javascript-plain code-icon",H="devicon-html5-plain code-icon",G="devicon-css3-plain code-icon",$="Go To App",_=[{uniqueClassName:"react-audio-player",title:"React Audio Player",image:v.a,dataURL:"https://www.apps.davidhalcampbell.com/audio-player-react/build/index.html",icon1:H,icon2:G,icon3:Z,icon4:"devicon-react-plain code-icon",descriptionP1:"This is my first solo React project after a couple of guided attempts. It has all the same functionality of the original, but all attributes can now be updated from a central data.jsx file using props. Having seen the advantages of using React I am considering re-writing this site using React principles!",buttonText:$},{uniqueClassName:"color-selector",title:"Color Selector",image:y.a,dataURL:"https://www.apps.davidhalcampbell.com/audio-player-react/build/index.html",icon1:H,icon2:G,icon3:Z,descriptionP1:"This app allows the user to select a color or group of colors\n        in various ways. All the different values are updated in\n        real-time no matter which method is used for selection. The\n        user can save the colors onto the color swatches on the right\n        side.",descriptionP2:"At the bottom right, there is a filterable list that shows\n\t\tseveral common value types for each color. Because of the\n\t\tnature of this app it is not available for mobile use at this\n\t\ttime. I plan to make a mobile version at some point.",buttonText:$},{uniqueClassName:"music-website",title:"Music Website",image:C.a,dataURL:"https://www.music.davidhalcampbell.com",icon1:H,icon2:G,icon3:Z,icon4:"devicon-php-plain code-icon",descriptionP1:'This is my personal music website. The main feature here is an\n        expanded "Music" section that includes sortable music genre\n        lists of my works, a playlist of media music, and score\n        downloads\n        There are blog, news, and contact sections as well. At the top\n\t\tof the page I used a version of the slideshow app to make a\n\t\tmarquee that links to the news section.',buttonText:"Go To Site"},{uniqueClassName:"slide-show-creator",title:"Slideshow Creator",image:A.a,dataURL:"https://www.apps.davidhalcampbell.com/customSlideShow/SlideShow Full/index.html",icon1:H,icon2:G,icon3:Z,descriptionP1:"With this App a user can load their own pictures into the interface, edit the text content, size, transition styles and many other options and then print out the HTML, CSS, and JS code to make a streamlined version of the slideshow  that they have created. \n        The output uses OOP principles so that in theory multiple slideshows can be used on the same page.",buttonText:$},{uniqueClassName:"to-do-list",title:"To-Do List",image:z.a,dataURL:"https://www.apps.davidhalcampbell.com/ToDo/index.html",icon1:H,icon2:G,icon3:Z,descriptionP1:"\n        The To-Do List app allows a user to write a number of tasks to\n        accomplish. It also allows the user to add an accordion style\n        longer note for each entry that can be recalled by clicking on\n        the notes icon. A User can also set an alarm as desired. When\n        the user has accomplished the task they can choose to\n        highlight it or delete as desired.\n    </p>",buttonText:$},{uniqueClassName:"video-player-1",title:"Video Player",image:W.a,dataURL:"https://www.apps.davidhalcampbell.com/customVideoPlayer/index.html",icon1:H,icon2:G,icon3:Z,descriptionP1:'\n        This video player has a bunch of custom features including:\n\t\t4-speed control, skip forward and back, user-controllable\n       progress bar and button, restart, pause, play, time remaining\n\t\tand time elapsed, full-screen mode, attachable control panel,\n\t\tand "lights-off" dark mode.\n    ',descriptionP2:"It was designed using OOP principles so it could theoretically\n    be used in a modular fashion multiple times on the same page",buttonText:$},{uniqueClassName:"digital-clock",title:"Digital Clock",image:P.a,dataURL:"https://www.apps.davidhalcampbell.com/digitalClock/index.html",icon1:H,icon2:G,icon3:Z,descriptionP1:"\n        This is a simple digital clock. The interesting features are\n\t\tthe animated analog clock face, the seasonal icons, and the\n\t\ttime of day recognition. I have some plans to expand this by\n\t\ttaking pictures for every hour of the day at a certain\n\t\tlocation, and adding an alarm functionality.",buttonText:$},{uniqueClassName:"audio-player-1",title:"Audio Player",image:k.a,dataURL:"https://www.apps.davidhalcampbell.com/customVideoPlayer/index.html",icon1:H,icon2:G,icon3:Z,descriptionP1:"\n        The custom audio player has basic features. Play and pause\n        buttons, a user-controllable progress bar, time updates, and a\n        spot to add a cover. When the user hovers over the volume icon\n        a volumes slider appears and remains until the user exits the\n        element. on mobile the user would just have the option to mute\n        the volume by pressing as volume control is generally found on\n        the device.\n    ",buttonText:$},{uniqueClassName:"tip-calculator",title:"Tip Calculator",image:U.a,dataURL:"https://www.apps.davidhalcampbell.com/tipCalc/index.html",icon1:H,icon2:G,icon3:Z,descriptionP1:"\n        This is a fully functional tip calculator with a few extra\n\t\tdesign features. The first is that a user can input any 2\n\t\tfields and the other two will be computed. This can be useful\n\t\tin some real-life use cases. The second feature is that I have\n\t\twritten some custom validations to disallow user input error.\n\t\tattempting to write anything other than a valid input will\n\t\tcause the entry to be deleted.\n    ",buttonText:$},{uniqueClassName:"commission-form",title:"Commission Form",image:j.a,dataURL:"https://www.apps.davidhalcampbell.com/commissionForm/index.html",icon1:H,icon2:G,icon3:Z,descriptionP1:"\n        Composers sometimes are asked to write custom music for events\n\t\tor performers. This is a small mockup of some information that\n\t\twould be useful to know when developing a price quote. I added\n\t\tsome custom validation messages to make sure that users input\n\t\tthe most important data. I might include some version of this\n\t\ton my website in the future",buttonText:$},{uniqueClassName:"drum-kit",title:"Drum Kit",image:I.a,dataURL:"https://www.apps.davidhalcampbell.com/drumKit/index.html",icon1:H,icon2:G,icon3:Z,descriptionP1:"\n        This drum kit is the first project that I completed without\n\t\tcompletely following the guidelines given by Angela at App\n\t\tBrewery. about half way through the exercise I decided that I\n\t\tjust wanted to try to find my own solutions. So technically\n\t\tthis is more of a hybrid project. It's pretty basic. You touch\n\t\ta key and a drum sound and accompanying animation play.",buttonText:$},{uniqueClassName:"simon-game",title:"Simon Game",image:q.a,dataURL:"https://www.apps.davidhalcampbell.com/simonGame/index.html",icon1:H,icon2:G,icon3:Z,descriptionP1:"\n        This project was the first guided project that I did entirely\n\t\ton my own. I did go back and check the answers throughout, but\n\t\tdidn't cheat! It's a basic memory game like the game Simon.\n\t\tSee how far you can get! I made it to about 30 on my best\n\t\tattempt. I might add a leader board section at some point in\n\t\tthe future.",buttonText:$},{uniqueClassName:"calculator",title:"Basic Calculator",image:S.a,dataURL:"https://www.apps.davidhalcampbell.com/customCalculator/index.html",icon1:H,icon2:G,icon3:Z,descriptionP1:"\n        This was my first completely solo project. I made a simple\n\t\tcalculator with limited functionality. I was pretty proud of\n\t\tthe fact that I was able to get the screen to light up when\n\t\tbuttons were pressed. Not too much else going on here.",buttonText:$}];_.forEach((function(e){return e.key=_.indexOf(e)}));var J=_,K=(a(39),function(e){var t=J.map((function(e){return s.a.createElement(g,{uniqueClass:e.uniqueClassName,title:e.title,image:e.image,dataURL:e.dataURL,icon1:e.icon1,icon2:e.icon2,icon3:e.icon3,icon4:e.icon4,descriptionP1:e.descriptionP1,descriptionP2:e.descriptionP2,key:e.key,buttonText:e.buttonText})}));return s.a.createElement("div",{className:"apps"},t)}),V=(a(7),a(40),a(5)),Y=a.n(V),Q=a(23),X=function(e){return s.a.createElement("div",{className:"user-name"},s.a.createElement("label",{htmlFor:"user-name",className:"form-labels"}," ","Name:"," "),s.a.createElement("input",{type:"text",name:"user-name",id:"user-name",onChange:e.handleChange,value:e.nameText}))},ee=function(e){return s.a.createElement("div",{className:"user-email"},s.a.createElement("label",{htmlFor:"user-email",className:"form-labels"}," ","E-mail:"," "),s.a.createElement("input",{type:"text",name:"user-email",id:"user-email",onChange:e.handleChange,value:e.emailText}))},te=function(e){return s.a.createElement("div",{className:"user-message"},s.a.createElement("label",{htmlFor:"email-content",className:"form-labels-message"}," ","Message:"," "),s.a.createElement("textarea",{name:"email-content",id:"email-content",rows:"10",cols:"80",onChange:e.handleChange,value:e.messageText}))},ae=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={name:"",email:"",userMessage:"",errorMessage:"",errorClass:""},e.handleChange=function(t){switch(e.setState({errorMessage:"",errorClass:""}),t.target.name){case"user-name":e.setState({name:t.target.value});break;case"user-email":e.setState({email:t.target.value});break;case"email-content":e.setState({userMessage:t.target.value})}},e.validateFormData=function(t,a,n){return e.setState({errorClass:"fail"}),!1===/^[a-zA-Z0-9 ][a-zA-Z0-9_ ]{2,29}$/.test(t)?(e.setState({errorMessage:"Names should be between 3 and 30 characters long and not have special characters"}),!1):!1===/^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+(?:[a-zA-Z]{2}|aero|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel)$/.test(a)?(e.setState({errorMessage:"Please use a valid e-mail address"}),!1):""!==n||(e.setState({errorMessage:"Please add a message before submitting"}),!1)},e.handleSentEmailMessage=function(t){t.ok?(e.setState({errorClass:"success",errorMessage:"Message Sent. Thanks!",name:"",email:"",userMessage:""}),setTimeout((function(){return e.setState({errorMessage:""})}),3e3)):e.setState({errorMessage:"Mail Not Sent. If you are sure there are no errors please submit again"})},e.handleRequest=function(){var t=Object(Q.a)(Y.a.mark((function t(a){var n;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/form-to-email.php",{method:"POST",body:a});case 2:n=t.sent,e.handleSentEmailMessage(n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.name,s=a.email,i=a.userMessage,o=new FormData;o.append("name",n),o.append("email",s),o.append("userMessage",i),e.validateFormData(n,s,i),!0===e.validateFormData(n,s,i)&&e.handleRequest(o)},e}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("form",{className:"contact-form",method:"POST",onSubmit:this.handleSubmit},s.a.createElement("div",{className:"form-row"},s.a.createElement(X,{handleChange:this.handleChange,nameText:this.state.name}),s.a.createElement(ee,{handleChange:this.handleChange,emailText:this.state.email})),s.a.createElement("div",{className:"error-message ".concat(this.state.errorClass)},this.state.errorMessage),s.a.createElement(te,{handleChange:this.handleChange,messageText:this.state.userMessage}),s.a.createElement("input",{type:"submit",className:"email-submit",value:"Submit"}))}}]),a}(s.a.Component),ne=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={name:"",email:"",message:""},e}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("section",{className:"contact anchor",id:"contact"},s.a.createElement("h2",{className:"section-title"},"Contact"),s.a.createElement("div",{className:"contact-body"},s.a.createElement("p",null,"Send me an email with any questions or requests using the form below."),s.a.createElement(ae,null)))}}]),a}(s.a.Component),se=(a(42),a(24)),ie=a.n(se),oe=a(25),re=a.n(oe),le=a(26),ce=a.n(le),me=a(27),de=a.n(me),ue=a(28),pe=a.n(ue),he=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("footer",null,s.a.createElement("div",{className:"by-me"},s.a.createElement("p",null,"A"),s.a.createElement("a",{href:"https://www.davidhalcampbell.com"},s.a.createElement("img",{className:"signature",src:ie.a,alt:"David Campbell Signature"})),s.a.createElement("p",null,"Website")),s.a.createElement("div",{className:"nav-icons-footer"},s.a.createElement("img",{src:re.a,alt:"github link",className:"footer-icons"}),s.a.createElement("img",{src:ce.a,alt:"facebook link",className:"footer-icons"}),s.a.createElement("img",{src:de.a,alt:"instagram link",className:"footer-icons"}),s.a.createElement("img",{src:pe.a,alt:"twitter link",className:"footer-icons"})))}}]),a}(s.a.Component),fe=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(f,null),s.a.createElement("div",{className:"intro anchor",id:"home"},"Welcome to a collection of snapshots from my front-end development journey. Below are all the apps and projects that I have built on my own (with copious amounts of googling at times). Some are simple, some are more complex, and some are better than others, but they are all my creations and I love them. Click anywhere other than the button on each card to read the details on the back. Click on the button to see a full version of the apps or websites. Feel free to leave feedback, or contact me using the appropriate interfaces. You can find the code for all of these on my gitHub. Keep coming back for new updates!"),s.a.createElement(K,null),s.a.createElement(ne,null),s.a.createElement(he,null))}}]),a}(s.a.Component);o.a.render(s.a.createElement(fe,null),document.querySelector("#root"))}],[[29,1,2]]]);
//# sourceMappingURL=main.a9b30c4e.chunk.js.map
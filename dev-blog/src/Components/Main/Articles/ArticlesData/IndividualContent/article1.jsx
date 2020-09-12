import React, { Fragment } from "react";
import mainImage001 from "../../../../../Images/ArticleImages/001/main_image_001.webp";
import firstImage001 from "../../../../../Images/ArticleImages/001/first_image_001.webp";
import secondImage001 from "../../../../../Images/ArticleImages/001/second_image_001.webp";
import thirdImage001 from "../../../../../Images/ArticleImages/001/third_image_001.webp";
import fourthImage001 from "../../../../../Images/ArticleImages/001/fourth_image_001.webp";
import fifthImage001 from "../../../../../Images/ArticleImages/001/fifth_image_001.webp";
import mainImage001BU from "../../../../../Images/ArticleImages/001/main_image_001.jpeg";
import firstImage001BU from "../../../../../Images/ArticleImages/001/first_image_001.jpeg";
import secondImage001BU from "../../../../../Images/ArticleImages/001/second_image_001.jpeg";
import thirdImage001BU from "../../../../../Images/ArticleImages/001/third_image_001.jpeg";
import fourthImage001BU from "../../../../../Images/ArticleImages/001/fourth_image_001.jpeg";
import fifthImage001BU from "../../../../../Images/ArticleImages/001/fifth_image_001.jpeg";
import previewImage001 from "../../../../../Images/ArticleImages/001/preview_image_001.webp";
import previewImage001BU from "../../../../../Images/ArticleImages/001/preview_image_001.jpeg";

const title = "Introduction And 5 Things That I Hate and Love About Coding";
const date = "September 3, 2020";

const article = {
	"Introduction-and-5-Things-That-I-Hate-And-Love-About-Coding_09-03-20": {
		title: title,
		mainImage: (
			<Fragment>
				<picture>
					<source srcSet={mainImage001BU} />
					<source srcSet={mainImage001} />
					<img
						src={mainImage001}
						alt='keyboard with music and screen of computer code'
						className='article-main-image'
					/>
				</picture>
				<figcaption>It's all just symbols</figcaption>
			</Fragment>
		),
		previewImage: (
			<Fragment>
				<picture>
					<source srcSet={previewImage001BU} />
					<source srcSet={previewImage001} />
					<img className='more-articles-image' src={previewImage001} alt='' />
				</picture>
			</Fragment>
		),

		date: new Date(date),
		synopsis:
			"This story contains a short introduction and history of my ongoing journey to become a better software developer. I will also touch on what content you can expect in this blog, and some coding likes/dislikes from my perspective as a fairly new developer.",
		version: "0.01",
		dbToQuery: "article 1",
		content: (
			<Fragment>
				<h2 className='section-subtitle'>::Before</h2>
				<p className='first-paragraph'>
					Hey there! Welcome to my new blog. I'm David, and I am a composer and
					developer. I have been studying software development for a little
					under a year now, and thought it would be a good idea to start
					documenting the things I'm learning for my own use and hopefully the
					use of others. I've always enjoyed writing and my hope is that any
					readers will be able to find helpful and/or interesting information
					with a dash of humor and silliness as we all hurtle toward the
					heat-death of the universe together.
				</p>

				<p>
					As I mentioned I am a composer. Hey, why don't you go visit my{" "}
					<a href='https://www.music.davidhalcampbell.com'>music website</a> if
					you are interested in that kind of thing! I have some fun projects
					that I'm working on and hope to start a music blog soon to document
					some of those projects. I'm sure some musical references will work
					their way into these development stories from time to time. Real ones
					will know why. In this space I plan to include different projects that
					I'm working on, interesting topics related to JavaScript, new
					languages or related technologies, and maybe an occasional wild-card
					post about whatever topic seems interesting. Will it be an unhinged
					political take that alienates half of my readers? Stay tuned. Finally,
					I want to warn you that humble brags about my small coding victories
					will abound.
				</p>

				<p>
					{" "}
					With all that being said let's move on to what I hope will be a fun
					and light look at some likes and dislikes that I've encountered as a
					new developer. I could probably list 50 things but I'm going to keep
					them in my back pocket for a week that I'm not feeling a more serious
					topic. I envision this being a semi-regular edition to my blog. I
					think it's therapeutic to poke fun at the culture and inanity of
					coding while also highlighting the truly great things about it. So
					feel free to comment below if you want to join in with my
					whining/praising.
				</p>
				<h2 className='section-subtitle'>
					5 things I Hate And (also) Love about Coding.
				</h2>

				<figure className='article-image-figure'>
					<picture>
						<source srcSet={firstImage001BU} />
						<source srcSet={firstImage001} />
						<img className='article-image' src={firstImage001} alt='' />
					</picture>

					<figcaption>
						Me - ( <span>c. every day</span>)
					</figcaption>
				</figure>
				<p className='smaller-text italic'>
					{" "}
					<span className='bolder'>Disclaimer:</span> The following is a very
					opinionated list of some of the things that I love and hate about
					coding, the development tools, and development culture. By no means is
					it meant to be taken entirely seriously. Perhaps if you are a seasoned
					developer you will ironically chuckle at my ignorant list. If you,
					like myself are just starting out you will appreciate that somebody
					else feels your joy/pain. Either way I just want to complain and
					praise some things that I see, and to be completely honest I built
					this blog so I can say whatever I want!{" "}
				</p>

				<h3>
					<strong>Love: NPM</strong>
				</h3>
				<figure className='article-image-figure'>
					<picture>
						<source srcSet={fourthImage001BU} />
						<source srcSet={fourthImage001} />
						<img
							className='article-image'
							src={fourthImage001}
							alt='Keanu musing about legacy code'
						/>
					</picture>

					<figcaption>Limitless possibilities and dependencies</figcaption>
				</figure>
				<p>
					Look, there is nothing quite as great as the open-source nature of so
					much of the coding world. Anyone with a basic computing device can
					create massive programs using free resources and their own ingenuity.
					I love that. NPM is perhaps the epicenter of this culture. I love how
					stupid and beautiful it is. Let’s overlook for a second how amazing it
					can be to download some needed package for a project that gets the job
					done without too much hassle or need to dig into annoying repetitive
					code. The simple ability to check out the source code and learn HOW a
					lot of these coding maneuvers are accomplished is so valuable. I’ve
					checked the code more than a few times to learn how to reproduce some
					effect or process, and gained really valuable insight almost every
					time. I love that giddy feeling of that I might finally be able to
					move on from my latest impediment every time I type in "npm install".
				</p>
				<p>
					Sure, there are some downsides that come with relying on the massive
					amounts of dependencies that can add bloat to your projects when you
					maybe really just need to learn some vanilla JS (in my case) technique
					instead. But more often than not whenever I need some little niche
					tool to do a niche job some other bored dev has already written the
					code for it. I just think that's pretty neat. I will say that reading
					through any source code (or documentation) can be frustrating at
					times, and that leads me to my first dislike:
				</p>
				<h3>
					<strong>Hate: Legacy Code</strong>
				</h3>
				<figure className='article-image-figure'>
					<picture>
						<source srcSet={secondImage001BU} />
						<source srcSet={secondImage001} />
						<img
							className='article-image'
							src={secondImage001}
							alt='Keanu musing about legacy code'
						/>
					</picture>

					<figcaption>It's true when you think about it.</figcaption>
				</figure>

				<p>
					One of the first things that really frustrated me while I was learning
					JavaScript (and I want acknowledge that I realize this is somewhat of
					a feature of ECMAScript considering how often it changes) was having
					to keep track of old and new ways of doing things. I love using every
					modern feature possible as long as my handy{" "}
					<a href='https://caniuse.com/'> caniuse.com</a> tells me it is ok.
					Classes, const, let, symbols (ok haven’t really used that much yet),
					deconstruction [insert heart emoji], named keys and the list goes on
					and on. When I see some 15 year old (eg from 2015 or so) JS code
					without all these modern features in documentation or even as a
					popular answer on stack overflow I always wonder if I can trust it. Is
					it outdated? Will I be looked down on for using this? Is it a waste of
					time to learn? I am becoming better and better at navigating this as I
					learn more.
				</p>
				<p>
					Code is code in the end, and so sometimes the old code can be pretty
					helpful when trying to understand a principle.Still, I won’t be upset
					to one day suddenly think to myself{" "}
					<span className='italic'>
						{" "}
						“hmm it’s been 6 months since you’ve seen the word var spelled out”
					</span>{" "}
					and then move on with my day like a civilized modern human being.
				</p>
				<h3>
					<strong>Love: Prettier</strong>
				</h3>
				<figure className='article-image-figure full-figure'>
					<picture>
						<source srcSet={fifthImage001BU} />
						<source srcSet={fifthImage001} />
						<img
							className='article-image'
							src={fifthImage001}
							alt='Code with and without Prettier applied'
						/>
					</picture>

					<figcaption>Bringing Order to Chaos</figcaption>
				</figure>
				<p>
					I would have to say that one aspect of coding that I find incredibly
					satisfying is the order and logic of it all. When that order is
					disturbed it can really bother me. I have done a ton of self-analysis
					about this and I think the root comes from my years of
					frustration/experience with the Sibelius software for scoring music.
					In that program there are a ton of ‘auto-formatting” features that are
					supposed to cut down on the amount of laborious manual adjustment of
					notes, rests, and other symbols that will inevitably need to occur to
					make a piece look professionally engraved. Simply put, it doesn’t
					always work, and no matter how careful I was I spent endless hours
					fighting and clawing to get it to look acceptable.
				</p>
				<p>
					Maybe the analogue to this in coding is more CSS now that I think of
					it. Ah, CSS. Perhaps a worthy subject for another post like this. But
					I digress. Most of my time spent coding is looking at code in an
					editor while screaming. And when I'm screaming I want it to be from
					pure elation because I'm using the plugin Prettier.
				</p>
				<p>
					{" "}
					My IDE of choice right now is VScode. Obviously this is not some
					secret plugin since it is possibly the most popular plugin in the
					plugin marketplace. But for anyone who is not aware of it, Prettier
					auto-formats a developer’s code and does so in a pretty opinionated
					way. It improves readability and code uniformity standards within an
					organization. It catches errors because it won’t reformat if there is
					some kind of syntactical issue. It really speeds up refactoring and
					reading other people’s code. It even integrates with ESLint. I could
					go on and on about it but I think in reality there is just something
					so viscerally satisfying about my sloppy looking code being refactored
					into professional looking code with every save. I shiver just thinking
					about the beauty and time saved.{" "}
				</p>

				<h3>
					<strong>
						Hate: Foo/Bar/Baz/Bae/Bears/Beats/BattlestarGallactica
					</strong>
				</h3>
				<figure className='article-image-figure'>
					<picture>
						<source srcSet={thirdImage001BU} />
						<source srcSet={thirdImage001} />
						<img
							className='article-image'
							src={thirdImage001}
							alt='Example of Foo Bar Baz code'
						/>
					</picture>

					<figcaption>
						{" "}
						<span> "I don't see how I can make this any clearer" </span> -
						foo/bar/baz wizard{" "}
					</figcaption>
				</figure>

				<p>
					This was almost my number one hated thing, but I don’t see it out
					there as much as <span className='italic'>#legacycode</span> and I
					think it might slowly be dying away. I almost don’t want to bring it
					up to give it more power like Voldemort or Jake Paul. But can we all
					please for the love of whatever deity we subscribe to please stop
					using this to explain code!?!. When I see these words together in some
					well-meaning explanation my eyes immediately start to glaze over and
					It seems to take an extra 5-5000 minutes to understand what is going
					on. It just makes so much more sense to use variable names that are
					appropriate to the situation.
				</p>
				<p>
					I remember reaching out to the depths of the web several months ago
					after a particularly frustrating run of foo/bar/baz search results
					just trying to see if there were others like me in the coding
					community. I ran into what I thought was{" "}
					<a href='https://dev.to/warrend/no-more-foo-bar-and-baz-56j4'>
						a funny short article
					</a>{" "}
					on the topic. The code example was great, and the comments kind of
					explain some pro and con arguments for these horrible, horrible
					placeholders. I’ll let you decide which side argued more effectively.
				</p>
				<h3>
					<strong>Love: Developers helping Developers</strong>
				</h3>
				<p>
					I'm going to get serious for a moment on this last one. One of the
					coolest and most exciting things about learning to code has been the
					community of coders who are so willing to help answer questions and
					create great content for learning. Some of my favorites so far have
					been{" "}
					<a href='https://www.udemy.com/user/dylanisrael/'> Dylan Israel</a>,{" "}
					<a href='https://www.udemy.com/course/the-complete-web-development-bootcamp/'>
						Angela Yu
					</a>{" "}
					,{" "}
					<a href='https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw'>
						Web Dev Simplified
					</a>{" "}
					and{" "}
					<a href='https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg'>
						The Net Ninja{" "}
					</a>{" "}
					on Youtube, <a href='https://css-tricks.com/'>CSSTricks</a> , and{" "}
					<a href='https://www.freecodecamp.org/'> FreeCodeCamp.org</a>. None of
					these people mentioned above are sponsors of the blog (can you have
					sponsors with 0 readers?) and really this list could be extended to
					every developer who answers questions on stackoverflow, gitHub or
					Reddit.
				</p>
				<p>
					There is a real sense of community (or shared suffering?) that helps
					push one forward as an new developer. It's a difficult thing to learn
					subjects with great depth and breadth of complexity. I realize that
					there are definitely career and monetary benefits in some cases for
					this content, but still I do appreciate the guidance - paid or un-paid
					- that other developers are willing to give so freely, even if I
					sometimes get subjected to the odd foo/bar/baz explanation in the
					process.
				</p>
				<p>
					{" "}
					I guess some small part of that is why I am also starting this blog. I
					am far from a coding expert, but I think I know enough now that I can
					pass on some valuable information as well as reinforce my own
					knowledge by explaining these principles to others. I've really
					appreciated and will likely continue to appreciate the help along the
					way. I want to start contributing for those that come later.
				</p>
				<h2 className='section-subtitle'>::After</h2>
				<p>
					I hope you've enjoyed getting to know a little bit more about me in
					this admittedly content-light first story. I have a lot more loves and
					hates that I want to share eventually (magic numbers, CORS!!,
					flex-box, realizing your own code is garbage and more!) but my next
					entry is going to be a bit more typical of how I hope most stories
					will look. I'm going to explain the process that I used to get a
					really slick, responsive size-independent slider panel working for a
					news element on my music website using custom CSS variables, JS, a
					little bit of SASS and as always, copious amounts of googling. Until
					then I'll keep working on a catchphrase for this part, and we'll all
					keep coding until that day when AI does it all for us.
				</p>
			</Fragment>
		),
	},
};

const article1 = Object.entries(article)[0];

export default article1;

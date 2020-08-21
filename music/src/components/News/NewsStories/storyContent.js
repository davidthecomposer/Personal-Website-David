import React, { Fragment } from "react";
import lizCImage from "../../../images/news/Liz_Christensen_headShot.png";
import mandiBarrus2Image from "../../../images/news/mandi-Barrus.png";
import jennyImage from "../../../images/news/jennyHead.JPG";
import operaContempoHeader from "../../../images/news/OCHeader.png";

const storyContent = [
	{
		title: "Song Cycle Commission",
		mainText: (
			<Fragment>
				<p className='news-text'>
					During the early part of this year I will be composing a song cycle
					and collaborating with two talented artists in the process.{" "}
					<span className='news-highlight'>Mandi Barrus</span> is a Mezzo
					Soprano that most recently earned her MM in vocal performance at the
					University of Utah. I will be setting some texts from lyricist{" "}
					<span className='news-highlight'>Liz Christensen</span>. The texts
					focus on themes of self-awareness, love, loss, and mental health.
					There is a recital scheduled for the fall that will feature the
					premiere of this and a few other works. Stay tuned for more info about
					performance dates and venues, and general updates about the process of
					setting these texts to music.
				</p>
			</Fragment>
		),
		image1: mandiBarrus2Image,
		image1Class: "news-image",
		altText1: "Mandi Barrus",
		supportingText1: (
			<Fragment>
				<p className='news-text'>
					Mezzo-soprano <a href='http://mandibarrus.com'>Mandi Barrus</a> is a
					musician originally from Seattle, Washington. With her{" "}
					<a href='https://frontrowreviewersutah.com/?p=8504'>
						"impressive technique and clear tone"
					</a>
					, Ms. Barrus' performances are described as{" "}
					<a href='https://frontrowreviewersutah.com/?p=8504'>
						"a breath of fresh air"
					</a>{" "}
					and{" "}
					<a href='https://frontrowreviewersutah.com/?p=3625'>
						"particularly impressive"
					</a>
					. She is known for her versatility of performance, with credits in
					both musical theater (Hale Centre Theatre, Utah Repertory Theatre
					Company, Centerpoint Legacy Theatre, The Grand Theatre) and opera
					(Utah Opera, La Musica Lirica, Utah Lyric Opera, Lyric Opera Ensemble,
					Idaho Falls Opera Theatre). A winner of Utah Opera's AriaFest and of
					the University of Utah's Concerto Competition, Ms. Barrus holds a
					Bachelor of Musical Arts degree with a minor in Theatre Arts from
					BYU-Idaho and a Master of Music degree from the University of Utah.
					Ms. Barrus shares her love of music as the Artistic Director of{" "}
					<a href='http://www.operacontempo.com/'>Opera Contempo</a> , as a{" "}
					<a href='http://www.barrusbellavoce.com/'>private voice teacher</a>,
					and by presenting opera outreach programs in elementary schools
					throughout Utah, where she lives with her three children.
				</p>
			</Fragment>
		),
		image2: lizCImage,
		image2Class: "news-image",
		altText2: "Liz Christensen",
		supportingText2: (
			<Fragment>
				<p className='news-text'>
					<a href='http://www.lizzylizzyliz.com'>Liz Christensen</a> is the
					producer and host of both the entertainment podcast{" "}
					<a href='https://inthetellingpodcast.buzzsprout.com/'>
						"In the Telling"
					</a>{" "}
					and the webseries{" "}
					<a href='https://www.youtube.com/channel/UCvHO_s9oMYjKv2crN9_tjqA'>
						"She Made Me Do It."
					</a>{" "}
					She is also a playwright, editor, theatre director, choreographer,
					stage and{" "}
					<a href='https://www.imdb.com/name/nm2296618/?ref_=fn_al_nm_1'>
						screen
					</a>{" "}
					actress, and{" "}
					<a href='https://www.instagram.com/lizcpoetry/'>Instagram poet.</a>{" "}
					Her creative work includes nine feature films, three short films,
					three music videos and over 70 theatrical productions. She is the
					mother of a teenager and a tween, a caregiver of an elderly parent,
					and has been married to her college sweetheart for over a decade. She
					was born and raised along the Wasatch Front and received her BFA from
					the University of Utah.
				</p>
			</Fragment>
		),
	},
	{
		title: "Chamber Opera Commission",
		mainText: (
			<Fragment>
				<p className='news-text'>
					I will be composing a chamber opera to be premiered in the Fall 2021
					in association with Opera Contempo. The Libretto will be written by
					the extremely talented Jennifer Campbell, who I have previously worked
					with on the song cycle 'Habit'. I can't reveal too much about the plot
					at this point, but it centers around technology and what it means to
					be human. Look for updates and insights about the process on my blog
					(to be created soon) as the year progresses!
				</p>
			</Fragment>
		),
		image1: jennyImage,
		image1Class: "news-image",
		altText1: "Jenny Campbell",
		supportingText1: (
			<Fragment>
				<p className='news-text'>
					Jennifer Campbell is a writer with a background in history, journalism
					and video. Her articles have appeared on Faithcounts.org and in Utah
					Stories Magazine. She is currently working on a fantasy novel set in
					alt-world ancient Persia. When not writing she's busy getting called
					"noob" by her 11-year-old son, escaping to the Uintas and ripping it
					up on the flag football field.
				</p>
			</Fragment>
		),
	},
	{
		title: "Composer-In-Residence",
		mainText: (
			<Fragment>
				<p className='news-text'>
					I have accepted an invitation to be the composer-in-residence for
					Opera Contempo. I look forward to helping to grow this important new
					outlet for modern voices and stories. One of the goals of Opera
					Contempo is to create space for new composers to debut new works about
					contemporary topics. Along with composing an opera I'll be serving on
					the board of directors and giving input and composition-related
					support to other projects. There are some really exciting things
					planned for this upcoming season!
				</p>
			</Fragment>
		),
		image1: operaContempoHeader,
		image1Class: "news-image-full",
		altText1: "Opera Contempo Season Events",
		supportingText1: "",
	},
];

export default storyContent;

// const templateFragment = <Fragment>
// <h2 className='news-item-title' onClick={slideDown} >
//     -----Title------
// </h2>
// <div
//     className={`news-wrapper-${articleNum} ${slideDownContent}`}
//     ref={articleHeight}>
//     <div className='news-slot-main'>
//         <p className='news-text'>
//           ---- Main Text------
//         </p>
//     </div>
//     <div className='news-slot-one'>
//         <div className={`news-info`}>
//             <img
//                 src={'imageSrc'}
//                 className='news-image'
//                 alt='---Alt Text-----'
//             />
//             <p className='news-text'>
//                --Supplementary News Text 1 -----
//             </p>
//         </div>

//     </div>
// </div>
// </Fragment>

import React, { useState, useEffect, useCallback } from "react";
import lizCImage from "../../../images/news/Liz_Christensen_headShot.png";
import mandiBarrus2Image from "../../../images/news/mandi-Barrus.png";

const SongCycleCommission = ({ articleNum }) => {
	const [slideDownRow, setSlideDownRow] = useState("");
	const [slideDownContent, setSlideDownContent] = useState("");
	const [height, setHeight] = useState(0);

	const articleHeight = useCallback((article) => {
		if (article !== null) {
			const articleHeightObj = new ResizeObserver((entries) => {
				setHeight(entries[0].contentRect.height.toFixed(1));
			});

			articleHeightObj.observe(article);
		}
	}, []);

	useEffect(() => {
		document.documentElement.style.setProperty(
			`--news-height-${articleNum}`,
			`${height}px`
		);
	}, [height, articleNum]);

	const slideDown = (e) => {
		if (slideDownContent === "") {
			setSlideDownContent("slide-down");
			setSlideDownRow(`slide-down-row-${articleNum}`);
		} else {
			setSlideDownContent("");
			setSlideDownRow("");
		}
	};

	return (
		<div className={`news-row ${slideDownRow}`}>
			<h2 className='news-item-title' onClick={slideDown} data-index='0'>
				Song Cycle Commission
			</h2>
			<div
				className={`news-wrapper-${articleNum} ${slideDownContent}`}
				ref={articleHeight}>
				<div className='news-slot-main'>
					<p className='news-text'>
						During the early part of this year I will be composing a song cycle
						and collaborating with two talented artists in the process.{" "}
						<span className='news-highlight'>Mandi Barrus</span> is a Mezzo
						Soprano that most recently earned her MM in vocal performance at the
						University of Utah. I will be setting some texts from lyricist{" "}
						<span className='news-highlight'>Liz Christensen</span>. The texts
						focus on themes of self-awareness, love, loss, and mental health.
						There is a recital scheduled for the fall that will feature the
						premiere of this and a few other works. Stay tuned for more info
						about performance dates and venues, and general updates about the
						process of setting these texts to music.
					</p>
				</div>
				<div className='news-slot-one'>
					<div className={`news-info-one`}>
						<img
							src={mandiBarrus2Image}
							className='news-image'
							alt='Mandi Barrus'
						/>
						<p className='news-text'>
							Mezzo-soprano <a href='http://mandibarrus.com'>Mandi Barrus</a> is
							a musician originally from Seattle, Washington. With her{" "}
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
							(Utah Opera, La Musica Lirica, Utah Lyric Opera, Lyric Opera
							Ensemble, Idaho Falls Opera Theatre). A winner of Utah Opera's
							AriaFest and of the University of Utah's Concerto Competition, Ms.
							Barrus holds a Bachelor of Musical Arts degree with a minor in
							Theatre Arts from BYU-Idaho and a Master of Music degree from the
							University of Utah. Ms. Barrus shares her love of music as the
							Artistic Director of{" "}
							<a href='http://www.operacontempo.com/'>Opera Contempo</a> , as a{" "}
							<a href='http://www.barrusbellavoce.com/'>
								private voice teacher
							</a>
							, and by presenting opera outreach programs in elementary schools
							throughout Utah, where she lives with her three children.
						</p>
					</div>
					<div className={`news-info-two`}>
						<img src={lizCImage} className='news-image' alt='Liz Christensen' />
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
							<a href='https://www.instagram.com/lizcpoetry/'>
								Instagram poet.
							</a>{" "}
							Her creative work includes nine feature films, three short films,
							three music videos and over 70 theatrical productions. She is the
							mother of a teenager and a tween, a caregiver of an elderly
							parent, and has been married to her college sweetheart for over a
							decade. She was born and raised along the Wasatch Front and
							received her BFA from the University of Utah.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SongCycleCommission;

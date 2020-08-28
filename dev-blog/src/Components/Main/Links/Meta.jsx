import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

const Meta = ({ version, title, mainImage }) => {
	const [versionNum, setVersionNum] = useState("");
	const [mainImageURL, setMainImageURL] = useState("");

	useEffect(() => {
		if (version) {
			setVersionNum(version);
		}
		if (mainImage) {
			setMainImageURL(mainImage);
		}
	}, [mainImage, version]);

	return (
		<Helmet>
			<meta
				property='og:url'
				content={`'https://www.blog.davidhalcampbell.com/${versionNum}`}
			/>
			<meta property='og:title' content={title} />
			<meta
				property='og:image'
				content={`https://www.blog.davidhalcampbell.com${mainImageURL}`}
			/>
			<meta property='og:description' content={title} />
		</Helmet>
	);
};

export default Meta;

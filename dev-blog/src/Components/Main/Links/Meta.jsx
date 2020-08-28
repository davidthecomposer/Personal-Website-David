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
			<title>{title}</title>
		</Helmet>
	);
};

export default Meta;

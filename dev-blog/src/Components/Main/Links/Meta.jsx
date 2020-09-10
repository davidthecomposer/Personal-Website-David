import React from "react";
import { Helmet } from "react-helmet-async";

const Meta = ({ title, synopsis }) => {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name='title' content={title} />
			<meta name='description' content={synopsis} />
			<meta name='keywords' content='composer, music, development' />
		</Helmet>
	);
};

export default Meta;

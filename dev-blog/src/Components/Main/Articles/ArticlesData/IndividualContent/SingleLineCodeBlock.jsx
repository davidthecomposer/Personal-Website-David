import React, { useEffect, useRef, Fragment } from "react";
import Prism from "prismjs";
// import "../../../../../Styles/prism.css";

import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

export const combineCodeLines = (arr, lang) => {
	return arr.map((code, index) => {
		return (
			<Fragment key={index}>
				<SingleLineCodeBlock lang={lang} code={code} />

				<br />
			</Fragment>
		);
	});
};

const SingleLineCodeBlock = ({ code, lang }) => {
	const codeRef = useRef(null);

	useEffect(() => {
		highlight();
	});

	const highlight = () => {
		if (codeRef && codeRef.current) {
			Prism.highlightElement(codeRef.current);
		}
	};
	return (
		<code ref={codeRef} className={`lang-${lang}`}>
			{code}
		</code>
	);
};

export default SingleLineCodeBlock;

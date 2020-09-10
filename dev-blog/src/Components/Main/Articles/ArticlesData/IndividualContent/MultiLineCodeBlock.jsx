import React, { useEffect, useRef } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-jsx.js";
// import "prismjs/components/prism-jsx.min";

const MultiLineCodeBlock = ({ code, lang }) => {
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
		<pre className={`lang-${lang}`} ref={codeRef}>
			<code className={`lang-${lang}`}>{code}</code>
		</pre>
	);
};

export default MultiLineCodeBlock;

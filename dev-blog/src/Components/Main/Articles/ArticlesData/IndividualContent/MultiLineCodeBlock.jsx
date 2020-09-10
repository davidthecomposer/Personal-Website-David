import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const MultiLineCodeBlock = ({ code, lang }) => {
	return (
		<SyntaxHighlighter
			language={lang}
			style={vscDarkPlus}
			showLineNumbers={true}>
			{code}
		</SyntaxHighlighter>
	);
};

export default MultiLineCodeBlock;

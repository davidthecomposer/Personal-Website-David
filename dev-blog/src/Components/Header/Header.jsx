import React from "react";
import "../../Styles/Header.scss";

const Header = () => {
	return (
		<header className='blog-header'>
			<div className='title-group'>
				<h1 className={"blog-title"}>Composing Code</h1>
				<h2 className='blog-subtitle'> a music and development blog </h2>
			</div>
		</header>
	);
};

export default Header;

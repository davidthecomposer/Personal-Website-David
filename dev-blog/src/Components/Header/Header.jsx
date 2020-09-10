import React from "react";
import "../../Styles/Header.scss";

const Header = ({ lightOrDarkMode, modeSwitch }) => {
	return (
		<header className='blog-header'>
			<div className='title-group'>
				<h1 className={"blog-title"}>Composing Code</h1>
				<h2 className='blog-subtitle'> a software development blog </h2>
			</div>
			<div className='theme-mode'>
				<div
					className={`theme-container ${modeSwitch}`}
					onClick={lightOrDarkMode}></div>
			</div>
		</header>
	);
};

export default Header;

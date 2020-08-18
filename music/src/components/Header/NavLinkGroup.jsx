import React from "react";
import "./NavLinkGroup.css";

const NavLinkGroup = (props) => {
	return (
		<nav className='nav-link-group'>
			<div className='nav-link-underline'>
				<a className='nav-link-text' href='#home'>
					Home
				</a>
				<div className='underline'></div>
			</div>

			<h3 className='divider'>|</h3>

			<div className='nav-link-underline'>
				<a className='nav-link-text' href='#music-container'>
					Music
				</a>
				<div className='underline'></div>
			</div>

			<h3 className='divider'>|</h3>

			<div className='nav-link-underline'>
				<a className='nav-link-text' href='#news'>
					News
				</a>
				<div className='underline'></div>
			</div>

			<h3 className='divider'>|</h3>

			<div className='nav-link-underline'>
				<a className='nav-link-text' href='#about-me'>
					About Me
				</a>
				<div className='underline'></div>
			</div>

			<h3 className='divider'>|</h3>

			<div className='nav-link-underline'>
				<a className='nav-link-text' href='#contact'>
					Contact
				</a>
				<div className='underline'></div>
			</div>
		</nav>
	);
};

export default NavLinkGroup;

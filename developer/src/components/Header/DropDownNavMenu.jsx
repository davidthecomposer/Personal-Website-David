import React from "react";
import whiteHamburgerIcon from "../../images/white-hamburger-icon.svg";
import "./DropDownNavMenu.css";

class DropDownNavMenu extends React.Component {
	render() {
		return (
			<div className='dropdown-container'>
				<img
					src={whiteHamburgerIcon}
					alt='white menu icon'
					className='hamburger-menu'
					onClick={this.props.slideMenu}
				/>
				<div className={`dropdown-content ${this.props.dropDownClass}`}>
					<div className='dropdown-link-group'>
						<div className='dropdown-tabs-section drop'>
							<a className='dropdown-text' href='#home'>
								Home
							</a>
							<div className='underline'></div>
						</div>

						<div className='dropdown-tabs-section drop'>
							<a className='dropdown-text' href='#contact'>
								Contact
							</a>
							<div className='underline'></div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default DropDownNavMenu;

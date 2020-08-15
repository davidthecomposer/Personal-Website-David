import "./Header.css";
import React from "react";
import NavLinkGroup from "./NavLinkGroup";
import DropDownNavMenu from "./DropDownNavMenu";

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = { headerClass: "", dropDownClass: "", displayClass: "" };
	}

	componentDidMount = () => {
		window.addEventListener("scroll", this.isScrolled);
		window.onresize = () => this.isScrolled();
	};

	isScrolled = () => {
		const body = document.querySelector("body");
		let windowSize = window.innerWidth;
		let scrollPosition = body.getBoundingClientRect().top;

		if (this.state.dropDownClass === "drop-menu") {
			this.setState({ dropDownClass: "raise-menu" });
		}

		if (windowSize <= 700) {
			if (scrollPosition !== 0) {
				this.setState({
					headerClass: "header-thin1",
					displayClass: "no-display",
				});
			} else {
				this.setState({ headerClass: "header-full2" });
			}
		} else if (windowSize <= 950) {
			if (scrollPosition !== 0) {
				this.setState({ headerClass: "header-thin" });
			} else {
				this.setState({ headerClass: "header-full1" });
			}
		} else {
			if (scrollPosition !== 0) {
				this.setState({ headerClass: "header-thin" });
			} else {
				this.setState({ headerClass: "header-full" });
			}
		}
	};

	slideMenu = () => {
		return this.state.dropDownClass === "drop-menu"
			? this.setState({ dropDownClass: "raise-menu" })
			: this.setState({ dropDownClass: "drop-menu" });
	};

	componentWillUnmount() {
		window.removeEventListener("scroll", this.handleScroll);
	}

	render() {
		return (
			<header>
				<div className={`header-title ${this.state.headerClass}`}></div>
				<DropDownNavMenu
					dropDownClass={this.state.dropDownClass}
					slideMenu={this.slideMenu}
				/>
				<NavLinkGroup displayClass={this.state.displayClass} />
			</header>
		);
	}
}

export default Header;

/* jshint esversion: 6 */

export const morphHeaderInit = () => {
	const isScrolled = () => {
		const body = document.querySelector("body");
		let windowSize = window.innerWidth;
		const headerTitle = document.querySelector(".header-title");
		let scrollPosition = body.getBoundingClientRect().top;

		if (windowSize <= 700) {
			if (scrollPosition !== 0) {
				headerTitle.classList.remove(
					"header-full",
					"header-full1",
					"header-full2",
					"header-thin",
					"header-thin1"
				);
				headerTitle.classList.add("header-thin1");
			} else {
				headerTitle.classList.remove(
					"header-full",
					"header-full1",
					"header-full2",
					"header-thin",
					"header-thin1"
				);
				headerTitle.classList.add("header-full2");
			}
		} else if (windowSize <= 950) {
			if (scrollPosition !== 0) {
				headerTitle.classList.remove(
					"header-full",
					"header-full1",
					"header-full2",
					"header-thin",
					"header-thin1"
				);
				headerTitle.classList.add("header-thin");
			} else {
				headerTitle.classList.remove(
					"header-full",
					"header-full1",
					"header-full2",
					"header-thin",
					"header-thin1"
				);
				headerTitle.classList.add("header-full1");
			}
		} else {
			if (scrollPosition !== 0) {
				headerTitle.classList.remove(
					"header-full",
					"header-full1",
					"header-full2",
					"header-thin",
					"header-thin1"
				);
				headerTitle.classList.add("header-thin");
			} else {
				headerTitle.classList.remove(
					"header-full",
					"header-full1",
					"header-full2",
					"header-thin",
					"header-thin1"
				);
				headerTitle.classList.add("header-full");
			}
		}
	};

	window.addEventListener("scroll", isScrolled);
	window.onresize = () => isScrolled();
};

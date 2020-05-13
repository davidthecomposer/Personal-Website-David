/*jshint esversion: 6 */

import { initWeatherData } from "./modules/weatherAPI.js";

const resetClock = () => {
	const date = document.querySelector(".date");
	const time = document.querySelector(".time");

	const secondHand = document.querySelector(".second");
	const minuteHand = document.querySelector(".minute");
	const hourHand = document.querySelector(".hour");
	let currentDate = new Date();
	let seconds = currentDate.getSeconds();
	let minutes = currentDate.getMinutes();
	let hours = currentDate.getHours();
	date.innerText = currentDate.toLocaleDateString();
	time.innerText = currentDate.toLocaleTimeString().split(" ")[0];
	secondHand.style.transform = `rotate(${seconds * 6}deg)`;
	minuteHand.style.transform = `rotate(${minutes * 6 + seconds / 10}deg)`;
	if (hours <= 12) {
		hourHand.style.transform = `rotate(${hours * 30 + minutes / 2}deg)`;
	} else {
		hourHand.style.transform = `rotate(${(hours - 12) * 30 + minutes / 2}deg)`;
	}

	setTimeout(resetClock, 1000);
};

const resetTimeOfDay = () => {
	let locale = document.querySelector(".currently");
	let testDate = new Date();
	let hour = testDate.getHours();
	let body = document.querySelector("body");

	switch (true) {
		case hour < 6:
			locale.innerHTML = "Early Morning in";
			body.style.backgroundImage = "url('images/earlyMorning.jpg')";
			break;
		case hour >= 6 && hour < 12:
			locale.innerHTML = "Morning in";
			body.style.backgroundImage = "url('images/morning.jpg')";
			break;
		case hour >= 12 && hour < 17:
			locale.innerHTML = "Afternoon in";
			body.style.backgroundImage = "url('images/afternoon.jpg')";
			break;
		case hour >= 17 && hour < 20:
			locale.innerHTML = "Evening in";
			body.style.backgroundImage = "url('images/evening.jpg')";
			break;
		case hour >= 20:
			locale.innerHTML = "Night in";
			body.style.backgroundImage = "url('images/night.jpg')";
			break;
	}

	setTimeout(resetTimeOfDay, 60000);
};

const switchSeason = () => {
	let newDate = new Date();
	let month = newDate.getMonth();
	let winter = document.querySelector(".winter");
	let spring = document.querySelector(".spring");
	let summer = document.querySelector(".summer");
	let fall = document.querySelector(".fall");

	switch (true) {
		case month === 11 || month < 2:
			winter.classList.add("active");
			fall.classList.remove("active");
			break;
		case month >= 2 && month < 5:
			spring.classList.add("active");
			winter.classList.remove("active");
			break;
		case month >= 5 || month < 8:
			summer.classList.add("active");
			spring.classList.remove("active");
			break;
		case month >= 8 && month < 11:
			fall.classList.add("active");
			summer.classList.remove("active");
			break;
	}

	setTimeout(switchSeason, 600000);
};

resetClock();
resetTimeOfDay();
switchSeason();
initWeatherData();

/* More  ideas : 

Different pictures for each hour of the day: Could I take them?
Change clock color subtly with each picture change.
Add something that comes up on major holidays. Could I make an object or use an API?
user input of birthdays or special events?
update gui


*/

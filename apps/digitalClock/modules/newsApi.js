export const newsAPI = async () => {
	const response = await fetch(
		"https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=zvd2lu582qsTiUUZuLThUbaBe2SiknyB",
		{
			method: "GET",
			// headers: {
			// 	Origin: "https://www.apps.davidhalcampbell.com/digitalClock/index.html",
			// },
		}
	);

	const newsData = await response.json();

	console.log(newsData);
	const articleTitle = document.querySelector(".article-title");
	const author = document.querySelector(".article-author");
	const image = document.querySelector(".article-content");
	const randomNumber = Math.floor(Math.random() * newsData.num_results);
	const randomArticle = newsData.results[randomNumber];
	const articleContainer = document.querySelector(".article-container");
	const articleLink = randomArticle.short_url;

	articleTitle.innerText = randomArticle.title;
	author.innerText = ` ${randomArticle.byline}`;
	image.style.backgroundImage = `url(${randomArticle.multimedia[0].url})`;

	const navigateToLink = (event) => {
		window.location.href = articleLink;
	};

	articleContainer.addEventListener("click", navigateToLink);
};

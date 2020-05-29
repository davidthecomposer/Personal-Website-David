export const newsAPI = async () => {
	const response = await fetch(
		"https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=us&apiKey=b3252b8b9d0f44f9a0da191f3b2f8bc1"
	);

	const newsData = await response.json();
	const articleTitle = document.querySelector(".article-title");
	const author = document.querySelector(".article-author");
	const image = document.querySelector(".article-content");
	const randomNumber = Math.floor(Math.random() * newsData.articles.length);
	const randomArticle = newsData.articles[randomNumber];
	const articleContainer = document.querySelector(".article-container");
	const articleLink = randomArticle.url;

	articleTitle.innerText = randomArticle.title;
	author.innerText = `- ${randomArticle.author}`;
	image.style.backgroundImage = `url(${randomArticle.urlToImage})`;

	const navigateToLink = (event) => {
		window.location.href = articleLink;
	};

	articleContainer.addEventListener("click", navigateToLink);
};

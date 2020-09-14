import article1 from "./article1";
import article2 from "./article2";

const articlesArr = [article2, article1];

const articles = {};

articlesArr.forEach((article) => {
	articles[article[0]] = article[1];
});

export default articles;

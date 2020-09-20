import article1 from "./IndividualContent/article1";
import article2 from "./IndividualContent/article2";
import article3 from "./IndividualContent/article3";

const articlesArr = [article3, article2, article1];

const articles = {};

articlesArr.forEach((article) => {
	articles[article[0]] = article[1];
});

export default articles;

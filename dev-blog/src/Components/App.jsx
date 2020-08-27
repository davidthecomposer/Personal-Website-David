import React from "react";
import "../Styles/App.scss";
import Home from "./Home";
import SingleArticle from "./Main/Articles/SingleArticle";
import LatestArticle from "./Main/Articles/LatestArticle";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path={`/`} element={<Home />}>
					<Route path='/' element={<LatestArticle />} />
					<Route path='/:version' element={<SingleArticle />} />
				</Route>
			</Routes>
		</Router>
	);
};

export default App;

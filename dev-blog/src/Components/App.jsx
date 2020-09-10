import React, { useState } from "react";
import "../Styles/App.scss";
import Home from "./Home";
import SingleArticle from "./Main/Articles/SingleArticle";
import LatestArticle from "./Main/Articles/LatestArticle";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
	const [modeSwitch, setModeSwitch] = useState("");
	const [themeMode, setThemeMode] = useState("App");

	const lightOrDarkMode = () => {
		if (modeSwitch === "") {
			setModeSwitch("dark");
			setThemeMode("App-dark");
		} else {
			setModeSwitch("");
			setThemeMode("App");
		}
	};
	return (
		<Router>
			<Routes>
				<Route
					path={`/*`}
					element={
						<Home
							modeSwitch={modeSwitch}
							themeMode={themeMode}
							lightOrDarkMode={lightOrDarkMode}
						/>
					}>
					<Route
						path='/*'
						element={<LatestArticle modeSwitch={modeSwitch} />}
					/>
					<Route
						path='/:articleName'
						element={<SingleArticle modeSwitch={modeSwitch} />}
					/>
				</Route>
			</Routes>
		</Router>
	);
};

export default App;

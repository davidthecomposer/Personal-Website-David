import React, { useState, lazy, Suspense } from "react";
import "../Styles/App.scss";
import Home from "./Home";
import LatestArticle from "./Main/Articles/LatestArticle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const SingleArticle = lazy(() => import("./Main/Articles/SingleArticle"));

const renderLoader = () => <p>Loading</p>;

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
		<Suspense fallback={renderLoader()}>
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
		</Suspense>
	);
};

export default App;

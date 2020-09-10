import React from "react";
import ReactDOM from "react-dom";
import "./Styles/index.scss";
import App from "./Components/App.jsx";
import { HelmetProvider } from "react-helmet-async";

const app = (
	<HelmetProvider>
		<App />
	</HelmetProvider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

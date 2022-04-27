import React, { useState } from "react";
import "./scss/app.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import WelcomeLanding from "./pages/welcomelanding";
import Setup from "./pages/setup";
import Eden from "./pages/eden";
import Congrats from "./pages/congrats";

function App() {
	const [circle1, setCircle1] = useState([true, "half"]);
	const [circle2, setCircle2] = useState([false, "blacked"]);
	const [circle3, setCircle3] = useState([false, "blacked"]);
	const [circle4, setCircle4] = useState([false, "blacked"]);
	const circlechange = [
		circle1,
		circle2,
		circle3,
		circle4,
		setCircle1,
		setCircle2,
		setCircle3,
		setCircle4,
	];
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route
						path="/"
						element={<WelcomeLanding circlechange={circlechange} />}
						exact
					/>
					<Route
						path="/setup"
						element={<Setup circlechange={circlechange} />}
					/>
					<Route path="/eden" element={<Eden circlechange={circlechange} />} />
					<Route
						path="/congrats"
						element={<Congrats circlechange={circlechange} />}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;

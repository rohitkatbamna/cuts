import React from "react";
import "./scss/app.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import WelcomeLanding from "./pages/welcomelanding";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<WelcomeLanding />} exact />
				</Routes>
			</Router>
		</div>
	);
}

export default App;

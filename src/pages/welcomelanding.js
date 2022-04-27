import React from "react";
import { useNavigate } from "react-router-dom";

import Slider from "../components/slider";
import "../scss/welcomelanding.scss";

function WelcomeLanding({ circlechange }) {
	const newfunc = circlechange[4];
	const newfunc1 = circlechange[5];
	let navigate = useNavigate();
	function handleClick() {
		newfunc([true, "blue"]);
		newfunc1([true, "half"]);
		navigate("/setup");
	}
	return (
		<div className="welcome">
			<Slider circlechange={circlechange} />
			<div className="welcome_header">
				<p className="first_line">Welcome! First things first... </p>
				<p className="second_line">You can always change them later.</p>
			</div>
			<div className="welcome_input_all_of_it">
				<div className="welcome_input">
					<label for="exampleFormControlInput1" className="form-label">
						Full Name
					</label>
					<input
						className="form-control form-control-lg"
						type="text"
						placeholder="Steve Jobs"
						aria-label="form input large"
					/>
					<label for="exampleFormControlInput1" className="form-label mt-3">
						Display Name
					</label>
					<input
						className="form-control form-control-lg"
						type="text"
						placeholder="Steve"
						aria-label="form input large"
					/>
					<button
						type="button"
						className="btn btn-lg mt-4"
						onClick={handleClick}>
						Create Workspace
					</button>
				</div>
			</div>
		</div>
	);
}
export default WelcomeLanding;

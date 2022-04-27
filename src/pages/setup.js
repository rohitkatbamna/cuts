import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "../components/slider";
import "../scss/setup.scss";

function Setup({ circlechange }) {
	const newfunc = circlechange[5];
	const newfunc1 = circlechange[6];
	let navigate = useNavigate();
	function handleClick() {
		newfunc([true, "blue"]);
		newfunc1([true, "half"]);
		navigate("/eden");
	}
	return (
		<div className="setup">
			<Slider circlechange={circlechange} />
			<div className="setup_all_of_it">
				<div className="setup_header">
					<p className="first_line">Let's set up a home for all your work</p>
					<p className="second_line">
						You can always create another Workspace later
					</p>
				</div>
				<div className="setup_input">
					<label for="exampleFormControlInput1" className="form-label">
						Workspace Name
					</label>
					<input
						className="form-control form-control-lg"
						type="text"
						placeholder="Steve Jobs"
						aria-label="form input large"
					/>
					<label for="basic-url" class="form-label mt-3">
						Workspace URL <span style={{ color: "#c4ccdd" }}>(optional)</span>
					</label>
					<div class="input-group mb-3">
						<span
							class="input-group-text"
							id="basic-addon3"
							style={{ color: "#8f9bb4" }}>
							www.eden.com/
						</span>
						<input
							type="text"
							class="form-control form-control-lg"
							id="basic-url"
							aria-describedby="basic-addon3"
							placeholder="Example"
						/>
					</div>
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
export default Setup;

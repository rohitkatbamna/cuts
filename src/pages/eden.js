import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "../components/slider";
import "../scss/eden.scss";

function Eden({ circlechange }) {
	const newfunc = circlechange[4];
	const newfunc1 = circlechange[5];
	let navigate = useNavigate();
	function handleClick() {
		newfunc([true, "blue"]);
		newfunc1([true, "half"]);
		navigate("/eden");
	}
	return (
		<div className="eden">
			<Slider circlechange={circlechange} />
			<div className="eden_header">
				<p className="first_line">How are you planing to use Eden ?</p>
				<p className="second_line">
					We stream line your setup experience accordingly.
				</p>
			</div>
			<div className="eden_input_all_of_it">
				<div className="eden_input">
					<button className="btn btn-lg" type="button">
						<div className="card">
							<div className="card-body"></div>
						</div>
					</button>
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
export default Eden;

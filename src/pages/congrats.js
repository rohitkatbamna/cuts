import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "../components/slider";
import "../scss/congrats.scss";
import checkmark from "../assets/check-solid.svg";

function Congrats({ circlechange }) {
	let navigate = useNavigate();
	function handleClick() {
		navigate("/");
	}
	return (
		<div className="congrats">
			<Slider circlechange={circlechange} />
			<div className="congrats_header">
				<p className="first_line">Congratulations, Eren ! </p>
				<p className="second_line">
					You have completed onboarding, you can start using eden.
				</p>
			</div>
			<div
				className="text-center congrats_check_div"
				style={{ marginLeft: "-64px" }}>
				<img src={checkmark} alt="check mark" className="congrats_check_mark" />
			</div>
			<div className="congrats_all_of_it">
				<div className="congrats_input">
					<button
						type="button"
						className="btn btn-lg mt-4"
						onClick={handleClick}>
						Launch Eden
					</button>
				</div>
			</div>
		</div>
	);
}
export default Congrats;

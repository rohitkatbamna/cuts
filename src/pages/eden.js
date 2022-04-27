import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "../components/slider";
import "../scss/eden.scss";
import userImage from "../assets/user-solid.svg";
import usersImage from "../assets/users-solid.svg";

function Eden({ circlechange }) {
	const newfunc = circlechange[6];
	const newfunc1 = circlechange[7];
	let navigate = useNavigate();
	function handleClick() {
		newfunc([true, "blue"]);
		newfunc1([true, "half"]);
		navigate("/congrats");
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
					<div className="enden_two_cards">
						<button className="btn btn-lg" type="button">
							<img src={userImage} alt="user Icon" height={25} width={25} />
							<p className="first_p">For myself</p>
							<p className="second_p">
								Write Better Think clearly. stay organized.
							</p>
						</button>
						<button className="btn btn-lg" type="button">
							<img src={usersImage} alt="user Icon" height={25} width={25} />
							<p className="first_p">With my Team</p>
							<p className="second_p">
								Wikis, docs, tasks {"&"} project, all in one place.
							</p>
						</button>
					</div>
					<button
						type="button"
						className="btn btn-lg mt-4 workspace_button"
						onClick={handleClick}>
						Create Workspace
					</button>
				</div>
			</div>
		</div>
	);
}
export default Eden;

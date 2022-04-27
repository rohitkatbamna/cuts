import React, { useState } from "react";
import "../scss/slider.scss";
import mainImage from "../assets/head.png";

function Circle({ num, lines = true, linecolored = "half", backc = true }) {
	const white = {
		backgroundColor: "white",
		border: "2px solid #edf1f6",
		color: "#525e77",
	};
	const blue = {
		backgroundColor: "#664de5",
		color: "white",
	};
	return (
		<div className="addgrid_here">
			<div className="circle_all_of_it" style={backc ? blue : white}>
				<div className="circle_num">
					<p>{num}</p>
				</div>
			</div>
			{lines === true ? (
				<>
					<Changecolor linecolored={linecolored} />
				</>
			) : (
				<></>
			)}
		</div>
	);
}
function Slider() {
	const [circle1, setCircle1] = useState([true, "half"]);
	const [circle2, setCircle2] = useState([false, "blacked"]);
	const [circle3, setCircle3] = useState([false, "blacked"]);
	const [circle4, setCircle4] = useState([false, "blacked"]);
	return (
		<>
			<div className="slider_all_of_it">
				<img src={mainImage} alt="Main Icon" className="slider_main_icon" />
				<p className="slider_main_header">Eden</p>
			</div>
			<div className="d-flex justify-content-center">
				<Circle num={1} linecolored={circle1[1]} backc={circle1[0]} />
				<Circle num={2} linecolored={circle2[1]} backc={circle2[0]} />
				<Circle num={3} linecolored={circle3[1]} backc={circle3[0]} />
				<Circle
					num={4}
					linecolored={circle4[1]}
					backc={circle4[0]}
					lines={false}
				/>
			</div>
		</>
	);
}
function Halfcolored() {
	return (
		<>
			<div className="circle_line_colored"></div>
			<div className="circle_line_blacked"></div>
		</>
	);
}
function Fullcolored() {
	return (
		<>
			<div className="circle_line_colored"></div>
			<div className="circle_line_colored"></div>
		</>
	);
}
function Fullblacked() {
	return (
		<>
			<div className="circle_line_blacked"></div>
			<div className="circle_line_blacked"></div>
		</>
	);
}
function Changecolor({ linecolored = "half" }) {
	if (linecolored === "half") {
		return <Halfcolored />;
	} else if (linecolored === "blue") {
		return <Fullcolored />;
	} else if (linecolored === "blacked") {
		return <Fullblacked />;
	} else {
		return <Halfcolored />;
	}
}
export default Slider;

import React from "react";
import "../scss/slider.scss";
import mainImage from "../assets/head.png";

function Slider() {
	return (
		<div className="slider_all_of_it">
			<img src={mainImage} alt="Main Icon" className="slider_main_icon" />
			<p className="slider_main_header">Eden</p>
			<div></div>
		</div>
	);
}

export default Slider;

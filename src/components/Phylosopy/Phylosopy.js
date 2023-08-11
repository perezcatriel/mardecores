import React from 'react';

import "./Phylosopy.css";
import marde_background from "../../assets/marde_background.jpg";
import marde_icon from "../../assets/icons/mardecores-logo.jpeg";

function Phylosopy() {
	return (
		<div className="presentation">
			<article className="presentation--slogan">
				<h2 className="presentation--title">Mar de Cores</h2>
				<p className="presentation--parrafo">Ropa, Estética y Magia para tu alma.</p>
				<button className="presentation--button">Contáctanos</button>
			</article>

			<article className="presentation--images">
				<img
					src={marde_background}
					alt="slogan"
					className="presentation--images__background"
				/>
				<img
					src={marde_icon}
					alt="mini-img"
					className="presentation--images__mini"
				/>
			</article>
		</div>
	);
}

export default Phylosopy;

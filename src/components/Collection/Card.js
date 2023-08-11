import React from 'react';

import "./Card.css";
import imagenBackground from "../../assets/jeri-atardecer.jpg";
import imagenMini from "../../assets/bikini.jpeg";

export default function Card() {
	return (
		<article className="card">
			<h2>Articulo</h2>
			<p>descripcion del articulo a la venta</p>
			<p>otro parrafo de descripcion del articulo a la venta</p>

			<button>Shop Now!</button>
			<figure>
				<img
					src={imagenBackground}
					alt="imagen principal"
					className="img-background"
				/>
				<img src={imagenMini} alt="imagen secundaria" className="img-mini" />
			</figure>
		</article>
	);
}

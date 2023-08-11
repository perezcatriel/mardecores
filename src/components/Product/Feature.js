import React from 'react';

import "./Feature.css";

import steticServices from "../../assets/store/estetica-servicios.jpeg";
import magiaBuda from "../../assets/store/magia-buda.jpeg";
import ropaAritos from "../../assets/store/ropa-aritos.jpeg";
import ropaBota from "../../assets/store/ropa-bota.jpeg";
import ropaBrazalete from "../../assets/store/ropa-brazalete.jpeg";

function Feature() {
	return (
		<section className="feature">
			<h2 className="feature--title">Productos Destacados</h2>

			<article className="feature--cards">
				<figure className="feature--card">
					<img src={steticServices} alt="image" className="feature--card__image" />
					<caption className="feature--card__title">Estética</caption>
					<figcaption className="feature--card__price">@marde_cores.estetica</figcaption>
				</figure>

				<figure className="feature--card">
					<img src={magiaBuda} alt="image" className="feature--card__image" />
					<caption className="feature--card__title">Buda blanca</caption>
					<figcaption className="feature--card__price">$10.00</figcaption>
				</figure>

				<figure className="feature--card">
					<img src={ropaAritos} alt="image" className="feature--card__image" />
					<caption className="feature--card__title">Aritos tercer ojo</caption>
					<figcaption className="feature--card__price">$10.00</figcaption>
				</figure>

				<figure className="feature--card">
					<img src={ropaBota} alt="image" className="feature--card__image" />
					<caption className="feature--card__title">Botas EcoPlast Verde</caption>
					<figcaption className="feature--card__price">$10.00</figcaption>
				</figure>

				<figure className="feature--card">
					<img src={ropaBrazalete} alt="image" className="feature--card__image" />
					<caption className="feature--card__title">Pulseras Varias</caption>
					<figcaption className="feature--card__price">$10.00</figcaption>
				</figure>
			</article>
		</section>
	);
}

export default Feature;

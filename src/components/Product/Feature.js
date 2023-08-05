import "./Feature.css";
import bikini from "../../assets/bikini.jpeg";

function Feature() {
	return (
		<section className="feature">
			<h2 className="feature--title">Productos Destacados</h2>

			<article className="feature--cards">
				<figure className="feature--card">
					<img src={bikini} alt="image" className="feature--card__image" />
					<caption className="feature--card__title">Pantalón</caption>
					<figcaption className="feature--card__price">$10.00</figcaption>
				</figure>

				<figure className="feature--card">
					<img src={bikini} alt="image" className="feature--card__image" />
					<caption className="feature--card__title">Depilación Definitiva</caption>
					<figcaption className="feature--card__price">$10.00</figcaption>
				</figure>

				<figure className="feature--card">
					<img src={bikini} alt="image" className="feature--card__image" />
					<caption className="feature--card__title">Tarot</caption>
					<figcaption className="feature--card__price">$10.00</figcaption>
				</figure>

				<figure className="feature--card">
					<img src={bikini} alt="image" className="feature--card__image" />
					<caption className="feature--card__title">Bikini</caption>
					<figcaption className="feature--card__price">$10.00</figcaption>
				</figure>

				<figure className="feature--card">
					<img src={bikini} alt="image" className="feature--card__image" />
					<caption className="feature--card__title">Hifu</caption>
					<figcaption className="feature--card__price">$10.00</figcaption>
				</figure>
			</article>
		</section>
	);
}

export default Feature;

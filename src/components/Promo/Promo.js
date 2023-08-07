import "./Promo.css";
import bikini from "../../assets/icons/mardecores-caracol-azul.jpeg";
import caracolNaranja from "../../assets/icons/mardecores-caracol-naranja.jpeg";

function Promo() {
	return (
		<section className="promo">
			<figure className="promo--image">
				<img src={bikini} alt="promo--image__img-1" className="promo--image__img-1" />
				<p className="promo--image__parrafo">Ropa</p>
			</figure>

			<figure className="promo--image">
				<img src={caracolNaranja} alt="promo--image__img-2" className="promo--image__img-2" />
				<p className="promo--image__parrafo">Estética</p>
			</figure>

			<figure className="promo--image">
				<img src={bikini} alt="promo--image__img-2" className="promo--image__img-2" />
				<p className="promo--image__parrafo">Magia</p>
			</figure>
		</section>
	);
}

export default Promo;

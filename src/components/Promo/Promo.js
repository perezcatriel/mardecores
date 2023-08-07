import "./Promo.css";
import caracolAzul from "../../assets/icons/marde-caracol-azul.jpeg";
import caracolAmarillo from "../../assets/icons/marde-caracol-amarillo.jpeg";
import caracolRosa from "../../assets/icons/marde-caracol-rosa.jpeg";

function Promo() {
	return (
		<section className="promo">
			<figure className="promo--image">
				<img src={caracolAzul} alt="promo--image__img-1" className="promo--image__img-1" />
				<p className="promo--image__parrafo">Ropa</p>
			</figure>

			<figure className="promo--image">
				<img src={caracolRosa} alt="promo--image__img-2" className="promo--image__img-2" />
				<p className="promo--image__parrafo">Estética</p>
			</figure>

			<figure className="promo--image">
				<img src={caracolAmarillo} alt="promo--image__img-2" className="promo--image__img-2" />
				<p className="promo--image__parrafo">Magia</p>
			</figure>
		</section>
	);
}

export default Promo;

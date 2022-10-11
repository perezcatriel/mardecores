import "./Promo.css";
import bikini from "../assets/bikini.jpeg";

function Promo() {
	return (
		<section className="promo">
			<figure className="promo--image">
				<img src={bikini} alt="promo--image__img-1" className="promo--image__img-1" />
				<p className="promo--image__parrafo">Bikini</p>
			</figure>

			<figure className="promo--image">
				<img src={bikini} alt="promo--image__img-2" className="promo--image__img-2" />
				<p className="promo--image__parrafo">Bikini</p>
			</figure>
		</section>
	);
}

export default Promo;

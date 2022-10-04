import "./Promo.css";
import bikini from "../assets/bikini.jpeg";

function Promo() {
	return (
		<section className="promo">
			<figure>
				<img src={bikini} alt="img-1" className="img-1" />
				<p className="promo-parrafo">Bikini</p>
			</figure>

			<figure>
				<img src={bikini} alt="img-2" className="img-2" />
				<p className="promo-parrafo">Bikini</p>
			</figure>
		</section>
	);
}

export default Promo;

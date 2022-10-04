import "./Presentation.css";
import jeriAtardecer from "../assets/images.jpeg";
import bikini from "../assets/bikini.jpeg";

function Presentation() {
	return (
		<div className="presentation">
			<article className="slogan">
				<h2>Mar de Cores</h2>
				<p className="slogan-parrafo">Slogan</p>
				<button>Shop Now</button>
			</article>

			<article className="images">
				<img src={jeriAtardecer} alt="slogan" />
				<img src={bikini} alt="mini-imagen" className="img-mini" />
			</article>
		</div>
	);
}

export default Presentation;

import "./Phylosopy.css";
import jeriAtardecer from "../../assets/images.jpeg";
import bikini from "../../assets/bikini.jpeg";

function Phylosopy() {
	return (
		<div className="presentation">
			<article className="presentation--slogan">
				<h2 className="presentation--title">Mar de Cores</h2>
				<p className="presentation--parrafo">Slogan</p>
				<button className="presentation--button">Shop Now</button>
			</article>

			<article className="presentation--images">
				<img
					src={jeriAtardecer}
					alt="slogan"
					className="presentation--images__background"
				/>
				<img
					src={bikini}
					alt="mini-img"
					className="presentation--images__mini"
				/>
			</article>
		</div>
	);
}

export default Phylosopy;

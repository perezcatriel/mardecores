import "./Community.css";
import bikini from "../../assets/bikini.jpeg";

function Community() {
	return (
		<section className="community">
			<h2 className="community--title">#mardecores</h2>

			<article className="community--cards">
				<section className="community--cards__col-1">
					<img src={bikini} className="a" />
					<img src={bikini} className="b" />
					<img src={bikini} className="c" />
					<img src={bikini} className="d" />
					<img src={bikini} className="e" />
					<img src={bikini} className="f" />
				</section>

				<section className="community--cards__col-2">
					<img src={bikini} className="g" />
					<img src={bikini} className="h" />
					<img src={bikini} className="i" />
					<img src={bikini} className="j" />
					<img src={bikini} className="k" />
					<img src={bikini} className="l" />
				</section>
			</article>
		</section>
	);
}

export default Community;

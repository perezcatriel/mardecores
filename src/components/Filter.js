import "./Filter.css";

function Filter() {
	return (
		<section className="filter">
			<h2>Filter by</h2>

			<button className="filter--collection">Collection</button>

			<div className="filter--collections inactivo">
				<p>All</p>

				<ul>
					<li>Tops</li>
					<li>Leggings</li>
					<li>Featured</li>
					<li>Sale</li>
				</ul>
			</div>
		</section>
	);
}

export default Filter;

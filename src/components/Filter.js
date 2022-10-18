import "./Filter.css";

function collection() {
	const option = document.getElementById("filter--collections");

	if (option.className === "filter--collections inactivo") {
		option.className = "filter--collections active";
	} else {
		option.className = "filter--collections inactivo";
	}
}

function price() {}

function Filter() {
	return (
		<section className="filter">
			<h2>Filter by</h2>

			<button className="filter--button__collection" onClick={collection}>
				Collection
			</button>

			<div className="filter--collections inactivo" id="filter--collections">
				<p>All</p>

				<ul>
					<li>
						<a>Tops</a>
					</li>
					<li>
						<a>Leggings</a>
					</li>
					<li>
						<a>Featured</a>
					</li>
					<li>
						<a>Sale</a>
					</li>
				</ul>
			</div>

			<button className="filter--button__price" onClick={price}>
				Price
			</button>

			<div className="filter--price " id="filter--price">
				<input type="range" className="filter--price__rango"  min="10" name="price" />
				
				<input type="color" />
				<br/>
				
				<label>
					<input type="checkbox" />
					 rojo
				</label>
				
			</div>
		</section>
	);
}

export default Filter;

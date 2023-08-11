import React from 'react';

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

function color() {
	const option = document.getElementById("filter--collections");

	if (option.className === "filter--collections inactivo") {
		option.className = "filter--collections active";
	} else {
		option.className = "filter--collections inactivo";
	}
}

function size() {
	const option = document.getElementById("filter--collections");

	if (option.className === "filter--collections inactivo") {
		option.className = "filter--collections active";
	} else {
		option.className = "filter--collections inactivo";
	}
}

function Filter() {
	return (
		<section className="filter">
			<h2>Filter by</h2>

			<button className="filter--button__collection" onClick={collection}>
				Collection +
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

			<button className="filter--button__price" onClick={collection}>
				Price +
			</button>

			<div className="filter--price " id="filter--price">
				<input type="range" className="filter--price__rango" />
			</div>

			<button className="filter--button__color" onClick={collection}>
				Color +
			</button>

			<div className="filter--color " id="filter--color">
				<input type="color" value="#000" id="negro" name="negro" />
				<input type="color" value="#ffffff" id="blanco" name="blanco" />
				<input type="color" value="#00ff00" />
				<input type="color" value="#0000ff" />
				<input type="color" value="#ff0000" />
			</div>

			<button className="filter--button__size" onClick={price}>
				Size +
			</button>

			<div className="filter--pr " id="filter--price">
				<input type="radio" name="size" />
				xSmall
				<br />
				<input type="radio" name="size" />
				small
				<br />
				<input type="radio" name="size" />
				medium
				<br />
				<input type="radio" name="size" />
				large
				<br />
				<input type="radio" name="size" />
				xLarge
				<br />
				<input type="radio" name="size" />
				xxLarge
				<br />
			</div>
		</section>
	);
}

export default Filter;

import React from 'react';
import "./ShopSearch.css";

function ShopSearch() {
	return (
		<section className="shop">
			<h2 className="shop--title">Shop</h2>

			<form className="shop--input">
				<input
					type="text"
					placeholder="searching..."
					className="shop--input__search"
				/>
				<button type="button" className="shop--input__button">
					Search
				</button>
			</form>
		</section>
	);
}

export default ShopSearch;

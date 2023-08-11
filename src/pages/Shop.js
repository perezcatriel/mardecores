import React from 'react';
import ShopSearch from "../components/Shop/ShopSearch";
import Filter from "../components/Filter/Filter";
import MainShop from "../components/Shop/ShopMain";
import "../components/Shop/Shop.css";

function Shop() {
	return (
		<section className="shopPage">
			<ShopSearch />
			<section className="shop-main">
				<Filter />
				<MainShop />
			</section>
		</section>
	);
}

export default Shop;

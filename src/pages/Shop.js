import ShopSearch from "../components/ShopSearch";
import Filter from "../components/Filter";
import MainShop from "../components/MainShop";
import "../components/Shop.css";

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

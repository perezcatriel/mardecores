import Header from "../components/Header";
import Contact from "../components/Contact";
import ShopSearch from "../components/ShopSearch";
import Filter from "../components/Filter";
import MainShop from "../components/MainShop";
import "../components/Shop.css";

function Shop() {
	return (
		<>
			<Header />
			<ShopSearch />
			<section className="shop-main">
				<Filter />
				<MainShop />
			</section>
			<Contact />
		</>
	);
}

export default Shop;

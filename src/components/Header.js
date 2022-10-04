import "./Header.css";

function Header() {
	return (
		<header>
			<h1>Mar de Cores</h1>

			<ul>
				<a href="#">
					<li>Home</li>
				</a>
				<a href="#">
					<li>Shop</li>
				</a>
				<a href="#">
					<li>Collection</li>
				</a>
				<a href="#">
					<li>Philosophy</li>
				</a>
				<a href="#">
					<li>Contact</li>
				</a>
			</ul>

			<section>
				<span className="material-symbols-outlined">account_circle</span>

				<button>Login In</button>

				<article>
					<span className="material-symbols-outlined">shopping_bag</span>
					<div className="circulo">5</div>
				</article>
			</section>
		</header>
	);
}

export default Header;

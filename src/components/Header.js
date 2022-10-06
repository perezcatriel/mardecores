import "./Header.css";

function Header() {
	return (
		<header className="header">
			<h1 className="header--title">Mar de Cores</h1>

			<ul className="header--menu">
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

			<section className="header--login">
				<div className="header--login__avatar">
					<span className="material-symbols-outlined">account_circle</span>
				</div>

				<button className="header--login__button">Login In</button>

				<article className="header--login__shop">
					<span className="material-symbols-outlined">shopping_bag</span>
					<div className="header--login__circulo">5</div>
				</article>
			</section>
		</header>
	);
}

export default Header;

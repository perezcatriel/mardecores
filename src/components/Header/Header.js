import "./Header.css";

function Header() {
	return (
		<header className="header">
			<h1 className="header--title">Mar de Cores</h1>

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

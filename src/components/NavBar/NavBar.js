import "./NavBar.css";

function NavBar() {
	return (
		<ul className="header--menu">
			<a href="/">
				<li>Home</li>
			</a>
			<a href="/shop">
				<li>Shop</li>
			</a>
			<a href="/collection">
				<li>Collection</li>
			</a>
			<a href="/phylosopy">
				<li>Philosophy</li>
			</a>
			<a href="/footer">
				<li>Contact</li>
			</a>
		</ul>
	);
}

export default NavBar;

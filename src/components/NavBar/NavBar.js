import { Link } from "react-router-dom";

import "./NavBar.css";

function NavBar() {
	return (
		<nav>
			<ul className="header--menu">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/shop">Shop</Link>
				</li>
				<li>
					<Link to="/collection">Collection</Link>
				</li>
				<li>
					<Link to="/phylosopy">Phylosopy</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;

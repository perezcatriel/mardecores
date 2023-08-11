import React from 'react';

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
					<Link to="/shop">Ropa</Link>
				</li>
				<li>
					<Link to="/collection">Estética</Link>
				</li>
				<li>
					<Link to="/collection">Tarot</Link>
				</li>
				<li>
					<Link to="/phylosopy">Blog</Link>
				</li>
				<li>
					<Link to="/contact">Contacto</Link>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;

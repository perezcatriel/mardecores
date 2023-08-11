import React from 'react';

import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
	return (
		<header className="header">
			<h1 className="header--title">Mar de Cores</h1>

			<section className="header--login">
				<div className="header--login__avatar">
					<span className="material-symbols-outlined">account_circle</span>
				</div>

				<Link to="/login"><button className="header--login__button">
					Ingresar
				</button>
				</Link>
				<article className="header--login__shop">
					<span className="material-symbols-outlined">shopping_bag</span>
					<div className="header--login__circulo">0</div>
				</article>
			</section>
		</header>
	);
}

export default Header;

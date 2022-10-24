import "./Footer.css";

function Footer() {
	return (
		<section className="contact">
			<article className="contact--contact-1">
				<h2 className="contact--contact__title">Contact</h2>

				<div className="contact--info-1">
					<p>500 Terry Francois Street</p>
					<p>San Francisco, CA 94158</p>
				</div>

				<div className="contact--info__anchor">
					<a>Mail: info@my-domain.com</a>
					<a>Tel: 123-456-7890</a>
				</div>
			</article>

			<article className="contact--contact-2">
				<h2 className="contact--contact__title">Contact</h2>

				<div className="contact--info-1">
					<p>500 Terry Francois Street</p>
					<p>San Francisco, CA 94158</p>
				</div>

				<div className="contact--info__anchor">
					<a>Mail: info@my-domain.com</a>
					<a>Tel: 123-456-7890</a>
				</div>
			</article>

			<article className="contact--menu">
				<a>
					<h2 className="contact--contant__title">Shop</h2>
				</a>
				<a>
					<h2 className="contact--contant__title">Collections</h2>
				</a>
				<a>
					<h2 className="contact--contant__title">Philosophy</h2>
				</a>
			</article>

			<article className="contact--redes">
				<h2 className="contact--redes__title">Follow us</h2>

				<ul className="contact--redes__lists">
					<a>
						<li className="contact--redes__facebook">Facebook</li>
					</a>
					/
					<a>
						<li className="contact--redes__instagram">Instagam</li>
					</a>
					/
					<a>
						<li className="contact--redes__youtube">Youtube</li>
					</a>
				</ul>

				<div className="contact--redes__by">
					<p>
						© 2022 By Mar de Cores created for{" "}
						<a
							href="https://perezcatriel.github.io/cv/public"
							className="catriel"
						>
							Catriel Pérez
						</a>
					</p>
				</div>
			</article>
		</section>
	);
}

export default Footer;

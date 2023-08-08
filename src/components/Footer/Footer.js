import "./Footer.css";

function Footer() {
	return (
		<section className="contact">
			<article className="contact--contact-1">
				<h2 className="contact--contact__title">Contáctanos</h2>

				<div className="contact--info-1">
					<p>Av. San Martín, Cosquín, Argentina</p>
					<p>C.P. 5166</p>
				</div>

				<div className="contact--info__anchor">
					<a>marde_cores@gmail.com</a>
					<a>3541 - 442200</a>
				</div>
			</article>

			<article className="contact--redes">
				<h2 className="contact--redes__title">Seguinos</h2>

				<ul className="contact--redes__lists">
					<a>
						<li className="contact--redes__facebook">@marde_cores.ropa</li>
					</a>

					<a>
						<li className="contact--redes__instagram">@marde_cores.estetica</li>
					</a>

					<a>
						<li className="contact--redes__youtube">@marde_cores.magia</li>
					</a>
				</ul>

				<div className="contact--redes__by">
					<p>
						© 2022 By Mar de Cores created for{" "}
						<a
							href="https://datacraft.vercel.app/"
							className="catriel"
						>
							DataCraft
						</a>
					</p>
				</div>
			</article>
		</section>
	);
}

export default Footer;

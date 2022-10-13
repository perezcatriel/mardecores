import "./Contact.css";

function Contact() {
	return (
		<section className="contact">
			<article className="contact--contact-1">
				<h2 className="contact--contact__title">Contact</h2>

				<div className="contact--info-1">
					<p>500 Terry Francois Street</p>
					<p>San Francisco, CA 94158</p>
				</div>

				<div className="contact--info-1">
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

				<div className="contact--info-1">
					<a>Mail: info@my-domain.com</a>
					<a>Tel: 123-456-7890</a>
				</div>
			</article>

			<article className="contact--menu">
				<h2 className="contact--contant__title">Shop</h2>
				<h2 className="contact--contant__title">Collections</h2>
				<h2 className="contact--contant__title">Philosophy</h2>
			</article>

			<article className="contact--redes">
				<h2 className="contact--contant__title">Follow us</h2>

				<ul className="contact--redes__lists">
					<li>Facebook</li>/<li>Instagam</li>/<li>Youtube</li>
				</ul>

				<div className="contact--redes__by">
					<p>© 2022 By Mar de Cores created for <a href="https://perezcatriel.github.io/cv/public">Catriel Pérez</a></p>
				</div>
			</article>
		</section>
	);
}

export default Contact;

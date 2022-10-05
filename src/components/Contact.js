import "./Contact.css";

function Contact() {
	return (
		<section className="contact">
			<article className="contact--contact">
				<h2 className="contact-h2">Contact</h2>

				<div>
					<p>500 Terry Francois Street</p>
					<p>San Francisco, CA 94158</p>
				</div>

				<div>
					<a>Mail: info@my-domain.com</a>
					<a>Tel: 123-456-7890</a>
				</div>
			</article>

			<article className="contact--contact2">
				<h2 className="contact-h2">Contact</h2>

				<div>
					<p>500 Terry Francois Street</p>
					<p>San Francisco, CA 94158</p>
				</div>

				<div>
					<a>Mail: info@my-domain.com</a>
					<a>Tel: 123-456-7890</a>
				</div>
			</article>

			<article className="contact--menu">
				<h2 className="contact-h2">Shop</h2>
				<h2 className="contact-h2">Collections</h2>
				<h2 className="contact-h2">Philosophy</h2>
			</article>

			<article className="contact--redes">
				<h2 className="contact-h2">Follow us</h2>

				<ul className="contact--redes__lists">
					<li>Facebook</li>/<li>Instagam</li>/<li>Youtube</li>
				</ul>

				<div className="contact--redes__by">
					<p>© 2023 By Meshi Yoga. Proudly created with Wix.com</p>
				</div>
			</article>
		</section>
	);
}

export default Contact;

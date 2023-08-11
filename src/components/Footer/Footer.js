import "./Footer.css";

function ContactInfo() {
  return (
    <div className="contact--info">
      <p>Av. San Martín, Cosquín, Argentina</p>
      <p>C.P. 5166</p>
    </div>
  );
}

function ContactLinks() {
  return (
    <div className="contact--links">
      <a href="mailto:marde_cores@gmail.com">marde_cores@gmail.com</a>
      <a href="tel:+3541442200">3541 - 442200</a>
    </div>
  );
}

function Copyright() {
  return (
    <div className="contact--copyright">
      <p>
        © 2022 By Mar de Cores created for{" "}
        <a href="https://datacraft.vercel.app/" className="catriel">
          DataCraft
        </a>
      </p>
    </div>
  );
}

function Footer() {
  return (
    <section className="contact">
      <article className="contact--contact-1">
        <ContactInfo />
        <ContactLinks />
      </article>
      <article className="contact--redes">
        <Copyright />
      </article>
    </section>
  );
}

export default Footer;

import "./Register.css";

function Registrer() {
	return (
		<section className="register">
			{/* <p className="register--parrafo">Register</p> */}
			<form className="register--form">
				<input
					type="email"
					placeholder="name@gmail.com"
					className="register--form__input"
				/>
				<input
					type="name"
					placeholder="nombre"
					className="register--form__input"
				/>
				<textarea
					type="textarea"
					placeholder="Escriba aca su mensaje"
					className="register--form__input"
				/>
				<button type="button" className="register--form__button">
					Contáctanos
				</button>
			</form>
		</section>
	);
}

export default Registrer;

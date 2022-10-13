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
				<button type="button" className="register--form__button">
					Register
				</button>
			</form>
		</section>
	);
}

export default Registrer;

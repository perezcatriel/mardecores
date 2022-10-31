import "./Login.css";

function admin(user, password) {
	if (user === "aldana" && password === "admin") {
		alert("Bienvenida...");
		console.log(user, password);
	} else {
		alert("incorrecto");
		console.log(user, password);
	}
}

export function Login() {
	return (
		<form className="login">
			<fieldset className="login--form">
				<p className="login--form__p">Login</p>
				<input
					type="text"
					className="login--form__user"
					placeholder="aldana"
					value="aldana"
					id="user"
				/>
				<input
					type="password"
					className="login--form__password"
					placeholder="admin"
					value="admin"
					id="password"
				/>
				<button type="submit">Ingresar</button>
				<a href="#" className="login--form__a">
					olvide mi contraseña
				</a>
			</fieldset>
		</form>
	);
}

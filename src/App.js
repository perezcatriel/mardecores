// import logo from "./logo.svg";
import "./App.css";
import Community from "./components/Community";
import Contact from "./components/Contact";
import Feature from "./components/Feature";
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import Promo from "./components/Promo";
import Registrer from "./components/Registrer";

function App() {
	return (
		<div className="App">
			<Header />
			<Presentation />
			<Promo />
			<Feature />
			<Community />
			<Registrer />
			<Contact />
		</div>
	);
}

export default App;

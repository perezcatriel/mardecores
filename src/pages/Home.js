import Header from "../components/Header";
import Presentation from "../components/Presentation";
import Promo from "../components/Promo";
import Feature from "../components/Feature";
import Community from "../components/Community";
import Registrer from "../components/Registrer";
import Contact from "../components/Contact";

function Home() {
	return (
		<>
			<Header />
			<Presentation />
			<Promo />
			<Feature />
			<Community />
			<Registrer />
			<Contact />
		</>
	);
}

export default Home;

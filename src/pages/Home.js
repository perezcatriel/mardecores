import React from 'react';
import Phylosopy from "../components/Phylosopy/Phylosopy";
import Promo from "../components/Promo/Promo";
import Feature from "../components/Product/Feature";
import Community from "../components/SocialMedia/Community";
import Registrer from "../components/Register/Registrer";

function Home() {
	return (
		<>
			<Phylosopy />
			<Promo />
			<Feature />
			<Community />
			<Registrer />
		</>
	);
}

export default Home;

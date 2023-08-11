import React from 'react';
import "./Community.css";

import esteticaServicios from "../../assets/store/estetica-servicios.jpeg";
import magiaBudaRojo from "../../assets/store/magia-buda-rojo.jpeg";
import magiaBuda from "../../assets/store/magia-buda.jpeg";
import magiaCabeza from "../../assets/store/magia-cabeza.jpeg";
import magiaPortaSahumerio from "../../assets/store/magia-portasahumerio.jpeg";
import magiaSahumerioBolita from "../../assets/store/magia-sahumeria-bolita.jpeg";
import magiaSahumerio from "../../assets/store/magia-sahumerio.jpeg";
import ropaAritoEstrella from "../../assets/store/ropa-arito-estrellas.jpeg";
import ropaAritos from "../../assets/store/ropa-aritos.jpeg";
import ropaBotaNegra from "../../assets/store/ropa-bota-negra.jpeg";
import ropaBrazalete from "../../assets/store/ropa-brazalete.jpeg";
import ropaPinza from "../../assets/store/ropa-pinza.jpeg";

function Community() {
	return (
		<section className="community">
			<h2 className="community--title"><a href="https://www.instagram.com/marde_cores/" className="link" target="_blank">@marde_cores</a></h2>
			<h2 className="community--title"><a href="https://www.instagram.com/marde_cores.estetica/" className="link" target="_blank">@marde_cores.estetica</a></h2>

			<article className="community--cards">
				<section className="community--cards__col-1">
					<img src={esteticaServicios} className="a" />
					<img src={magiaPortaSahumerio} className="b" />
					<img src={magiaCabeza} className="c" />
					<img src={magiaBuda} className="d" />
					<img src={magiaSahumerioBolita} className="e" />
					<img src={ropaAritos} className="f" />
				</section>

				<section className="community--cards__col-2">
					<img src={ropaPinza} className="g" />
					<img src={ropaAritoEstrella} className="h" />
					<img src={ropaBotaNegra} className="i" />
					<img src={ropaBrazalete} className="j" />
					<img src={magiaBudaRojo} className="k" />
					<img src={magiaSahumerio} className="l" />
				</section>
			</article>
		</section>
	);
}

export default Community;

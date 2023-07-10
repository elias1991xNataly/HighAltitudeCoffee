import React from 'react';

const Coffee_Cards = ()=>{
	return(<section className="coffeecards bg-[url('https://s3-alpha-sig.figma.com/img/03a7/c79a/086aa1e226e5adfe010fd0fb3ff3e2cb?Expires=1685318400&Signature=CAlTit-JRAZrKabAm3GraaDpYhg3X0NGEEiH3QjpG96AmlsdEuz1H4N3ZFr-Y7uhCN-Ow7QXE20v18NxhYYx53i7koCVJUVRrLJ7llo8WvKunZequToJotQtdJ5WtH7PJeoImwJD2SbHN3v2wznyD10Pwg6f5qcc6nd4Q9KE6V-hBi0MVRuiudWWJyKpCBU3sPybGZt0dVlOFTKZFD6vnOkfSOIwnKozq3Rcx5uf1DrwFTm3botGQOe2xrpk-9w2l46CLbHpQiKQpaHEm8F5B-ydPB1pSWTtEU1Uvg2cfX94pvXdpj1ur8ONvGa71v1YeObFg4gbb7xBMd8LNwPl1g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')]">
	<h1 className="coffeecardsText">Café con las mejores condiciones</h1>
	<article className="coffeecardsconditions">
		<div className="coffeecard">
			<button className="buttonforbuying"> <img src="./images/Icon (1).png"/> </button>
			<h3>Recibe tu pedido sin preocuparte</h3>
			<p>Tienes cosas más importantes en la cabeza por es con nuestras suscripción de café, nunca te
				quedarás
				sin
				tu taza de la mañana.
			</p>
		</div>
		<div className="coffeecard">
			<button className="buttonforbuying" id="sending"> <img src="./images/Icon of truck.png"/> </button>
			<h3>Envío en 24/48h</h3>
			<p>
				Pide tu café antes de las 12h y lo recibirás al día siguiente.
			</p>
		</div>
		<div className="coffeecard">
			<button className="buttonforbuying" id="benefits"> <img src="./images/Icon of gift.png"/> </button>
			<h3>Descuentos y beneficios</h3>
			<p>
				Cada dos meses, te regalamos una bolsa de un nuevo origen sorpresa, para que lo descubras junto
				a
				nosotros.
			</p>
		</div>
	</article>
</section>)
}



export default Coffee_Cards;

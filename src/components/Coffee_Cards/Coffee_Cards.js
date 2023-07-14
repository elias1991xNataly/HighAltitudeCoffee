import React from 'react';

const Coffee_Cards = () => {
	return (
	<section className="coffeecards bg-[url('https://i.imgur.com/OTXEdIB.png')]  bg-no-repeat grid grid-cols-3">
		<h1 className="coffeecardsText font-bold">Café con las mejores condiciones</h1>
		<article className="coffeecardsconditions flex flex-row space-y-3">
			<div className="coffeecard flex flex-col space-y-4">
				<button className="buttonforbuying"> <img src="https://i.imgur.com/efFQzXq.png" /> </button>
				<h3 className='font-bold'>Recibe tu pedido sin preocuparte</h3>
				<p>Tienes cosas más importantes en la cabeza por es con nuestras suscripción de café, nunca te
					quedarás
					sin
					tu taza de la mañana.
				</p>
			</div>
			<div className="coffeecard flex flex-col space-y-4">
				<button className="buttonforbuying" id="sending"> <img src="https://i.imgur.com/IRraBi3.png" /> </button>
				<h3 className='font-bold'>Envío en 24/48h</h3>
				<p>
					Pide tu café antes de las 12h y lo recibirás al día siguiente.
				</p>
			</div>
			<div className="coffeecard flex flex-col space-y-4">
				<button className="buttonforbuying" id="benefits"> <img src="https://i.imgur.com/bI8wOCp.png" /> </button>
				<h3 className='font-bold'>Descuentos y beneficios</h3>
				<p>
					Cada dos meses, te regalamos una bolsa de un nuevo origen sorpresa, para que lo descubras junto
					a
					nosotros.
				</p>
			</div>
		</article>
	</section>
	)
}



export default Coffee_Cards;

import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../Context/Cart_context';
import { Link } from 'react-router-dom';

const Success_section = () => {
	const { sumPriceOfAllCoffees, typeShipment, totalCart, cartCoffee } = useContext(CartContext);

	function randomXToY(minVal, maxVal) {
		var randVal = minVal + (Math.random() * (maxVal - minVal));
		return Math.round(randVal);
	}
	var random = randomXToY(10001, 99999);







	return (<section className="success flex flex-col justify-center items-center py-7 space-y-7">
		<article className="statement space-y-5">
			<div className='flex justify-center'>
				<img src="https://i.imgur.com/bI8wOCp.png" alt="" className='flex justify-center' />
			</div>
			<div className='flex justify-center'>
				<h2 className='text-custom-green font-bold text-xl'>El pedido se ha realizado con exito</h2>
			</div>
			<div id="products" className='flex flex-col items-center justify-center '><p>{`El pedido #${random} se encuentra en preparación.`}</p><p>Lo recibirás dentro de las fechas acordadas en tu envío.</p> <p>Hemos enviado un ticket a tu correo electrónico</p> </div>
			<div id="stateOfPurchase"></div>
		</article>
		<article>
			<div className="totalOfCart bg-custom-graylighter p-10">
				<h3>Tu pedido</h3>
				{cartCoffee.map((coffee, key) => {
					return (<div id={key} className='flex w-fit flex-row border-b-2 place-items-center p-3 m-3'>
						<p className=' flex place-items-center gap-3'>
							<p className='w-6 h-6 rounded-full bg-custom-graylighter flex justify-center'>{coffee.quantity}</p>

							<img className='w-14 h-14' src={coffee.img} alt="" />
							<div className=''>
								<p className='' >{coffee.name}</p>
								<p >Paquete de café, 250gr</p>
							</div>

						</p>
						<div className='pl-96'>
							<p className='font-bold'>{coffee.price * coffee.quantity},00 €</p>
						</div>
					</div>)
				})}
				<div className="line"></div>
				<div className='space-y-3'>
					<div className="subtotalInEuros flex justify-between">
						<p>SUBTOTAL</p>
						<p className="amount relative pl-96 right-6 font-bold " id="amountOfSubtotal">{sumPriceOfAllCoffees()},00 €</p>
					</div>
					<div className="subtotalInEuros flex justify-between">
						<p>ENVIO</p>
						<p className="amount relative pl-96  right-6 font-bold" id="amountOfSend">{typeShipment},00 €</p>

					</div>
					<div className="line"></div>
					<div className="TotalInEuros flex justify-between">
						<h3 className='font-bold'>TOTAL</h3>
						<p className="amount font-bold relative pl-96 right-6" id="amountOfTotal">{totalCart()},00 €</p>
					</div>
					<div className="subtotalInEuros">
						<p className="amount flex justify-end" id="vat">Incluye {(totalCart() * 0.21).toFixed(2)}€ de Iva.</p>
					</div>
				</div>
			</div>
		</article>
		<article className='bottom-96 relative top-6'>
			<Link to="/shop"> <button id="goShopButton" className='bg-custom-green text-white p-6 rounded-2xl'>Volver a la tienda</button></Link>
		</article>
	</section>)



}


export default Success_section;

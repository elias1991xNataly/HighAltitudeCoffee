import React from 'react';
import { useContext, useState } from 'react';
import { CartContext } from '../../Context/Cart_context';
import SendOptions from '../SendOptions/SendOptions';

const CartSection = () => {

	const { cartCoffee, sumQuantityOfCoffee, restQuantityOfCoffee, lengthOfCoffeesInCart } = useContext(CartContext)


	return (<section className="cartForShopping">
		<div className="productsInCartDescription">
			<h2 id="numberItems" className='flex justify-center text-custom-green font-bold'>Cesta ({lengthOfCoffeesInCart()})</h2>
			<div className="productsInCart flex justify-evenly">
				<div className='space-y-6'>
					{console.log(cartCoffee)}
					<h3 id="products" className='font-bold'>Productos</h3>
					{cartCoffee.map((coffee, key) => {
						return (<div id={key} className='flex w-fit flex-row border-b-2 place-items-center p-3 m-3'>
							<p className=' flex place-items-center gap-3'>
								<button onClick={() => { restQuantityOfCoffee(coffee) }}>-</button>
								<p className='w-6 h-6 rounded-full bg-custom-graylighter flex justify-center'>{coffee.quantity}</p>

								<button onClick={() => { sumQuantityOfCoffee(coffee) }}>+</button>
								<img className='w-14 h-14' src={coffee.img} alt=""/>
								<div className=''>
									<h2 className='font-bold' >{coffee.name}</h2>
									<p >Paquete de café, 250gr</p>
								</div>

							</p>
							<div className='pl-96'>
								<p className='font-bold'>{coffee.price * coffee.quantity},00 €</p>
							</div>
						</div>)
					})}
					<SendOptions />
				</div>
				<div>
				</div>
			</div>
		</div>
	</section>)
}

export default CartSection;

import React from 'react';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../../Context/Cart_context';
import SendOptions from '../SendOptions/SendOptions';
import Cart_Breakdown from '../Cart_Breakdown/Cart_Breakdown';
import CkeckoutAndKeepBuying from '../CkeckoutAndKeepBuying/CkeckoutAndKeepBuying';

const Cart_Section = () => {

	const { cartCoffee, setQuantity, sumQuantityOfCoffee, restQuantityOfCoffee, lengthOfCoffeesInCart } = useContext(CartContext)
	const [count, setCount] = useState(0);


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
								<img className='w-14 h-14' src={coffee.img} />
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
					<SendOptions />
				</div>
				<div>
				</div>
			</div>
		</div>
	</section>)
}

export default Cart_Section;

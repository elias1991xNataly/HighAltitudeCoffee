import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../Context/Cart_context';
import CkeckoutAndKeepBuying from '../CkeckoutAndKeepBuying/CkeckoutAndKeepBuying';

const Cart_Breakdown = () => {
	const { sumPriceOfAllCoffees, typeShipment, totalCart } = useContext(CartContext);
	return (<div className=" flex flex-col p-5  space-y-6">
		<h3 className='font-bold'>Total del Carrito</h3>
		<div className="line"></div>
		<div className="subtotalInEuros flex justify-around space-x-24">
			<p>SUBTOTAL</p>
			<p className="amount font-bold" id="amountOfSubtotal">{sumPriceOfAllCoffees()},00 €</p>
		</div>
		<div className="subtotalInEuros flex justify-around  space-x-32">
			<p>ENVIO</p>
			<p className="amount font-bold" id="amountOfSend">{typeShipment},00 €</p>

		</div>
		<div className="line"></div>
		<div className="TotalInEuros flex space-x-32 justify-around ">
			<h3 className='font-bold'>TOTAL</h3>
			<p className="amount font-bold" id="amountOfTotal">{totalCart()},00 €</p>
		</div>
		<div className="subtotalInEuros">
			<p className="amount flex justify-end text-sm text-custom-gray" id="vat">Incluye {(totalCart() * 0.21).toFixed(2)}€ de Iva.</p>
		</div>
	</div>)
}

export default Cart_Breakdown;

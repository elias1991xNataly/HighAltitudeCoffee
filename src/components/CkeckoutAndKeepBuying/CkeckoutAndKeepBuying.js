import React from 'react';
import { Link } from 'react-router-dom';

const CkeckoutAndKeepBuying = () => {
	return (<div className="goCheckout space-x-6 flex justify-evenly">
		<Link to="/Checkout"className='pl-10' > <button id="goCheckoutButton" className='text-white bg-green-900 hover:bg-opacity-50 rounded-lg p-3'>Ir a checkout</button></Link>
		<button id="buyMore" className='text-custom-green'><Link to="/shop">Seguir comprando</Link></button>
	</div>)
}
export default CkeckoutAndKeepBuying;

import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Cart_Section from '../../components/Cart_Section/Cart_Section';
import CopyRight from '../../components/CopyRight/CopyRight';
import CkeckoutAndKeepBuying from '../../components/CkeckoutAndKeepBuying/CkeckoutAndKeepBuying';
import Cart_Breakdown from '../../components/Cart_Breakdown/Cart_Breakdown';


const Cart = () => {
	return (<div>
		<NavBar />
		<div className='flex flex-row justify-around p-10'>

			<Cart_Section />
			<div className='totalOfCart flex flex-col bg-custom-graylighter w-96 h-96 space-y-3'>
				<Cart_Breakdown />
				<CkeckoutAndKeepBuying/>
			</div>
		</div>
		<CopyRight />
	</div>)
}
export default Cart;
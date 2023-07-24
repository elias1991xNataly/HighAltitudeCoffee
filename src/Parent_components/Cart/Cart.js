import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import CartSection from '../../components/Cart_Section/Cart_Section';
import CopyRight from '../../components/CopyRight/CopyRight';
import CkeckoutAndKeepBuying from '../../components/CkeckoutAndKeepBuying/CkeckoutAndKeepBuying';
import CartBreakdown from '../../components/Cart_Breakdown/Cart_Breakdown';


const Cart = () => {
	return (<div>
		<NavBar />
		<div className='flex flex-row justify-around p-10'>

			<CartSection />
			<div className='totalOfCart flex flex-col flex-wrap content-start bg-custom-graylighter w-96 h-96 space-y-3 mt-8'>
				<CartBreakdown />
				<CkeckoutAndKeepBuying/>
			</div>
		</div>
		<CopyRight />
	</div>)
}
export default Cart;
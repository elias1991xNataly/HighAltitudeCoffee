import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import CopyRight from '../../components/CopyRight/CopyRight';
import Cart_Breakdown from "../../components/Cart_Breakdown/Cart_Breakdown";
import CheckoutSection from '../../components/CheckoutSection/CheckoutSection';
import PayAndPlaceTheOrder from '../../components/PayAndPlaceTheOrder/PayAndPlaceTheOrder';
const Checkout = () => {
	return (<div>
		<NavBar />
		<div className='flex flex-row justify-between px-0 py-10 space-x-10'>
			<CheckoutSection/>
			<div className='totalOfCart flex flex-col max-h-96 justify-center bg-custom-graylighter bg-contain ml-2 py-86 px-28 relative -left-28 top-32'>
			<Cart_Breakdown />
			<PayAndPlaceTheOrder/>
			</div>
		</div>
		<CopyRight />
	</div>)
}

export default Checkout;
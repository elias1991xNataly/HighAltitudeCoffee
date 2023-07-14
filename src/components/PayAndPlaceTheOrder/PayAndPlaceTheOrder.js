import React from 'react';
import { Link } from 'react-router-dom';


const PayAndPlaceTheOrder =()=>{
	return(<div>
		<Link to="/Success"><button className='text-white bg-green-900 hover:bg-opacity-50 rounded-lg p-3'>Pagar y realizar pedido</button></Link>
	</div>)
}
export default PayAndPlaceTheOrder;

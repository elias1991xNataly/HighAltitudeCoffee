import React from 'react';
import Navbar from "../../components/NavBar/NavBar"
import Success_section from '../../components/Success_section/Success_section';
import CopyRight from '../../components/CopyRight/CopyRight';

const Success = () => {




	return (<div>
		<Navbar />
		<Success_section />
		<div className='top-96 relative'>

			<CopyRight />
		</div>
	</div>)
}

export default Success;

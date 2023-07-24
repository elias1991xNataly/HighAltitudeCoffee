import React from 'react';
import Navbar from "../../components/NavBar/NavBar"
import SuccessSection from '../../components/Success_section/Success_section';
import CopyRight from '../../components/CopyRight/CopyRight';

const Success = () => {




	return (<div>
		<Navbar />
		<SuccessSection />
		<div className='top-96 relative'>

			<CopyRight />
		</div>
	</div>)
}

export default Success;

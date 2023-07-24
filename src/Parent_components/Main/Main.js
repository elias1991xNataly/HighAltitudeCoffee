import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import CoffeeRecollecting from '../../components/Coffee_Recollecting/Coffee_Recollecting';
import Footer from '../../components/Footer/Footer';
import CoffeeCards from '../../components/Coffee_Cards/Coffee_Cards';
import CoffeeShop from '../../components/Coffee_Shop/Coffee_Shop';
import Faqs from '../../components/Faqs/Faqs';
import Novelty from '../../components/Novelty/Novelty';
import Form from '../../components/Form/Form';

const Main = () => {
	return (<div>
		<NavBar />
		<CoffeeRecollecting />
		<CoffeeCards/>
		<Novelty/>
		<Faqs/>
		<CoffeeShop/>
		<Form/>
		<Footer/>
	</div>)
}

export default Main;

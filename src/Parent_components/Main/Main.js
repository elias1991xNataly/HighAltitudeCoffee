import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Coffee_Recollecting from '../../components/Coffee_Recollecting/Coffee_Recollecting';
import Footer from '../../components/Footer/Footer';
import Coffee_Cards from '../../components/Coffee_Cards/Coffee_Cards';
import Coffee_Shop from '../../components/Coffee_Shop/Coffee_Shop';
import Faqs from '../../components/Faqs/Faqs';
import Novelty from '../../components/Novelty/Novelty';
import Form from '../../components/Form/Form';

const Main = () => {
	return (<div>
		<NavBar />
		<Coffee_Recollecting />
		<Coffee_Cards/>
		<Novelty/>
		<Faqs/>
		<Coffee_Shop/>
		<Form/>
		<Footer/>
	</div>)
}

export default Main;

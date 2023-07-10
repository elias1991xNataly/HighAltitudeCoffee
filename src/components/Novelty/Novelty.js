import React from 'react';
import { Link } from 'react-router-dom';
import CoffeeCart, { CartContext } from '../../Context/Cart_context';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';



const Novelty = () => {
	const coffeeUrl = "http://localhost:5050/coffee";
	const [coffee, setCoffee] = useState();
	const { cartCoffee,addToCart } = useContext(CartContext);

	const getData = async () => {
		const coffees = []
		const data = await getDocs(collection(db, "Coffee"));
		data.forEach(coffee => {
			const realData = coffee.data()
			coffees.push(realData)
		})
		return coffees
	}


	useEffect(() => {
		getData().then(res => setCoffee(res))
		// fetch(coffeeUrl).then((response)=>response.json()).then((response)=> setCoffee(response))
		// axios.get(coffeeUrl).then((response)=> setCoffee(response.data))
	}, [])







	return (<div><h2 className="noveltyText">Novedades</h2>
		<section className="novelty">
			{

				coffee?.slice(0, 4).map(coffe => (<div className='products'>
					<img src={coffe.image} alt="" className='imageSetUp' />
					<h2 className='nameOfCoffee'>{coffe.name}</h2>

					<p className='priceOfCoffee'>{coffe.price},00€</p>
					<button className="addButton" onClick={() => addToCart({ name: coffe.name, id: coffe, img: coffe.img, price: coffe.price })}>Añadir</button>
				</div>
				))




			}
{console.log(cartCoffee)}
		</section>
		{/* <!-- <a href="#" className="noveltyButton">Ver todos<img className="arrowSetup" src="./images/Icon (2).svg"/></a> --> */}
		<Link path="/shop" className="noveltyButton">Ver todos<img src="./images/Icon (2).svg" /></Link>

	</div>)
}

export default Novelty;

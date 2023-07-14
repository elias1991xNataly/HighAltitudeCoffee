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
	let {cartCoffee, addToCartIfItsNoRepeated, setCartCoffee } = useContext(CartContext);

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







	return (<div className='p-10'><h2 className="noveltyText text-custom-green  font-bold">Novedades</h2>
		<section className="novelty">
			{console.log(coffee)}
			{
				coffee?.slice(0, 4).map((coffe, key) => (<div className='products' id={key}>
					<img src={coffe.image} alt="" className='imageSetUp' />
					<h2 className='nameOfCoffee'>{coffe.name}</h2>

					<p className='priceOfCoffee'>{coffe.price},00€</p>
					<button className="addButton" onClick={() => addToCartIfItsNoRepeated({ name: coffe.name, id: coffe.id, img: coffe.image, price: coffe.price, quantity: 1 })}>Añadir</button>
				</div>
				))




			}
			{console.log(cartCoffee)}
		</section>
		{/* <!-- <a href="#" className="noveltyButton">Ver todos<img className="arrowSetup" src="./images/Icon (2).svg"/></a> --> */}
		<Link to="/shop" className="noveltyButton">Ver todos<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>
</Link>
		

	</div>)
}

export default Novelty;

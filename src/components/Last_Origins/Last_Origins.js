import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import CoffeeCart, { CartContext } from '../../Context/Cart_context';


const Last_Origins = () => {
	const coffeeUrl = "http://localhost:5050/coffee";
	const [coffee, setCoffee] = useState();
	let { cartCoffee, addToCartIfItsNoRepeated, setCartCoffee } = useContext(CartContext);

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


	// let QuantityHandler = [];
	// cartCoffee.forEach(element => {

	// })





	return (
		<div className='flex flex-col space-y-6 p-10'>
			<h2 className='noveltyText text-custom-green text-bold position-absolute' id="title">Últimos orígenes</h2>
			<div className='flex items-center justify-center space-x-6'>
				{console.log(coffee)}

				{
					coffee?.slice(0, 4).map((coffe, key) => (<div className='products' id={key}>
						<img src={coffe.image} alt="" className='imageSetUp' />
						<h2 className='nameOfCoffee'><b>{coffe.name}</b></h2>

						<p className='priceOfCoffee'>{coffe.price},00 €</p>
						<button className="addButton" onClick={() => addToCartIfItsNoRepeated({ name: coffe.name, id: coffe.id, img: coffe.image, price: coffe.price, quantity: 1 })}>Añadir</button>
					</div>
					))
				}
			</div>
			<div className='flex justify-center space-x-6'>
				{console.log(CoffeeCart)}
				{
					coffee?.slice(4, 8).map((coffe, key) => (<div className='products'>
						<img src={coffe.image} alt="" className='imageSetUp' />
						<h2 className='nameOfCoffee'>{coffe.name}</h2>

						<p className='priceOfCoffee'>{coffe.price},00 €</p>
						<button className="addButton" onClick={() => addToCartIfItsNoRepeated({ name: coffe.name, id: coffe.id, img: coffe.image, price: coffe.price, quantity: 1 })}>Añadir</button>
					</div>
					))
				}
				{console.log(cartCoffee)}
			</div>
		</div>)

}


export default Last_Origins;

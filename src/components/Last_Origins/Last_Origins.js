import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../Context/Cart_context';


const Last_Origins = () => {
	const coffeeUrl = "http://localhost:5050/coffee";
	const [coffee, setCoffee] = useState();
	let { quantity,setQuantity, cartCoffee, addToCart } = useContext(CartContext);

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



	return (
		<div className='flex flex-col'>
			<h2 className='noveltyText'>Novedades</h2>
			<div className='flex'>
				{console.log(coffee)}

				{
					coffee?.slice(0, 4).map(coffe => (<div className='products'>
						<img src={coffe.image} alt="" className='imageSetUp' />
						<h2 className='nameOfCoffee'>{coffe.name}</h2>

						<p className='priceOfCoffee'>{coffe.price},00€</p>
						<button className="addButton" onClick={() => addToCart({ name: coffe.name, id: coffe, img: coffe.img, price: coffe.price })}>Añadir</button>
					</div>
					))
				}
			</div>
			<div className='flex'>

				{
					coffee?.slice(4, 8).map(coffe => (<div className='products'>
						<img src={coffe.image} alt="" className='imageSetUp' />
						<h2 className='nameOfCoffee'>{coffe.name}</h2>

						<p className='priceOfCoffee'>{coffe.price},00€</p>
						<button className="addButton" onClick={() => addToCart({ name: coffe.name, id: coffe, img: coffe.img, price: coffe.price, quantity: `${quantity += 1}` })}>Añadir</button>
					</div>
					))
				}
				{console.log(cartCoffee)}
			</div>
		</div>)
	/* {
				coffee?.map(coffe => (<div>
					<p>{coffe.name}</p>
	
					<p>{coffe.price}</p>
					<img src={coffe.image} alt="" />
				</div>))
			} */
}


export default Last_Origins;

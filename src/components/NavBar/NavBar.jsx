import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
	const coffeeUrl = "http://localhost:5050/coffee";
	const [coffee, setCoffee] = useState();


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
	return (<nav className='bg-black text-white'>
		<div className='flex justify-between p-3'>
			<div className='flex position-relative space-x-6'>
				<NavLink className="goHome flex position-relative space-x-6" to="/"> <p className="goHome">cafedealtura.com <b> <img src="./images/Vector.png" /></b></p></NavLink>
			</div>
			<div className="splitter flex justify-around position-relative space-x-6">
				<NavLink to="/shop">
					<p className="goTo">Tienda</p>
				</NavLink>
				<NavLink to="/">
					<p className="goTo">Suscripción</p>
				</NavLink>
				<p className="goTo">Para empresas</p>
				<p className="goTo">Sobre nosotros</p>
				<p className="goTo">Contacto</p>
			</div>
			<div className="phone position-relative space-x-6 ">
				<NavLink type="color:black" to="/"><img src="./images/Icon.png" />+34 919 49 05 18</NavLink>


				<NavLink to="/"> <button id="logInButton">Iniciar sesión</button></NavLink>
			</div>
		<div class="cartsection"><NavLink to="/cart" id="cart"> <img src="./images/Group.png" /></NavLink></div>
		</div>
		</nav>)
		{/* {
			coffee?.map(coffe => (<div>
				<p>{coffe.name}</p>

				<p>{coffe.price}</p>
				<img src={coffe.image} alt="" />
			</div>))
		} */}
}


export default NavBar;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../Context/Cart_context';


const NavBar = () => {
	const { lengthOfCoffeesInCart } = useContext(CartContext);


	


	// useEffect(() => {
	// 	getData().then(res => setCoffee(res))
	// 	// fetch(coffeeUrl).then((response)=>response.json()).then((response)=> setCoffee(response))
	// 	// axios.get(coffeeUrl).then((response)=> setCoffee(response.data))
	// }, [])
	return (<nav className='bg-custom-black text-white '>
		<div className='flex justify-around p-3 items-center'>
			{/* <div className='flex p-3 gap-1 space-x-6 items-center'> */}
				<NavLink className="goHome flex position-relative  flex flex-row items-center " to="/"> <p className="goHome items-center flex justify-start position-relative gap-1.5 space-x-6">cafedealtura.com <b> <img src="./images/ps_coffee-hot.png" alt=""/></b></p></NavLink>
			{/* </div> */}
			{/* <div className="splitter flex justify-around position-relative items-center space-x-6"> */}
				<NavLink to="/shop">
					<p className="goTo">Tienda</p>
				</NavLink>
				<NavLink to="/">
					<p className="goTo">Suscripción</p>
				</NavLink>
				<p className="goTo">Para empresas</p>
				<p className="goTo">Sobre nosotros</p>
				<p className="goTo">Contacto</p>
			{/* </div> */}
			<div className="phone position-relative space-x-6 flex flex-row items-center">
				<NavLink type="color:black" to="/" className="flex flex-row items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
					<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
				</svg>
					+34 919 49 05 18</NavLink>

				<NavLink to="/"> <button id="logInButton" className='bg-custom-gray py-3 px-6 rounded'>Iniciar sesión</button></NavLink>
			</div>
			{/* <div className="cartsection flex flex-row items-center"> */}
				<NavLink to="/cart" id="cart" className="flex flex-row items-center"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
					<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
				</svg>
					<p className='bg-custom-gray p-3 w-6 h-6 flex items-center justify-center m-1 rounded-full'> {lengthOfCoffeesInCart()} </p>
				</NavLink>
			{/* </div> */}
		</div>
	</nav>)

}


export default NavBar;

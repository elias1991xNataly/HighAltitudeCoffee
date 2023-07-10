import React from 'react';
import { Link } from 'react-router-dom';
import CopyRight from '../CopyRight/CopyRight';


const Footer = () => {
	return (
		<footer className='bg-black text-white flex-col justify-between position-relative p-5'>
			<div id="footer" className='flex content-around position-relative space-x-6'>
				<div className="waysOfContact flex-col bg-dark" id="identity">
					<div>
						<p className="logo" id="footerlogo">cafedealtura.com<img src="./images/Vector.png" /></p>
					</div>
					<h3 id="wehelpyou">Te ayudamos en</h3>
					<div className="waysOfContact">
						<button className="contact" id="phone">
							<div>
								<p><img src="./images/Icon.png" />+34 919 49 05 18</p>
							</div>
						</button>
						<div></div>
						<button className="contact" id="email">
							<div>
								<p><img src="./images/Icon (2).png" />hola@cafedealtura.com</p>
							</div>
						</button>
					</div>
				</div>
				<div className="directionsAndTerms position-relative flex space-x-12">
					<div className="directions flex flex-col position-relative ">
						<Link to="/shop" className="logo">Tienda</Link>
						<Link to="/" className="logo">Suscripción</Link>
						<Link to="/" className="logo">Para empresas</Link>
						<Link to="/" className="logo">Sobre nosotros</Link>
						<Link to="/" className="logo">Contacto</Link>
					</div>
					<div className="terms flex flex-col position-relative ">
						<Link to="/" className="logo">Política de privacidad</Link>
						<Link to="/" className="logo">Política de coockes</Link>
						<Link to="/" className="logo">Términos y condiciones</Link>
					</div>
				</div>
				<div></div>
			</div>
			<CopyRight/>
		</footer>
	)
}


export default Footer;

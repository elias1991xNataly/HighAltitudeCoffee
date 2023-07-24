import React from 'react';
import { Link } from 'react-router-dom';
import CopyRight from '../CopyRight/CopyRight';


const Footer = () => {
	return (
		<footer className='text-white flex-col justify-between position-relative'>
			<div id="footer" className='flex bg-custom-black content-around position-relative space-x-6'>
				<div className="waysOfContact flex-col" id="identity">
					<div>
						<p className="logo flex items-center" id="footerlogo" >cafedealtura.com<img src="./images/ps_coffee-hot.png" alt=""/></p>
					</div>
					<h3 id="wehelpyou">Te ayudamos en</h3>
					<div className="waysOfContact">
						<button className="contact" id="phone">
							<div>
								<p className="flex items-center p-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
									<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
								</svg>+34 919 49 05 18</p>
							</div>
						</button>
						<div></div>
						<button className="contact" id="email">
							<div>
								<p className="logo flex items-center p-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
									<path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
								</svg>
									hola@cafedealtura.com</p>
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
			<CopyRight />
		</footer>
	)
}


export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
const Coffee_Shop = () => {
	return (<section className="cometous">
		<div className="blockInfoCoffe" id="padding">
			<h2 id="tryit">Pruébalo en nuestro coffee shop</h2>
			<p id="ourshopinthemid"> Visita nuestra cafetería en el centro de la ciudad para probar los granos de café
				antes de hacer tu
				pedido y
				llévate un descuento.</p>
			<div id="reachus">
				<Link id="reachus" 
					to="https://www.google.es/maps/place/Gamma+Tech+School/@40.4373963,-3.6780706,17z/data=!3m2!4b1!5s0xd4228fdcb7e008d:0xc14eb6e97092bea0!4m6!3m5!1s0xd4229deaf9deea1:0xed04d2cdcbd84b03!8m2!3d40.4373922!4d-3.6754957!16s%2Fg%2F11t18d_y50?entry=ttu">Cómo
					llegar<img src="./images/right arrow.png" /></Link>

			</div>
		</div>
		<div className="cometous">
			<img className="visitUs" id="cofehero" src="./images/Hero coffe.png" alt="installment" />
		</div>
		{/* <!-- <a href="#" className="noveltyButton">Ver todos<img className="arrowSetup" src="./images/Icon (2).svg"/></a> --> */}
		<Link to="/shop" className="noveltyButton">Ver todos<img src="./images/Icon (2).svg" /></Link>

</section >
	)
}


export default Coffee_Shop;

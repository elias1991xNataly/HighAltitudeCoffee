import React from 'react';
import { Link } from 'react-router-dom';
const CoffeeShop = () => {
	return (<section className="cometous flex justify-between py-12">
		<div className="blockInfoCoffe space-y-6" id="padding">
			<h2 id="tryit" className='text-custom-green font-500 text-2xl'>Pruébalo en nuestro coffee shop</h2>
			<p id="ourshopinthemid"> Visita nuestra cafetería en el centro de la ciudad para probar los granos de café
				antes de hacer tu
				pedido y
				llévate un descuento.</p>
			<div id="reachus">
				<Link id="reachus" className='underline'
					to="https://www.google.es/maps/place/Gamma+Tech+School/@40.4373963,-3.6780706,17z/data=!3m2!4b1!5s0xd4228fdcb7e008d:0xc14eb6e97092bea0!4m6!3m5!1s0xd4229deaf9deea1:0xed04d2cdcbd84b03!8m2!3d40.4373922!4d-3.6754957!16s%2Fg%2F11t18d_y50?entry=ttu"><b>Cómo
					llegar</b><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
					</svg></Link>

			</div>
		</div>
		<div className="relative w-6/12 justify-end mr-10">
			<img src="https://s3-alpha-sig.figma.com/img/4570/2d93/af83409b898246e822c86278c804fd4c?Expires=1690156800&Signature=R-z5K17PGdmLqSpzfSS54L9cNTncvN78sM1EMwegKBfCu95Hiu4Lck87KuFFAnjS6UMH7pqRqv14y~Dfr20-cSsibetuLxrmzK7yqNv9TXzY4p-QrmoKJCm3GNC4vJuqo~voyLTWRrZPlTFlqyRDH4GgHR68Bvv1~HJtbMEOBLntkxPk~5czMNdVoZxA4L0flm1fhU5d1WFVPVs6fYGInpUjRaiSnwu4Jo2Tsw23bOZOT7mMKCzjkJMfxHKiH6ztD3hZtZp5WvGtXaCsmhHfKNfoy02iSn4PyKMxjQHuKkuSAaG7fmeyLyc8zVxA3g4g0IRiRuuqJovFNBTs37TCLA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" className="relative rounded-[20px] flex justify-end self-stretch "/>
		</div>
		{/* <!-- <a href="#" className="noveltyButton">Ver todos<img className="arrowSetup" src="./images/Icon (2).svg"/></a> --> */}

	</section >
	)
}


export default CoffeeShop;

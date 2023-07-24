import { useContext } from "react";
import React from 'react';
import { CartContext } from "../../Context/Cart_context";


const SendOptions = () => {

	const { typeShipment,  onShipmentValue } = useContext(CartContext);
	return (

		<div className="chooseSendingOption space-y-6">
			<h3 className="font-bold">Seleccionar Envío</h3>


			<div className='flex justify-between '>
				<div className='flex gap-5'>
					<input id="freeSend" type="radio" name="typeOfSend" className="accent-green-700" value="0" onChange={onShipmentValue} checked={typeShipment === "0"} />

					<label >
						<p > Envío 5-7días</p>
						<p>Opción estándar sin seguimiento</p>
					</label>
				</div>

				<div>
					<h3 className='font-bold'>GRATIS</h3>
				</div>

			</div>
			<hr className='m-4'></hr>

			<div className='flex justify-between py-6 '>
				<div className='flex gap-5'>
					<input type="radio" className="bg-custom-green accent-green-700" name="typeOfSend" value="9" onChange={onShipmentValue} checked={typeShipment === "9"} />
					<label   >
						<p className='' >Envío urgente 24h</p>
						<p >Recibe tu pedido en las siguientes 24h (Para pedidos realizados
							antes de las 13:00).</p>
					</label>
				</div>


				<div >
					<h3 className='font-bold ' > 9,00€</h3>
				</div>
			</div>
		</div>

	)

}
export default SendOptions;

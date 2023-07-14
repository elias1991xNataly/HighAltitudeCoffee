import React from 'react';

export default function CheckoutSection() {
	return (
		<div className='Client-Info'>
			<div className="checkout-section">
				<h2>Checkout</h2>
				<div className="checkout-frame">
					<div id="product-table">
						<h3>Seleccionar método de pago</h3>
						<div className="shipping">
							<div className="radio-section">
								<input checked type="radio" name="radio" id="radio" value="debit" />
							</div>
							<label for="radio" className="details-shipping">
								<p className="ship">Tarjeta de débito</p>
								<p className="standard">Opción estándar sin seguimiento</p>
							</label>
						</div>
						<form className="pay-info">
							<div className="user-payInfo">
								<label for="payName">Titular</label>
								<input type="text" name="payName" id="payName" placeholder="Nombre del titular" />
							</div>
							<div className="user-payInfo">
								<label for="payNumber">Número de la tarjeta</label>
								<input type="number" name="payNumber" id="payNumber" placeholder="1234 1234 1234 1234" />
							</div>
							<div className="cad-cvc">
								<div className="cad-info">
									<label for="cad">Fecha de caducidad</label>
									<input pattern="\d{2}/\d{2}" type="text" name="cad" id="cad" placeholder="MM / YY" />
								</div>
								<div className="cvc-info">
									<label for="cvc">CVC</label>
									<input type="number" name="cvc" id="cvc" placeholder="123" />
								</div>
							</div>
						</form>
						<hr />
						<div className="shipping">
							<div className="radio-container">
								<input type="radio" name="radio" id="radio" value="transfer" />
							</div>
							<label for="radio" className="details-shipping">
								<p className="ship">Transferencia bancaria a la cuenta ES12 1234 1234 123457890</p>
								<p className="standard">Será necesario recibir el comprobante de la transferencia para preparar tu pedido</p>
							</label>
						</div>
						<hr />
						<div className="shipping" id="bizum">
							<div className="radio-container">
								<input type="radio" name="radio" id="radio" value="bizum" />
							</div>
							<label for="radio" className="details-shipping">
								<p className="ship">Bizum</p>
								<img src="./images/image_1.png" alt="bizum" />
							</label>
						</div>
						<h3>Dirección de envío</h3>
						<form className="address-info">
							<div className="name-address no-frame">
								<label for="name-add">Nombre</label>
								<input type="text" name="name-add" id="name-add" />
							</div>
							<div className="surname-address no-frame">
								<label for="surname-add">Apellidos</label>
								<input type="text" name="surname-add" id="surname-add" />
							</div>
							<div className="phone-address no-frame">
								<label for="phone-add">Teléfono</label>
								<input type="text" name="phone-add" id="phone-add" placeholder="+34 600 6000 600" />
							</div>
							<div className="email-address no-frame">
								<label for="email-add">Email</label>
								<input type="text" name="email-add" id="email-add" />
							</div>
							<div className="country-address no-frame">
								<label for="country-add">País</label>
								<select name="country-add" id="country-add">
									<option value="0" selected disabled>Seleccionar</option>
									<option value="es">España</option>
									<option value="it">Italia</option>
									<option value="fr">Francia</option>
									<option value="sc">Suecia</option>
									<option value="fn">Finlandia</option>
									<option value="ger">Alemania</option>
								</select>
								<img src="../assets/img/chevSelect.svg" alt="" />
							</div>
							<div className="poblation-cp">
								<div className="poblation-address">
									<label for="poblation-add">Población</label>
									<input type="text" name="poblation-add" id="poblation-add" />
								</div>
								<div className="cp-address">
									<label for="cp-add">CP</label>
									<input type="text" name="cp-add" id="cp-add" placeholder="123" />
								</div>
							</div>
							<div className="street-address">
								<div className="str-address">
									<label for="street-add">Calle</label>
									<input type="text" name="street-add" id="street-add" />
								</div>
								<div className="number-address">
									<label for="num-add">Nº</label>
									<input type="text" name="num-add" id="num-add" />
								</div>
								<div className="flat-address">
									<label for="flat-add">Piso</label>
									<input type="text" name="flat-add" id="flat-add" />
								</div>
								<div className="door-address">
									<label for="door-add">Puerta</label>
									<input type="text" name="door-add" id="door-add" />
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>)
}

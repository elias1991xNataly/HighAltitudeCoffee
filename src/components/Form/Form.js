import React from 'react';
import { Link } from 'react-router-dom';

const Form = () => {

	return (<section className="contactus">
		<article className="contactInfo">
			<h3 id="headerOfContactUs">Entra en contacto con nosotros</h3>
			<p>Si tienes dudas, ponte en contacto con nosotros a través del formularios y te responderemos lo antes
				posible.
			</p>
			<div>
				<p>También puedes ponerte en contacto con nosotros en nuestra dirección o a través del teléfono de
					la tienda</p>
				<div>
					<p>742 Evergreen Terrace </p>
					<p>Springfield, OR 12345</p>
				</div>
				<div>
					<p> +1(555)123-4567</p>
				</div>
				<div className="mail">
					<p>support@example.com</p>
				</div>
				<div>
					<p> ¿Buscas un trabajo?<Link id="ourOffers" to="/">Ver nuestras ofertas</Link></p>
				</div>
			</div>
		</article>
		<form className="form">
			<div className="nameForm">
				<label for="nameForm">Nombre completo</label>
				<input type="text" name="nameForm" id="nameForm" required />
			</div>
			<div className="email">
				<label for="emailForm">Email</label>
				<input type="email" name="emailForm" id="emailForm" required />
			</div>
			<div className="telephoneForm">
				<label for="phoneForm">Teléfono</label>
				<div className="input-phone">
					<select name="numbersPhone" id="opt">
						<option value="us">US</option>
						<option value="es">ES</option>
						<option value="gr">GR</option>
						<option value="fr">FR</option>
						<option value="it">IT</option>
						<input type="number" name="numbersPhone" id="numbersPhone" placeholder="+1 (555) 987-6543"
							required minlength="8" maxlength="11" />
					</select>
				</div>
			</div>
			<div className="textArea">
				<label for="textareaForm"></label>
				<textarea name="textareaForm" id="textareaForm" cols="30" rows="10"
					placeholder="¿En qué podemos ayudarte?" required></textarea>
			</div>
			<div className="checkTerms">
				<input type="checkbox" name="checkForm" id="checkForm" value="acept" />
				<label for="checkForm"><a id="termsandConditions" href="#">Acepto la <span id="strong">Política de
					Privacidad</span> y
					los <span id="strong">Términos y condiciones.</span></a></label>
			</div>
			<button type="submit" id="buttonForm">Enviar</button>
		</form>

	</section>)
}


export default Form;

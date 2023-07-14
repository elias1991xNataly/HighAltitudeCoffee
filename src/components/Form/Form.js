import React from 'react';
import { Link } from 'react-router-dom';

const Form = () => {

	return (<section className="contactus">
		<article className="contactInfo space-y-6">
			<h3 id="headerOfContactUs" className='font-bold'>Entra en contacto con nosotros</h3>
			<p>Si tienes dudas, ponte en contacto con nosotros a través del formularios y te responderemos lo antes
				posible.
			</p>
			<div className='space-y-6'>
				<p>También puedes ponerte en contacto con nosotros en nuestra dirección o a través del teléfono de
					la tienda</p>
				<div>
					<p>742 Evergreen Terrace </p>
					<p>Springfield, OR 12345</p>
				</div>
				<div>
					<p className='flex items-center gap-4 position-relative'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
									<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
								</svg> +1(555)123-4567</p>
				</div>
				<div className="mail" >
					<p className='flex items-center gap-4 relative'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
									<path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
								</svg>support@example.com</p>
				</div>
				<div>
					<p> ¿Buscas un trabajo?<Link id="ourOffers" to="/" className='underline'>Ver nuestras ofertas</Link></p>
				</div>
			</div>
		</article>
		<form className="form space-y-0">
			<div className="nameForm">
				<label for="nameForm">Nombre completo</label>
				<input type="text" name="nameForm" id="nameForm" required className='border'/>
			</div>
			<div className="email">
				<label for="emailForm">Email</label>
				<input type="email" name="emailForm" id="emailForm" required className='border'/>
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
				<label for="textareaForm" ></label>
				<textarea name="textareaForm" id="textareaForm" cols="30" rows="10"
					placeholder="¿En qué podemos ayudarte?" required className='border'></textarea>
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

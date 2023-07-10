import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../Context/Cart_context';

const Cart_Section = () => {

// const{cartCoffee,setCartCoffee,increaseQuantity,DecreaseQuantity}



	return (<section className="cartForShopping">
		<div className="cartTitle">
			<h2 id="numberItems">Cesta (0)</h2>
		</div>
		<div className="productsInCartDescription">
			<div className="productsInCart">
				<h3 id="products">Productos</h3>
				<div className="chooseSendingOption">
					<h3>Seleccionar Envío</h3>
					<div className="quantity">
						<div id="amount">
							<input type="radio"/>
								<p><button id="rangeOfSending">Envío 5-7 días</button></p>
								<span> Opción estándar sin seguimiento</span>
						</div>
						<div><img src="/images/5,00 €.png" alt=""/></div>
					</div>
				</div>
				<div></div>
				<div className="totalOfCart">
					<h3>Total del Carrito</h3>
					<div className="line"></div>
					<div className="subtotalInEuros">
						<p>SUBTOTAL</p>
						<p className="amount" id="amountOfSubtotal"></p>
					</div>
					<div className="subtotalInEuros">
						<p>ENVIO</p>
						<p className="amount" id="amountOfSend"></p>
					</div>
					<div className="line"></div>
					<div className="TotalInEuros">
						<h3 >TOTAL</h3>
						<p className="amount" id="amountOfTotal"></p>
					</div>
					<div className="subtotalInEuros">
						<p></p>
						<p className="amount" id="vat"></p>
					</div>
					<div className="goCheckout">
						<Link to="/Checkout"> <button id="goCheckoutButton">Ir a checkout</button></Link>
						<button id="buyMore"><Link to="/shop">Seguir comprando</Link></button>
					</div>
				</div>
			</div>
			</div>
	</section>)
}

export default Cart_Section;

import React from 'react';
import { Link } from 'react-router-dom';

const Coffee_Recollecting = () => {
	return (<div>
  <section className="description">
        <div>
            {/* <!-- className="description" --> */}
            <div className="product">
                <h3 id="title">De la planta a tu taza</h3>
                <h1 className="declaration">El mejor café del mundo, ahora en tu casa.</h1>
                <p id="model" >Trabajamos con agricultores de todo el mundo para seleccionar los
                    mejores
                    granos de café y que puedas
                    viajar desde la comodidad de tu hogar.
                </p>
                <div className="origin">
                    <button id="origin"> Descubrir Orígenes</button>
                    <Link to="/shop"><button id="shop">Comprar café</button></Link>
                </div>

            </div>
        </div>
        <div id="cofe">
            {/* <!-- class="description" --> */}



            <img class="description" src="./images/Hero image (1).png"/>
        </div>
    </section>

	</div>)
}

export default Coffee_Recollecting;

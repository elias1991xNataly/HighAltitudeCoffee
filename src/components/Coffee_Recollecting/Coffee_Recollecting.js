import React from 'react';
import { Link } from 'react-router-dom';

const Coffee_Recollecting = () => {
    return (<div>
        <section className="description">
            <div>
                {/* text-4xl w-fit font-black w-3/5 */}
                <div className="product p-3 space-y-3 ">
                    <h3 id="title">De la planta a tu taza</h3>
                    <h1 className="declaration text-4xl font-black w-3/5">El mejor café del mundo, ahora en tu casa.</h1>
                    <p id="model" >Trabajamos con agricultores de todo el mundo para seleccionar los
                        mejores
                        granos de café y que puedas
                        viajar desde la comodidad de tu hogar.
                    </p>
                </div>
                <div className="origin space-x-4">
                    <button id="origin"> Descubrir Orígenes</button>
                    <Link to="/shop"><button id="shop">Comprar café</button></Link>
                </div>

            </div>
            <div id="cofe">



                <img className="h-auto basis-full" src="https://i.imgur.com/caiQMwm.png" />
            </div>
        </section>

    </div>)
}

export default Coffee_Recollecting;

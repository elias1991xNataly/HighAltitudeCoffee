import React from 'react';
import { Link } from 'react-router-dom';

const Faqs = () => {


    
const divcollapse1 = document.getElementsByClassName("accordion");
for (let y = 0; y < divcollapse1.length; y++) {
    divcollapse1[y].onclick = function () {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }

}

    return (<section className='bg-custom-green flex flex-col items-center p-6'>
        <h2 className='text-white'>Preguntas frecuentes</h2>
        <div className="divider">  <button className="accordion" >
            <h2>¿Cómo hago el pedido?
            </h2>
        </button>
            <div className="panel">
                <div className="line"></div>
                <p className="textexpand1"> Selecciona el café que desees probar y completa el proceso de compra. Si lo
                    prefieres, te
                    preguntaremos
                    cada cuánto quieres que te lo mandemos a casa y así nunca te quedarás sin café.</p>
            </div>
        </div>
        <div className="divider">
            <button className="accordion">
                <h2>¿Por qué los precios son tan bajos?</h2>
            </button>
            <div className="panel">
                <div className="line"></div>
                <p className="textexpand1">
                    Viajamos constantemente para encontrar los mejores granos y a los agricultores más exigentes. Si
                    podemos
                    ofrecerte estos precios es porque tratamos directamente con los productores de café, sin
                    intermediarios. Así
                    obtenemos el mejor precio para ti y la persona que está detrás de los granos de café recibe el mayor
                    beneficio posible.</p>
            </div>
        </div>
        <div className="divider">
            <button className="accordion">
                <h2>¿Es posible enviar café a mi oficina?<img src="./images/Icon(8).jpg" alt="" /></h2>
            </button>
            <div className="panel">
                <div className="line"></div>
                <p className="textexpand1">
                  </p>
            </div>
        </div>
        <div className="resolveDoubts">
            <Link to="/" className="resolveDoubts underline">Resolvemos tus dudas<img src="./images/Arrow_narrow-right.png" alt="" /> </Link>
        </div>
    </section>
    )
}


export default Faqs;

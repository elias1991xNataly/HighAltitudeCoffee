import React from 'react';
import { Link } from 'react-router-dom';

const CoffeeRecollecting = () => {
    return (
        <section className="p-10 flex justify-between">
            <div className='flex flex-col justify-center items-center self-stretch '>
                {/* text-4xl w-fit font-black w-3/5 */}
                <div className="product py-3 -pl-7 space-y-3 relative flex flex-col self-stretch">
                    <h3 id="title" className='flex self-stretch text-2xl '>De la planta a tu taza</h3>
                    <h1 className="declaration relative pr-3 text-4xl font-black w-3/5 text-4xl ">El mejor café del mundo, ahora en tu casa.</h1>
                    <p id="model" className='' >Trabajamos con agricultores de todo el mundo para seleccionar los
                        mejores
                        granos de café y que puedas
                        viajar desde la comodidad de tu hogar.
                    </p>
                </div>
                <div className="origin space-x-4 justify-start relative pr-96">
                    <button id="origin"> Descubrir Orígenes</button>
                    <Link to="/shop"><button id="shop">Comprar café</button></Link>
                </div>

            </div>
            <div className='w-6/12  '>



                <img className=" rounded-2xl" alt="" src="https://s3-alpha-sig.figma.com/img/a303/6137/8668558bbdbaf8f6c6c4062d03e662e5?Expires=1690156800&Signature=gUYLLx5Ke29hsgiRhXHJp1ZL7BTkfSpPcR6MZU7x9sEgNiebrPDBNy0uWaGS1FV1V2yc3GD-o8WoKhVnEPysrwtwvLRf7LCv6B-dVgjAgiN4lD1IPgWGBQt7c09cv0zvMRhKF9V9pUoa3yDmULK7eeCQLymMND-GXwgzFw5L0UjKPsp8SOViQFoV6mdlLkN4tzpKRElDePl1i-4DfUo5JmmMgn52kLpDDGy~k3zK5TERqy-iIppGh5FVTRPVWe4dWXv~aJGATlUurz~JRmJl9gR2JNTk5g8aN9v20Vs4z98eNiTICna97dqTPg4-N7qYYIWOfu72iM8A911vcYz1OQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
            </div>
        </section>

    )
}

export default CoffeeRecollecting;

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



                <img className=" rounded-2xl" alt="" src="https://s3-alpha-sig.figma.com/img/a303/6137/8668558bbdbaf8f6c6c4062d03e662e5?Expires=1694995200&Signature=eyzdhjLGovgnN60AnVNbRQ3NR21vnSJHm3Qaqp67~Hg6xbJ9O2OSLohUfRU7LQNTTI9lEehTM3KCj6wqfgLorUCn4m99mWwxvTMXU77Abqn2YqRV5OLyTLrglYFbl0AS0tUdhiXA9Ecn7cTnuFtuj2ZYSgKhH3DzKBjGdxujFl4RuPr6A3pVJ0imdUE26ryYq30YvhAvHxGjZPD3TfF51s-CwarCcuayj5yLZ-Fapcua~CBUAS3ZIabOAbEIrlrNDxozKUAItXK-HjcdvscV64ndQz-hHbQfXzbAyyR3t7AL~DTApPMYFxb8Wgs3VOq~ptlYOmb9O8NF6c9FBHNfHw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
            </div>
        </section>

    )
}

export default CoffeeRecollecting;

import { useState, createContext } from "react";

export const CartContext = createContext();

export default function CoffeeCart({ children }) {

    const [cartCoffee, setCartCoffee] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const addToCart = (coffee) => {
if(cartCoffee.name){

}
        setCartCoffee([...cartCoffee, coffee])

    }
    const deleteFromCart = (coffee) => {
        const newCart = cartCoffee.filter(coffeeDel => coffeeDel !== coffee)
        setCartCoffee(newCart)
    }


    return (
        <CartContext.Provider value={{ cartCoffee, setCartCoffee, addToCart, deleteFromCart,quantity,setQuantity }} >
            {children}
        </CartContext.Provider>
    )

}

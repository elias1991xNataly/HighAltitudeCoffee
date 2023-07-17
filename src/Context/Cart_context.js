import { useState, createContext } from "react";

export const CartContext = createContext();

export default function CoffeeCart({ children }) {

    const [cartCoffee, setCartCoffee] = useState([]);
    const [quantity, setQuantity] = useState();

    //-----------AddCart coffees no repeat---------------------

    const isCoffeRepeated = (coffeeInfo) => {
        for (const coffee of cartCoffee) {
            if (coffee.name === coffeeInfo.name) {
                return true;
            }
        }
        return false;
    }

    const addToCartIfItsNoRepeated = (coffeeInfo) => {
        if (cartCoffee == null || !isCoffeRepeated(coffeeInfo)) {
            setCartCoffee([...cartCoffee, coffeeInfo]);
        }
    }
    //?-------------  TOTAL     CART  -------------------
    const totalCart = () => {
        let total = 0;


        total = +sumPriceOfAllCoffees() + +typeShipment
        return total
    }


    //----------number of articles in Cart---------------------

    const lengthOfCoffeesInCart = () => {
        let length = 0;
        cartCoffee.map((coffee) => length += coffee.quantity)
        return length
    }



    //?-------------Total price coffee-------------------

    const sumPriceOfAllCoffees = () => {
        let total = 0;
        cartCoffee.map((coffee) => total += coffee.price * coffee.quantity)
        return total

    }

    //?-----------counter coffees---------------------

    //?---SUM---------------------
    const sumQuantityOfCoffee = (coffeSelect) => {
        cartCoffee.map((cartItem) => {
            if (cartItem.name === coffeSelect.name) {
                cartItem.quantity += 1;
                setCartCoffee([...cartCoffee]);
            }
        }
        )
    }


    //?---Rest---------------------
    const restQuantityOfCoffee = (coffeSelect) => {
        cartCoffee.map((cartItem) => {
            if (cartItem.name === coffeSelect.name) {
                cartItem.quantity >= 1 ? cartItem.quantity -= 1 : cartItem.quantity = 0
                setCartCoffee([...cartCoffee]);
            }
            if (cartItem.quantity == 0) {
                deleteFromCart(coffeSelect)
            }

        }
        )
    }

    //?---------------typeShipment--------------------------

    const [typeShipment, setTypeShipment] = useState("0")

    const onShipmentValue = e => {

        setTypeShipment(e.target.value)
    }
    console.log(typeShipment);
    const deleteFromCart = (coffee) => {
        const newCart = cartCoffee.filter(coffeeDel => coffeeDel !== coffee)
        setCartCoffee(newCart)
    }
    const clearCart = () => {
        let cartEmpty = [];
        setCartCoffee(cartEmpty)
    }

    return (
        <CartContext.Provider value={{ cartCoffee, setCartCoffee, isCoffeRepeated, addToCartIfItsNoRepeated, totalCart, lengthOfCoffeesInCart, sumPriceOfAllCoffees, sumQuantityOfCoffee, restQuantityOfCoffee, onShipmentValue, deleteFromCart, clearCart, typeShipment, setTypeShipment, }} >
            {children}
        </CartContext.Provider>
    )

}

// import { useReducer, createContext } from "react";


// const initialState = {
//     cart: {

//     }
// }

// const Context = createContext({});


// function cartReducer(state, action) {
//     switch (action.type) {
//         case "ADD_TO_CART":
//             const item = state.cart[action.id];
//             return {
//                 ...state.cart,
//                 [action.id]: item ? {
//                     ...item, qty: item.qty + 1,
//                 }:{
//                     ...action,qty:1,
//                 }
//             }
//     }
//     case "REMOVE_FROM_CART":
//         let newCart={...state.cart};
//         delete newCart[action];
//         return{
//             ...state, 
//             cart:newCart,
//         }
//         default: return state;

// }
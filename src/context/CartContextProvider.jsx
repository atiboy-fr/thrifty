import React, { createContext, useContext, useReducer } from 'react'

const CartContext = createContext()

const initialState = {
    cart: [],
}

function reducer(state, action) {
    switch(action.type) {
        case 'cart/addToCart':
            return {...state, cart: [...state.cart, action.payload]}
        case 'cart/deleteFromCart':
            {
                const deleted = state.cart.map((item) => {
                    if(item.id === action.payload)  return {...item, quantity: 0}

                    return item
                });
                
                return {...state, cart: deleted.filter((item) => item.id !== action.payload)}
            }
            
        case 'cart/increaseQuantity':
            return {...state, cart: state.cart.map((item) =>
                item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item)}
        case 'cart/decreaseQuantity':
            {
            const updatedCart = state.cart.map((item) => {
                    if (item.id === action.payload) {
                      // Ensure quantity doesn't go below 0
                      return { ...item, quantity: Math.max(0, item.quantity - 1) };
                    }
                    return item;
                  });
            return { ...state, cart: updatedCart.filter((item) => item.quantity > 0)};    
            }
            
        case 'cart/clearCart':
            return {...state, cart: []}


        default:
            throw new Error('Unknown action type')
    }
}

function CartContextProvider({children}) {

    const [state, dispatch] = useReducer(reducer, initialState)
    const { cart } = state

    function addToCart(item) {
        dispatch({type: 'cart/addToCart', payload: item})
    }

    function deleteFromCart(id) {
        dispatch({type: 'cart/deleteFromCart', payload: id})
    }

    function increaseQuantity(id) {
        dispatch({type: 'cart/increaseQuantity', payload: id})
    }

    function decreaseQuantity(id) {
        dispatch({type: 'cart/decreaseQuantity', payload: id})
    }

    function clearCart() {
        dispatch({type: 'cart/clearCart'})
    }

    // console.log(cart)

  return (
    <CartContext.Provider value={{
        cart, addToCart, deleteFromCart, increaseQuantity,decreaseQuantity, clearCart
    }}>
        {children}
    </CartContext.Provider>
  )
}

function useCart() {
    const context = useContext(CartContext)

    if(context === undefined) throw new Error ('CartContext was used outside the CartProvider')

    return context
}


export {CartContextProvider, useCart}
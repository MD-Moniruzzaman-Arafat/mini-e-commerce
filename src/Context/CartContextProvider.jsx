import React, { Children, useState } from 'react'
import { CartContext } from '.'


export default function CartContextProvider({ children }) {
    const [cartProducts, setCartProducts] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    return (
        <CartContext.Provider value={{ cartProducts, setCartProducts, totalPrice, setTotalPrice }}>
            {children}
        </CartContext.Provider>
    )
}


import React, { Children, useState } from 'react'
import { CartContext } from '.'


export default function CartContextProvider({ children }) {
    const [cartProducts, setCartProducts] = useState([])

    return (
        <CartContext.Provider value={{ cartProducts, setCartProducts }}>
            {children}
        </CartContext.Provider>
    )
}


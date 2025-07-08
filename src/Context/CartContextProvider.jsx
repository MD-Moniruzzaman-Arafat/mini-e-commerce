import React, { Children, useEffect, useState } from 'react'
import { CartContext } from '.'


export default function CartContextProvider({ children }) {
    const [cartProducts, setCartProducts] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [productQuantityPrice, setProductQuantityPrice] = useState(0)
    const [showProductQuantity, setShowProductQuantity] = useState(1)


    useEffect(() => {
        const total = cartProducts.reduce((acc, item) => acc + item.price, 0)
        setTotalPrice(total)
    }, [cartProducts])

    return (
        <CartContext.Provider value={{ cartProducts, setCartProducts, totalPrice, setTotalPrice, productQuantityPrice, setProductQuantityPrice, showProductQuantity, setShowProductQuantity }}>
            {children}
        </CartContext.Provider>
    )
}


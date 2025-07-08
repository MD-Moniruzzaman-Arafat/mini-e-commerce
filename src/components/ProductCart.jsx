import React, { useContext, useState } from 'react'
import { CartContext } from '../Context'
export default function ProductCart({ cartProduct }) {
    const [productQuantity, setProductQuantity] = useState(1)
    const { totalPrice, setTotalPrice } = useContext(CartContext)

    function handleIncrease() {
        setProductQuantity(productQuantity + 1)
        const productQuantityPrice = cartProduct?.price + totalPrice;
        setTotalPrice(productQuantityPrice)
    }

    function handleDecrease() {
        setProductQuantity(productQuantity - 1)
        setTotalPrice((productQuantity * cartProduct?.price) + totalPrice)

    }


    return (
        <div>
            <div className="card h-[100px] w-75 mx-auto m-2 card-side bg-base-100 shadow-sm">
                <figure className=''>
                    <img
                        className='w-20'
                        src={cartProduct?.image}
                        alt="Movie" />
                </figure>
                <div className="card-body p-2">
                    <h2>{cartProduct?.name}</h2>
                    <h2>Price: {cartProduct?.price}$</h2>

                    <div className="card-actions justify-between items-start">
                        <div className="join">
                            <button onClick={handleDecrease} className="join-item btn btn-xs">-</button>
                            <button className="join-item btn btn-xs">{productQuantity}</button>
                            <button onClick={handleIncrease} className="join-item btn btn-xs">+</button>
                        </div>
                        <div className="badge badge-outline text-xs cursor-pointer hover:bg-green-500 hover:text-white transition-colors duration-200">
                            Checkout
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

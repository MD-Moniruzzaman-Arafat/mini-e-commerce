import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext, TotalPriceContext } from '../Context'

export default function Card({ product }) {

    const { cartProducts, setCartProducts } = useContext(CartContext);

    function handleCart() {
        const findItem = cartProducts.find(cartProduct => cartProduct.id === product.id)
        if (!findItem) {
            setCartProducts([...cartProducts, product])
        }
    }

    return (
        <div>
            <div className="card bg-base-100 m-2 shadow-sm">
                <figure>
                    <img
                        src={product?.image}
                        alt="Shoes" className='md:h-[280px] md:w-full' />
                </figure>
                <div className="card-body">
                    <p className='text-md'><span className='font-bold'>Product Name :</span> {product?.name}</p>
                    <p className='text-md'><span className='font-bold'>Price:</span> {product?.price}$</p>
                    <div className="card-actions justify-end">
                        <div onClick={handleCart} className="badge badge-outline text-xs cursor-pointer hover:bg-green-500 hover:text-white transition-colors duration-200">
                            Add to Cart
                        </div>

                        <div className="badge badge-outline text-xs cursor-pointer hover:bg-blue-500 hover:text-white transition-colors duration-200"><Link to={`product-detail/${product?.id}`}>Product Detail</Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

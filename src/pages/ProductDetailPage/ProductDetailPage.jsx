import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom'
import { CartContext } from '../../Context';

export default function ProductDetailPage() {
    const productDetails = useLoaderData()
    const { cartProducts, setCartProducts } = useContext(CartContext);


    function handleCart() {
        const findItem = cartProducts.find(cartProduct => cartProduct.id === productDetails.id)
        if (!findItem) {
            setCartProducts([...cartProducts, productDetails])
        }
    }
    return (
        <div className='container mx-auto mt-5'>
            <div className="card bg-base-100 m-2 shadow-sm">
                <figure>
                    <img
                        src={productDetails?.image}
                        alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2><span className='text-xs md:text-lg font-bold'>Product Name : </span>{productDetails?.name}</h2>
                    <h2><span className='text-xs md:text-lg font-bold'>Product Description : </span>{productDetails?.description}</h2>
                    <h2><span className='text-xs md:text-lg font-bold'>Product Category : </span>{productDetails?.category}</h2>
                    <h2><span className='text-xs md:text-lg font-bold'>Product Price : </span>{productDetails?.price}$</h2>
                    <div className="card-actions justify-end">
                        <div onClick={handleCart} className="badge badge-outline text-xs cursor-pointer hover:bg-green-500 hover:text-white transition-colors duration-200">
                            Add to Cart
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

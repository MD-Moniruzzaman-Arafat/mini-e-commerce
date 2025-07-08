import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function ProductDetailPage() {
    const productDetails = useLoaderData()
    console.log(productDetails)
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
                </div>
            </div>
        </div>
    )
}

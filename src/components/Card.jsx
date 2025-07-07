import React from 'react'
import { Link } from 'react-router-dom'

export default function Card() {
    return (
        <div>
            <div className="card bg-base-100 m-2 shadow-sm">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Card Title
                    </h2>
                    <p><span className='font-bold'>Price:</span> 00.00$</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Add to Cart</div>
                        <div className="badge badge-outline"><Link to={'product-detail'}>Product Detail</Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

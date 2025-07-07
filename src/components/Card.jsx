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
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Add to Cart</div>
                        <div className="badge badge-outline"><Link to={'product-detail'}>Product Detail</Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react'

export default function ProductCart({ cartProduct }) {
    return (
        <div>
            <div className="card h-[100px] w-70 card-side bg-base-100 shadow-sm">
                <figure className=''>
                    <img
                        className='w-20'
                        src={cartProduct?.image}
                        alt="Movie" />
                </figure>
                <div className="card-body p-1">
                    <p>{cartProduct?.name}</p>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

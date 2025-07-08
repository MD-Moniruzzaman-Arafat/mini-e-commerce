import React, { useContext, useState } from 'react'
import { CartContext } from '../Context'
export default function ProductCart({ cartProduct }) {
    const [productQuantity, setProductQuantity] = useState(1)
    const { productQuantityPrice, setProductQuantityPrice } = useContext(CartContext)

    function handleIncrease() {
        setProductQuantity(productQuantity + 1)
        const quantityPrice = cartProduct?.price + productQuantityPrice;
        setProductQuantityPrice(quantityPrice)
    }

    function handleDecrease() {
        if (productQuantity > 1) {
            setProductQuantity(productQuantity - 1)
            const quantityPrice = productQuantityPrice - cartProduct?.price;
            setProductQuantityPrice(quantityPrice)
        }
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
                        <div onClick={() => document.getElementById('my_modal_3').showModal()} className="badge badge-outline text-xs cursor-pointer hover:bg-green-500 hover:text-white transition-colors duration-200">
                            Checkout
                        </div>
                    </div>
                </div>
            </div>


            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>open modal</button> */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Name</legend>
                            <input type="text" className="input w-full" placeholder="Name...." />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Email</legend>
                            <input type="email" className="input w-full" placeholder="Email...." />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Address</legend>
                            <textarea className="textarea h-24 w-full" placeholder="Address...."></textarea>
                        </fieldset>
                        <button className="badge badge-outline text-xs cursor-pointer hover:bg-blue-500 hover:text-white transition-colors duration-200">Submit</button>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

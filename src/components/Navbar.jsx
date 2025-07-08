import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ProductCart from './ProductCart'
import { CartContext } from '../Context'

export default function Navbar() {
    const { cartProducts, totalPrice, productQuantityPrice } = useContext(CartContext)

    const menu = (
        <>
            <li><Link to={'/'}>Home</Link></li>
            <div className="indicator">
                <span className="indicator-item badge bg-transparent">{cartProducts.length}</span>
                <li><label htmlFor="my-drawer-4"><a>Cart</a></label></li>
                {/* <button className="">inbox</button> */}
            </div>
        </>
    )
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className='container mx-auto flex'>
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-medium">
                                {menu}
                            </ul>
                        </div>
                        <Link to={'/'} className="btn btn-ghost text-xl">Mini-E-Commerce</Link>
                    </div>
                    <div className="navbar-end hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 font-medium">
                            {menu}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="bg-base-200 text-base-content min-h-full w-80 p-1">
                        {/* Sidebar content here */}
                        <div className='flex justify-end'>
                            <li><label htmlFor="my-drawer-4"><a>
                                <svg
                                    className="swap-on fill-current cursor-pointer"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 512 512">
                                    <polygon
                                        points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                                </svg>
                            </a></label></li>
                        </div>
                        {
                            cartProducts.map(cartProduct => <li key={cartProduct.id}><ProductCart cartProduct={cartProduct} /></li>)
                        }
                        <hr />
                        <hr />
                        <div>
                            <h1 className='text-center font-bold'>Total Product Price</h1>
                        </div>
                        <hr />
                        <hr />
                        <div className="overflow-x-auto">
                            <table className="table table-zebra">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>Product Name</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    {
                                        cartProducts.map(cartProduct => {
                                            return (
                                                <tr key={cartProduct.id}>
                                                    <td>{cartProduct.name}</td>
                                                    <td>{cartProduct.price}$</td>
                                                </tr>)
                                        })
                                    }
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>Total</th>
                                        <th>{(totalPrice + productQuantityPrice).toFixed(2)}$</th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

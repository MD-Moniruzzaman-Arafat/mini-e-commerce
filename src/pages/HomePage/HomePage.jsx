import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'

export default function HomePage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    return (
        <div className='container mx-auto mt-5'>
            <div className='grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.length > 0 ? products.map(product => <Card key={product.id} product={product} />) : 'hello'
                }
            </div>
        </div>
    )
}

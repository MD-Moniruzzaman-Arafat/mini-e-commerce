import React from 'react'
import Card from '../../components/Card'

export default function HomePage() {
    return (
        <div className='container mx-auto'>
            <div className='grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

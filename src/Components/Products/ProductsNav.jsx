import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductsNav({ name }) {

    return (
        <>
            <div className='bg-blue-300 h-24 flex items-center'>

                <div className='w-3/4 m-auto'>
                    <div className='flex'>
                        <h2 className='text-xl font-sans text-gray-700 font-semibold' tex>{name}</h2>
                    </div>
                </div>

            </div>
        </>

    )
}

import React from 'react'

function Footer() {
    return (
        <div className='p-10 bg-gray-100 flex justify-between gap-1'>
            <div className='flex flex-col gap-4 w-1/4'>
                <div className='flex items-center gap-2'>
                    <img src='/logo.svg' alt='logo' className='h-8' />
                    <h1 className='font-medium text-xl'>eBook</h1>
                </div>
                <div >
                    <p className='text-gray-500'>A modern platform for eBook sharing, renting, and reading. Discover new worlds through our extensive collection.</p>
                </div>
            </div>
            <div className='flex flex-col gap-4 w-1/4'>
                <div className='flex items-center gap-2'>
                    <h1 className='font-medium text-xl'>Platform</h1>
                </div>
                <div >
                    <p className='text-gray-500 hover:text-blue-500'>How it Works</p>
                    <p className='text-gray-500 hover:text-blue-500'>Features</p>
                    <p className='text-gray-500 hover:text-blue-500'>Pricing</p>
                    <p className='text-gray-500 hover:text-blue-500'>FAQ</p>
                </div>
            </div>
        </div>
    )
}

export default Footer

import { Facebook, Instagram, Twitter } from 'lucide-react'
import React from 'react'

function Footer() {
    return (
        <>
            <div className='p-10 bg-gray-100 flex justify-between gap-1 border-b'>
                <div className='flex flex-col gap-4 w-1/4 ml-12'>
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
                <div className='flex flex-col gap-4 w-1/4'>
                    <div className='flex items-center gap-2'>
                        <h1 className='font-medium text-xl'>Company</h1>
                    </div>
                    <div >
                        <p className='text-gray-500 hover:text-blue-500'>About us</p>
                        <p className='text-gray-500 hover:text-blue-500'>Blog</p>
                        <p className='text-gray-500 hover:text-blue-500'>Careers</p>
                        <p className='text-gray-500 hover:text-blue-500'>Contact</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4 w-1/4'>
                    <div className='flex items-center gap-2'>
                        <h1 className='font-medium text-xl'>Legal</h1>
                    </div>
                    <div >
                        <p className='text-gray-500 hover:text-blue-500'>Terms of Service</p>
                        <p className='text-gray-500 hover:text-blue-500'>Privacy Policy</p>
                        <p className='text-gray-500 hover:text-blue-500'>Cooking Policy</p>
                    </div>
                </div>

            </div>
            <div className='bg-gray-100 border-b flex justify-between gap-1'>
                <div className='flex items-center gap-2 ml-12'>
                    <Facebook className='text-gray-500 hover:text-blue-500' size={24} />
                    <Instagram className='text-gray-500 hover:text-blue-500' size={24} />
                    <Twitter className='text-gray-500 hover:text-blue-500' size={24} />
                </div> 
                <p className='text-center text-gray-500 py-4'>© 2025 eBook. All rights reserved.</p>
                <p className='text-center text-gray-500'>Made with ❤️ by eBook Team</p>
            </div>
        </>

    )
}

export default Footer

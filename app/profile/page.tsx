import Navbar from '@/components/Navbar'
import { BellDot, Book, BookAIcon, BookPlus, Heart, LogOut, Search, Settings, User, User2 } from 'lucide-react'
import React from 'react'

function Profile() {
    return (
        <div className='flex items-center justify-center h-screen bg-primary gap-2'>
            <div className="left w-1/6 bg-slate-300 h-screen flex flex-col p-5 rounded-xl shadow-md shadow-black ">
                <h1 className='font-semibold text-4xl'>Profile</h1>
                <div className='flex items-center gap-2 mt-8'>
                    <User className='w-5 h-5 text-slate-500' />
                    <h1 className='font-medium text-lg'>User Name</h1>
                </div>
                <div className='flex items-center gap-2 mt-3'>
                    <Search className='w-5 h-5 text-slate-500' />
                    <h1 className='font-medium text-lg'>Search</h1>
                </div>
                <div className='flex items-center gap-2 mt-3'>
                    <Book className='w-5 h-5 text-slate-500' />
                    <h1 className='font-medium text-lg'>My Books</h1>
                </div>
                <div className='flex items-center gap-2 mt-24'>
                    <BookPlus className='w-5 h-5 text-slate-500' />
                    <h1 className='font-medium text-lg'>Add To</h1>
                </div>
                <div className='flex items-center gap-2 mt-3'>
                    <Heart className='w-5 h-5 text-slate-500' />
                    <h1 className='font-medium text-lg'>Favourites</h1>
                </div>
                <div className='flex items-center gap-2 mt-80'>
                    <Settings className='w-5 h-5 text-slate-500' />
                    <h1 className='font-medium text-lg'>Settings</h1>
                </div>
                <div className='flex items-center gap-2 mt-3'>
                    <LogOut className='w-5 h-5 text-slate-500' />
                    <h1 className='font-medium text-lg'>Sign Out</h1>
                </div>
            </div>
            <div className="left w-5/6 bg-slate-100 h-screen flex flex-col p-5 rounded-xl shadow-md shadow-black">
                <Navbar />
                <div className='p-4 flex justify-between items-center gap-2 bg-slate-200 rounded-xl shadow-md shadow-black'>
                    <h1>Welcome Back!</h1>
                    <div className='flex items-center gap-2'>
                        <BellDot className='w-5 h-5 text-slate-500' />
                        <h1 className='font-medium text-lg'>Notifications</h1>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Profile

import Link from 'next/link';
import React from 'react';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';

function Navbar() {
  return (
    <div className='flex justify-between items-center bg-slate-100 px-6 py-4 sticky top-0 z-10'>
      {/* Logo Section */}
      <div className='flex items-center gap-2'>
        <img src='/logo.svg' alt='logo' className='h-8' />
        <h1 className='font-medium text-xl'>eBook</h1>
      </div>

      {/* Navigation Links */}
      <div className='flex items-center gap-6'>
        <Link href='/' className='hover:text-blue-500'>Home</Link>
        <Link href='/explore' className='hover:text-blue-500'>Explore</Link>
        <Link href='/categories' className='hover:text-blue-500'>Categories</Link>
        <Link href='#' className='hover:text-blue-500'>About us</Link>
        <Link href='/contact' className='hover:text-blue-500'>Contact us</Link>
      </div>

      {/* Authentication & Actions Section */}
      <div className='flex items-center gap-4'>
        <img src='/search.svg' className='h-8 cursor-pointer' alt='search' />
        
        <SignedOut>
          <SignInButton>
            <button className='px-4 py-2 bg-blue-500 text-white rounded-2xl hover:bg-blue-600'>Sign In</button>
          </SignInButton>
          <SignUpButton>
            <button className='px-4 py-2 bg-gray-700 text-white rounded-2xl hover:bg-gray-800'>Sign Up</button>
          </SignUpButton>
        </SignedOut>

        <SignedIn>
          <UserButton afterSignOutUrl='/' />
        </SignedIn>
      </div>
    </div>
  );
}

export default Navbar;
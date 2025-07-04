import React from 'react'

const Navbar = () => {
  return (
    <div className='sticky w-full top-0 z-20 bg-blue text-white'>
        <ul className='flex flex-row items-center justify-between py-4 px-8 text-3xl'>
            <a href="/" className='hover:cursor-pointer'><img src="/logo.png" alt="logo" className='w-12 hover:cursor-pointer rounded-lg' /></a>
            <div className='flex flex-row items-center gap-x-14 text-2xl'>
                <a href="/rules" className='hover:text-orange'>Rules</a>
                <a href="/about" className='hover:text-orange'>About</a>
            </div>

        </ul>

    </div>
  )
}

export default Navbar
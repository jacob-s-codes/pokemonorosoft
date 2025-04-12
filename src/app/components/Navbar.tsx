import React from 'react'

const Navbar = () => {
  return (
    <div className='sticky w-full top-0 z-20 bg-blue text-white'>
        <ul className='flex flex-row items-center justify-between py-4 px-8 text-3xl'>
            <li>Home</li>
            <div className='flex flex-row items-center gap-x-14 text-2xl'>
                <li>Play</li>
                <li>About</li>
            </div>

        </ul>

    </div>
  )
}

export default Navbar
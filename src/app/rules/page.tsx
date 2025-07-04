import React from 'react'

const page = () => {
  return (
    <div className='mx-auto max-w-7xl flex lg:flex-row flex-col items-center justify-between gap-x-12 mt-12 px-4'>
        <div>
            <h1 className='pt-4 text-5xl font-bold'>Rules</h1>
            <hr className='border-2 border-black'/>
            <p className='pt-8 text-2xl max-w-4xl'>When you see a new word appear in the box, simply select whether you think it&apos;s the name of a Software Company or if it&apos;s the name of Pokémon.</p>
        </div>
        <img src="/logo.png" alt="PS logo" className='lg:w-96 w-full'/>
    </div>
  )
}

export default page
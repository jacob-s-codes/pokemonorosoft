import React from 'react'

const page = () => {
    return (
        <div className='mx-auto max-w-7xl flex lg:flex-row flex-col items-center justify-between gap-x-12 mt-12 px-4'>
            <div>
                <h1 className='pt-4 text-5xl font-bold'>About</h1>
                <hr className='border-2 border-black' />
                <p className='pt-8 text-2xl max-w-4xl'>Built by <a href="https://github.com/jacob-s-codes" className="underline hover:text-red" target="_blank">@jacob-s-codes</a> using NextJS and the Pokémon API.</p>
                <p className='pt-8 text-2xl max-w-4xl'>All credit for the idea goes to <a href="https://www.youtube.com/shorts/b-CaKFaefAM" className=" hover:text-red underline" target="_blank">@Mewtru</a>.</p>
            </div>
            <iframe
                className='h-[500px] w-auto'
                src="https://www.youtube.com/embed/b-CaKFaefAM"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
            </iframe>
        </div>
    )
}

export default page
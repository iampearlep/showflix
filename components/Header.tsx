import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <header>
      <div className='w-full -mt-[80px] md:-mt-[200px] md:h-[750px] overflow-y-hidden'>
      <Image src={'https://image.tmdb.org/t/p/w1280/Ag3D9qXjhJ2FUkrlJ0Cv1pgxqYQ.jpg'} height={439} width={1280} priority={true} layout="responsive" alt='' className='brightness-50'/>
      </div>
      <div className='z-10 text-white absolute -mt-[380px] md:w-1/2 px-10'>
     <h1 className='text-3xl font-bold'>The Avengers</h1>
      <p className='py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
         exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <div className='flex flex-row gap-x-5'>
        <button className='bg-white rounded-md text-black text-sm font-bold py-2 px-4'>Watch Now</button>
        <button className='bg-black rounded-md text-white text-sm font-bold py-2 px-4'>My List</button>
        </div>
     </div>
    </header>
  )
}

export default Header
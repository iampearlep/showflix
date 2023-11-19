import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <header>
      <div className='w-full -mt-[100px] h-[639px] overflow-y-hidden'>
      <Image src={'https://image.tmdb.org/t/p/w1280/Ag3D9qXjhJ2FUkrlJ0Cv1pgxqYQ.jpg'} height={439} width={1280} priority={true} alt='' className=''/>
      </div>
    </header>
  )
}

export default Header
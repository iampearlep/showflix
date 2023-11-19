import React from 'react'
import Image from 'next/image'
import Link from "next/link";
const Card = () => {
  return (
    <Link href='/' className=''>
       <Image src={'https://image.tmdb.org/t/p/w1280/vBZ0qvaRxqEhZwl6LWmruJqWE8Z.jpg'} height={750} width={500} priority={true} layout="responsive" alt='' className=''/>
       <h4>The Creator</h4>
    </Link>
  )
}

export default Card
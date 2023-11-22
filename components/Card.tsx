import React from 'react'
import Image from 'next/image'
import Link from "next/link";
interface Movie {
  title: string;
  poster_path: string;
}
const Card:React.FC<{ movie: Movie }> = ({ movie }) => {
  return (
    <Link href='/' className=''>
       <Image src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`} height={750} width={500} priority={true} layout="responsive" alt='' className=''/>
       <h4>{movie.title}</h4>
    </Link>
  )
}

export default Card
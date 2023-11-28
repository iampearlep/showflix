import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import { Movie } from '@/types/type'

const Card: React.FC<{ movie: Movie }> = ({ movie }) => {
  return (
    <Link href='/' className=''>
      <Image src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`} height={750} width={500} priority={true} layout="responsive" alt='' className='' />
      <h4>{movie.title || movie.name}</h4>
    </Link>
  )
}

export default Card
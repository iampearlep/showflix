"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { getTrending } from '@/api/api'
import { Movie } from '@/types/type'

const Header = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [randomMovie, setRandomMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const getMovies = async () => {
      try{
        const response = await getTrending()
        setMovies(response)
        const randomIndex = Math.floor(Math.random() * response.length);
        setRandomMovie(response[randomIndex]);
      } catch(err){
        console.error(err)
      }
    }
    getMovies()
},[])
  return (
    <header>
      <div className='w-full -mt-[80px] md:-mt-[200px] md:h-[750px] overflow-y-hidden'>
      <Image src={`https://image.tmdb.org/t/p/w1280/${randomMovie?.backdrop_path}`} height={439} width={1280} priority={true} layout="responsive" alt='' className='brightness-50'/>
      </div>
      <div className='z-10 text-white absolute -mt-[380px] md:w-1/2 px-10'>
     <h1 className='text-3xl font-bold'>{randomMovie?.title}</h1>
      <p className='py-4'>{randomMovie?.overview}</p>
        <div className='flex flex-row gap-x-5'>
        <button className='bg-white rounded-md text-black text-sm font-bold py-2 px-4'>Watch Now</button>
        <button className='bg-black rounded-md text-white text-sm font-bold py-2 px-4'>My List</button>
        </div>
     </div>
    </header>
  )
}

export default Header
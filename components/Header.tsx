"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { getNowPlaying } from '@/api/api'
import { Movie } from '@/types/type'

const Header = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [randomMovie, setRandomMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const getMovies = async () => {
      try{
        const response = await getNowPlaying()
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
      <div className='w-full h-[550px] md:h-[750px]'>
      <div className='w-full h-full'>
      <div className='w-full h-[550px] md:h-[750px] absolute'>
      <Image src={`https://image.tmdb.org/t/p/w1280/${randomMovie?.backdrop_path}`} height={439} width={1280} priority={true} alt='' className='w-full h-full bg-cover object-cover brightness-50'/>
      </div>
      <div className='absolute w-full px-5 top-[25%] md:w-7/12 md:px-24 md:top-[35%]'>
     <h1 className='text-xl md:text-3xl font-bold'>{randomMovie?.title}</h1>
      <p className=' py-2 md:py-4 text-sm md:text-lg'>{randomMovie?.overview}</p>
        <div className='flex flex-row gap-x-3 md:gap-x-5'>
        <button className='bg-white rounded-md text-black text-sm font-bold py-2 px-4'>Watch Now</button>
        <button className='bg-black rounded-md text-white text-sm font-bold py-2 px-4'>My List</button>
        </div>
     </div>
      </div>
      </div>
    </header>
  )
}

export default Header
"use client"
import React, { useEffect, useState } from 'react'
import MovieList from './ui/MovieList'
import { getNowPlaying } from '@/api/api'
import { Movie } from '@/types/type'

const NowPlaying = () => {
    const [movies, setMovies] = useState<Movie[]>([])

    const getMovies = async () => {
      try{
        const response = await getNowPlaying()
        setMovies(response)
      } catch(err){
        console.error(err)
      }
    }

    useEffect(() => {
           getMovies()
     },[])
  
  return (
         <div className='pt-10 md:pt-24 px-10'>
        <h2 className='text-2xl font-bold py-3'>Now Playing</h2>
         <div className=''>
        <MovieList movies={movies}/>
     </div>
    </div>
  )
}

export default NowPlaying
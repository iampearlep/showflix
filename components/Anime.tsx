"use client"
import React, { useEffect, useState } from 'react'
import MovieList from './MovieList'
import { Movie } from '@/types/type'
import { getAction } from '@/api/api'

const Anime = () => {
    const [movies, setMovies] = useState<Movie[]>([])

    const getMovies = async () => {
        try{
          const response = await getAction()
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
    <h2 className='text-2xl font-bold py-3'>Anime</h2>
     <div className=''>
    <MovieList movies={movies}/>
 </div>
</div>
  )
}

export default Anime
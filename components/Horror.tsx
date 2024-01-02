"use client"
import React, { useEffect, useState } from 'react'
import MovieList from './ui/MovieList'
import { Movie } from '@/types/type'
import { getHorror } from '@/api/api'


const Horror = () => {
    const [movies, setMovies] = useState<Movie[]>([])

    const getMovies = async () => {
        try{
          const response = await getHorror()
          setMovies(response)
        } catch(err){
          console.error(err)
        }
      }
  
      useEffect(() => {
             getMovies()
       },[])

  return (
    <div className='pt-10 md:pt-24 px-5 md:px-10'>
    <h2 className='text-2xl font-bold py-3'>Horror</h2>
     <div className=''>
    <MovieList movies={movies}/>
 </div>
</div>
  )
}

export default Horror
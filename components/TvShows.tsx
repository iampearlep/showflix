"use client"
import React, { useEffect, useState } from 'react'
import MovieList from './ui/MovieList'
import { Movie } from '@/types/type'
import { getTvShows } from '@/api/api'


const TvShows = () => {
    const [movies, setMovies] = useState<Movie[]>([])

    const getMovies = async () => {
        try{
          const response = await getTvShows()
          const processedMovies: Movie[] = response.map((movie: Movie[]) => ({
            ...movie,
            isMovie: false
          }));
          setMovies(processedMovies)
        } catch(err){
          console.error(err)
        }
      }
  
      useEffect(() => {
             getMovies()
       },[])

  return (
    <div className='pt-10 md:pt-24 px-5 md:px-10'>
    <h2 className='text-2xl font-bold py-3'>Tv Shows</h2>
     <div className=''>
    <MovieList movies={movies}/>
 </div>
</div>
  )
}

export default TvShows
"use client"
import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'
interface Movie {
  id: number;
  title: string;
  poster_path: string;
}
const MovieList = () => {
  
    const [movies, setMovies] = useState<Movie[]>([])

    const getMovies = async () => {
      try{
        const response = await axios.get(`${process.env.NEXT_PUBLIC_POPULAR_BASE_URL}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
        setMovies(response.data.results)
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
         <div className='grid grid-cols-1 md:grid-cols-6 gap-x-6 gap-y-4'>
         {movies.map((movie: Movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
          {/* {movies.map((movie: { id: React.Key | null | undefined }) => (
            <Card key={movie.id} movie={movie} />
          ))} */}
     {/* <Card />
     <Card />
     <Card />
     <Card />
     <Card /> */}
     </div>
    </div>
  )
}

export default MovieList
"use client"
import React, { useEffect, useState } from 'react'
import { Movie } from '@/types/type'
import { getPopular } from '@/api/api'
import Card from '../../../components/ui/Card'

export default function Movie() {
  const [movies, setMovies] = useState<Movie[]>([])

  const getMovies = async () => {
      try{
        const response = await getPopular()
        setMovies(response)
      } catch(err){
        console.error(err)
      }
    }

    useEffect(() => {
           getMovies()
     },[])
  
    return (
      <main className='text-white pt-10 md:pt-10 px-10'>
      <h2 className='text-3xl text-center font-bold py-3'>Movies</h2>
  <div className='py-20 grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-6'>
  {movies.map((movie: Movie) => (
        <Card key={movie.id} movie={movie} />
    ))}
  </div>
  </main>
    )
  }
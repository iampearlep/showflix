"use client"
import React from 'react'
import Card from './Card'
import axios from 'axios'
const MovieList = () => {
    const [movies, setMovies] = React.useState<any>([])

    const getMovies = async () => {
      try{
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=92a541fb75d036a5d87a937dfe8f50d2')
        setMovies(response.data)
        console.log(response)
        console.log(response.data)
      } catch(err){
        console.error(err)
      }
    }

    React.useEffect(() => {
           getMovies()
     },[])
  
  return (
    <div className='pt-10 md:pt-24 px-10'>
        <h2 className='text-2xl font-bold py-3'>Now Playing</h2>
         <div className='grid grid-cols-1 md:grid-cols-6 gap-x-6 gap-y-4'>
     <Card />
     <Card />
     <Card />
     <Card />
     <Card />
     </div>
    </div>
  )
}

export default MovieList
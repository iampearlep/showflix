"use client"
import React from 'react'
import Card from './Card'
import axios from 'axios'
const MovieList = () => {
    const [movies, setMovies] = React.useState<any>([])
    // async function getMovies(){
    //     try{
    //         const response = await axios.get(`${process.env.NEXT_PUBLIC_POPULAR_BASE_URL}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
    //         setMovies(response.data.results)
    //         console.log(movies)
    //     }
    //     catch(err){
    //         console.log(err)
    //     }
    // }
    // React.useEffect(() => {
    //     getMovies()
    // },[])
    // React.useEffect(() => {
    //     // Fetch popular movies from TMDb API
    //     const fetchMovies = async () => {
    //       try {
    //         const response = await fetch(`${process.env.NEXT_PUBLIC_POPULAR_BASE_URL}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
    //         if (!response.ok) {
    //           throw new Error('Failed to fetch movies');
    //         }
    
    //         const data = await response.json();
    //         setMovies(data.results);
    //       } catch (error) {
    //         console.log(error);
    //       }
    //     };
    
    //     fetchMovies();
    //   }, []);
    
  return (
    <div className='pt-10 md:pt-24 px-10'>
        <h2 className='text-2xl font-bold py-3'>Now Playing</h2>
         <div className='grid grid-cols-1 md:grid-cols-6 gap-x-6 gap-y-4'>
     <Card />
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
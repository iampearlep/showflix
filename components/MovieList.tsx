"use client"
import React, { useEffect, useState } from 'react'
import Card from './Card'
import { Movie } from '@/types/type'
interface MovieListProps {
  movies: Movie[];
}
const MovieList:React.FC<MovieListProps> = ({movies}) => {
  
 return (
    <>
      {movies.map((movie: Movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
    </>
  )
}

export default MovieList
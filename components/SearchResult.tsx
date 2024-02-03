"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import Card from './ui/Card';
import { Movie } from '@/types/type';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image'

const SearchResults = () => {
    const searchParams = useSearchParams();
    const query = searchParams.get('q');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
        );
        setMovies(response.data.results);
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    };
    if (query) {
      fetchMovies();
    }
  }, [query]);

  return (
    <main className='text-white pt-10 md:pt-10 px-10'>
    <h2 className='text-3xl text-center font-bold mt-10 md:mt-20 py-3'>Search Results...</h2>

    <div>
      {isLoading ? (
        <p>Loading movies...</p>
      ) : error ? (
        <p>Error fetching movies: {error.message}</p>
      ) : movies.length === 0 ? (
        <p>No movies found for your search.</p>
      ) : (
        <div className='py-20 grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-6'>
          {movies.map((movie) => (
             <Link href={`/`} className=''>
             <Image src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`} height={750} width={500} priority={true} alt='' className='' />
             <h4>{movie.title || movie.name}</h4>
           </Link>
          ))}
        </div>
      )}
    </div>

</main>
  );
};

export default SearchResults;

"use client"
import React from 'react'
import Card from './Card'
import { Movie } from '@/types/type'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
interface MovieListProps {
  movies: Movie[];
}
const MovieList: React.FC<MovieListProps> = ({ movies }) => {

  return (
    <div>
      <Swiper
       spaceBetween={50}
       slidesPerView={6}
       onSlideChange={() => console.log('slide change')}
       onSwiper={(swiper) => console.log(swiper)}
      >
        {movies.map((movie: Movie) => (
          <SwiperSlide key={movie.id}>
            <Card key={movie.id} movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default MovieList
"use client"
import React from 'react'
import Card from './Card'
import { Movie } from '@/types/type'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Mousewheel, Keyboard } from 'swiper/modules';

interface MovieListProps {
  movies: Movie[];
}
const MovieList: React.FC<MovieListProps> = ({ movies }) => {

  return (
    <div>
      <Swiper
        cssMode={true}
        mousewheel={true}
        keyboard={true}
        modules={[Mousewheel, Keyboard]}
        breakpoints={{
          200: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          300: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          600: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          700: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          900: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
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
import axios from 'axios'

const NOW_PLAYING_URL = `${process.env.NEXT_PUBLIC_NOW_PLAYING_BASE_URL}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
const POPULAR_URL = `${process.env.NEXT_PUBLIC_POPULAR_BASE_URL}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
const TRENDING_URL = `${process.env.NEXT_PUBLIC_TRENDING_BASE_URL}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
const TV_SHOWS_URL = `${process.env.NEXT_PUBLIC_TV_URL}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
const ACTION_URL = `${process.env.NEXT_PUBLIC_ACTION_BASE_URL}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=28`
const COMEDY_URL = `${process.env.NEXT_PUBLIC_ACTION_BASE_URL}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=35`
const HORROR_URL = `${process.env.NEXT_PUBLIC_ACTION_BASE_URL}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=27`
const ROMANCE_URL = `${process.env.NEXT_PUBLIC_ACTION_BASE_URL}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=10749`
const ANIME_URL = `${process.env.NEXT_PUBLIC_ACTION_BASE_URL}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=16`
const UPCOMING_URL = `${process.env.NEXT_PUBLIC_UPCOMING_URL}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`


export const getNowPlaying = async () => {
    const response = await axios.get(NOW_PLAYING_URL);
    return response.data.results;
  };
export const getPopular = async () => {
    const response = await axios.get(POPULAR_URL);
    return response.data.results;
  };
export const getTrending = async () => {
    const response = await axios.get(TRENDING_URL);
    return response.data.results;
  };
export const getAction = async () => {
    const response = await axios.get(ACTION_URL);
    return response.data.results;
  };
  export const getComedy = async () => {
    const response = await axios.get(COMEDY_URL);
    return response.data.results;
  };  
  export const getRomance = async () => {
    const response = await axios.get(ROMANCE_URL);
    return response.data.results;
  };  
  export const getAnime = async () => {
    const response = await axios.get(ANIME_URL);
    return response.data.results;
  };  
  export const getTvShows = async () => {
    const response = await axios.get(TV_SHOWS_URL);
    return response.data.results;
  };  
  export const getHorror = async () => {
    const response = await axios.get(HORROR_URL);
    return response.data.results;
  };  
  export const getUpcoming = async () => {
    const response = await axios.get(UPCOMING_URL);
    return response.data.results;
  }; 

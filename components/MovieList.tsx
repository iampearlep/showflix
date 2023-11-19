import React from 'react'
import Card from './Card'
const MovieList = () => {
  return (
    <div className=' pt-24 px-10'>
        <h2 className='text-2xl font-bold py-3'>Now Playing</h2>
         <div className='grid grid-cols-6 gap-x-6'>
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
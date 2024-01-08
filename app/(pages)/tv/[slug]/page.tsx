import Image from 'next/image'
async function getData(slug: any) {
  const res = await fetch(`https://api.themoviedb.org/3/tv/${slug}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = res.json()
  return data
}
export default async function Page({ params }: { params: { slug: string } }){
  const data = await getData(params.slug)
  //console.log(data)
  return (
   <div>
     <div className='w-full h-screen absolute'>
      <Image src={`https://image.tmdb.org/t/p/w1280/${data.backdrop_path}`} height={750} width={500} priority={true}  alt='' className='w-full h-full brightness-50 blur-sm'/>
      </div>
     <div className="text-white pt-7 pb-10 px-5 md:pt-12 md:pb-24 md:px-10 relative z-10">
    <h2 className='text-2xl font-bold mt-10 md:mt-20 md:pb-14 pb-7 text-center'>Movie Details</h2>
     <div className=' flex flex-col-reverse md:flex-row-reverse gap-5 mx-auto'> 
      <div className='w-full md:w-1/2 flex flex-col justify-center gap-y-2 items-start'> 
        <h2 className='text-2xl font-bold'>{data.name}</h2>
        <div className='flex flex-row flex-wrap gap-y-2 gap-x-5'>
          {data.genres.map((genre: any ) => {
            return <p key={genre.id} className='text-xs border border-yellow-800 px-4 py-2 rounded-full'>{genre.name}</p>
          })}
        </div>
        <div className='flex flex-row flex-wrap gap-y-2 gap-x-5'>
          <p className='text-xs'><span className='text-gray-400'>Release Date:</span> {data.first_air_date}</p>
          <p className='text-xs'><span className='text-gray-400'>End Date:</span> {data.last_air_date}</p>
          <p className='text-xs'><span className='text-gray-400'>No of seasons:</span> {data.number_of_seasons}</p>
        </div>
      <p>{data.overview}</p>
      <div className='flex flex-row gap-x-5'>
        <p className='text-xs'><span className='text-gray-400'>Vote Average:</span> {data.vote_average}</p>
        <p className='text-xs'><span className='text-gray-400'>Vote Count:</span> {data.vote_count}</p>
      </div>
     </div>
     <div className='w-full md:w-2/5  mx-auto'>
     <Image src={`https://image.tmdb.org/t/p/w1280/${data.backdrop_path}`} height={750} width={500} priority={true} alt='' className='w-full h-full'/>
     </div>
     </div> 
    </div>
   </div>
  )
}
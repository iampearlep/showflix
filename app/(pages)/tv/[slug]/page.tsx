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
    <div className="text-white pt-10 md:pt-16 px-10">
      <h2 className='text-2xl font-bold mt-10 md:mt-20 pb-20 text-center'>Movie Details</h2>
     <div className=' flex flex-row-reverse gap-5 mx-auto'> 
      <div className='w-1/2 flex flex-col justify-center items-start'> 
        <h2 className='text-2xl font-bold '>{data.title}</h2>
      <p>{data.overview}</p>
     </div>
     <div className='w-2/5 mx-auto'>
     <Image src={`https://image.tmdb.org/t/p/w1280/${data.backdrop_path}`} height={750} width={500} priority={true} layout="responsive" alt='' className=''/>
     </div>
     </div>
    </div>
  )
}
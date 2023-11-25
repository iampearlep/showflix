import Header from '@/components/Header'
import NowPlaying from '@/components/nowPlaying'
import Popular from '@/components/Popular'
export default function Home() {
  return (
    <main className='text-white'>
      <Header />
      <NowPlaying />
      <Popular />
    </main>
  )
}

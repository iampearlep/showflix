import Header from '@/components/Header'
import NowPlaying from '@/components/NowPlaying'
import Popular from '@/components/Popular'
import Action from '@/components/Action'
import Comedy from '@/components/Comedy'
import Romance from '@/components/Romance'
import Anime from '@/components/Anime'
import Horror from '@/components/Horror'
import TvShows from '@/components/TvShows'
export default function Home() {
  return (
    <main className='text-white'>
      <Header />
      <NowPlaying />
      <Popular />
      <Action />
      <Comedy />
      <Romance/>
      <Anime />
      <Horror />
      {/* <TvShows /> */}
    </main>
  )
}

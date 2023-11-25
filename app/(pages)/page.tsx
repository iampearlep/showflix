import Header from '@/components/Header'
import NowPlaying from '@/components/nowPlaying'
import Popular from '@/components/Popular'
import Action from '@/components/Action'
export default function Home() {
  return (
    <main className='text-white'>
      <Header />
      <NowPlaying />
      <Popular />
      <Action />
    </main>
  )
}

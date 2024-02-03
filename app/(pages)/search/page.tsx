"use client"
import { Suspense } from 'react'
import SearchResults from "@/components/SearchResult"
export default function Search() {
    return (
        <main className='text-white'>
         <Suspense fallback={<p>Loading feed...</p>}>
             <SearchResults />
            </Suspense>
        </main>
      )
}
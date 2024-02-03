"use client"
import React, {useState, useEffect} from 'react'
import { IoSearch } from "react-icons/io5";
import { useRouter } from 'next/navigation';
import { useDebounce } from 'use-debounce';

const Search = () => {
    const [searchText, setSearchText] = useState('')
    const [query] = useDebounce(searchText, 700)
    const router = useRouter();

   
      useEffect(() => {
        if(!query){
            router.push(`/`)
          } else {
            router.push(`/search?q=${query}`)
          }
      }, [query, router])
  return (
   <div>
     <div className='relative flex flex-row justify-start md:justify-end items-center'>
         <div className='absolute pointer-events-none '><IoSearch className='text-black' /></div>
            <input type="text"  value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="Search"  className='text-black placeholder:text-black placeholder:px-3 placeholder:text-start  md:placeholder:text-end px-5 md:px-2  focus:border focus:border-black focus:outline-none' />
    </div>
   </div>
  )
}
export default Search
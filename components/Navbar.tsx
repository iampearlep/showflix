"use client"
 import React from "react";
 import Link from "next/link";
 import { CiMenuBurger } from "react-icons/ci";
 import { TfiClose } from "react-icons/tfi";
 import { MdSearch } from "react-icons/md";

const Navbar = () => {
  const [nav, setNav] = React.useState(false);
  return (
    <nav className=" mx-auto text-white relative container px-5 lg:px-10 py-5 z-50">
      <div className="w-full bg-transparent justify-between items-center hidden lg:flex">
        <div className="flex items-center  justify-between">
          <Link href="/" className="text-3xl font-bold">
           SHOWFLIX.
          </Link>
        </div>
        <ul className="w-8/12 flex items-center justify-between space-x-10  cursor-pointer">
          <li>
            <Link href="/" className="flex items-center">
              Home
            </Link>
          </li>
          <li>
            <Link href="/movie" className="flex items-center">
              Movies
            </Link>
          </li>
          <li>
            <Link href="/tv-show" className="flex items-center">
               Tv Shows
            </Link>
          </li>
          <li>
            <Link href="/movie/upcoming" className="flex items-center">
               Upcoming
            </Link>
          </li>
          <div className="relative flex flex-row w-4/12 max-w-sm items-center justify-end gap-1.5">
            <MdSearch className='absolute text-black' />
            <input type="text" placeholder="Search" className="px-2 rounded-sm"/>
          </div>
        </ul>
      </div>

      {/* mobile */}
      <div className="lg:hidden flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
         SHOWFLIX.
        </Link>
        <ul
          onClick={() => setNav(!nav)}
          className={`absolute top-[74px] z-20 bg-black items-center w-full left-0 py-10 bg-red text-white h-full ${
            nav ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col h-96 bg-black text-lg items-center justify-between">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/movie">Movies</Link>
            </li>

            <li className="cursor-pointer bg-black text-white p-2 w-32 flex items-center justify-center rounded-full">
              <Link href="/tv-show" className="flex items-center">
              Tv Shows
              </Link>
            </li>
            <li className="cursor-pointer bg-white text-black p-2 w-32 flex items-center justify-center rounded-full mb-10">
              <Link href="/movie/upcoming" className="flex items-center">
              Upcoming
              </Link>
            </li>
          </div>
        </ul>
        <div className="lg:hidden text-white bg-black block text-2xl" onClick={() => setNav(!nav)}>
          {!nav ? <CiMenuBurger /> : <TfiClose />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
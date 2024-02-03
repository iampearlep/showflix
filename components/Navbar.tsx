"use client";
import React from "react";
import { useState } from "react";
import { IoMenuOutline, IoCloseSharp } from "react-icons/io5";
import Link from "next/link";
import Search from "./Search";

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);
  const handleToggle = () => {
    setIsToggle(!isToggle);
  };
  return (
    <div className="w-full">
      <div className="w-full mx-auto absolute z-50 flex justify-between px-5 lg:px-10 py-5">
        <div className="flex mx-auto items-center justify-between text-white w-11/12">

          <div className="text-3xl font-bold">
          <Link href="/" className="cursor-pointer">
            Showflix.
            </Link>
          </div>
          <div className="hidden md:flex flex-row gap-x-10">
            <Link href="/" className="cursor-pointer">
              Home
            </Link>
            <Link href="/movie" className="cursor-pointer">
              Movies
            </Link>
            <Link href="/tv" className="cursor-pointer">
              Tv Shows
            </Link>
            <Link href="/movie/upcoming" className="cursor-pointer">
              Upcoming
            </Link>
          </div>
          <div className="relative hidden md:flex flex-row  items-center justify-end">
           <Search  />
          </div>
        </div>

        {/* Mobile Screens */}
        <div className="md:hidden flex flex-row">
          <div className="flex flex-row gap-x-4">
            <button onClick={handleToggle}>
              {isToggle ? (
                <IoCloseSharp className="text-3xl text-white" />
              ) : (
                <IoMenuOutline className="text-3xl text-white" />
              )}
            </button>
          </div>
          {isToggle && (
            <div
              className="fixed top-0 right-0 h-full  w-full bg-black text-white z-10 flex flex-col justify-start items-start "
            >
              <button onClick={handleToggle} className="absolute top-5 right-5">
                <IoCloseSharp className="text-3xl" />
              </button>
              <div className="mt-20 max-h-screen overflow-y-auto w-full">
                <div className="flex flex-col gap-10 items-start justify-start font-semibold text-xl px-5">
                  <Link href="/" onClick={handleToggle} className="cursor-pointer">
                    Home
                  </Link>
                  <Link href="/movie" onClick={handleToggle} className="cursor-pointer">
                    Movies
                  </Link>
                  <Link href="/tv" onClick={handleToggle} className="cursor-pointer">
                    Tv Shows
                  </Link>
                  <Link href="/movie/upcoming" onClick={handleToggle} className="cursor-pointer">
                    Upcoming
                  </Link>
                  <Search  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

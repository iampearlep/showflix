"use client"
// import { Link } from "react-router-dom";
 import React from "react";
 import Link from "next/link";
 import { CiMenuBurger } from "react-icons/ci";
 import { TfiClose } from "react-icons/tfi";
// import {
//   AiOutlineShoppingCart,
//   AiOutlineHeart,
//   AiOutlineMail,
// } from "react-icons/ai";
// import { MdOutlineDeliveryDining } from "react-icons/md";
// import Store from "../../store/Store";

const Navbar = () => {
  const [nav, setNav] = React.useState(false);
 // const { cartArray } = Store();
 // console.log(cartArray.length);
  return (
    <nav className="mx-auto container px-5 lg:px-10 py-5 z-50">
      <div className="justify-between items-center hidden lg:flex">
        <div className="flex items-center  justify-between">
          <Link href="/" className="text-3xl text-white font-bold text-secondary">
           SHOWFLIX
          </Link>
        </div>
        <ul className="flex items-center justify-between space-x-10 text-white cursor-pointer">
          <li>
            <Link href="/" className="flex items-center">
              Home
            </Link>
          </li>
          <li>
            <Link href="/movies" className="flex items-center">
              Movies
            </Link>
          </li>
          <li>
            <Link href="/tv-shows" className="flex items-center">
               Tv Shows
            </Link>
          </li>
          <li>
            <Link href="/upcoming" className="flex items-center">
               Upcoming
            </Link>
          </li>
        </ul>
      </div>

      {/* mobile */}
      <div className="lg:hidden flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold text-secondary">
         SHOWFLIX
        </Link>
        <ul
          onClick={() => setNav(!nav)}
          className={`absolute top-[74px] z-20 items-center w-full left-0 py-10 text-secondary h-full ${
            nav ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col h-96 text-lg  items-center justify-between">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/movies">Movies</Link>
            </li>

            <li className="cursor-pointer bg-black text-white p-2 w-32 flex items-center justify-center rounded-full">
              <a href="/cart" className="flex items-center">
              Tv Shows
              </a>
            </li>
            <li className="cursor-pointer bg-white text-black p-2 w-32 flex items-center justify-center rounded-full">
              <a href="/#delivery" className="flex items-center">
              Upcoming
              </a>
            </li>
          </div>
        </ul>
        <div className="lg:hidden block text-3xl" onClick={() => setNav(!nav)}>
          {!nav ? <CiMenuBurger /> : <TfiClose />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="navbar bg-black text-white p-3 flex items-center justify-between px-6 lg:px-8 font-serif gap-0">
      {/* Logo Section */}
      <div className="flex items-center justify-between w-full xl:w-auto">
        <div className="logo font-bold text-2xl">Dwivedi Group</div>
        <button
          className="text-white text-2xl xl:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden xl:flex items-center gap-10 font-medium text-lg">
        <Link href="/" passHref>
          <li className={`cursor-pointer ${pathname === "/" ? "underline" : ""}`}>
            Home
          </li>
        </Link>
        <Link href="/about" passHref>
          <li className={`cursor-pointer ${pathname === "/about" ? "underline" : ""}`}>
            About
          </li>
        </Link>
        <Link href="/contact" passHref>
          <li className={`cursor-pointer ${pathname === "/contact" ? "underline" : ""}`}>
            Contact
          </li>
        </Link>
        {/* Users Dropdown */}
        <div
          className="relative cursor-pointer"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
          eventListner={() => onClick()}
          onMouseOver={() => setIsDropdownOpen(true)}
        >
          <li className="flex gap-2 items-center justify-center">
            <li
              className={`cursor-pointer ${pathname.startsWith("/users") ? "underline" : ""}`}
            >
              Users
            </li>
            <span className="text-sm">▼</span>
          </li>
          {isDropdownOpen && (
            <ul className="absolute top-full left-0 mt-2 bg-black border border-gray-700 rounded-lg py-2 flex flex-col w-40 z-20">
              <Link href="/users/signup" passHref>
                <li className="px-4 py-2 hover:bg-gray-700">Sign Up</li>
              </Link>
              <Link href="/users/login" passHref>
                <li className="px-4 py-2 hover:bg-gray-700">Login</li>
              </Link>
            </ul>
          )}
        </div>
      </ul>

      {/* Input Field and Button */}
      <div className="hidden xl:flex items-center ">
        <input
          type="text"
          className="rounded-lg p-1 px-2 text-black w-[21rem]"
          placeholder="Enter text"
        />
        <button className="focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 bg-indigo-600 rounded-lg p-1 ml-2 px-3 font-medium hover:bg-indigo-700">
          Search
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <ul className="absolute top-[4.5rem] left-0 w-full bg-black flex flex-col items-center gap-5 py-5 text-lg xl:hidden z-10">
          <Link href="/" passHref>
            <li
              className={`cursor-pointer ${pathname === "/" ? "underline" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </li>
          </Link>
          <Link href="/about" passHref>
            <li
              className={`cursor-pointer ${pathname === "/about" ? "underline" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </li>
          </Link>
          <Link href="/contact" passHref>
            <li
              className={`cursor-pointer ${pathname === "/contact" ? "underline" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </li>
          </Link>
          <div className="relative cursor-pointer w-full text-center">
            <li
              className="flex items-center justify-center gap-1"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Users
              <span className="text-sm">▼</span>
            </li>
            {isDropdownOpen && (
              <ul className="mt-2 bg-black border border-gray-700 rounded-lg py-2 flex flex-col w-full">
                <Link href="/users/signup" passHref>
                  <li
                    className="px-4 py-2 hover:bg-gray-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign Up
                  </li>
                </Link>
                <Link href="/users/login" passHref>
                  <li
                    className="px-4 py-2 hover:bg-gray-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </li>
                </Link>
              </ul>
            )}
          </div>
          <div className="w-full px-6">
            <input
              type="text"
              className="rounded-lg p-2 px-2 text-black w-full"
              placeholder="Enter text"
            />
            <button className="focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 bg-indigo-600 rounded-lg p-2 mt-2 w-full font-medium hover:bg-indigo-700">
              Search
            </button>
          </div>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;







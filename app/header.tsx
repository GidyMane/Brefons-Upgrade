"use client";
import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
function Header() {
  const { data: session } = useSession();
  return (
    <header className="text-white text-lg bg-green-500 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <a className="mr-5 hover:text-gray-900 text-lg border py-2 px-2 bg-white rounded-md text-green-500 hover:cursor-pointer ">
            Home
          </a>
          <a className="mr-5 hover:text-gray-900 text-lg hover:cursor-pointer">
            About Us
          </a>
        </nav>
        <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl text-white ">BREFONS MIS SYSTEM</span>
        </a>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          {session ? (
            <Link
              href="/brefons.console"
              className="inline-flex items-center bg-white text-green-500 border-0 py-1 px-3 focus:outline-none hover:bg-white hover:text-green-500 rounded text-base mt-4 md:mt-0"
            >
              /brefons.console
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          ) : (
            <Link
              href="/Login"
              className="inline-flex items-center bg-white text-green-500 border-0 py-1 px-3 focus:outline-none hover:bg-white hover:text-green-500 rounded text-base mt-4 md:mt-0"
            >
              Log in to MIS
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;

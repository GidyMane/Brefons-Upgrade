import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="md:w-[500px] flex flex-row flex-row-3 w-auto mb-3">
          <div className=" pr-8 mr-11">
            <Image src={"/gov.png"} width={250} height={250} alt="Gov" />
          </div>
          <div>
            <p>Build Resilience for Food and Nutrition Security in the
            Horn of Africa (BREFONS)</p>
          </div>
          <div className=" pl-10 ml-11 ">
            <Image src={"/adb.png"} width={400} height={380} alt="Gov" />
          </div>
        </div>
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-green-500">
            Ministry of Agriculture and Livestock Development
          </h1>
          <h3 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Program to Build Resilience for Food and Nutrition Security in the
            Horn of Africa (BREFONS)
          </h3>
          <p className="mb-8 leading-relaxed">
            The Program to Build Resilience for Food and Nutrition Security in
            the Horn of Africa (BREFONS) is designed as a follow-on phase of the
            DRSLP with the objective of improving the living standards for
            women, youth, and the population in general. BREFONS is one of the
            priority programs identified under the Horn of Africa Initiative.
          </p>
          <div className="flex justify-center">
            <button className="bg-green-500 text-white inline-flex py-3 px-5 rounded-md items-center hover:bg-white hover:text-green-500 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 512 512"
              >
                <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
              </svg>
              <span className="ml-4 flex items-start flex-col leading-none">
                <span className="text-xs text-white hover:text-green-500 mb-1">
                  DOWNLOAD
                </span>
                <span className="title-font font-medium">
                  Data Collection App
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

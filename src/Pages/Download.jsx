import React from "react";
import DownloadCharacters from "../components/Download/DownloadCharacters";

function Download() {
  return (
    <>
      <div className="relative w-full h-screen ">
        <div>
          <video
            src="downloadimages/hero.mp4"
            autoPlay
            loop
            muted
            className="w-full h-80 lg:h-screen object-cover mt-16"
          ></video>
        </div>
        <div className="absolute top-0 left-0 z-10 lg:mb-16 ">
          <div className="grid grid-cols-2 gap-4 ">
            <div className="text-white ml-5 lg:ml-10 ">
              <p className="text-4xl w-80 mt-10 font-poppins font-semibold lg:text-6xl lg:mt-20 lg:w-full  ">
                World's most versatile Genesis character creator
              </p>
              <p className="text-lg w-80 mt-2 font-poppins lg:w-4/5 lg:text-lg">
                The integrated character creation system in our free 3D software
                forms the cornerstone of Daz’s ecosystem
              </p>
              <button className="mt-4 rounded-full w-52 h-10 text-black outline-none font-semibold bg-teal-400 hover:bg-transparent hover:text-teal-400 hover:border-teal-400 hover:border-2 transition duration-300">
                Get started for free
              </button>
            </div>
          </div>
        </div>
        <div className=" lg:justify-between grid  grid-cols-1 lg:grid-cols-4  lg:gap-10 lg:items-center text-white bg-headerColor font-poppins lg:h-64 ">
          <div className="lg:ml-14 mt-8 flex ">
            <img
              src="images/daz-ecosystem.png"
              alt="Daz Ecosystem"
              className="h-20 mb-16 mx-auto lg:h-26 lg:w-4/5 lg:mx-0 "
            />
            <svg
              id="chevrons"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 675.01 561.83"
              className="absolute hidden lg:block     mt-20 h-8 lg:h-12 lg:mt-2 lg:ml-36 animate-pulse infinite"
            >
              <polygon
                class="chev chev1"
                fill="#00e4bb"
                points="148.47 83.06 53.14 83.06 183.66 276.14 53.14 476.5 148.47 476.5 278.99 276.14 148.47 83.06"
              ></polygon>
              <polygon
                class="chev chev2"
                fill="#00e4bb"
                points="286.12 49.24 190.79 49.24 343.02 276.14 188.05 512.59 283.38 512.59 438.35 276.14 286.12 49.24"
              ></polygon>
              <polygon
                class="chev chev3"
                fill="#00e4bb"
                points="461.35 83.06 366.02 83.06 496.54 276.14 366.02 476.5 461.35 476.5 591.87 276.14 461.35 83.06"
              ></polygon>
            </svg>
            {/* MOBILE  */}
            <svg
              id="chevrons"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 675.01 561.83"
              className="absolute lg:hidden left-1/2 top-2/2 mt-28 transform -translate-x-1/2 -translate-y-1/2 rotate-90 justify-center m-auto lg:rotate-0  h-8 lg:h-12 lg:mt-2 lg:ml-36 animate-pulse infinite"
            >
              <polygon
                class="chev chev1"
                fill="#00e4bb"
                points="148.47 83.06 53.14 83.06 183.66 276.14 53.14 476.5 148.47 476.5 278.99 276.14 148.47 83.06"
              ></polygon>
              <polygon
                class="chev chev2"
                fill="#00e4bb"
                points="286.12 49.24 190.79 49.24 343.02 276.14 188.05 512.59 283.38 512.59 438.35 276.14 286.12 49.24"
              ></polygon>
              <polygon
                class="chev chev3"
                fill="#00e4bb"
                points="461.35 83.06 366.02 83.06 496.54 276.14 366.02 476.5 461.35 476.5 591.87 276.14 461.35 83.06"
              ></polygon>
            </svg>
          </div>
          <div className="lg:w-4/5 lg:mt-8 lg:block lg:mb-10 w-72 flex gap-10 ml-6 items-center">
            <img
              src="images/cart.svg"
              alt="Cart"
              className="lg:w-10 w-10 lg:mb-2"
            />
            <div>
              <p className="lg:text-2xl text-xl font-bold ">Daz store</p>
              <p className="lg:text-lg text-lg ">
                Ready-made 3D models and kits for characters, environments &
                props
              </p>
            </div>
          </div>
          <div className="lg:w-4/5 lg:mt-8 lg:block lg:mb-10  w-72 flex gap-10 ml-6 mt-6 items-center">
            <img
              src="images/character.png"
              alt="Character"
              className="lg:w-10 w-10 lg:mb-2"
            />
            <div>
              <p className="text-2xl font-bold">Character creator</p>
              <p className="lg:text-lg">
                Quickly dress and alter your character shapes, textures & hair
              </p>
            </div>
          </div>

          <div className="lg:w-4/5 lg:mt-8 lg:block lg:mb-10 w-72 flex gap-10 ml-6 mt-6 items-center">
            <img
              src="images/studio.png"
              alt="Studio"
              className="lg:w-12 w-10 lg:mb-2"
            />
            <div>
              <p className="text-2xl font-bold">Daz Studio</p>
              <p className="text-lg mb-12 lg:mb-0">
                Create 3D scenes fast & intuitively with our essential 3D
                software
              </p>
            </div>
          </div>
        </div>
      </div>
      <DownloadCharacters />
    </>
  );
}

export default Download;

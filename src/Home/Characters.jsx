import React from "react";
import { RiCheckFill } from "react-icons/ri";
import "../App.css";
import About from "./About";
function Characters() {
  return (
    <>
      <div className="bg-black text-white">
        <div className="flex">
          <p className="text-2xl ml-10 lg:ml-12 mt-12 lg:text-5xl font-poppins">
            Latest Characters
          </p>
        </div>
        <div className="flex">
          <div className="lg:justify-between lg:m-auto">
            <div className="mt-6 lg:grid lg:grid-cols-2 m-auto lg:gap-5 lg:mt-10 lg:mr-10 lg:ml-10">
              <div>
                <img src="images/latest-asset1.jpg" alt="asset1" />
                <h1 className="text-2xl ml-10 lg:ml-0 mt-6 font-semibold lg:text-4xl lg:font-bold lg:mt-4">
                  Be Your Own Mechanic
                </h1>
                <p className="ml-10 w-40 mt-5 lg:text-lg lg:ml-0">
                  With our all new transforming cars!
                </p>
                <button className=" mt-6 mb-10 ml-10 lg:ml-0 lg:mt-4  rounded-full w-40 h-10 text-black outline-none font-semibold bg-teal-400 hover:bg-transparent hover:text-teal-400 hover:border-teal-400 hover:border-2 transition duration-300">
                  Explore Now
                </button>
              </div>
              <div>
                <img src="images/latest-asset2.jpg" alt="asset2" />
                <h1 className="text-2xl ml-10 lg:ml-0 mt-6 font-semibold lg:text-4xl lg:font-bold lg:mt-4">
                  Be Your Own Mechanic
                </h1>
                <p className="w-52 ml-10 lg:ml-0 mt-5 text-lg">
                  Get ready space marines! Plus texture add-ons
                </p>
                <button className=" mt-6 mb-10 ml-10 lg:ml-0 lg:mt-4  rounded-full w-40 h-10 text-black outline-none font-semibold bg-teal-400 hover:bg-transparent hover:text-teal-400 hover:border-teal-400 hover:border-2 transition duration-300">
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-between m-auto">
          <div className="grid grid-cols-2 m-auto gap-5 mt-20 mr-16 ml-16">
            <div className="mt-64 ">
              <p className="text-6xl font-semibold font-poppins">
                Character creator
              </p>
              <ul className="text-xl mt-4">
                <li className="flex mt-4 gap-2">
                  <RiCheckFill size={22} color="#00e4bb" /> Fully rigged from
                  hyper-realistic to toon style 3D models
                </li>
                <li className="flex mt-4 gap-2">
                  <RiCheckFill size={32} color="#00e4bb" /> Mix and match
                  clothing, accessories, and hair styles to create your own
                  unique characters
                </li>
                <li className="flex mt-4 gap-2">
                  <RiCheckFill size={26} color="#00e4bb" /> One size fits all:
                  clothing that accommodates any size, gender, or body shape
                </li>
                <li className="flex mt-4 gap-2">
                  <RiCheckFill size={32} color="#00e4bb" /> Combine and morph
                  multiple figure shapes, from lifelike human figures to
                  mythical creatures
                </li>
              </ul>
              <button className="mt-20  rounded-full w-64 h-10 text-black outline-none font-semibold bg-teal-400 hover:bg-transparent hover:text-teal-400 hover:border-teal-400 hover:border-2 transition duration-300">
                Get Daz Studio for free
              </button>
            </div>
            <div className="overflow-hidden flex justify-end">
              <video
                src="images/character.mp4"
                autoPlay
                muted
                loop
                className="h-6/6 overflow-hidden"
              ></video>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="bg-headerColor h-64">
            <div className="bg-headerColor transform -skew-y-1 origin-top-left h-64">
              <div className="transform skew-y-1 flex justify-between">
                <div className="justify-between ml-16 m-auto  mt-10">
                  <div className="grid grid-cols-2">
                    <div className="justify-start ml-10 ">
                      <h1 className="text-4xl w-3/5 mt-4  font-poppins font-bold ">
                        Explore the Daz 3D store
                      </h1>
                      <button className="mt-10  rounded-full w-44 h-12 text-black outline-none font-semibold bg-teal-400 hover:bg-transparent hover:text-teal-400 hover:border-teal-400 hover:border-2 transition duration-300">
                        Shop now
                      </button>
                    </div>
                    <div className="">
                      <ul className="text-xl mt-4">
                        <li className="flex mt-4 gap-2">
                          <RiCheckFill size={32} color="#00e4bb" /> Tens of
                          thousands of premade 3D models
                        </li>
                        <li className="flex mt-4 gap-2">
                          <RiCheckFill size={32} color="#00e4bb" /> Fully rigged
                          3D characters
                        </li>
                        <li className="flex mt-4 gap-2">
                          <RiCheckFill size={32} color="#00e4bb" />{" "}
                          Environments, 3D props, wearables & more
                        </li>
                        <li className="flex mt-4 gap-2">
                          <RiCheckFill size={32} color="#00e4bb" /> Texture,
                          shaders, lighting & animation kits
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />
    </>
  );
}

export default Characters;

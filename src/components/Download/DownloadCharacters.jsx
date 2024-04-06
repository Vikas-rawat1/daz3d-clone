import React from "react";
import { RiCheckFill } from "react-icons/ri";
import "../../App.css";
import DownloadAbout from "./DownloadAbout";

function DownloadCharacters() {
  const color = {
    backgroundColor: "#161D1F",
  };
  return (
    <>
      <div className="bg-black text-white">
        <div className="flex"></div>

        <div className="justify-between flex-col">
          <div className="ml-10  lg:grid lg:grid-cols-2 m-auto gap-5 mt-1 mr-16 lg:ml-16 flex flex-col-reverse lg:mt-40">
            <div className="lg:mt-44 ">
              <p className="text-3xl lg:text-5xl font-semibold font-poppins">
                Daz Studio’s Genesis 3D character creator
              </p>
              <ul className="text-xl lg:text-xl mt-8 ml-2 lg:w-full w-80">
                <li className="flex mt-4 gap-2">
                  <RiCheckFill
                    className="lg:w-33 h-33"
                    size={22}
                    color="#00e4bb"
                  />
                  Fully rigged from hyper-realistic to toon style 3D models
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
              <button className="mt-10 w-60 mb-20 rounded-full lg:w-64 h-10 text-black outline-none font-semibold bg-teal-400 hover:bg-transparent hover:text-teal-400 hover:border-teal-400 hover:border-2 transition duration-300">
                Get Daz Studio for free
              </button>
            </div>
            <div className="mt-20 lg:overflow-hidden lg:justify-end ml-10 lg:ml-0">
              <video
                src="downloadimages/morph-boy.mp4"
                autoPlay
                muted
                loop
                className="lg:h-screen lg:justify-end  overflow-hidden lg:ml-40  "
              ></video>
            </div>
          </div>
        </div>
        <div className=" text-white h-full" style={color}>
          <div className="flex">
            <h1 className="text-4xl w-80 m-auto mt-14  leading-normal text-center lg:text-5xl font-semibold lg:w-96 font-poppins">
              Work faster & smarter with Daz 3D software
            </h1>
          </div>
          <p className="m-auto w-72 mt-4 lg:text-xm lg:w-96 leading-normal text-center font-poppins">
            Daz Studio is your ultimate toolkit, whether you're an experienced
            artist or just starting. Craft captivating characters and scenes
            effortlessly
          </p>
          <div className="justify-between m-auto mt-16 ">
            <div className="lg:grid lg:grid-cols-3 m-auto justify-center ">
              <div>
                <img
                  src="images/about-asset1.png"
                  alt=""
                  className="w-12 mx-auto mt-20 lg:mt-0"
                />
                <h1 className=" mx-auto text-xl text-center mt-5 font-poppins font-semibold lg:text-2xl">
                  Accelerate your workflow
                </h1>
                <p className="w-4/5 mx-auto text-center mt-4 font-poppins lg:text-xl">
                  Craft your characters and scenes using our integrated
                  character creator and store, supercharging your creative
                  process
                </p>
              </div>
              <div>
                <img
                  src="images/about-asset2.png"
                  alt=""
                  className="w-16 mx-auto mt-20 lg:mt-0"
                />
                <h1 className=" mx-auto text-center text-xl mt-5 font-poppins font-semibold lg:text-2xl">
                  User-friendly interface
                </h1>
                <p className="w-4/5 mx-auto text-center mt-4 font-poppins  text-xl">
                  Click, drag, and create: effortlessly manipulate 3D assets,
                  build characters and scenes using our versatile toolset within
                  Daz Studio
                </p>
              </div>
              <div>
                <img
                  src="images/about-asset3.png"
                  alt=""
                  className="w-16 mx-auto mt-20 lg:mt-0"
                />
                <h1 className=" mx-auto text-center text-xl mt-5 font-poppins font-semibold lg:text-2xl">
                  Export
                </h1>
                <p className="w-4/5 mx-auto text-center mt-4 font-poppins text-xl">
                  Extend your creative reach by exporting your work to popular
                  platforms through our Bridges
                </p>
              </div>
            </div>
            <div class="flex justify-center items-center mt-20 ">
              <button class="rounded-full w-64 h-12 mb-16 text-black outline-none font-semibold bg-teal-400 hover:bg-transparent hover:text-teal-400 hover:border-teal-400 hover:border-2 transition duration-300">
                Get started for free
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex">
            <p className="text-2xl ml-10 lg:ml-12 mt-12 lg:text-5xl font-poppins">
              Latest Characters
            </p>
          </div>
          <div className="flex">
            <div className="lg:justify-between lg:m-auto">
              <div className="mt-6 lg:grid lg:grid-cols-2 m-auto lg:gap-5 lg:mt-10 lg:mr-10 lg:ml-10 ">
                <div>
                  <img
                    src="downloadimages/latest1.png"
                    alt="asset1"
                    className="w-full"
                  />
                  <h1 className="text-xl ml-10 lg:ml-0 mt-6 font-semibold lg:text-4xl lg:font-bold lg:mt-4">
                    Hanako 9 is The Face of Cosplay
                  </h1>
                  <p className="ml-10 w-80 mt-5 lg:text-lg lg:ml-0">
                    Get 2 ‘cosplay’ inspired outfits, Eye textures 3 alternative
                    shapes, and more!
                  </p>
                  <button className=" mt-6 mb-10 ml-10 lg:ml-0 lg:mt-4  rounded-full w-40 h-10 text-black outline-none font-semibold bg-teal-400 hover:bg-transparent hover:text-teal-400 hover:border-teal-400 hover:border-2 transition duration-300">
                    Explore Now
                  </button>
                </div>
                <div>
                  <img src="downloadimages/latest2.png" alt="asset2" />
                  <h1 className="text-xl ml-10 lg:ml-0 mt-6 font-semibold lg:text-4xl lg:font-bold lg:mt-4">
                    Introducing John 9
                  </h1>
                  <p className="w-72 ml-10 lg:ml-0 mt-5 text-lg">
                    A lean and versatile 3D character that's perfect for all
                    your tales.
                  </p>
                  <button className=" mt-6 mb-10 ml-10 lg:ml-0 lg:mt-4  rounded-full w-40 h-10 text-black outline-none font-semibold bg-teal-400 hover:bg-transparent hover:text-teal-400 hover:border-teal-400 hover:border-2 transition duration-300">
                    Explore Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="bg-headerColor lg:h-64">
            <div className="bg-headerColor transform -skew-y-1 origin-top-left lg:h-64 h-full">
              <div className="transform skew-y-1 flex justify-between">
                <div className="lg:justify-between lg:ml-16 m-auto  mt-10 ">
                  <div className="text-3xl  lg:grid lg:grid-cols-2">
                    <div className="justify-start ml-10 ">
                      <h1 className="lg:text-4xl lg:w-3/5 mt-4  font-poppins font-bold w-full">
                        Explore the Daz 3D store
                      </h1>
                      <button className="mt-5 text-xl  lg:mt-10  rounded-full w-44 h-12 text-black outline-none font-semibold bg-teal-400 hover:bg-transparent hover:text-teal-400 hover:border-teal-400 hover:border-2 transition duration-300">
                        Shop now
                      </button>
                    </div>
                    <div className="">
                      <ul className="text-xl mt-4 ml-8 mb-10 ">
                        <li className="flex mt-4 gap-2">
                          <RiCheckFill size={32} color="#00e4bb" /> Tens of
                          thousands of premade 3D models
                        </li>
                        <li className="flex mt-4 gap-2">
                          <RiCheckFill size={32} color="#00e4bb" /> Fully rigged
                          3D characters
                        </li>
                        <li className="flex mt-4 gap-2">
                          <RiCheckFill size={32} color="#00e4bb" />
                          Environments, 3D props, wearables & more
                        </li>
                        <li className="flex mt-4 gap-2 ">
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
        <DownloadAbout />
      </div>
    </>
  );
}

export default DownloadCharacters;

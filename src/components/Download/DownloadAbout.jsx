import React from "react";
import Marquee from "react-fast-marquee";
import { RiCheckFill } from "react-icons/ri";

function DownloadAbout() {
  return (
    <>
      <div>
        <div className="bg-black p-2 gap-10 ">
          <Marquee
            behavior=""
            pauseOnHover={true}
            gradient={1}
            gradientColor="black"
            direction="left"
            className="h-5/5 w-5/5 flex hover:cursor-pointer"
          >
            <div className="ml-2 mr-2">
              <img
                src="images/marquee-asset1.jpg"
                alt=""
                className="w-full h-96 "
              />
            </div>
            <div className="ml-2 mr-2">
              <img
                src="images/marquee-asset2.jpg"
                alt=""
                className="w-full h-96"
              />
            </div>
            <div className="ml-2 mr-2">
              <img
                src="images/marquee-asset3.jpg"
                alt=""
                className="w-full h-96"
              />
            </div>
            <div className="ml-2 mr-2">
              <img
                src="images/marquee-asset4.jpg"
                alt=""
                className="w-full h-96"
              />
            </div>
            <div className="ml-2 mr-2">
              <img
                src="images/marquee-asset5.jpg"
                alt=""
                className="w-full h-96"
              />
            </div>
            <div className="ml-2 mr-2">
              <img
                src="images/marquee-asset6.jpg"
                alt=""
                className="w-full h-96"
              />
            </div>
            <div className="ml-2 mr-2">
              <img
                src="images/marquee-asset7.jpg"
                alt=""
                className="w-full h-96"
              />
            </div>
            <div className="ml-2 mr-2">
              <img
                src="images/marquee-asset8.jpg"
                alt=""
                className="w-full h-96"
              />
            </div>
            <div className="ml-2 mr-2">
              <img
                src="images/marquee-asset9.jpg"
                alt=""
                className="w-full h-96"
              />
            </div>
          </Marquee>
        </div>
      </div>
      <div className="bg-black text-white">
        <div className="flex">
          <p className="text-3xl w-3/4 lg:text-5xl font-bold font-poppins lg:w-3/5 text-center mx-auto mt-16 lg:mt-28">
            Bring your content library to your favorite 3D software
          </p>
        </div>
        <div class="mt-10">
          <div class="flex w-80 h-10 border-2 border-bgColor rounded-full lg:w-3/5 lg:h-20 mx-auto items-center justify-center ">
            <div class=" ">
              <img
                src="images/software1.png"
                alt="Software-Image"
                className="object-fit w-6 lg:w-14 lg:h-12"
              />
            </div>
            <div class="lg:ml-12 ml-4">
              <img
                src="images/software2.png"
                alt="Software-Image"
                className="object-fit w-6 lg:w-14 lg:h-12"
              />
            </div>
            <div class="lg:ml-12 ml-4">
              <img
                src="images/software3.png"
                alt="Software-Image"
                className="object-fit w-6 lg:w-14 lg:h-12"
              />
            </div>
            <div class="lg:ml-12 ml-4">
              <img
                src="images/software4.png"
                alt="Software-Image"
                className="object-fit w-6 lg:w-14 lg:h-12"
              />
            </div>
            <div class="lg:ml-12 ml-4">
              <img
                src="images/software5.png"
                alt="Software-Image"
                className="object-fit w-6 lg:w-14 lg:h-12"
              />
            </div>
            <div class="lg:ml-12 ml-4">
              <img
                src="images/software6.png"
                alt="Software-Image"
                className="object-fit w-6 lg:w-14 lg:h-12"
              />
            </div>
            <div class="lg:ml-12 ml-4">
              <img
                src="images/software7.png"
                alt="Software-Image"
                className="object-fit w-6 lg:w-14 lg:h-12"
              />
            </div>
          </div>
          <div class="flex justify-center items-center mt-10 ">
            <button class="rounded-full  w-72 h-10 lg:h-12 mb-28 text-xl lg:text-lg text-black outline-none font-semibold bg-teal-400 hover:bg-transparent hover:text-teal-400 hover:border-teal-400 hover:border-2 transition duration-300">
              Learn about Daz Bridges
            </button>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="bg-headerColor lg:h-full">
          <div className="bg-headerColor transform -skew-y-1 origin-top-left lg:h-full h-full">
            <div className="transform skew-y-1 flex justify-between">
              <div className="lg:justify-between lg:ml-16 m-auto  mt-10 ">
                <div className="  lg:grid lg:grid-cols-2  lg:gap-20">
                  <div className="justify-start ml-10 ">
                    <img src="downloadimages/ui-image.webp" alt="ui-image" />
                  </div>
                  <div className="">
                    <h1 className="lg:text-5xl  font-poppins font-semibold">Turn your ideas into reality</h1>
                    <p className="text-xl lg:w-4/5 lg:mt-12">
                      Daz Studio, when combined with our Genesis character
                      engine and 3D asset library, opens up limitless creative
                      possibilities. Experience effortless modification and
                      adaptation, empowering you to bring your artistic visions
                      to life
                    </p>
                    <button className="mt-5 text-xl  lg:mt-10  rounded-full w-72 h-12 text-black outline-none  bg-teal-400 hover:bg-transparent hover:text-teal-400 hover:border-teal-400 hover:border-2 transition duration-300">
                    Get started for free
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DownloadAbout;

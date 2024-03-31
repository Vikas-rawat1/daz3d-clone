import React from "react";
import { RiCircleFill, RiDonutChartFill } from "react-icons/ri";
import ReactPlayer from "react-player";
function Software() {
  const spanLine = {
    background: "gray",
    display: "flex",
    justifyContent: "center",
    width: "70%",
    height: "1px",
    margin: "auto",
    marginTop: "6vw",
  };

  return (
    <>
      <div className="bg-black">
        <div>
          <div className="mt-16 relative ">
            <img
              src="softwareimages/hero.jpg"
              alt="Hero Image"
              className="hidden lg:flex lg:object-contain lg:w-full lg:h-full"
            />
            <img
              src="softwareimages/hero-mobile.jpg"
              alt="Hero Image"
              className=" lg:hidden lg:object-contain lg:w-full lg:h-full"
            />
            <div className="absolute lg:bottom-40 lg:top-60 lg:right-80 text-white ">
              <h1 className="text-5xl ">Create More</h1>
              <h2 className="text-2xl mt-6">Download Daz Studio</h2>
              <button className="border-none  bg-softwareBtn p-2  w-4/5 mt-8 text-black font-poppins font-bold hover:text-white hover:softwareBtnHover">
                FREE DOWNLOAD
              </button>
            </div>
          </div>
        </div>
        <div className="bg-black text-white  ">
          <div className="lg:flex ">
            {/* <p className="absolute top-10 text-2xl font-bold lg:mt-20">
              Figure Platform
            </p> */}
            <img
              src="softwareimages/figureplatform.png"
              alt="FigurePlatform"
              className="lg:w-96 lg:ml-60 lg:mt-20 mt-40"
            />
            <div className="text-white relative lg:block ">
              <img
                src="softwareimages/figureplatformbg.png"
                alt="FigurePlatformBg"
                className="object-contain mt-40  lg:-ml-20 lg:mt-1 "
              />
              <p className="lg:absolute lg:top-0 lg:text-2xl font-bold lg:mt-20">
                Figure Platform
              </p>
              <p className="lg:mt-20 w-96 text-red-500">
                At Daz 3D, our figure content is designed with high
                adjustability to easily become any character. Genesis 9 is our
                latest and most advanced platform and, with billions of
                potential combinations and a diverse collection of supporting
                assets, is our most versatile figure platform yet.
              </p>
            </div>
          </div>
          <div className="bg-productBg lg:w-10/12 lg:m-auto lg:grid lg:grid-cols-2 rounded-3xl  flex flex-col-reverse ">
            <div className="text-center mb-24 mt-20 lg:text-left lg:mt-5 lg:ml-20 lg:mb-20 font-poppins">
              <h1 className="lg:w-64 text-2xl">Smart & Modular Content</h1>
              <p className="mt-4 ml-2 mr-2 lg:mt-8 lg:w-7/12">
                When you’re working olg:n a project, check out ready-made assets
                in our online store. The Daz store offers more than just body
                and face shapes, outfits, and poses — it offers creatures,
                buildings, spaceships, and environments. Mix, match, blend, and
                tweak your perfect character and scene.
              </p>
              <button className="border-none w-3/5 ml-10 bg-softwareBtn p-2  lg:w-2/5 mt-12 text-black font-poppins font-semibold hover:text-white hover:bg-softwareBtnHover">
                SHOP CONTENT
              </button>
            </div>
            <div className="w-80 h-80 m-auto mt-20 lg:h-2/5 lg:w-96 lg:mt-10 lg:mb-10 ">
              <video
                src="softwareimages/softwareproducts.mp4"
                loop
                autoPlay
                muted
              ></video>
            </div>
          </div>
          <div className=" lg:grid lg:grid-cols-2 lg:w-8/12 m-auto font-poppins mt-24">
            <div className="w-80 m-auto lg:w-64 lg:mt-8">
              <video
                src="softwareimages/softwarequick.mp4"
                loop
                muted
                autoPlay
                className="hover:cursor-pointer"
              ></video>
            </div>
            <div>
              <h1 className="mt-8 m-auto text-3xl w-96 text-center lg:text-left lg:text-2xl lg:w-64 lg:m-0 ">
                Quick, Realistic, & Stunning Images
              </h1>
              <p className="text-center m-auto mt-5 text-xm w-80 lg:text-xm lg:text-left lg:m-0">
                With dForce physics technology, Daz Studio simulates natural
                cloth and hair movement. By combining dForce, Genesis 9, and the
                NVIDIA Iray render engine, Daz 3D makes 3D creation, imagery,
                and animation fast, easy, and more realistic.
              </p>
            </div>
          </div>
          <div>
            <div className="text-center mt-10 font-poppins">
              <h1 className="text-2xl">Daz Studio Tools & Features</h1>
            </div>
            <div className="m-auto block  lg:flex lg:gap-1 justify-center mt-10 text-center">
              <p className="m-auto lg:m-0 w-11/12  border-2 border-purple-700 p-4 lg:w-48 ">
                Smart Content
              </p>
              <p className="m-auto lg:m-0 w-11/12  border-2 border-purple-700 p-4 lg:w-48 ">
                Shaping Technology
              </p>
              <p className="m-auto lg:m-0 w-11/12 border-2 border-purple-700 p-4 lg:w-48 ">
                Filament
              </p>
              <p className="m-auto lg:m-0 w-11/12 border-2 border-purple-700 p-4 lg:w-48 ">
                Bridges
              </p>
            </div>
          </div>
          <div>
            <div className="h-screen lg:relative lg:h-auto m-auto w-80 lg:w-4/5 mt-20 lg:mb-10 shadow-purple-500 shadow-lg  rounded-2xl top-0">
              <video
                src="softwareimages/werewolf.mp4"
                loop
                autoPlay
                muted
                className=" hidden lg:flex rounded-2xl"
              ></video>

              <div className="mt-10 text-center lg:absolute lg:top-0 font-poppins lg:ml-20 lg:text-left">
                <h1 className="text-2xl lg:mt-0">Shaping Technology</h1>
                <p className="w-72 m-auto lg:w-80 mt-16 text-xm lg:mt-5">
                  Daz Studio offers shaping technology so you can mix and match
                  your characters with the shapes pane. This tool lets you
                  adjust individual attributes of your character, like their
                  eyes, cheekbones, and other facial features, plus you can
                  blend in changes from other characters.
                </p>
                <p className="mt-16 lg:mt-5">
                  With shaping technology you can:
                </p>
                <div>
                  <ul className="w-72 text-left">
                    <div>
                      <li className="mt-16 lg:mt-3 flex text-sm gap-3 ">
                        <span className="w-2 bg-green-500 h-2 rounded-full"></span>
                        Design your own character for your specific needs
                      </li>
                    </div>
                    <div>
                      <li className="mt-8 lg:mt-2 flex text-sm gap-2 ">
                        <span className="w-4 bg-green-500 h-2 rounded-full"></span>
                        Make a personalized character who’s a little bit cartoon
                        but still photorealistic.
                      </li>
                    </div>
                    <li className="mt-8 lg:mt-2 flex text-sm gap-2 ">
                      <span className="w-4 bg-green-500 h-2 rounded-full"></span>
                      Blend a mixture of your favorite human and fantasy
                      characters for a human-like hybrid.
                    </li>
                    <li className="mt-8 lg:mt-2 flex text-sm gap-2 ">
                      <span className="w-4 bg-green-500 h-2 rounded-full"></span>
                      Explore billions of possible combinations for limitless
                      character creation.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 relative ">
            <div className="absolute m-auto left-1/2 ri transform -translate-x-1/2">
              <h1 className="mt-12 text-3xl font-poppins">
                History of the Genesis Platform
              </h1>
              {/* <img
              src="softwareimages/figureplatformbg.png"
              alt="figureplatformbg"
              className=""
            /> */}
            </div>
            <img
              src="softwareimages/genesis-bg.png"
              alt="Hero Image"
              className="object-contain w-full h-full"
            />
            <div className="absolute bottom-40 top-32 right-80 text-white">
              <div className=" flex justify-center mx-auto ml-80">
                <img
                  src="softwareimages/genesis1.png"
                  alt=""
                  className=" h-2/5  w-20 "
                />
                <img
                  src="softwareimages/genesis1.png"
                  alt=""
                  className=" h-2/5 -ml-40 w-64 "
                />
                <img
                  src="softwareimages/genesis2.png"
                  alt=""
                  className=" h-2/5 -ml-40 w-64 "
                />
                <img
                  src="softwareimages/genesis3.png"
                  alt=""
                  className=" h-2/5 -ml-40 w-64 "
                />
                <img
                  src="softwareimages/genesis4.png"
                  alt=""
                  className=" h-2/5 -ml-40 w-64 "
                />
                <img
                  src="softwareimages/genesis5.png"
                  alt=""
                  className=" h-2/5 -ml-40 w-64 "
                />
                <img
                  src="softwareimages/genesis6.png"
                  alt=""
                  className=" h-2/5 -ml-40 w-64 "
                />
              </div>
              <div className="flex justify-center m-auto ml-60">
                <ul className="flex m-auto justify-center gap-10">
                  <li>Genesis 8.1</li>
                  <li>Genesis 8</li>
                  <li>Genesis 3</li>
                  <li>Genesis 2</li>
                  <li>Genesis</li>
                  <li>Michael & Victoria 4</li>
                </ul>
              </div>
              <div className="w-80 flex justify-center m-auto mt-10 mr-40 ">
                <img
                  s
                  src="softwareimages/carousel-bar.png"
                  alt=""
                  className="h-32 w-full"
                />
                <p className="flex justify-center items-cetner w-86 mt-5 ">
                  Because Daz 3D is always innovating and moving forward, we
                  regularly update and enhance Daz Studio with new products like
                  Face Transfer and advanced animation capabilities. Daz 3D’s
                  commitment to giving you powerful and free software means
                  exciting developments are always being released.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 ">
            <div className="relative ml-40 ">
              <img
                src="softwareimages/filament.jpg"
                alt="Filament"
                className="h-64 top-40 left-20 absolute"
              />
            </div>
            <div className="relative mr-20">
              <img
                src="softwareimages/bg-circle.png"
                alt="Circle"
                className=""
              />
              <div className="absolute inset-0 top-10  left-32 mt-20 w-80 ">
                <p className="text-green-400 font-semibold">FILAMENT</p>
                <p className="mt-5">
                  Daz Studio 4.14’s Filament enabled viewport and render engine
                  gives you high quality renders in a fraction of the time it
                  takes other render engines, so you don’t have to wait all day
                  to see your output, even with older systems and systems that
                  don’t quite have as many CPUs/GPUs.
                </p>
                <p className="flex mt-2 items-center gap-2">
                  <RiCircleFill size={10} color="#00C279" />
                  Design in real time with incredible quality
                </p>
                <p className="flex mt-2 items-center gap-2">
                  <RiCircleFill size={10} color="#00C279" />
                  Speed up render time by 10x
                </p>

                <p className="flex mt-2 items-center gap-2">
                  <RiCircleFill size={10} color="#00C279" />
                  Real-time and high quality animation
                </p>
              </div>
            </div>
          </div>

          {/* NEW  */}
          <div className="grid grid-cols-2">
            <div className="relative mr-20">
              <img
                src="softwareimages/bg-circle.png"
                alt="Circle"
                className="ml-32"
              />
              <div className="absolute inset-0 top-10  left-28 ml-32 mt-20 w-80 ">
                <p className="text-green-400 font-semibold">DAZ BRIDGES</p>
                <p className="mt-5">
                  Take your 3D library wherever you create with Daz Bridges.
                  These bridges transfer amazing Daz content to the software you
                  create in, textured, rigged, and ready to render.
                </p>
                <p className="mt-2">
                  Daz offers file formats ready for your preferred program, and
                  bridges to tranfer directly from Daz Studio into Blender,
                  Unreal, Unity, Cinema 4D, Maya, and 3ds Max.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="softwareimages/dazbridge-asset1.png"
                alt="Filament"
                className="h-48 top-40 absolute z-10"
              />
              <img
                src="softwareimages/dazbridge-asset2.png"
                alt="Filament"
                className="top-20 left-20 absolute"
              />
            </div>
          </div>
          <div className="flex">
            <span style={spanLine}></span>
          </div>
          <div className="flex flex-col">
            <p className="text-center text-4xl  mt-10 justify-center m-auto">
              Download Daz Studio for free
            </p>
            <button className="border-none m-auto mb-20 bg-softwareBtn p-2  w-1/5 mt-12 text-black font-poppins font-bold hover:text-white hover:bg-softwareBtnHover">
              FREE DOWNLOAD
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Software;

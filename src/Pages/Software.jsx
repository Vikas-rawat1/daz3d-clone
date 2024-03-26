import React from "react";
import { RiDonutChartFill } from "react-icons/ri";
import ReactPlayer from "react-player";
function Software() {
  return (
    <>
      <div>
        <div className="mt-16 relative ">
          <img
            src="softwareimages/hero.jpg"
            alt="Hero Image"
            className="object-contain w-full h-full"
          />
          <div className="absolute bottom-40 top-60 right-80 text-white">
            <h1 className="text-5xl ">Create More</h1>
            <h2 className="text-2xl mt-6">Download Daz Studio</h2>
            <button className="border-none  bg-softwareBtn p-2  w-4/5 mt-8 text-black font-poppins font-bold hover:text-white hover:softwareBtnHover">
              FREE DOWNLOAD
            </button>
          </div>
        </div>
      </div>
      <div className="bg-black  text-white ">
        <div className="flex">
          <img
            src="softwareimages/figureplatform.png"
            alt="FigurePlatform"
            className="w-96 ml-60 mt-20"
          />
          <div className="text-white relative">
            <img
              src="softwareimages/figureplatformbg.png"
              alt="FigurePlatformBg"
              className="object-contain -ml-20 mt-1 "
            />
            <p className="absolute top-0 text-2xl font-bold mt-20">
              Figure Platform
            </p>
            <p className="mt-20 w-96">
              At Daz 3D, our figure content is designed with high adjustability
              to easily become any character. Genesis 9 is our latest and most
              advanced platform and, with billions of potential combinations and
              a diverse collection of supporting assets, is our most versatile
              figure platform yet.
            </p>
          </div>
        </div>
        <div className="bg-productBg w-10/12 m-auto grid grid-cols-2 rounded-3xl">
          <div className="mt-5 ml-20 mb-20 font-poppins ">
            <h1 className=" w-64 text-2xl">Smart & Modular Content</h1>
            <p className="mt-8 w-7/12">
              When you’re working on a project, check out ready-made assets in
              our online store. The Daz store offers more than just body and
              face shapes, outfits, and poses — it offers creatures, buildings,
              spaceships, and environments. Mix, match, blend, and tweak your
              perfect character and scene.
            </p>
            <button className="border-none ml-10 bg-softwareBtn p-2  w-2/5 mt-12 text-black font-poppins font-bold hover:text-white hover:bg-softwareBtnHover">
              SHOP CONTENT
            </button>
          </div>
          <div className="h-2/5 w-96 mt-10 mb-10">
            <video
              src="softwareimages/softwareproducts.mp4"
              loop
              autoPlay
              muted
            ></video>
          </div>
        </div>
        <div className="grid grid-cols-2 w-8/12 m-auto font-poppins mt-24">
          <div className="w-64 mt-8">
            <video
              src="softwareimages/softwarequick.mp4"
              loop
              muted
              autoPlay
              className="hover:cursor-pointer"
            ></video>
          </div>
          <div>
            <h1 className="text-2xl w-64 ">
              Quick, Realistic, & Stunning Images
            </h1>
            <p className="mt-5 w-4/5 text-xm">
              With dForce physics technology, Daz Studio simulates natural cloth
              and hair movement. By combining dForce, Genesis 9, and the NVIDIA
              Iray render engine, Daz 3D makes 3D creation, imagery, and
              animation fast, easy, and more realistic.
            </p>
          </div>
        </div>

        <div>
          <div className="text-center mt-10 font-poppins">
            <h1 className="text-2xl">Daz Studio Tools & Features</h1>
          </div>
          <div className="flex gap-1 justify-center mt-10 text-center">
            <p className="border-2 border-purple-700 p-4 w-48 ">
              Smart Content
            </p>
            <p className="border-2 border-purple-700 p-4 w-48 ">
              Shaping Technology
            </p>
            <p className="border-2 border-purple-700 p-4 w-48 ">Filament</p>
            <p className="border-2 border-purple-700 p-4 w-48 ">Bridges</p>
          </div>
        </div>
        <div>
          <div className="relative m-auto w-4/5 mt-20 mb-10 shadow-purple-500 shadow-lg  rounded-2xl top-0">
            <video
              src="softwareimages/werewolf.mp4"
              loop
              autoPlay
              muted
              className="rounded-2xl"
            ></video>

            <div className="absolute top-0 font-poppins ml-20">
              <h1 className="text-2xl ">Shaping Technology</h1>
              <p className="w-80 mt-5 text-xm">
                Daz Studio offers shaping technology so you can mix and match
                your characters with the shapes pane. This tool lets you adjust
                individual attributes of your character, like their eyes,
                cheekbones, and other facial features, plus you can blend in
                changes from other characters.
              </p>
              <p className="mt-5">With shaping technology you can:</p>
              <div>
                <ul className="w-72">
                  <div>
                    <li className="mt-3 flex text-sm gap-3 ">
                      <span className="w-2 bg-green-500 h-2 rounded-full"></span>
                      Design your own character for your specific needs
                    </li>
                  </div>
                  <div>
                    <li className="mt-2 flex text-sm gap-2 ">
                      <span className="w-4 bg-green-500 h-2 rounded-full"></span>
                      Make a personalized character who’s a little bit cartoon
                      but still photorealistic.
                    </li>
                  </div>
                  <li className="mt-2 flex text-sm gap-2 ">
                    <span className="w-4 bg-green-500 h-2 rounded-full"></span>
                    Blend a mixture of your favorite human and fantasy
                    characters for a human-like hybrid.
                  </li>
                  <li className="mt-2 flex text-sm gap-2 ">
                    <span className="w-4 bg-green-500 h-2 rounded-full"></span>
                    Explore billions of possible combinations for limitless
                    character creation.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 flex ">sd</div>
      </div>
    </>
  );
}

export default Software;

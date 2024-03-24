import Marquee from "react-fast-marquee";
function About() {
  const color = {
    backgroundColor: "#161D1F",
  };
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
      {/* New Section */}
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
                Craft your characters and scenes using our integrated character
                creator and store, supercharging your creative process
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
    </>
  );
}

export default About;

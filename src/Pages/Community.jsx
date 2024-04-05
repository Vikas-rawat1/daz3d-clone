import Plx from "react-plx";

function Community() {
  const color = {
    backGround: "#191d20",
  };
  const parallaxData1 = [
    {
      start: 0,
      end: 500,
      properties: [
        {
          startValue: 0,
          endValue: 200,
          property: "translateY",
        },
      ],
    },
  ];

  const parallaxData2 = [
    {
      start: 400,
      end: 1000,
      properties: [
        {
          startValue: 0,
          endValue: -100,
          property: "translateY",
        },
      ],
    },
  ];

  return (
    <div className="bg-black text-white relative">
      <Plx
        className="plx-container"
        parallaxData={parallaxData1}
        style={{ marginBottom: "100px" }}
      >
        <div className="lg:grid lg:grid-cols-2 flex bg-no-repeat ">
          <div>
            <img
              src="communityimages/topper-left.jpg"
              alt="Topper-left"
              className="lg:w-full h-screen"
            />
          </div>
          <div>
            <img
              src="communityimages/topper-right.jpg"
              alt="Topper-right"
              className="lg:w-full w-18 h-screen "
            />
          </div>
          <div className="top-60 absolute lg:top-80 text-white w-full m-auto text-center ">
            <h1 className="text-3xl lg:text-2xl font-semibold">
              DAZ COMMUNITY
            </h1>
            <p className="text-3xl text-purple-500 lg:text-2xl mt-5 font-semibold">
              Supporting Artists. Artist Supported.
            </p>
            <p className="text-2xl w-4/5 lg:w-96 font-semibold lg:text-xl m-auto mt-10">
              Our Community is full of talented artists that support the
              creation of Daz 3D art. We are proud of our artists and all of the
              artists that create with Daz.
            </p>
          </div>
        </div>
      </Plx>

      <Plx
        className="plx-container"
        parallaxData={parallaxData2}
        style={{ zIndex: 2 }}
      >
        <div className="bg-black lg:grid lg:grid-cols-2 m-auto justify-center items-center ">
          <div className="ml-12 lg:ml-32 ">
            <img src="communityimages/forums.png" alt="Forums" />
          </div>
          <div className="mt-32 ">
            <p className="font-semibold text-center text-3xl  lg:text-2xl lg:text-left">
              Forums
            </p>
            <p className="w-72 lg:w-96 mt-10 m-auto text-center lg:text-left">
              Collaborate with other artists, ask questions, find answers, and
              explore ideas in Daz Forums.
            </p>
            <p className="border-none w-3/5 text-center  mt-12 lg:m-0  m-auto bg-softwareBtn p-2  lg:w-40 lg:mt-12 text-black font-poppins font-semibold hover:text-white hover:bg-softwareBtnHover lg:text-left">
              VIEW FORUMS
            </p>
          </div>
        </div>
      </Plx>
      <div>
        <div className="bg-headerColor flex flex-col-reverse lg:grid lg:grid-cols-2">
          <div className="ml-16 m-auto">
            <p className="text-2xl font-semibold  text-center lg:text-left">
              Gallery
            </p>
            <p className="w-72 mt-5 lg:w-96 text-center lg:text-left">
              Daz 3D supports our large community of artists, and we’ve created
              a place for them to showcase their art. Check out their incredible
              work in the Gallery.
            </p>
            <p className="w-72   text-center lg:text-left">
              <button className="border-none w-4/5  bg-softwareBtn p-2  lg:w-40 mt-12 text-black font-poppins font-semibold hover:text-white hover:bg-softwareBtnHover mb-20">
                VIEW GALLERY
              </button>{" "}
            </p>
          </div>
          <div>
            <img
              src="communityimages/gallery.png"
              alt="Gallery"
              className="mt-20 mb-20 lg:mt-0"
            />
          </div>
        </div>
      </div>

      <div className="mt-32 text-center m-auto">
        <p className="text-center text-3xl"> Video Tutorials</p>
        <div className="mt-10">
          <img
            src="communityimages/video.png"
            alt="Video"
            className="lg:w-4/5 m-auto "
          />
        </div>
        <div>
          <p className="text-center w-48 lg:w-2/5 m-auto">
            With Daz Tutorials, learn how to get started and how to use Daz
            Studio with beginner, intermediate, and advanced tips and tricks.
          </p>
          <p>
            <button className="border-none w-full bg-softwareBtn p-2  lg:w-52 mt-12 text-black font-poppins font-semibold hover:text-white hover:bg-softwareBtnHover">
              VIEW TUTORIALS
            </button>
          </p>
        </div>
      </div>

      <div className="flex  mt-10 bg-gradient-to-b from-gray-900 via-gray-850 ">
        <div className="m-auto text-center mb-20">
          <p className="mt-10 text-4xl font-poppins">Daz Blog</p>

          <div>
            <div className="flex flex-wrap  mt-20 ">
              <div className="lg:w-96 h-2/5">
                <img
                  src="communityimages/blogbanner1.jpg"
                  alt="Blog Banner 1"
                  className="w-full h-2/5"
                />
                <p className="lg:text-left mt-10 m-auto text-center text-2xl">
                  Introducing Daz AI Studio
                </p>
                <p className="text-center w-4/5 mt-10 m-auto lg:m-0 lg:w-4/5   lg:text-left lg:mt-10">
                  Explore the features of our new image generator that can
                  create Daz Style 2D images in seconds
                </p>
                <p className="border-none m-auto w-4/5 mt-12 mb-12  lg:m-0 bg-softwareBtn p-2  lg:w-36 lg:mt-12 text-black font-poppins font-semibold hover:text-white hover:bg-softwareBtnHover">
                  READ MORE
                </p>
              </div>
              <div className="lg:w-96 h-2/5">
                <img
                  src="communityimages/blogbanner2.jpg"
                  alt="Blog Banner 1"
                />
                <p className="lg:text-left mt-10 m-auto w-4/5 text-2xl text-center">
                  Daz AI Studio: Prompt Engineering Guide
                </p>
                <p className="text-center w-4/5 m-auto lg:text-left mt-10">
                  Take a deep dive into prompt engineering with Daz AI Studio!
                </p>
                <p className="border-none m-auto w-4/5 mb-12  lg:ml-10  bg-softwareBtn p-2  lg:w-36 mt-12 text-black font-poppins font-semibold hover:text-white hover:bg-softwareBtnHover">
                  READ MORE
                </p>
              </div>
              <div className="lg:w-96 h-2/5">
                <img
                  src="communityimages/blogbanner3.jpg"
                  alt="Blog Banner 1"
                />
                <p className="text-xl w-4/5 m-auto lg:text-left mt-10 text-center">
                  Sci-Fi Wonders: Fan Art Add-Ons From Your Favorite Fandoms
                </p>
                <p className="text-center w-4/5 m-auto lg:text-left mt-10">
                  Explore exciting fan art texture add-ons made for
                  sci-fi-themed renders!
                </p>
                <p className="border-none m-auto w-4/5 lg:ml-10  bg-softwareBtn p-2  lg:w-36 mt-12 text-black font-poppins font-semibold hover:text-white hover:bg-softwareBtnHover">
                  READ MORE
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;

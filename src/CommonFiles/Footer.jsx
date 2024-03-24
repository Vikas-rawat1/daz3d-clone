import React from "react";
import {
  RiDiscordFill,
  RiFacebookBoxFill,
  RiInstagramLine,
  RiTwitterFill,
  RiYoutubeFill,
} from "react-icons/ri";

function Footer() {
  return (
    <>
      <div className="bg-headerColor">
        <div className="bg-headerColor text-yellow-50 flex ">
          <div className="lg:grid lg:grid-cols-3 mt-20 justify-between   lg:mx-auto flex flex-col-reverse">
            <ul className="mx-auto lg:text-sm lg:ml-auto ml-6">
              <span className="border-2 lg:hidden flex  justify-center items-center m-auto w-80 mb-10 ml-2 mr-2"></span>
              <li>
                <img src="images/daz3d.svg" alt="" />
              </li>
              <li className="lg:mt-4 mt-6">
                Daz 3D is part of
                <span className="text-xl font-poppins font-semibold">
                  Tafi
                </span>
              </li>
              <li className="tracking-widest mt-5 mb-5">CONNECT</li>
              <li className="mt-1 flex gap-8">
                <RiInstagramLine size={28} />
                <RiFacebookBoxFill size={28} />
                <RiYoutubeFill size={28} />
                <RiTwitterFill size={28} />
                <RiDiscordFill size={28} />
              </li>
              <li className="mt-8  font-poppins">DAZ Productions, Inc.</li>
              <li className="mt-2">224 S 200 W, Suite #250</li>
              <li className="mt-2">Salt Lake City, UT 84101</li>
            </ul>

            <div className="lg:grid lg:grid-cols-2 ">
              <ul className="lg:mx-auto lg:ml-48 lg:leading-9 leading-9 ml-6 lg:text-sm ">
                <li className="tracking-widest text-sm font-poppins w-64 mb-4 ">
                  HELP
                </li>
                <li>Contact Us</li>
                <li>Tutorials</li>
                <li>Help Center</li>
                <li>Sell Your 3D Content</li>
                <li>Affiliate Program</li>
                <li>Documentation Center</li>
                <li>Open Source</li>
              </ul>
              <ul className="lg:mx-auto lg:ml-72 lg:leading-9 leading-9 lg:text-sm ml-6">
                <li className="tracking-widest text-sm font-poppins w-64 mb-4 lg:mt-0 mt-20">
                  JOIN DAZ
                </li>
                <li>Blog</li>
                <li>About Us</li>
                <li>Press</li>
                <li>Careers</li>
                <li>Bridges</li>
                <li>Enterprise</li>
              </ul>
              <ul className="lg:mx-auto lg:mt-20 lg:ml-48 lg:leading-9 leading-9 lg:text-sm ml-6">
                <li className="tracking-widest text-sm font-poppins w-64 mb-4 lg:mt-0 mt-20">
                  COMMUNITY
                </li>
                <li>In the Studio</li>
                <li>Gallery</li>
                <li>Forum</li>
              </ul>
              <ul className="lg:mx-auto lg:text-sm text-xm lg:mt-20 lg:ml-72 lg:leading-9 leading-9 mb-20 ml-6">
                <li className="tracking-widest lg:text-sm font-poppins w-64 mb-4 lg:mt-0 mt-20">
                  DAZ STORE
                </li>
                <li>Shop</li>
                <li>Daz+</li>
                <li>Freebies</li>
                <li>Published Artists</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-headerColor text-yellow-50 h-28">
          {/* <div className="lg:flex"></div> */}
          <p className="lg:text-center lg:ml-72 text-sm ml-6 mt-5  ">
            Licensing Agreement | Terms of Service | Privacy Policy | EULA
          </p>
          <p className="lg:text-center lg:ml-56 lg:mt-4 text-sm ml-6 mt-4">
            © 2024 Daz Productions Inc. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;

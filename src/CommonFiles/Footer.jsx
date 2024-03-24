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
          <div className="grid grid-cols-3 mt-20 justify-between   mx-auto">
            <ul className="mx-auto text-sm">
              <li>
                <img src="images/daz3d.svg" alt="" />
              </li>
              <li className="mt-4">
                Daz 3D is part of
                <span className="text-xl font-poppins font-semibold">Tafi</span>
              </li>
              <li className="tracking-widest mt-5">CONNECT</li>
              <li className="mt-1 flex gap-8">
                <RiInstagramLine size={28} />
                <RiFacebookBoxFill size={28} />
                <RiYoutubeFill size={28} />
                <RiTwitterFill size={28} />
                <RiDiscordFill size={28} />
              </li>
              <li className="mt-8  font-poppins ">DAZ Productions, Inc.</li>
              <li>224 S 200 W, Suite #250</li>
              <li>Salt Lake City, UT 84101</li>
            </ul>

            <div className="grid grid-cols-2 ">
              <ul className="mx-auto ml-48 leading-9 text-sm">
                <li className="tracking-widest text-sm font-poppins w-64 mb-4">
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
              <ul className="mx-auto ml-72 leading-9 text-sm">
                <li className="tracking-widest text-sm font-poppins w-64 mb-4">
                  JOIN DAZ
                </li>
                <li>Blog</li>
                <li>About Us</li>
                <li>Press</li>
                <li>Careers</li>
                <li>Bridges</li>
                <li>Enterprise</li>
              </ul>
              <ul className="mx-auto mt-20 ml-48 leading-9 text-sm">
                <li className="tracking-widest text-sm font-poppins w-64 mb-4">
                  COMMUNITY
                </li>
                <li>In the Studio</li>
                <li>Gallery</li>
                <li>Forum</li>
              </ul>
              <ul className="mx-auto mt-20 ml-72 leading-9 text-sm mb-20">
                <li className="tracking-widest text-sm font-poppins w-64 mb-4">
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

        <div className="bg-headerColor text-yellow-50 h-28 ">
          <div className="flex"></div>
          <p className="text-center ml-72 text-sm">
            Licensing Agreement | Terms of Service | Privacy Policy | EULA
          </p>
          <p className="text-center ml-56 mt-4 text-sm ">
            © 2024 Daz Productions Inc. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;

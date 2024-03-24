import React from "react";
import { Link } from "react-router-dom";
import Shop from "../Pages/Shop";
function Navigation() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 w-full z-20">
        <div className=" flex justify-between h-16 items-center bg-headerColor text-gray-400">
          <div>
            <ul className="flex items-center text-xs gap-4 ml-4">
              <li>
                <img src="images/daz3d.svg" alt="Logo" className="h-7" />
              </li>
              <li>
                <Link to="/shop">SHOP</Link>
              </li>
              <li>
                <Link to="/software">3D SOFTWARE</Link>
              </li>
              <li>
                <Link to="/models">3D MODELS</Link>
              </li>
              <li>
                <Link to="/community">COMMUNITY</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex items-center text-xs gap-4 mr-4">
              <li>
                <input
                  type="search"
                  placeholder="Search Store"
                  className="outline-none border-none rounded-sm h-6 w-48 text-black text-sm"
                />
              </li>
              <li>DOWNLOAD STUDIO </li>
              <li>ACCOUNT</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;

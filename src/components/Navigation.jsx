import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  RiArrowDropDownLine,
  RiArrowDropRightLine,
  RiCloseLine,
  RiSearch2Line,
  RiShoppingCartLine,
  RiUserLine,
} from "react-icons/ri";
import Collapsible from "react-collapsible";

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);
  const [isSoftwareCollapsed, setSoftwareCollapsed] = useState(true);
  const [isModelCollapsed, setModelCollapsed] = useState(true);
  const [isCommunityCollapsed, setCommunityCollapsed] = useState(true);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleSoftwareCollapsed = () => {
    setSoftwareCollapsed(!isSoftwareCollapsed);
    if (!isSoftwareCollapsed) {
      setModelCollapsed(true);
      setCommunityCollapsed(true);
    }
  };

  const toggleModelCollapsed = () => {
    setModelCollapsed(!isModelCollapsed);
    if (!isModelCollapsed) {
      setSoftwareCollapsed(true);
      setCommunityCollapsed(true);
    }
  };

  const toggleCommunityCollapsed = () => {
    setCommunityCollapsed(!isCommunityCollapsed);
    if (!isCommunityCollapsed) {
      setSoftwareCollapsed(true);
      setModelCollapsed(true);
    }
  };
  // const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <div className="fixed top-0 left-0 right-0 w-full z-20">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex justify-between h-16 items-center bg-headerColor text-gray-400">
          <div>
            <ul className="flex items-center text-xs gap-4 ml-4">
              <li>
                <Link to="/">
                  <img src="images/daz3d.svg" alt="Logo" className="h-7" />
                </Link>
              </li>
              <li>
                <Link to="/">SHOP</Link>
              </li>
              <li>
                <Link to="/software">3D SOFTWARE</Link>
              </li>
              {/* <li>
                <Link to="/models">3D MODELS</Link>
              </li> */}
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
              <li>
                <Link to="/download">DOWNLOAD STUDIO</Link>
              </li>
              <li>
                <Link to="/account">ACCOUNT</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className=" lg:hidden justify-between h-16 items-center bg-headerColor text-gray-400 flex">
          <ul>
            <li className="flex gap-2 ml-4" onClick={toggleMenu}>
              <img src="images/hamburger.svg" alt="Logo" className="w-8" />
              <RiSearch2Line size={30} />
            </li>
          </ul>
          <ul className="w-24">
            <Link to="/">
              <img src="images/daz3d.svg" alt="Logo" />
            </Link>
          </ul>
          <ul>
            <li className="flex gap-2 mr-4">
              <RiUserLine size={30} />
              <RiShoppingCartLine size={30} />
            </li>
          </ul>
        </div>

        {/* Side Menu */}
        {showMenu && (
          <div className="lg:hidden fixed top-0 left-0 h-full bg-gray-800 w-11/12 overflow-y-scroll">
            <ul className="text-xm text-yellow-50">
              <span>
                <li className="flex items-center justify-between mt-4 ml-3">
                  <RiCloseLine size={30} onClick={toggleMenu} />
                  <div className="flex items-center">
                    <input
                      type="text"
                      placeholder="Search Store"
                      className="outline-none border-none rounded-sm h-6 w-48 text-black text-sm mr-2"
                    />
                    <RiSearch2Line className="absolute right-3  text-black" />
                  </div>
                </li>
              </span>

              <li className="mt-6 ml-4">SHOP</li>
              <li className="mt-6 ml-4">
                <Collapsible
                  trigger={
                    <div
                      className="flex justify-between items-center"
                      onClick={toggleSoftwareCollapsed}
                    >
                      3D SOFTWARE
                      {isSoftwareCollapsed ? (
                        <RiArrowDropRightLine size={30} />
                      ) : (
                        <RiArrowDropDownLine size={30} />
                      )}
                    </div>
                  }
                >
                  <li className="mt-4">
                    <Link to="/software" onClick={toggleMenu}>
                      Daz Studio
                    </Link>
                  </li>
                  <li className="mt-4">Install Manager</li>
                  <li className="mt-4">Daz to Maya</li>
                  <li className="mt-4">Daz to Blender</li>
                  <li className="mt-4">Daz to Unreal</li>
                  <li className="mt-4">Daz to Unity</li>
                  <li className="mt-4">Daz to 3ds Max</li>
                  <li className="mt-4">Daz to Cinema 4D</li>
                </Collapsible>
              </li>
              <li className="mt-6 ml-4">
                <Collapsible
                  trigger={
                    <div
                      className="flex justify-between items-center"
                      onClick={toggleModelCollapsed}
                    >
                      3D MODELS
                      {isModelCollapsed ? (
                        <RiArrowDropRightLine size={30} />
                      ) : (
                        <RiArrowDropDownLine size={30} />
                      )}
                    </div>
                  }
                >
                  <li className="mt-4">
                    <Link to="/download" onClick={toggleMenu}>Genesis 9</Link>
                  </li>
                  <li className="mt-4">Genesis 8.1</li>
                  <li className="mt-4">Free 3D Models</li>
                </Collapsible>
              </li>
              <li className="mt-6 ml-4">
                <Collapsible
                  trigger={
                    <div
                      className="flex justify-between items-center"
                      onClick={toggleCommunityCollapsed}
                    >
                      COMMUNITY
                      {isCommunityCollapsed ? (
                        <RiArrowDropRightLine size={30} />
                      ) : (
                        <RiArrowDropDownLine size={30} />
                      )}
                    </div>
                  }
                >
                  <li className="mt-4">
                    <Link to="/community" onClick={toggleMenu}>
                      Our Community
                    </Link>
                  </li>
                  <li className="mt-4">Gallery</li>
                  <li className="mt-4">Forums</li>
                  <li className="mt-4">Blog</li>
                  <li className="mt-4">Help</li>
                </Collapsible>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navigation;

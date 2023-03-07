import React, { useState } from "react";
import { FiAlignRight, FiX } from "react-icons/fi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-28 max-w-[1300px] mx-auto px-4">
      <h1 className="text-[#2A1246] text-2xl leading-9 font-semibold">
          {/* < className="text-4xl text-[#2A1246]"/>  */}
          HOLYDIARY
      </h1>
      <ul className="hidden lg:flex items-center font-normal text-lg text-[#000000]">
        <li className="px-7">
          Home 
        </li>
        <li className="px-7">Cars</li>
        <li className="px-7">Contacts</li>
        <div className="ml-5">
          <button className="h-14 w-48 text-[#FFFFFF] bg-[#2A1246] hover:bg-[#421b6d] rounded-lg">
            Download App
          </button>
        </div>
      </ul>
      <div onClick={handleNav} className="block lg:hidden">
        {!nav ? (
          <FiAlignRight className="text-4xl text-[#000000]"/>
        ) : (
          <FiX className="text-4xl text-[#000000]" />
        )}
      </div>
      <div
        className={
          !nav
            ? "fixed left-[-100%]"
            : "lg:hidden fixed left-0 top-0 w-[70%] h-full border-r border-r-gray-900 bg-[#E5E5E5] ease-in-out duration-500"
        }
      >
        <ul className="pt-28 font-normal text-lg text-[#000000]">
          <li className="p-4 border-b border-gray-600">
            Home 
          </li>
          <li className="p-4 border-b border-gray-600">Cars</li>
          <li className="p-4 border-b border-gray-600">Contacts</li>
          <div className="p-4">
            <button className="h-14 w-48 text-[#FFFFFF] bg-[#2A1246] hover:bg-[#421b6d] rounded-lg">
              Download App
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

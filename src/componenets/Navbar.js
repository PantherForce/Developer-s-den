import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [Nav, setNav] = useState(false);

  const handlerNav = () => {
    setNav(!Nav);
  };

  return (
    <div className=" flex justify-between item-center h-24 max-w-[1024px] mx-auto px-3 text-white">
      <h1 className="w-full mt-3 text-3xl font-bold text-[#00df9a]">React</h1>

      <ul className=" hidden md:flex ">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handlerNav} className=" block md:hidden">
        {!Nav ? (
          <AiOutlineClose className="ml-3 mt-6" size={20} />
        ) : (
          <AiOutlineMenu className="ml-3 mt-6" size={20} />
        )}
      </div>
      <div
        className={
          !Nav
            ? "fixed top-0 left-0 w-[60%] h-full  bg-[00300]"
            : "fixed left-[-100%]"
        }
      >
        <ul className=" pt-7 hidden ">
          <li className="p-4  border-gray-400">Home</li>
          <li className="p-4  border-gray-400 ">Company</li>
          <li className="p-4  border-gray-400 ">Resources</li>
          <li className="p-4  border-gray-400 ">About</li>
          <li className="p-4  border-gray-400 ">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

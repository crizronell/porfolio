import React, { useState } from "react";
import { MenuAlt1Icon, XIcon } from "@heroicons/react/outline";

import { HeaderData } from "./HeaderData";

function Header() {
  const [toggle, setToggle] = useState(false);

  const onClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="fixed w-full">
      <nav
        className="flex justify-between items-center box-border h-16 bg-white   w-full text-black shadow-md   "
        role="navigation"
      >
        <div className="animate-bounce ml-10">
          <a
            href="/#portfolio"
            className="text-2xl sm:text-xl font-bold font-sans"
          >
            RCV
          </a>
        </div>
        <div className="cursor-pointer  z-20 mr-5" onClick={onClick}>
          {!toggle ? (
            <MenuAlt1Icon className="w-[2rem] md:hidden  " />
          ) : (
            <XIcon className="w-[2rem] md:hidden text-white" />
          )}
        </div>
        <div className="md:block hidden">
          <ul className="flex">
            {HeaderData.map((item) => {
              return (
                <li
                  key={item.id}
                  className="w-[8rem] flex justify-around text-md font-mono  "
                >
                  <a href={item.path}>{item.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
      <div
        className={` bg-black w-full fixed top-0 text-xl  font-mono z-10
            ${
              toggle
                ? " translate-y-100 ease-in duration-300"
                : " -translate-y-full ease-in-out duration-300"
            }
            
           
          `}
      >
        <ul className="flex flex-col justify-around items-center h-screen   ">
          {HeaderData.map((item) => {
            return (
              <li key={item.id} onClick={onClick} className="text-white">
                <a href={item.path}>{item.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Header;

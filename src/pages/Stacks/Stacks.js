import React from "react";
import { StacksDetails } from "./StacksDetails";

function Stacks() {
  return (
    <div className=" bg-gray-800  min-h-[100vh]" id="stacks">
      <div className="p-1 w-full text-white font-mono text-5xl underline ">
        <p className="mt-[5rem] italic font-serif text-center">Stacks</p>
      </div>
      <div className="grid md:grid-cols-2 sm:mt-[5rem]  items-center justify-center  ">
        {StacksDetails.map((item) => {
          return (
            <div key={item.id} className="mt-4 w-fit   justify-self-center ">
              <img
                src={item.icon}
                alt={item.title}
                className="w-[150px] md:w-[200px] mt-2 bg-center "
              />
              <p className="text-center mt-2 font-mono italic font-bold text-md text-white underline sm:text-xl ">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Stacks;

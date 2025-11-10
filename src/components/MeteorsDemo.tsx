import React from "react";
import { Meteors } from "@/components/ui/meteors";

export function MeteorsDemo() {
  return (
    <div className="flex flex-wrap justify-center mt-50 ">
      <div className="relative w-full max-w-xl text-center">
        <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
        <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 shadow-xl">
          <h1 className="relative z-50 mb-4 text-5xl font-bold text-white">
           Contact-Us
          </h1>
          <input type="text" placeholder="Enter your Name" className="bg-white text-black text-center w-100 rounded-l text-2xl mb-10 " />
          <input type="text" placeholder="Enter your Email " className="bg-white text-black text-center w-100 rounded-l text-2xl mb-10" />
         

          <button className="rounded-lg border border-gray-500 px-4 py-1 text-gray-300 text-center">
            Submit
          </button>

          {/* Meaty part - Meteor effect */}
          <Meteors number={30} />
        </div>
      </div>
    </div>
  );
}

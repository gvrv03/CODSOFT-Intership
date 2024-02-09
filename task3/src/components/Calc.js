import React from "react";

const Calc = () => {
  return (
    <div className="flex-col flex gap-10">
      <div className="relative  text-white h-40   ">
        <input
        type="number" id="quantity"
          className="w-full absolute selection:bg-gray-700 bottom-0 font-bold bg-transparent text-4xl text-right outline-none text-white"
        />
      </div>
      <div className="flex flex-col gap-5">
        <div className="grid  grid-cols-4 gap-5">
          <button className=" grid place-items-center bg-gray-500 font-semibold  text-black text-lg p-2 rounded-full">
            C
          </button>
          <button className=" grid place-items-center bg-gray-500 font-semibold  text-black text-lg p-2 rounded-full">
            /
          </button>
          <button className=" grid place-items-center bg-gray-500 font-semibold  text-black text-lg p-2 rounded-full">
            %
          </button>
          <button className=" grid place-items-center font-semibold  bg-orange-400 text-white text-lg p-2 rounded-full">
            <i className="uil uil-backspace text-xl" />
          </button>
        </div>

        <div className="grid  grid-cols-4 gap-5">
          <button className=" grid place-items-center bg-gray-900 font-semibold  text-white text-lg p-2 rounded-full">
            7
          </button>
          <button className=" grid place-items-center bg-gray-900 font-semibold  text-white text-lg p-2 rounded-full">
            8
          </button>
          <button className=" grid place-items-center bg-gray-900 font-semibold  text-white text-lg p-2 rounded-full">
            9
          </button>{" "}
          <button className=" grid place-items-center font-semibold  bg-orange-400 text-white text-lg p-2 rounded-full">
            <i className="uil uil-multiply text-xl" />
          </button>
        </div>

        <div className="grid  grid-cols-4 gap-5">
          <button className=" grid place-items-center bg-gray-900 font-semibold  text-white text-lg p-2 rounded-full">
            4
          </button>
          <button className=" grid place-items-center bg-gray-900 font-semibold  text-white text-lg p-2 rounded-full">
            5
          </button>
          <button className=" grid place-items-center bg-gray-900 font-semibold  text-white text-lg p-2 rounded-full">
            6
          </button>
          <button className=" grid place-items-center font-semibold  bg-orange-400 text-white text-lg p-2 rounded-full">
            -
          </button>
        </div>

        <div className="grid  grid-cols-4 gap-5">
          <button className=" grid place-items-center bg-gray-900 font-semibold  text-white text-lg p-2 rounded-full">
            1
          </button>
          <button className=" grid place-items-center bg-gray-900 font-semibold  text-white text-lg p-2 rounded-full">
            2
          </button>
          <button className=" grid place-items-center bg-gray-900 font-semibold  text-white text-lg p-2 rounded-full">
            3
          </button>
          <button className=" grid place-items-center font-semibold  bg-orange-400 text-white text-lg p-2 rounded-full"><i className="uil uil-plus text-xl" /></button>

        </div>

        <div className="grid  grid-cols-4 gap-5">
          <button className=" grid place-items-center bg-gray-900 font-semibold  text-white text-lg p-2 rounded-full">
            00
          </button>
          <button className=" grid place-items-center bg-gray-900 font-semibold  text-white text-lg p-2 rounded-full">
            0
          </button>
          <button className=" grid place-items-center bg-gray-900 font-semibold  text-white text-lg p-2 rounded-full">
            .
          </button>
          <button className=" grid place-items-center font-semibold  bg-orange-400 text-white text-lg p-2 rounded-full">
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calc;

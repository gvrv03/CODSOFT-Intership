"use client";
import React, { useState } from "react";

const Calc = () => {
  const [equation, setEquation] = useState("");
  const [result, setresult] = useState("");

  const handleClick = (value) => {
    setEquation((prevEquation) => prevEquation + value);
  };

  const handleClear = () => {
    setEquation("");
    setresult("");
  };

  const handleBackspace = () => {
    setEquation((prevEquation) => prevEquation.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      setresult(eval(equation).toString());
    } catch (error) {
      setEquation("Error");
    }
  };

  return (
    <div className="flex-col flex gap-10">
      <div className="relative text-white h-40">
        <div className="absolute bottom-0">
          <input
            type="text"
            id="equation"
            value={equation}
            className="w-full  selection:bg-gray-700  font-bold bg-transparent text-4xl text-right outline-none text-white"
          />
          {result && (
            <input
              type="text"
              id="result"
              value={result}
              className="w-full  selection:bg-gray-700  font-bold bg-transparent text-2xl text-right outline-none text-gray-400"
            />
          )}
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-4 gap-5">
          <button
            onClick={handleClear}
            className="grid place-items-center bg-gray-500 font-semibold text-black text-lg p-2 rounded-full"
          >
            C
          </button>
          <button
            onClick={() => handleClick("/")}
            className="grid place-items-center bg-gray-500 font-semibold text-black text-lg p-2 rounded-full"
          >
            /
          </button>
          <button
            onClick={() => handleClick("%")}
            className="grid place-items-center bg-gray-500 font-semibold text-black text-lg p-2 rounded-full"
          >
            %
          </button>
          <button
            onClick={handleBackspace}
            className="grid place-items-center font-semibold bg-orange-400 text-white text-lg p-2 rounded-full"
          >
            <i className="uil uil-backspace text-xl" />
          </button>
        </div>

        <div className="grid  grid-cols-4 gap-5">
          <button
            onClick={() => handleClick("7")}
            className=" grid place-items-center bg-gray-900 font-semibold  text-white text-lg p-2 rounded-full"
          >
            7
          </button>
          <button
            onClick={() => handleClick("8")}
            className=" grid place-items-center bg-gray-900 font-semibold  text-white text-lg p-2 rounded-full"
          >
            8
          </button>
          <button
            onClick={() => handleClick("9")}
            className=" grid place-items-center bg-gray-900 font-semibold  text-white text-lg p-2 rounded-full"
          >
            9
          </button>{" "}
          <button
            onClick={() => handleClick("*")}
            className=" grid place-items-center font-semibold  bg-orange-400 text-white text-lg p-2 rounded-full"
          >
            <i className="uil uil-multiply text-xl" />
          </button>
        </div>

        <div className="grid  grid-cols-4 gap-5">
          <button
            onClick={() => handleClick("4")}
            className=" grid place-items-center bg-gray-900 font-semibold  text-white text-lg p-2 rounded-full"
          >
            4
          </button>
          <button
            onClick={() => handleClick("5")}
            className=" grid place-items-center bg-gray-900 font-semibold  text-white text-lg p-2 rounded-full"
          >
            5
          </button>
          <button
            onClick={() => handleClick("6")}
            className=" grid place-items-center bg-gray-900 font-semibold  text-white text-lg p-2 rounded-full"
          >
            6
          </button>
          <button
            onClick={() => handleClick("-")}
            className=" grid place-items-center font-semibold  bg-orange-400 text-white text-lg p-2 rounded-full"
          >
            -
          </button>
        </div>

        <div className="grid  grid-cols-4 gap-5">
          <button
            onClick={() => handleClick("1")}
            className=" grid place-items-center bg-gray-900 font-semibold  text-white text-lg p-2 rounded-full"
          >
            1
          </button>
          <button
            onClick={() => handleClick("2")}
            className=" grid place-items-center bg-gray-900 font-semibold  text-white text-lg p-2 rounded-full"
          >
            2
          </button>
          <button
            onClick={() => handleClick("3")}
            className=" grid place-items-center bg-gray-900 font-semibold  text-white text-lg p-2 rounded-full"
          >
            3
          </button>
          <button
            onClick={() => handleClick("+")}
            className=" grid place-items-center font-semibold  bg-orange-400 text-white text-lg p-2 rounded-full"
          >
            <i className="uil uil-plus text-xl" />
          </button>
        </div>

        <div className="grid grid-cols-4 gap-5">
          <button
            onClick={() => handleClick("00")}
            className="grid place-items-center bg-gray-900 font-semibold text-white text-lg p-2 rounded-full"
          >
            00
          </button>
          <button
            onClick={() => handleClick("0")}
            className="grid place-items-center bg-gray-900 font-semibold text-white text-lg p-2 rounded-full"
          >
            0
          </button>
          <button
            onClick={() => handleClick(".")}
            className="grid place-items-center bg-gray-900 font-semibold text-white text-lg p-2 rounded-full"
          >
            .
          </button>
          <button
            onClick={handleCalculate}
            className="grid place-items-center font-semibold bg-orange-400 text-white text-lg p-2 rounded-full"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calc;

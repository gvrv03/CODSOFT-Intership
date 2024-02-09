import React from "react";
import Calc from "./Calc";

const MockUp = () => {
  return (
    <>
      <div class="  relative mx-auto border-black dark:border-black bg-black border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
        <div class="h-[32px] w-[3px] bg-black dark:bg-black absolute -start-[17px] top-[72px] rounded-s-lg"></div>
        <div class="h-[46px] w-[3px] bg-black dark:bg-black absolute -start-[17px] top-[124px] rounded-s-lg"></div>
        <div class="h-[46px] w-[3px] bg-black dark:bg-black absolute -start-[17px] top-[178px] rounded-s-lg"></div>
        <div class="h-[64px] w-[3px] bg-black dark:bg-black absolute -end-[17px] top-[142px] rounded-e-lg"></div>
        <div class="rounded-[2rem]  border border-gray-950 p-5 text-white overflow-hidden w-[272px] h-[572px] bg-white dark:bg-black">
          <Calc />
        </div>
      </div>
    </>
  );
};

export default MockUp;

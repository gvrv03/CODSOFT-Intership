import React from "react";

const Analystics = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4 text-center">
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full bg-white">
            <div class="border-2 flex gap-5 items-center justify-around  border-gray-200 px-4 py-6 rounded-lg">
              <i className="uil uil-users-alt text-5xl" />
              <div>
                <h2 class="title-font font-medium text-3xl text-gray-900">
                  2.7K
                </h2>
                <p class="leading-relaxed">Users</p>
              </div>
            </div>
          </div>

          <div class="p-4 md:w-1/4 sm:w-1/2 w-full bg-white">
            <div class="border-2 flex gap-5 items-center justify-around  border-gray-200 px-4 py-6 rounded-lg">
              <i className="uil uil-building text-5xl" />
              <div>
                <h2 class="title-font font-medium text-3xl text-gray-900">
                  1.5K
                </h2>
                <p class="leading-relaxed">Colleges</p>
              </div>
            </div>
          </div>



          <div class="p-4 md:w-1/4 sm:w-1/2 w-full bg-white">
            <div class="border-2 flex gap-5 items-center justify-around  border-gray-200 px-4 py-6 rounded-lg">
              <i className="uil uil-file-check text-5xl" />
              <div>
                <h2 class="title-font font-medium text-3xl text-gray-900">
                  3.2K
                </h2>
                <p class="leading-relaxed">Registration</p>
              </div>
            </div>
          </div>


          <div class="p-4 md:w-1/4 sm:w-1/2 w-full bg-white">
            <div class="border-2 flex gap-5 items-center justify-around  border-gray-200 px-4 py-6 rounded-lg">
              <i className="uil uil-user-check text-5xl" />
              <div>
                <h2 class="title-font font-medium text-3xl text-gray-900">
                  3.2K
                </h2>
                <p class="leading-relaxed">Admissions</p>
              </div>
            </div>
          </div>




        </div>
      </div>
    </section>
  );
};

export default Analystics;

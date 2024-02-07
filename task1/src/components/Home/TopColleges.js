import React from "react"
const TopColleges = () => {
  return (
    <div className="container m-auto">
      <h1 className="font-bold border-b-2 pb-2 border-red-600  text-xl w-fit ">
        Top Colleges
      </h1>
      <div className="mt-5 grid-cols-2 grid gap-10 md:grid-cols-4">
        <CollegeCard
          img="https://www.gcoen.ac.in/assets/images/gcoen.jpg"
          category=" GOVT,DTE,AICTE"
          clgName="Government College Of Engineering, Nagpur"
        />
        <CollegeCard
          img="https://www.gcoea.ac.in/media/logo-dark.png"
          category="GOVT,DTE,AICTE"
          clgName="Government College of Engineering, Amravati"
        />
        <CollegeCard
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhKwLXn_KrReAISyX4WRVc70PnaHSEoaaNZg&usqp=CAU"
          category="GOVBT,DTE,AICTE"
          clgName="COEP Technological University"
        />
        <CollegeCard img="https://www.careerindia.com/img/2012/05/18-vjtimumbai.jpg" category="GOVT,DTE,AICTE" clgName="Veermata Jijabai Technological Institute(VJTI), Matunga, Mumba" />
      </div>
    </div>
  );
};

const CollegeCard = ({ img, category, clgName }) => {
  return (
    <div className="border  p-5 flex-col flex  gap-5 bg-white">
      <div className="bg-gray-100 p-5 grid place-items-center ">
        <img src={img} className="w-36 h-36 rounded-full" />
      </div>
      <h4 className="uppercase  text-gray-400 font-bold text-sm">{category}</h4>
      <p className="text-gray-900 font-semibold">{clgName}</p>
    </div>
  );
};
export default TopColleges;

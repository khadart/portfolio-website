import React from "react";
import { AppText } from "../constants";
import { homeImage } from "../assests";

const Home = () => {
  return (
    <div className=" mt-7 px-4 md:px-20  items-center flex flex-col md:flex-row">
  <div >
      <h1 className="text-[40px] text-bold">{AppText.hello}</h1>
      <h1 className="text-[40px] text-bold">
        {AppText.Iam}
        <span className="text-purple-500">{AppText.Khadar}</span>
      </h1>
      <h1 className="text-gray-400">{AppText.aboutMeDescripion}</h1>
      <button className="bg-purple-600 p-2 px-3 rounded-md  transition-all ease-in-out hover:scale-110 cursor-pointer text-white mt-4">
        Resume
      </button>
      
    </div>
    <img src={homeImage} className="mt-10 w-[300px] md:w-[400px] md:mx-5" />
    </div>
  
  );
};

export default Home;

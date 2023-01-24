import React from "react";

const Banner = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen width-full bg-[green] ">
        <div className="font-bold md:text-5xl text-xl">Learning Tailwind</div>
        <div className="font-bold text-xl mt-5">
          Trying to learn React + Tailwind
        </div>
        <div className="font-bold md:text-3xl text-xl mt-5">
          This website is also responsive
        </div>
      </div>
    </>
  );
};

export default Banner;

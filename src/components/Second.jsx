import React from "react";

const Second = () => {
  return (
    <div className="max-w-[1000px] md:mx-auto h-screen grid md:grid-cols-3 gap-6 py-28 px-8 ">
      <div className="shadow-2xl hover:scale-90 duration-500 h-[500px] border border-black  ">
        First
      </div>
      <div className="shadow-2xl hover:scale-110 duration-500 h-[500px] border border-black">
        Second
      </div>
      <div className=" shadow-2xl hover:scale-90 duration-500 h-[500px] border border-black ">
        Third
      </div>
    </div>
  );
};

export default Second;

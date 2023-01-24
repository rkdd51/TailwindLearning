import { useState } from "react";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="bg-[red] p-4">
        <div className="flex justify-between item-center border-black  border border-black py-[15px] mx-auto">
          <div className="max-w-screen-xl ">
            <div className="font-bold text-2xl">Logo</div>
          </div>
          {toggle ? (
            <AiOutlineClose
              className="text-2xl"
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <AiOutlineMenu
              className="text-2xl md:hidden "
              onClick={() => setToggle(!toggle)}
            />
          )}

          <ul className=" md:flex gap-6 hidden">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
          {/* Responsive Menu */}
          <ul
            className={` duration-700 md:hidden fixed mt-16 bg-[blue] w-full h-screen ${
              toggle ? "left-[0]" : "left-[-100%]"
            }`}
          >
            <li className="py-5">Home</li>
            <li className="py-5">About</li>
            <li className="py-5">Services</li>
            <li className="py-5">Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;

// responsiveMenuTailwind;

import React, { useState } from "react";
import Button from "./Button";

const Navbar = () => {
  let Links = [
    { name: "Kirish", link: "/" },
    { name: "Saralangan", link: "/" },
    { name: "Savat", link: "/" },
  ];
  let [open, setOpen] = useState(false)
  return (
    <div className="shadow-md w-full fixed px-20 pb-3">
      <div className="md:flex items-center justify-between md-px-10 px-7 py-4">
        <div className="mt-4 font-bold text-3xl cursor-pointer flex item-center text-purple-800">
          <span className="mr-1 pt-1">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          Uzum Market
        </div>
        <div onClick={() => setOpen(!open)} className="text-3xl absolute right-14 top-9 cursor-pointer md:hidden">
        <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        
         {/* <ion-icon name="menu-outline"></ion-icon> */}
        </div>
        <ul className={`md:flex mt-5 md:items-center md:pb-0 justify-between float-right text-xl absolute md:static bg-white md:z-auto z[1] left-0 w-full px-32 md:w-auto md:pl-0  transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px]'} md:opacity-100 opacity-0`}>
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-400 text-2xl hover:text-gray-800 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <Button>Get Started</Button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

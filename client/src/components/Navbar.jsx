import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbarbutton from './Reusable/Navbarbutton';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='sticky top-0 bg-white z-50'>
      <div className='flex flex-col max-w-[1500px] text-froker-orange text-xl mx-auto justify-center '>
        {/* Main navbar */}
        <div
          className='flex flex-row justify-center h-[80px] items-center px-[20px]'
        >

          {/* Website logo */}
          <div
            className=' items-center h-full flex mr-auto'
            onClick={() => { window.open(`https://www.froker.in/`, '_blank') }}
          >
            <img
              className='h-1/2 lg:h-3/4 items-center'
              src="/froker_logo.png"
              alt="Froker"
            />
          </div>

          {/* Hamburger Option */}
          <div
            className='lg:hidden'
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <svg className='w-6 h-6 stroke-black' fill="#currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0 14.545L1.455 16 8 9.455 14.545 16 16 14.545 9.455 8 16 1.455 14.545 0 8 6.545 1.455 0 0 1.455 6.545 8z" fillRule="evenodd"></path> </g></svg>
            ) : (
              <svg className='w-6 h-6' viewBox="0 0 24 24" fill="#currentColor" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clipPath="url(#clip0_429_11066)"> <path d="M3 6.00092H21M3 12.0009H21M3 18.0009H21" stroke="#292929" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path> </g> <defs> <clipPath id="clip0_429_11066"> <rect width="24" height="24" fill="white" transform="translate(0 0.000915527)"></rect> </clipPath> </defs> </g></svg>
            )}
          </div>

          {/* Navbar options on larger screens */}
          <div
            className='hidden lg:flex flex-row gap-8 mr-8'
          >

            {/* Home Page */}
            <Navbarbutton name={'Home'} LinkTo={'/'} toggleMenu={toggleMenu} />

            {/* Blogs Page */}
            <Navbarbutton name={'Blogs'} LinkTo={'/blogs'} toggleMenu={toggleMenu} />

            {/* Discover Froker Page */}
            <Navbarbutton name={'Discover Froker'} LinkTo={'/discover'} toggleMenu={toggleMenu} />

          </div>
        </div>

        {/* Navbar options on smaller screens */}
        <div
          className={`lg:hidden absolute top-20 left-0 w-full bg-white transition-all duration-300 ease-in-out ${menuOpen ? 'translate-x-0 bg-white/100' : '-translate-x-full bg-white/0'}`}
        >
          <div className="flex flex-col gap-2 mx-auto text-center">
            {/* Home Page */}
            <Navbarbutton name={'Home'} LinkTo={'/'} toggleMenu={toggleMenu} />

            {/* Blogs Page */}
            <Navbarbutton name={'Blogs'} LinkTo={'/blogs'} toggleMenu={toggleMenu} />

            {/* Discover Froker Page */}
            <Navbarbutton name={'Discover Froker'} LinkTo={'/discover'} toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

const Navbarbutton = ({ name, LinkTo, toggleMenu }) => {
  return (
    <div className='relative'>
      <Link
        className='group lg:flex'
        to={LinkTo}
        onClick={toggleMenu}
      >
        <div className='relative '>
          {/* Text */}
          <p className='relative z-10 lg:px-2 py-1 my-6 lg:my-0'>{name}</p>
        
          {/* The animated underline */}
          <span className="absolute left-0 top-14 lg:top-10 h-[4px] w-full bg-froker-orange transform origin-left scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 transition-all duration-700"></span>

        </div>
      </Link>
    </div>
  )
}

export default Navbarbutton;

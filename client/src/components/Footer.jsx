import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [imageSrc, setImageSrc] = useState('/footer_image_large.png');

  useEffect(() => {
    const updateImageSrc = () => {
      if (window.innerWidth <= 780) {
        setImageSrc('/footer_image_small.png');
      } else {
        setImageSrc('/footer_image_large.png');
      }
    };

    updateImageSrc(); // Initial check

    window.addEventListener('resize', updateImageSrc);
    return () => window.removeEventListener('resize', updateImageSrc);
  }, []);

  return (
    <div className="relative">
      <div>
        <img 
          src={imageSrc}
          alt="Footer Wave"
        />
      </div>
      <footer className={`bg-gradient-to-r from-[#f57829] ${(window.innerWidth <= 780) ? 'to-[#fe7f3b] h-40' : 'to-[#ff955b] h-12'} flex  relative z-10`}>
        <p className='text-white text-center m-auto items-center w-1/2'>© 2024 Arroz Technology. All rights reserved</p>
      </footer>
    </div>
  );
};

export default Footer;

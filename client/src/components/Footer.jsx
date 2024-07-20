import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

const Footer = () => {
  const navigate = useNavigate();
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
    <div className="relative w-full">

      {/* footer main content */}
      <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 mt-24 mb-8 mx-auto w-3/4 '>

        {/* icon */}
        <div className='flex justify-center'>
          <img
            className=' w-40 h-fit items-center'
            src="/froker_logo.png"
            alt="Froker"
          />
        </div>

        {/* quick link */}
        <div className='justify-center my-16 sm:my-0'>
          <p className='text-froker-orange text-3xl font-bold mb-4'>Quicklink</p>
          <p className='text-lg mb-4 sm:mb-2 cursor-pointer' onClick={() => (navigate('/'))}><span className='font-bold'>&gt;</span>Home</p>
          <p className='text-lg mb-4 sm:mb-2 cursor-pointer' onClick={() => (navigate('/about-us'))}><span className='font-bold'>&gt;</span>About us</p>
          <p className='text-lg mb-4 sm:mb-2 cursor-pointer' onClick={() => { window.open(`https://www.froker.in/privacy-policy`, '_blank') }}><span className='font-bold'>&gt;</span>Privacy policy</p>
          <p className='text-lg cursor-pointer' onClick={() => { window.open(`https://www.froker.in/terms-and-conditions`, '_blank') }}><span className='font-bold'>&gt;</span>Terms & Conditions</p>
        </div>
        
        {/* Contacts */}
        <div>
          <p className='text-froker-orange text-3xl font-bold mb-4'>Contacts</p>

          {/* Location */}
          <div className='flex flex-row gap-2 mb-2'>
            <svg 
              onClick={() => { window.open(`https://www.google.com/maps/place/Froker/@12.9556403,77.7202612,15z/data=!4m6!3m5!1s0x3bae13d152fd68ed:0x7427946171c830c1!8m2!3d12.9556403!4d77.7202612!16s%2Fg%2F11stskm2hv?entry=ttu`, '_blank') }} 
              className='fill-froker-orange w-6 h-6' 
              fill="currentColor" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 395.71 395.71" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738 c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388 C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191 c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z">
                </path> </g> </g>
            </svg>
            <p>Whitefield, Bengaluru, 560066</p>
          </div>

          {/* Support mail */}
          <div className='flex flex-row gap-2 mb-2'>
            <svg className='fill-froker-orange stroke-froker-orange w-6 h-6' viewBox="0 -4 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSketch="http://www.bohemiancoding.com/sketch/ns" fill="currentColor"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="currentColor" fillRule="evenodd" sketchType="MSPage"> <g id="Icon-Set" sketchType="MSLayerGroup" transform="translate(-412.000000, -259.000000)" fill="orange"> <path d="M442,279 C442,279.203 441.961,279.395 441.905,279.578 L433,270 L442,263 L442,279 L442,279 Z M415.556,280.946 L424.58,271.33 L428,273.915 L431.272,271.314 L440.444,280.946 C440.301,280.979 415.699,280.979 415.556,280.946 L415.556,280.946 Z M414,279 L414,263 L423,270 L414.095,279.578 C414.039,279.395 414,279.203 414,279 L414,279 Z M441,261 L428,271 L415,261 L441,261 L441,261 Z M440,259 L416,259 C413.791,259 412,260.791 412,263 L412,279 C412,281.209 413.791,283 416,283 L440,283 C442.209,283 444,281.209 444,279 L444,263 C444,260.791 442.209,259 440,259 L440,259 Z" id="mail" sketchType="MSShapeGroup"> </path> </g> </g> </g></svg>
            <p className='cursor-pointer'>support@froker.in</p>
          </div>

          {/* Social Links */}
          <div className='flex flex-row gap-4 sm:gap-2 mt-4'>

            {/* Twitter */}
            <div 
              className='cursor-pointer'
              onClick={() => { window.open(`https://x.com/FrokerSocial`, '_blank') }}
            >
              <svg className='w-6 h-6 fill-froker-orange' fill="currentColor" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-271 296.6 256.4 208.4" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M-14.6,321.2c-9.4,4.2-19.6,7-30.2,8.3c10.9-6.5,19.2-16.8,23.1-29.1c-10.2,6-21.4,10.4-33.4,12.8 c-9.6-10.2-23.3-16.6-38.4-16.6c-29,0-52.6,23.6-52.6,52.6c0,4.1,0.4,8.1,1.4,12c-43.7-2.2-82.5-23.1-108.4-55 c-4.5,7.8-7.1,16.8-7.1,26.5c0,18.2,9.3,34.3,23.4,43.8c-8.6-0.3-16.7-2.7-23.8-6.6v0.6c0,25.5,18.1,46.8,42.2,51.6 c-4.4,1.2-9.1,1.9-13.9,1.9c-3.4,0-6.7-0.3-9.9-0.9c6.7,20.9,26.1,36.1,49.1,36.5c-18,14.1-40.7,22.5-65.3,22.5 c-4.2,0-8.4-0.2-12.6-0.7c23.3,14.9,50.9,23.6,80.6,23.6c96.8,0,149.7-80.2,149.7-149.7c0-2.3,0-4.6-0.1-6.8 C-30.5,341-21.6,331.8-14.6,321.2"></path> </g></svg>
            </div>

            {/* Linked in */}
            <div 
              className='cursor-pointer'
              onClick={() => { window.open(`https://www.linkedin.com/company/froker/`, '_blank') }}
            >
              <svg className='w-6 h-6 fill-froker-orange' fill="currentColor" height="200px" width="200px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M23,0H9C4,0,0,4,0,9v14c0,5,4,9,9,9h14c5,0,9-4,9-9V9C32,4,28,0,23,0z M12,25c0,0.6-0.4,1-1,1H7c-0.6,0-1-0.4-1-1V13 c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1V25z M9,11c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S10.7,11,9,11z M26,25c0,0.6-0.4,1-1,1h-3 c-0.6,0-1-0.4-1-1v-3.5v-1v-2c0-0.8-0.7-1.5-1.5-1.5S18,17.7,18,18.5v2v1V25c0,0.6-0.4,1-1,1h-3c-0.6,0-1-0.4-1-1V13 c0-0.6,0.4-1,1-1h4c0.3,0,0.5,0.1,0.7,0.3c0.6-0.2,1.2-0.3,1.8-0.3c3,0,5.5,2.5,5.5,5.5V25z"></path> </g></svg>
            </div>

            {/* Facebook */}
            <div 
              className='cursor-pointer'
              onClick={() => { window.open(`https://www.facebook.com/profile.php?id=100090044834703&mibextid=YMEMSu`, '_blank') }}
            >
              <svg className='w-6 h-6 fill-froker-orange' fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z"></path> </g></svg>
            </div>

            {/* Instagram */}
            <div 
              className='cursor-pointer'
              onClick={() => { window.open(`https://www.instagram.com/frokerofficial/`, '_blank') }}
            >
              <svg className='w-6 h-6 fill-froker-orange' viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>instagram</title> <g id="Layer_2" data-name="Layer 2"> <g id="invisible_box" data-name="invisible box"> <rect width="48" height="48" fill="none"></rect> <rect width="48" height="48" fill="none"></rect> </g> <g id="icons_Q2" data-name="icons Q2"> <path d="M24,7.6h8.1a10.8,10.8,0,0,1,3.7.7,6.7,6.7,0,0,1,3.8,3.8,10.8,10.8,0,0,1,.7,3.7c.1,2.1.1,2.8.1,8.1s0,6-.1,8.1a10.8,10.8,0,0,1-.7,3.7,6.7,6.7,0,0,1-3.8,3.8,10.8,10.8,0,0,1-3.7.7H15.9a10.8,10.8,0,0,1-3.7-.7,6.7,6.7,0,0,1-3.8-3.8,10.8,10.8,0,0,1-.7-3.7c-.1-2.1-.1-2.8-.1-8.1s0-6,.1-8.1a10.8,10.8,0,0,1,.7-3.7,6.7,6.7,0,0,1,3.8-3.8,10.8,10.8,0,0,1,3.7-.7H24M24,4H15.8a17.9,17.9,0,0,0-4.9.9A10,10,0,0,0,7.4,7.4a8.5,8.5,0,0,0-2.3,3.5,14.5,14.5,0,0,0-1,4.9C4,17.9,4,18.6,4,24s0,6.1.1,8.2a14.5,14.5,0,0,0,1,4.9,8.5,8.5,0,0,0,2.3,3.5,8.5,8.5,0,0,0,3.5,2.3,14.5,14.5,0,0,0,4.9,1H32.2a14.5,14.5,0,0,0,4.9-1,8.5,8.5,0,0,0,3.5-2.3A10,10,0,0,0,43,37.1a17.9,17.9,0,0,0,.9-4.9c.1-2.1.1-2.8.1-8.2s0-6.1-.1-8.2a17.9,17.9,0,0,0-.9-4.9,10,10,0,0,0-2.4-3.5A10,10,0,0,0,37.1,5a17.9,17.9,0,0,0-4.9-.9H24"></path> <path d="M24,13.7A10.3,10.3,0,1,0,34.3,24,10.3,10.3,0,0,0,24,13.7m0,17A6.7,6.7,0,1,1,30.7,24,6.7,6.7,0,0,1,24,30.7"></path> <path d="M37.1,13.3a2.4,2.4,0,1,1-2.4-2.4,2.4,2.4,0,0,1,2.4,2.4"></path> </g> </g> </g></svg>
            </div>

            {/* Youtube */}
            <div 
              className='cursor-pointer'
              onClick={() => { window.open(`https://www.youtube.com/@frokerofficial`, '_blank') }}
            >
              <svg className='w-6 h-6 fill-froker-orange' fill="currentColor" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-271 311.2 256 179.8" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M-59.1,311.2h-167.8c0,0-44.1,0-44.1,44.1v91.5c0,0,0,44.1,44.1,44.1h167.8c0,0,44.1,0,44.1-44.1v-91.5 C-15,355.3-15,311.2-59.1,311.2z M-177.1,450.3v-98.5l83.8,49.3L-177.1,450.3z"></path> </g></svg>
            </div>
          </div>
        </div>

        {/* Scan to download */}
        <div className='hidden lg:block'>
          <p className='text-froker-orange text-3xl font-bold mb-4'>Scan To Download</p>
          <img className='w-28 h-fit' src='/froker_app_scanner.jpg' alt='QR to scan and download app' />
        </div>
      </div>

      {/* Wavy image */}
      <div className="w-full sticky bottom-0">
        <img
          className="w-full h-auto"
          src={imageSrc}
          alt="Footer Wave"
        />
      </div>

      {/* footer text */}
      <footer className={`bg-gradient-to-r from-[#f57829] w-full ${(window.innerWidth <= 780) ? 'to-[#fe7f3b] h-40' : 'to-[#ff955b] h-12'} flex justify-center items-center relative z-10`}>
        <p className='text-white text-center w-1/2'>© 2024 Arroz Technology. All rights reserved</p>
      </footer>
    </div>
  );
};

export default Footer;

import React from 'react';

const Newsletter = ({ onClose }) => {
  return (
    <div className="fixed w-screen h-screen bg-gradient-to-t from-black/80 to-black/20 z-50 flex justify-center items-center">
      <div className="w-1/2 flex flex-row bg-white rounded-lg overflow-hidden shadow-lg relative">

        {/* Left Side */}
        <div className="w-1/2">
          <img
            className="w-full h-full object-cover"
            src="/froker_news.jpg"
            alt="subscribe to froker newsletter"
          />
        </div>

        {/* Right Side */}
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <p className="text-2xl font-bold mb-2">Stay Tuned</p>
          <p className="mb-2">Subscribe to our Newsletter for Exclusive Updates,</p>
          <p className="mb-6">Tips, and More.</p>

          {/* Email Input */}
          <div className="flex flex-row mb-4">
            <input
              type="email"
              className="rounded-l-full border border-gray-300 w-4/5 px-4 py-2 text-xl"
              placeholder="Enter your email"
            />
            <button
              className="rounded-r-full border border-gray-300 w-2/5 px-4 py-2 text-xl bg-froker-orange text-white"
            >Subscribe</button>
          </div>
        </div>

        {/* Close Button */}
        <div className="absolute top-4 right-4 cursor-pointer" onClick={onClose}>
          <div className="p-4 rounded-full">
            <svg className="w-6 h-6 text-froker-orange" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

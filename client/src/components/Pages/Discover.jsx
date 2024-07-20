import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Discover = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/blogs');
    }, 5200); // 5.2 seconds to redirect

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, [navigate]);

  return (
    <div className='min-h-[700px] bg-white text-xl text-center items-centermy-auto'>
      <p>This is</p>
      <p className='text-2xl'><span className='text-froker-orange font-bold'>Froker</span> Discover page</p>
      <p>This page was not asked to be developed</p>
      <p>So this is just a dummy page</p>
      <p className='mx-auto mt-8 text-white px-4 py-2 w-fit bg-froker-orange rounded-full'>Redirecting to the blogs page in 6 seconds...</p>
    </div>
  );
};

export default Discover
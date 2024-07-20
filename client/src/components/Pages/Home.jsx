import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/blogs');
    }, 6200); // 6.2 seconds to redirect

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, [navigate]);

  return (
    <div className='min-h-[500px] bg-white text-xl text-center items-centermy-auto'>
      <p>This is</p>
      <p className='text-2xl'><span className='text-froker-orange font-bold'>Froker</span> Home page</p>
      <p>This page was not asked to be developed</p>
      <p>So this is just a dummy page</p>
      <p className='mx-auto mt-8 text-white px-4 py-2 w-fit bg-froker-orange rounded-full'>Redirecting to the blogs page in 6 seconds...</p>
    </div>
  );
};

export default Home;

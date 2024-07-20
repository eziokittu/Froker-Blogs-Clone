import React from 'react'

const AboutUs = () => {
  return (
    <div className='mx-auto w-3/4 text-justify'>
      <p className='text-froker-orange font-bold text-5xl text-center my-8'>About Us</p>
      <p className='font-serif font-bold text-center'>Welcome to <span className='text-froker-orange'>Froker!</span></p>

      <p className='text-froker-orange font-bold text-3xl mt-6 mb-2'>Company Overview</p>
      <p>Arroz Technology Private Limited is the parent company of Froker. Our aim is to create the world's first social marketplace, revolutionising the way local businesses, content creators, and users connect and interact.</p>
      
      <p className='text-froker-orange font-bold text-3xl mt-6 mb-2'>Our Vision</p>
      <p>At Arroz Technology Private Limited, we envision bridging the gap between local businesses, content creators, and users. Our vision is to foster a vibrant and inclusive ecosystem where businesses thrive, creators showcase their talents, and users discover unique experiences.</p>
      
      <p className='text-froker-orange font-bold text-3xl mt-6 mb-2'>Core Values</p>
      <div className='pl-8'>
        <p><span className='text-froker-orange pr-2'>Innovation:</span> We embrace innovation to drive meaningful change in the marketplace.</p>
        <p><span className='text-froker-orange pr-2'>Collaboration:</span> We believe in fostering collaboration among businesses, creators, and users for mutual growth and success.</p>
        <p><span className='text-froker-orange pr-2'>Empowerment:</span> We empower local businesses and content creators to reach their full potential.</p>
        <p><span className='text-froker-orange pr-2'>User-Centricity:</span> We prioritize creating a seamless and personalized experience for our users.</p>
      </div>
      
    </div>
  )
}

export default AboutUs
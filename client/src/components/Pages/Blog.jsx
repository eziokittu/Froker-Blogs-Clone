import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHttpClient } from '../Backend/http-hook';
import MoreBlogs from '../Reusable/MoreBlogs';

const Blog = () => {
  const { blogNumber } = useParams();
  const { sendRequest } = useHttpClient();

  const [loadedBlog, setLoadedBlog] = useState(null);

  // Function to fetch blog with blog number
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const responseData = await sendRequest(
          `${import.meta.env.VITE_BACKEND_URL}/blogs/get/blog/${blogNumber}`
        );
        if (responseData && responseData.ok === 1) {
          setLoadedBlog(responseData.blog);
        } else {
          console.log("No blog found!");
        }
      } catch (err) {
        console.log("Error in fetching blog: " + err);
      }
    };
    if (blogNumber) {
      fetchBlog();
    }
  }, [sendRequest]);

  // Function to format the date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();

    const daySuffix = (day) => {
      if (day > 3 && day < 21) return 'th';
      switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
      }
    };

    return `${day}${daySuffix(day)} ${month} ${year}`;
  };

  return (
    <div className='mx-auto w-3/4'>
      {/* Blog */}
      {loadedBlog && (
        <div className='flex flex-col z-10'>
          {/* Blog Path */}
          <div className="flex flex-row gap-1 my-4">
            <p>Blog</p>
            <p>&gt;</p>
            <p>{loadedBlog.title}</p>
          </div>

          {/* Blog Image */}
          <div className="relative z-10">
            <div className="relative">
              <img
                className="w-full h-full object-cover rounded-[36px]"
                src={`${import.meta.env.VITE_ASSETS_URL}/${import.meta.env.VITE_ASSETS_IMAGE_PATH}/blog_${loadedBlog.blogNumber}.png`}
                alt={`blog_${loadedBlog.blogNumber}.png`}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-transparent rounded-[36px]"></div>
              <p className="absolute bottom-4 left-4 right-4 mr-36 text-white font-bold text-2xl responsive-title z-20">
                {loadedBlog.title.toUpperCase()}
              </p>
            </div>
          </div>

          {/* Blog author and date and likes */}
          <div className='flex flex-row justify-between mt-4 mb-6'>

            {/* Blog Author and Date */}
            <div className='flex flex-row gap-2 text-froker-orange'>
              <p>By</p>
              <p>{loadedBlog.author}</p>
              <p>-</p>
              <p>{formatDate(loadedBlog.date)}</p>
            </div>

            {/* Blog Likes */}
            <div className='flex flex-row gap-2 items-center'>
              <div
                className='p-[8px] rounded-full bg-gray-600 cursor-pointer'
                onClick={() => { }}
              >
                <svg className='fill-white stroke-white w-5 h-5 text-white' viewBox="0 0 24.00 24.00" fill="currentColor" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="0.00024000000000000003"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" strokeWidth="0.43200000000000005"></g><g id="SVGRepo_iconCarrier"> <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z" fill="currentColor"></path> </g></svg>
              </div>
              <p>{loadedBlog.likesCount}</p>
              <p className='text-black'>Likes</p>
            </div>
          </div>

          {/* Blog Title */}
          <div className='font-bold text-gray-600'>
            <p>{loadedBlog.title}</p>
          </div>

          {/* Blog Content */}
          <div className='flex flex-col gap-4'>
            {loadedBlog.content.map((c, index) => (
              <div key={index} className='my-4 text-justify'>
                <span className='font-bold text-gray-600'>{c.heading}: </span>
                <span className='text-gray-700'>{c.body}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Popular Posts */}
      <div>
        <p className='text-5xl my-8'>Popular Posts</p>
        <MoreBlogs />
      </div>
    </div>
  );
};

export default Blog;

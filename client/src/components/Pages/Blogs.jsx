import React, { useState, useEffect } from 'react';
import { useHttpClient } from '../Backend/http-hook';
import MoreBlogs from '../Reusable/MoreBlogs';

const Blogs = () => {
  const { sendRequest } = useHttpClient();
  const [loadedBlogs, setLoadedBlogs] = useState([]); // Initialize with empty array

  // Fetching blogs with pagination
  // useEffect(() => {
  //   const fetchBlogs = async () => {
  //     try {
  //       const responseData = await sendRequest(
  //         `${import.meta.env.VITE_BACKEND_URL}/blogs/get?page=${currentPage}`
  //       );
  //       if (responseData.ok === 1) {
  //         setLoadedBlogs(responseData.blogs); // Use retrieved blogs data
  //       }
  //     } catch (err) {
  //       console.error('Error fetching blogs:', err); // Use console.error for better logging
  //     }
  //   };

  //   fetchBlogs();
  // }, [sendRequest, currentPage]);

  // Rendering blog cards
  return (
    <div className="min-h-[700px] flex font-Raleway ">
      <div className='flex flex-col mx-auto w-3/4'>
        {/* Page Main Heading */}
        <div className="mt-16 flex flex-row gap-2 text-4xl mx-auto text-center">
          <p className="text-froker-orange">FROKER</p>
          <p>BLOG</p>
        </div>

        {/* Page Secondary Heading */}
        <div className="mt-8 flex flex-col gap-2 text-center mx-auto responsive-heading w-full">
          <p>Articles covering the most recent</p>
          <p>updates and advancements</p>
        </div>

        {/* Blogs */}
        {/* {loadedBlogs && ( // Check for loaded blogs before mapping
          <div className='grid grid-cols-3'>
            {loadedBlogs.map((blog) => (
              <BlogCard key={blog.id} blogData={blog} />
            ))}
          </div>
        )} */}

        {/* More Blogs */}
        <p className='text-5xl my-8'>Recent Posts</p>
        <MoreBlogs />
      </div>
    </div>
  );
};

export default Blogs;

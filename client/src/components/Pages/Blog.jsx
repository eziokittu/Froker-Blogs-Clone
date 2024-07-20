import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHttpClient } from '../Backend/http-hook';
import MoreBlogs from '../Reusable/MoreBlogs';
import Subscribe from '../Reusable/Subscribe';
import Newsletter from '../Overlays/Newsletter';

const Blog = () => {
  const { blogNumber } = useParams();
  const { sendRequest } = useHttpClient();
  const [showNewsletter, setShowNewsletter] = useState(false);
  const [loadedBlog, setLoadedBlog] = useState(null);

  const closeNewsletter = () => {
    setShowNewsletter(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollPosition / (documentHeight - windowHeight) >= 0.3) {
        setShowNewsletter(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
  }, [sendRequest, blogNumber]);

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
                <svg className='fill-white strokeWhite w-5 h-5 text-white' viewBox="0 0 24.00 24.00" fill="currentColor" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="0.00024000000000000003"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z" fill="currentColor"></path> </g></svg>
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

      {/* Subscribe */}
      <div>
        <Subscribe />
      </div>

      {/* Newsletter overlay */}
      {showNewsletter && <Newsletter onClose={closeNewsletter} />}

      {/* Share icons on right */}
      <div className='fixed bottom-1/2 right-2 space-y-2 w-12 h-40 bg-white rounded-l-3xl'>
        <p>Share</p>

        {/* Twitter */}
        <div
          className='cursor-pointer bg-white p-2 rounded-full border border-gray-300'
          onClick={() => { window.open(`https://x.com/intent/post?url=https%3A%2F%2Ffroker-portal.in%2Fblog%2F10`, '_blank') }}
        >
          <svg className='w-6 h-6' viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="24" cy="24" r="20" fill="#1DA1F2"></circle> <path fillRule="evenodd" clipRule="evenodd" d="M36 16.3086C35.1177 16.7006 34.1681 16.9646 33.1722 17.0838C34.1889 16.4742 34.9697 15.5095 35.3368 14.36C34.3865 14.9247 33.3314 15.3335 32.2107 15.5551C31.3123 14.5984 30.0316 14 28.6165 14C25.8975 14 23.6928 16.2047 23.6928 18.9237C23.6928 19.3092 23.7368 19.6852 23.8208 20.046C19.7283 19.8412 16.1005 17.8805 13.6719 14.9015C13.2479 15.6287 13.0055 16.4742 13.0055 17.3766C13.0055 19.0845 13.8735 20.5916 15.1958 21.4747C14.3878 21.4491 13.6295 21.2275 12.9647 20.8587V20.9203C12.9647 23.3066 14.663 25.296 16.9141 25.7496C16.5013 25.8616 16.0661 25.9224 15.6174 25.9224C15.2998 25.9224 14.991 25.8912 14.6902 25.8336C15.3166 27.7895 17.1357 29.2134 19.2899 29.2534C17.6052 30.5733 15.4822 31.3612 13.1751 31.3612C12.7767 31.3612 12.3848 31.338 12 31.2916C14.1791 32.6884 16.7669 33.5043 19.5475 33.5043C28.6037 33.5043 33.5562 26.0016 33.5562 19.4956C33.5562 19.282 33.5522 19.0693 33.5418 18.8589C34.5049 18.1629 35.34 17.2958 36 16.3086Z" fill="white"></path> </g></svg>
        </div>

        {/* Facebook */}
        <div
          className='cursor-pointer bg-white p-2 rounded-full border border-gray-300'
          onClick={() => { window.open(`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ffroker-portal.in%2Fblog%2F10`, '_blank') }}
        >
          <svg className='w-6 h-6' viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#1877F2" d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z"></path><path fill="#ffffff" d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z"></path></g></svg>
        </div>

        {/* Whatsapp */}
        <div
          className='cursor-pointer bg-white p-2 rounded-full border border-gray-300'
          onClick={() => { window.open(`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ffroker-portal.in%2Fblog%2F10`, '_blank') }}
        >
          <svg className='w-6 h-6' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M16 31C23.732 31 30 24.732 30 17C30 9.26801 23.732 3 16 3C8.26801 3 2 9.26801 2 17C2 19.5109 2.661 21.8674 3.81847 23.905L2 31L9.31486 29.3038C11.3014 30.3854 13.5789 31 16 31ZM16 28.8462C22.5425 28.8462 27.8462 23.5425 27.8462 17C27.8462 10.4576 22.5425 5.15385 16 5.15385C9.45755 5.15385 4.15385 10.4576 4.15385 17C4.15385 19.5261 4.9445 21.8675 6.29184 23.7902L5.23077 27.7692L9.27993 26.7569C11.1894 28.0746 13.5046 28.8462 16 28.8462Z" fill="#BFC8D0"></path> <path d="M28 16C28 22.6274 22.6274 28 16 28C13.4722 28 11.1269 27.2184 9.19266 25.8837L5.09091 26.9091L6.16576 22.8784C4.80092 20.9307 4 18.5589 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z" fill="url(#paint0_linear_87_7264)"></path> <path fillRule="evenodd" clipRule="evenodd" d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 18.5109 2.661 20.8674 3.81847 22.905L2 30L9.31486 28.3038C11.3014 29.3854 13.5789 30 16 30ZM16 27.8462C22.5425 27.8462 27.8462 22.5425 27.8462 16C27.8462 9.45755 22.5425 4.15385 16 4.15385C9.45755 4.15385 4.15385 9.45755 4.15385 16C4.15385 18.5261 4.9445 20.8675 6.29184 22.7902L5.23077 26.7692L9.27993 25.7569C11.1894 27.0746 13.5046 27.8462 16 27.8462Z" fill="white"></path> <path d="M12.5 9.49989C12.1672 8.83131 11.6565 8.8905 11.1407 8.8905C10.2188 8.8905 8.78125 9.99478 8.78125 12.05C8.78125 13.7343 9.52345 15.578 12.0244 18.3361C14.438 20.9979 17.6094 22.3748 20.2422 22.3279C22.875 22.2811 23.4167 20.0154 23.4167 19.2503C23.4167 18.9112 23.2062 18.742 23.0613 18.696C22.1641 18.2654 20.5093 17.4631 20.1328 17.3124C19.7563 17.1617 19.5597 17.3656 19.4375 17.4765C19.0961 17.8018 18.4193 18.7608 18.1875 18.9765C17.9558 19.1922 17.6103 19.083 17.4665 19.0015C16.9374 18.7892 15.5029 18.1511 14.3595 17.0426C12.9453 15.6718 12.8623 15.2001 12.5959 14.7803C12.3828 14.4444 12.5392 14.2384 12.6172 14.1483C12.9219 13.7968 13.3426 13.254 13.5313 12.9843C13.7199 12.7145 13.5702 12.305 13.4803 12.05C13.0938 10.953 12.7663 10.0347 12.5 9.49989Z" fill="white"></path> <defs> <linearGradient id="paint0_linear_87_7264" x1="26.5" y1="7" x2="4" y2="28" gradientUnits="userSpaceOnUse"> <stop stop-color="#5BD066"></stop> <stop offset="1" stop-color="#27B43E"></stop> </linearGradient> </defs> </g></svg>
        </div>
      </div>
    </div>
  );
};

export default Blog;

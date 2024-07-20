import React from 'react';
import { useNavigate } from 'react-router';

const BlogCard = ({ blogData }) => {
  const navigate = useNavigate();

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
    <div
      className='flex flex-col cursor-pointer'
      onClick={() => { navigate(`/blog/${blogData.blogNumber}`) }}
    >

      {/* Blog Image */}
      <img
        className='w-full h-[40vh] object-cover rounded-[24px]'
        src={`${import.meta.env.VITE_ASSETS_URL}/${import.meta.env.VITE_ASSETS_IMAGE_PATH}/blog_${blogData.blogNumber}.png`}
        alt={`blog_${blogData.blogNumber}`}
      />

      {/* Blog author and date */}
      <div className='flex flex-row gap-2 my-2 text-froker-orange font-bold'>
        <p>By</p>
        <p>{blogData.author}</p>
        <p>-</p>
        <p>{formatDate(blogData.date)}</p>
      </div>

      {/* Blog Content Brief */}
      <div className='flex flex-col h-20'>
        <p className='line-clamp-3'>{blogData.content[0].body}</p>
      </div>

      {/* Read More Button */}
      <div>
        <p className='text-froker-orange font-bold underline underline-offset-2'>Read More...</p>
      </div>
    </div>
  )
}

export default BlogCard;

import React, { useState, useEffect } from 'react';
import { useHttpClient } from '../Backend/http-hook';
import ReactPaginate from "react-paginate";
import BlogCard from '../Reusable/BlogCard';

const MoreBlogs = () => {
  const { sendRequest } = useHttpClient();
  const blogsPerPage = parseInt(import.meta.env.VITE_APP_PAGECOUNT_BLOGS || 9, 10); // Ensure numerical value for pagination

  const [loadedBlogs, setLoadedBlogs] = useState([]); // Initialize with empty array

  // Pagination state and handling
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Fetching blogs with pagination
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const responseData = await sendRequest(
          `${import.meta.env.VITE_BACKEND_URL}/blogs/get?page=${currentPage}`
        );
        if (responseData.ok === 1) {
          setLoadedBlogs(responseData.blogs); // Use retrieved blogs data
        }
      } catch (err) {
        console.error('Error fetching blogs:', err); // Use console.error for better logging
      }
    };

    fetchBlogs();
  }, [sendRequest, currentPage]);

  return (
    <div className="min-h-[700px] flex flex-col font-Raleway">
      {/* Blogs */}
      {loadedBlogs && ( // Check for loaded blogs before mapping
        <div className='grid grid-cols-3 gap-x-5 gap-y-5'>
          {loadedBlogs.map((blog) => (
            <BlogCard key={blog.id} blogData={blog} />
          ))}
        </div>
      )}

      {/* Pagination */}
      {loadedBlogs.totalBlogs > 0 && (
        <div className='flex justify-center items-center'>
          <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={(selected) => handlePageChange(selected.selected)}
            containerClassName={"inline-flex -space-x-px text-sm justify-content-center items-center mt-4 mb-4"}
            pageLinkClassName={"flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-blue-100 hover:text-blue-700 focus:bg-blue-100 focus:text-blue-700"}
            previousLinkClassName={"flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-blue-100 hover:text-blue-700"}
            nextClassName={"page-item"}
            nextLinkClassName={"flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-blue-100 hover:text-blue-700"}
            breakLinkClassName={"flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-blue-100 hover:text-blue-700 "}
          />
        </div>
      )}
    </div>
  )
}

export default MoreBlogs
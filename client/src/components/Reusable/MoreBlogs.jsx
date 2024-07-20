import React, { useState, useEffect } from 'react';
import { useHttpClient } from '../Backend/http-hook';
import ReactPaginate from 'react-paginate';
import BlogCard from '../Reusable/BlogCard';

const MoreBlogs = () => {
  const { sendRequest } = useHttpClient();
  const blogsPerPage = parseInt(import.meta.env.VITE_APP_PAGECOUNT_BLOGS || 9, 10);

  const [loadedBlogs, setLoadedBlogs] = useState([]);
  const [totalPages, setTotalPages] = useState(0); // State to hold the total number of pages
  const [page, setPage] = useState(0);

  const handlePageClick = ({ selected }) => {
    setPage(selected);
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const responseData = await sendRequest(
          `${import.meta.env.VITE_BACKEND_URL}/blogs/get?page=${page}&limit=${blogsPerPage}`
        );
        if (responseData.ok === 1) {
          setLoadedBlogs(responseData.blogs);
          setTotalPages(Math.ceil(responseData.totalBlogs / blogsPerPage)); // Calculate total pages
        }
      } catch (err) {
        console.error('Error fetching blogs:', err);
      }
    };

    fetchBlogs();
  }, [sendRequest, page]);

  return (
    <div className="min-h-[700px] flex flex-col font-Raleway">
      {/* Blogs */}
      {loadedBlogs && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-5">
          {loadedBlogs.map((blog) => (
            <BlogCard key={blog.id} blogData={blog} />
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 0 && (
        <div className="flex justify-center items-center my-24">
          <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            pageCount={totalPages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={
              'inline-flex -space-x-px text-sm justify-content-center items-center gap-2'
            }
            pageLinkClassName={
              'flex items-center justify-center text-gray-500 text-xl w-10 h-10 leading-tight text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 focus:bg-gray-200'
            }
            previousLinkClassName={
              'flex items-center justify-center text-gray-500 text-xl w-10 h-10 leading-tight text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100'
            }
            nextLinkClassName={
              'flex items-center justify-center text-gray-500 text-xl w-10 h-10 leading-tight text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100'
            }
            breakLinkClassName={
              'flex items-center justify-center text-gray-500 text-xl w-10 h-10 leading-tight text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100'
            }
            activeClassName="text-gray-700"
          />
        </div>
      )}
    </div>
  );
};

export default MoreBlogs;

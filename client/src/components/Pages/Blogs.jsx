import React from 'react'

const Blogs = () => {
  return (
    <div className='min-h-[700px] flex flex-col font-Raleway'>

      {/* Page Main Heading */}
      <div className='mt-16 flex flex-row gap-2 text-4xl mx-auto text-center'>
        <p className='text-froker-orange'>FROKER</p>
        <p>BLOG</p>
      </div>

      {/* Page Secondary Heading */}
      <div className='mt-8 flex flex-col gap-2 text-center mx-auto responsive-heading w-full'>
        <p>Articles covering the most recent</p>
        <p>updates and advancements</p>
      </div>
    </div>
  )
}

export default Blogs
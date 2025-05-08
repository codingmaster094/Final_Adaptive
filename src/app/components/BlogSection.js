import React, { useState } from "react";
import BlogCard from "./BlogCard";

const BlogSection = ({ title, description, blogs }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleBlogs = showAll ? blogs : blogs.slice(0, 1);

  return (
    <div className="btm-content py-10 border-t  border-black-200">
      <div className="container">
        <div className="space-y-10">
          <div className="heading mx-8 mb-8 relative before:content-[''] before:w-[67px] before:h-[67px] before:rounded-full before:bg-pink before:absolute before:top-[-12px] before:left-[-24px] before:opacity-20 before:z-0">
            <h2 className="text-h2 font-ivy font-semibold">{title}</h2>
          </div>
          {description && (
            <div className="heading text-p mx-8 mb-8">
              <p>{description}</p>
            </div>
          )}
          <div className="blogs grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {visibleBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>

          {blogs.length > 1 && (
            <div className="btn-link *:text-4 mx-auto text-center mt-6">
              <button
                onClick={() => setShowAll(!showAll)}
                className=""
              >
                {showAll ? "View Less" : "View All"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;

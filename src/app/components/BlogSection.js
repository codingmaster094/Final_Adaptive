"use client";
import React, { useState, useRef, useCallback,useEffect  } from "react";
import BlogCard from "./BlogCard";
import InfinityPost from "../../../utile/InfinityPost";

const BlogSection = ({ title, description, blogs, activeTab }) => {
  const [blogsData, setBlogsData] = useState(blogs || []);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();

  // Reset state when category changes
  React.useEffect(() => {
    setBlogsData(blogs || []);
    setPage(1);
    setHasMore(true);
  }, [blogs, activeTab]);

  const loadMoreBlogs = async () => {
    if (!hasMore || loading) return;
    setLoading(true);
  
    try {
      const newBlogs = await InfinityPost(page + 1, activeTab);
      if (Array.isArray(newBlogs) && newBlogs.length > 0) {
        setBlogsData((prevBlogs) => [...prevBlogs, ...newBlogs]);
        setPage((prevPage) => prevPage + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Failed to load more blogs:", error);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    setBlogsData(blogs || []);
    setPage(1);
    setHasMore(true);
  }, [blogs, activeTab]);

  const lastBlogElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          loadMoreBlogs();
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, blogsData, activeTab]
  );

  return (
    <div className="btm-content py-10 border-t border-black-200">
      <div className="container">
        <div className="space-y-10">
          {title && (
            <div className="heading mx-8 mb-8 relative before:content-[''] before:w-[67px] before:h-[67px] before:rounded-full before:bg-pink before:absolute before:top-[-12px] before:left-[-24px] before:opacity-20 before:z-0">
              <h2 className="text-h2 font-ivy font-semibold">{title}</h2>
            </div>
          )}
          {description && (
            <div className="heading text-p mx-8 mb-8">
              <p>{description}</p>
            </div>
          )}
          <div className="blogs grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {blogsData.map((blog, index) => {
              const isLastBlog = index === blogsData.length - 1;
              return (
                <div ref={isLastBlog ? lastBlogElementRef : null} key={blog.id}>
                  <BlogCard blog={blog} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;

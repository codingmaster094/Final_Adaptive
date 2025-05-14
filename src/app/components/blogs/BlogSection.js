import React, { useRef, useEffect } from "react";
import BlogCard from "./BlogCard";

const BlogSection = ({
  title,
  description,
  blogs,
  loadMore,
  hasMore,
  loading,
}) => {
  const observerRef = useRef();

  useEffect(() => {
    if (!loadMore || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          loadMore();
        }
      },
      { threshold: 1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [loadMore, hasMore, loading]);

  return (
    <div className="btm-content py-8 border-t border-black-200">
      <div className="">
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
            {blogs?.map((blog) => (
              <div key={blog.id}>
                <BlogCard blog={blog} />
              </div>
            ))}
          </div>
          {/* Sentinel element to trigger loadMore */}
          {hasMore && (
            <div
              ref={observerRef}
              className="w-full h-8 flex justify-center items-center"
            >
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;

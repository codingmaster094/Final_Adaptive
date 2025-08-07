// components/BlogCard.jsx
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog, youtub_Link }) => {
  const [showPopup, setShowPopup] = useState(false);

  // Convert to embeddable YouTube URL
  const getEmbedUrl = (url) => {
    try {
      const parsed = new URL(url);

      // Handle youtu.be links
      if (parsed.hostname === "youtu.be") {
        return `https://www.youtube.com/embed/${parsed.pathname.slice(1)}?autoplay=1`;
      }

      // Handle regular watch?v=
      if (parsed.hostname.includes("youtube.com")) {
        const v = parsed.searchParams.get("v");
        if (v) return `https://www.youtube.com/embed/${v}?autoplay=1`;

        // Handle shorts
        if (parsed.pathname.startsWith("/shorts/")) {
          const videoId = parsed.pathname.split("/shorts/")[1].split("?")[0];
          return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        }

        // Already in embed format
        if (parsed.pathname.includes("/embed/")) {
          return url.includes("autoplay=1") ? url : url + "?autoplay=1";
        }
      }

      return "";
    } catch (err) {
      console.warn("Invalid YouTube URL:", url);
      return "";
    }
  };




  const embedUrl = getEmbedUrl(youtub_Link);


  const handleOpen = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setShowPopup(true);
  };

  const handleClose = () => setShowPopup(false);

  return (
    <div className="item card-item h-full flex flex-col relative">
      <div className="bg-white p-4 border border-solid border-black-200 flex flex-col flex-1">
        {blog.featured_image_data && blog.featured_image_data.url && (
          <Image
            src={blog.featured_image_data.url}
            alt={blog.title.rendered}
            width={600}
            height={400}
            className="w-full md:h-[240px] object-cover"
          />
        )}

        <div className="content space-y-[20px] my-6 flex-1 flex flex-col">
          <span className="flex justify-between items-center gap-2">
           
              <span className="text-[12px] font-medium font-inter uppercase bg-[#EEA7DF33] p-[6px] rounded-[4px]">
                {blog.category_names[0]}
              </span>

             
           
            <span className="text-[12px] font-medium font-inter text-black-100">
              {new Date(blog.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>
          </span>

          <h3 className="text-body font-bold font-inter md:min-h-[20px] min-h-auto">
            {blog.title.rendered}
          </h3>

          <span
            className="text text-black-100 font-inter font-normal line-clamp-4"
            dangerouslySetInnerHTML={{ __html: blog.excerpt.rendered }}
          ></span>
        </div>
         <div className="flex justify-between items-center gap-4">
        <Link
          href={`/blog/${blog.slug}`}
          className="block underline underline-offset-4 text-black font-semibold font-overpass"
        >
          Read More
        </Link>
         {youtub_Link !== undefined && youtub_Link.trim() !== "" && (
                <button
                  onClick={handleOpen}
                  className="text-[18px] font-medium font-inter uppercase flex items-center gap-1"
                >
                  <Image
                    src={"/img/YOUTUBE.svg"}
                    alt="youtub-icon"
                    width={24}
                    height={24}
                    className=""
                  />
                </button>
              )}
        </div>
      </div>

      {/* --- YOUTUBE POPUP --- */}
      {showPopup && youtub_Link !== undefined && youtub_Link.trim() !== "" && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center">
          <div className="relative w-[90%] max-w-[1024px] rounded-lg shadow-lg">
            <button
              onClick={handleClose}
              className="absolute -top-12 md:-top-8 right-4 md:-right-8 text-white text-[32px] font-bold"
            >
              &times;
            </button>
            <div className="w-full aspect-video">
              <iframe
                src={embedUrl}
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full aspect-video"
              />


            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogCard;

"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Webinars = ({ Weninarspagedata }) => {
  const [visibleCount, setVisibleCount] = useState(3); // first 3
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null);

  const getEmbedUrl = (url) => {
    try {
      const parsed = new URL(url);
      if (parsed.hostname === "youtu.be") {
        return `https://www.youtube.com/embed/${parsed.pathname.slice(1)}?autoplay=0`;
      }
      if (parsed.hostname.includes("youtube.com")) {
        const v = parsed.searchParams.get("v");
        if (v) return `https://www.youtube.com/embed/${v}?autoplay=0`;
        if (parsed.pathname.startsWith("/shorts/")) {
          const videoId = parsed.pathname.split("/shorts/")[1].split("?")[0];
          return `https://www.youtube.com/embed/${videoId}?autoplay=0`;
        }
        if (parsed.pathname.includes("/embed/")) {
          return url.includes("autoplay=0") ? url : url + "?autoplay=0";
        }
      }
      return "";
    } catch (err) {
      console.warn("Invalid YouTube URL:", url);
      return "";
    }
  };

  useEffect(() => {
    if (!loaderRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasMore) {
          setTimeout(() => {
            setVisibleCount((prev) => {
              const newCount = prev + 3;
              if (newCount >= Weninarspagedata.webinars_contents.length) {
                setHasMore(false);
              }
              return newCount;
            });
          }, 500); // small delay so it feels smooth
        }
      },
      {
        root: null,
        rootMargin: "100px", // start loading a bit earlier
        threshold: 0.1,
      }
    );

    observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [hasMore]);

  return (
    <div className="hero-section pt-[100px] border-b border-black-200 bg-white-100">
      <div className="container btm-content py-8">
        <div className="space-y-10">
          <div className="heading mx-8 mb-8 relative before:content-[''] before:w-[67px] before:h-[67px] before:rounded-full before:bg-pink before:absolute before:top-[-12px] before:left-[-24px] before:opacity-20 before:z-0">
            <h2 className="text-h2 font-ivy font-semibold" dangerouslySetInnerHTML={{ __html: Weninarspagedata.banner_tilte }}></h2>
          </div>
          {/* <div className="heading text-p mx-8 mb-8">
          <p>Webinar description</p>
        </div> */}

          <div className="blogs grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {Weninarspagedata.webinars_contents.slice(0, visibleCount).map((item, i) => (
              <div key={i} className="item card-item h-full flex flex-col">
                <div className="bg-white p-4 border border-solid border-black-200 flex flex-col flex-1">
                  <iframe
                    src={getEmbedUrl(item.youtube_url)}
                    title={`YouTube video ${i}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-[200px]"
                  />
                  <div className="content space-y-[20px] my-6 flex-1 flex flex-col">
                    <span className="flex justify-between items-center">
                      <span className="text-[12px] font-medium font-inter uppercase bg-[#EEA7DF33] p-[6px] rounded-[4px]">
                        {item.web_select_stauts}
                      </span>
                      <span className="text-[12px] font-medium font-inter text-black-100">
                        {item.web_date_time}
                      </span>
                    </span>
                    <h3 className="text-body font-bold font-inter md:min-h-[20px] min-h-auto" dangerouslySetInnerHTML={{ __html: item.webinars_title }}>
                    </h3>
                    <span className="text text-black-100 font-inter font-normal line-clamp-4" dangerouslySetInnerHTML={{ __html: item.webinars_descriptions }}>
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    {
                      item.webinars_button.url &&
                      <Link
                      target="_blank"
                        href={item.webinars_button.url}
                        className="block underline underline-offset-4 text-black font-semibold font-overpass"
                      >
                        {item.webinars_button.title}
                      </Link>
                    }
                    {
                      item.youtube_url &&
                      <Link
                      target="_blank"
                        href={item.youtube_url}
                        className="block underline underline-offset-4 text-black font-semibold font-overpass"
                      >
                        {item.webinars_button_title}
                      </Link>
                    }
                  </div>
                </div>
              </div>
            ))}
          </div>

          {hasMore && (
            <div
              ref={loaderRef}
              className="w-full h-12 flex justify-center items-center"
            >
              <span className="text-gray-500 text-sm">Loading more...</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Webinars;

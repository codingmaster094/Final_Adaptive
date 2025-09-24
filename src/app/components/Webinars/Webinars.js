"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useMemo, useRef, useState } from "react";

const Webinars = ({ Categories, Weninarspagedata }) => {
  const [activeTab, setActiveTab] = useState("All");
  const [visibleCount, setVisibleCount] = useState(3); // start with 6 items
  const [hasMore, setHasMore] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const loaderRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Flatten data + attach categories
  // ✅ Flatten data + attach categories + featured image
  const allWebinars = useMemo(() => {
    return (
      Weninarspagedata?.flatMap((post) =>
        (post.acf?.webinars_contents || []).map((webinar) => ({
          ...webinar,
          categories: post.categories || [],
          featured_image: post.featured_image || "", // bring featured_image inside each webinar
        }))
      ) || []
    );
  }, [Weninarspagedata]);

  // ✅ Filter by category & search
  const filteredWebinars = useMemo(() => {
    let data = [...allWebinars];

    if (activeTab !== "All") {
      data = data.filter((item) =>
        item.categories?.some(
          (cat) => cat.name.toLowerCase() === activeTab.toLowerCase()
        )
      );
    }

    if (searchTerm) {
      data = data.filter((item) =>
        item.webinars_title?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return data;
  }, [allWebinars, activeTab, searchTerm]);

  // ✅ Infinite scroll observer
  useEffect(() => {
    if (!loaderRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasMore) {
          setTimeout(() => {
            setVisibleCount((prev) => {
              const newCount = prev + 3;
              if (newCount >= filteredWebinars.length) {
                setHasMore(false);
              }
              return newCount;
            });
          }, 400);
        }
      },
      { rootMargin: "100px", threshold: 0.1 }
    );
    observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [filteredWebinars, hasMore]);

  // ✅ Reset when filters change
  useEffect(() => {
    setVisibleCount(6);
    setHasMore(true);
  }, [activeTab, searchTerm]);

  // ✅ Youtube embed logic
  const getEmbedUrl = (url) => {
    try {
      const parsed = new URL(url);
      if (parsed.hostname === "youtu.be") {
        return `https://www.youtube.com/embed/${parsed.pathname.slice(
          1
        )}?autoplay=0`;
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
    } catch {
      return "";
    }
  };

  return (
    <section className="hero-section pt-[100px] border-b border-black-200 bg-white-100">
      <div className="flex justify-start items-start relative xmd:flex-row flex-col">
        {/* Sidebar Categories */}
        <div className="flex items-center justify-center px-2 py-6 xl:w-[20%] xmd:w-[30%] w-full sticky xmd:top-[120px] top-[112px] shadow-lg xmd:shadow-none xmd:bg-transparent bg-white-100">
          <div className="container">
            <div className="main-btns flex xmd:flex-col flex-row sm:gap-2 gap-6 overflow-x-auto no-scrollbar">
              {["All", ...Categories.map((cat) => cat.name)].map((cat) => (
                <button
                  key={cat}
                  className={`p-2 w-full text-start ${
                    activeTab === cat ? "bg-pink-80 font-semibold" : ""
                  }`}
                  onClick={() => setActiveTab(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="inner xmd:px-10 xmd:py-10 py-2 xl:w-[80%] xmd:w-[70%] w-full">
          <div
            className={`sticky xmd:top-[90px] top-[200px] xmd:px-0 px-2 z-50 py-4  border-t-[1px] border-t-solid xmd:border-t-transparent border-t-black-200 flex justify-between items-center gap-0 xsm:gap-8 xsm:flex-row flex-col   ${
              isScrolled
                ? "bg-white-100  border-b-[1px] border-b-solid border-b-black-200"
                : "bg-transparent"
            }`}
          >
            <h2 className="text-h2 font-ivy font-semibold mb-6">Webinars</h2>
            <div className="w-full flex justify-end items-center mb-4 xmd:mt-0 mt-4">
              <div className="flex relative group lg:w-1/4  xsm:w-1/2 w-[95%] ">
                <button
                  aria-label="search button"
                  className="p-2 text-gray-500 hover:text-black transition absolute left-2 top-1.5"
                >
                  <Image
                    src="/img/searchicon.svg"
                    alt="Search"
                    width={20}
                    height={20}
                  />
                </button>
                <input
                  type="text"
                  placeholder="Search Webinar title"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                  }}
                  className="w-full h-12 py-1 pr-3 pl-12 border border-gray-300 bg-white rounded"
                />
              </div>
            </div>
          </div>
          {/* Grid */}
          <div className="blogs grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {filteredWebinars.slice(0, visibleCount).map((item, i) => {
              return (
                <div key={i} className="card-item h-full flex flex-col">
                  <div className="bg-white p-4 border border-black-200 flex flex-col flex-1">
                    {item.youtube_url ? (
                      <iframe
                        src={getEmbedUrl(item.youtube_url)}
                        title={`YouTube video ${i}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-[200px]"
                      />
                    ) : item.featured_image ? (
                      <Image
                        src={item.featured_image}
                        alt={item.webinars_title || "Webinar"}
                        width={400}
                        height={250}
                        className="w-full h-[200px] object-cover"
                      />
                    ) : (
                      <div className="w-full h-[200px] bg-gray-200 flex items-center justify-center text-sm text-gray-500">
                        No Image Available
                      </div>
                    )}

                    <div className="content space-y-5 my-6 flex-1 flex flex-col">
                      {/* Categories */}
                      <div className="flex flex-wrap gap-1 justify-between">
                        <div className="flex flex-wrap gap-1">
                          {item.categories?.map((cat) => (
                            <span
                              key={cat.id}
                              className="text-[12px] uppercase bg-[#EEA7DF33] px-2 py-1 rounded"
                            >
                              {cat.name}
                            </span>
                          ))}
                        </div>
                        <span className="text-[12px]">
                          {item.web_date_time}
                        </span>
                      </div>

                      {/* Title */}
                      <h3
                        className="text-body font-bold"
                        dangerouslySetInnerHTML={{
                          __html: item.webinars_title,
                        }}
                      />

                      {/* Description */}
                      <span
                        className="line-clamp-4"
                        dangerouslySetInnerHTML={{
                          __html: item.webinars_descriptions,
                        }}
                      />
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-between items-center">
                      {item.webinars_button?.url && (
                        <Link
                          target="_blank"
                          href={item.webinars_button.url}
                          className="underline font-semibold"
                        >
                          {item.webinars_button.title}
                        </Link>
                      )}
                      {item.youtube_url && (
                        <Link
                          target="_blank"
                          href={item.youtube_url}
                          className="underline font-semibold"
                        >
                          {item.webinars_button_title}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Loader */}
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
    </section>
  );
};

export default Webinars;

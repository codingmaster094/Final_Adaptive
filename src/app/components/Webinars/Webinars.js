"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useMemo, useRef, useState } from "react";
import WebinarButton from "../WebinarButton";

import Fahne from "../../../../public/img/Fahne.webp";
import Key from "../../../../public/img/Key.webp";
import Tree from "../../../../public/img/Tree.webp";
import airoplain from "../../../../public/img/airoplain.svg";
import heart from "../../../../public/img/heart.svg";
import home from "../../../../public/img/home.svg";
import star from "../../../../public/img/star.svg";
import tea from "../../../../public/img/tea.svg";
import truck from "../../../../public/img/truck.svg";

const iconData = [
  { value: "Herz", label: " the  heart", image: heart },
  { value: "Tasse", label: " the  cup", image: tea },
  { value: "Stern", label: " the  star", image: star },
  { value: "LKW", label: " the  truck", image: truck },
  { value: "Schlüssel", label: " the  key", image: Key },
  { value: "Haus", label: " the  house", image: home },
  { value: "Flugzeug", label: " the  airplane", image: airoplain },
  { value: "Baum", label: " the  tree", image: Tree },
  { value: "Fahne", label: " the  flag", image: Fahne },
];

const getRandomItems = (array, count) => {
  let shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const LoadingDots = () => {
  return (
    <section className="dots-container">
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </section>
  );
};

const Webinars = ({ Categories, Weninarspagedata }) => {
  const [activeTab, setActiveTab] = useState("All");
  const [visibleCount, setVisibleCount] = useState(3); // start with 6 items
  const [hasMore, setHasMore] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const loaderRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [Success, setSuccess] = useState(null);
  const [correctAnswer, setcorrectAnswer] = useState(null);
  const [randomIcons, setRandomIcons] = useState([]);
  const [randomLabel, setRandomLabel] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    selectedIcon: "",
  });

  useEffect(() => {
    const selectedIcons = getRandomItems(iconData, 3);
    setRandomIcons(selectedIcons);

    // Pick the label from one of the selected icons as the correct answer
    const randomLabelItem =
      selectedIcons[Math.floor(Math.random() * selectedIcons.length)];
    setRandomLabel(randomLabelItem.label);
    setcorrectAnswer(randomLabelItem.label);
    setLoading(false);
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email is invalid";
    }
    if (form.selectedIcon !== correctAnswer) {
      newErrors.selectedIcon = "Please select the correct symbol.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        if (selectedItem?.webinars_button?.url) {
          window.open(selectedItem.webinars_button.url, "_blank");
        }

        setIsOpen(false);
        setForm({
          name: "",
          email: "",
          phone: "",
        });
      } catch (error) {
        setErrorMessage(`Ein Fehler ist aufgetreten: ${error.message}`);
      }
    } else {
      console.log("Validation failed");
    }
  };

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

  const allWebinars = useMemo(() => {
    return (
      Weninarspagedata?.flatMap((post) =>
        (post.acf?.webinars_contents || []).map((webinar) => ({
          ...webinar,
          categories: post.categories || [],
          featured_image: post.featured_image || "",
        }))
      ) || []
    );
  }, [Weninarspagedata]);

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
                        <button
                          onClick={() => {
                            setSelectedItem(item); // store the clicked item
                            setIsOpen(true);
                          }}
                          className="underline font-semibold"
                        >
                          {item.webinars_button.title}
                        </button>
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

          {isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-2xl w-full max-w-md shadow-lg relative">
                <h2 className="text-xl font-bold mb-4">Register for Webinar</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full border rounded-md px-3 py-2 mt-1"
                    />
                    {errors.name && <p className="error-text">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full border rounded-md px-3 py-2 mt-1"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium">
                      Phone (optional)
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full border rounded-md px-3 py-2 mt-1"
                    />
                  </div>
<div>
                  <p>
                    Are you human? Then please select
                    <strong>{randomLabel}</strong>.
                  </p>
                </div>
                  <div className="input-box">
                    <div className="icon-options">
                      {loading ? (
                        <LoadingDots />
                      ) : (
                        randomIcons.map((icon, i) => {
                          return (
                            <label key={i} className="icon-label">
                              <input
                                type="radio"
                                name="selectedIcon"
                                value={icon.label}
                                checked={form.selectedIcon === icon.label}
                                onChange={handleChange}
                                className="hidden"
                              />
                              <div className="icon-container">
                                <Image
                                  className="rendom-img"
                                  src={icon.image}
                                  alt={icon.label}
                                  width={25}
                                  height={25}
                                />
                              </div>
                            </label>
                          );
                        })
                      )}
                    </div>

                    {errors.selectedIcon && (
                      <p className="error-text">{errors.selectedIcon}</p>
                    )}
                  </div>
                  {/* Buttons */}
                  <div className="flex justify-end gap-2 mt-4">
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-2 bg-gray-200 rounded-md "
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#EEA7DF4D] text-black rounded-md "
                    >
                      Submit
                    </button>
                  </div>
                </form>

                {/* Close Icon */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-3 right-3 text-gray-600 hover:text-black"
                >
                  ✕
                </button>
              </div>
            </div>
          )}
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

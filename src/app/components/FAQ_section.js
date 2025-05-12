"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

const FAQ_section = ({ FaqDetail, FaqPostDeatil }) => {
  // Prepare categories from FaqPostDeatil
  const categories = FaqPostDeatil;

  // State for active category tab
  const [activeTab, setActiveTab] = useState(0);

  // Initialize activeQuestions state: default to first question per category
  const [activeQuestions, setActiveQuestions] = useState(
    categories.map(() => null) // or 0 if you want first question open by default
  );

  // Refs for content heights
  const contentRefs = useRef([]);
  const tabsBoxRef = useRef(null);
  const leftArrowRef = useRef(null);
  const rightArrowRef = useRef(null);
  const isDraggingRef = useRef(false);

  // Toggle question open/close
  const toggleQuestion = (categoryIndex, questionIndex) => {
    setActiveQuestions((prev) =>
      prev.map((q, i) => {
        if (i !== categoryIndex) return q;
        return q === questionIndex ? null : questionIndex; // toggle
      })
    );
  };

  // Sync contentRefs on tab switch
  useEffect(() => {
    contentRefs.current = contentRefs.current.slice(
      0,
      categories[activeTab].posts.length
    );
  }, [activeTab, categories]);

  // Handle scroll arrows and drag
  useEffect(() => {
    const tabsBox = tabsBoxRef.current;
    const handleIcons = (scrollVal) => {
      let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
      if (leftArrowRef.current)
        leftArrowRef.current.style.display = scrollVal <= 0 ? "none" : "flex";
      if (rightArrowRef.current)
        rightArrowRef.current.style.display =
          maxScrollableWidth - scrollVal <= 1 ? "none" : "flex";
    };

    const iconClick = (direction) => {
      const scrollAmount = direction === "left" ? -340 : 340;
      tabsBox.scrollLeft += scrollAmount;
      handleIcons(tabsBox.scrollLeft);
    };

    const handleMouseDown = () => {
      isDraggingRef.current = true;
      tabsBox.classList.add("dragging");
    };

    const handleMouseMove = (e) => {
      if (!isDraggingRef.current) return;
      tabsBox.scrollLeft -= e.movementX;
      handleIcons(tabsBox.scrollLeft);
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
      tabsBox.classList.remove("dragging");
    };

    tabsBox.addEventListener("mousedown", handleMouseDown);
    tabsBox.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    // Initial icon display
    handleIcons(tabsBox.scrollLeft);

    return () => {
      tabsBox.removeEventListener("mousedown", handleMouseDown);
      tabsBox.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <section className="banner pt-[100px] xl:pb-[100px] lg:pb-20 md:pb-14 sm:pb-10 pb-6 overflow-hidden">
      <div className="container">
        {/* Header Section */}
        <div className="section-heading z-index-5 xl:py-[100px] lg:py-20 md:py-14 sm:py-10 py-8 flex flex-col justify-center items-center text-center gap-4">
          <h1 className="text-h1 font-ivy font-bold">{FaqDetail?.faq_title}</h1>
          <p className="text-h5">
            {FaqDetail?.faq_desc.replace(/<\/?p[^>]*>/g, "")}
          </p>
        </div>

        {/* Main Content */}
        <div className="relative flex xl:gap-[100px] lg:gap-16 md:gap-10 gap-8 xmd:flex-row flex-col">
          {/* Category Tabs */}
          <div className="xmd:w-[25%] w-full">
            <h3 className="text-h5 font-bold mb-4">Category</h3>
            <div className="relative">
              {/* Scroll Arrows */}
              <div
                ref={leftArrowRef}
                onClick={() => iconClick("left")}
                className="icon absolute left-0 top-1/2 transform -translate-y-1/2 bg-white z-10 px-2 cursor-pointer hidden sm:flex"
              >
                <i id="left" className="fas fa-chevron-left text-gray-600"></i>
              </div>
              <div
                ref={rightArrowRef}
                onClick={() => iconClick("right")}
                className="icon absolute right-0 top-1/2 transform -translate-y-1/2 bg-white z-10 px-2 cursor-pointer hidden sm:flex"
              >
                <i
                  id="right"
                  className="fas fa-chevron-right text-gray-600"
                ></i>
              </div>

              {/* Category Buttons */}
              <div
                ref={tabsBoxRef}
                className="tablink-main w-full flex xmd:flex-col flex-row overflow-x-auto scroll-smooth whitespace-nowrap no-scrollbar"
              >
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveTab(index);
                      // Optionally reset active question for new tab
                      setActiveQuestions((prev) => {
                        const newState = [...prev];
                        newState[index] = null;
                        return newState;
                      });
                    }}
                    className={`tablinks block text-left font-inter py-4 px-4 whitespace-nowrap ${
                      activeTab === index
                        ? "bg-pink-50 font-bold"
                        : "font-bold text-[#343434]"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Accordion for Questions */}
          <div className="xmd:w-[75%] w-full">
            {categories[activeTab].posts.map((item, index) => {
              const isOpen = activeQuestions[activeTab] === index;
              const ref = contentRefs.current[index] || React.createRef();
              contentRefs.current[index] = ref;

              const contentStyle = {
                maxHeight: isOpen ? ref.current?.scrollHeight + "px" : "0px",
                opacity: isOpen ? "1" : "0",
                overflow: isOpen ? "visible" : "hidden",
                transition: "max-height 0.3s ease, opacity 0.3s ease",
              };

              return (
                <div
                  key={index}
                  className="accordion-item border-b py-6 space-y-2"
                >
                  <div
                    className="accordion-header flex justify-between items-center cursor-pointer"
                    onClick={() => toggleQuestion(activeTab, index)}
                  >
                    <h3 className="text-h5 font-semibold w-[90%]">
                      {item.title}
                    </h3>
                    <span className="icon w-6 h-6 border border-solid border-black rounded-full flex justify-center items-center">
                      {isOpen ? (
                        <Image
                          width={16}
                          height={16}
                          src="/img/minus-svgrepo-com.svg"
                          alt="minus"
                        />
                      ) : (
                        <Image
                          width={16}
                          height={16}
                          src="/img/plus-svgrepo-com.svg"
                          alt="plus"
                        />
                      )}
                    </span>
                  </div>
                  <div
                    ref={ref}
                    className="accordion-content"
                    style={contentStyle}
                    // dangerouslySetInnerHTML={{ __html: item.content}}
                  >
                    <p>{item.content.replace(/<\/?p[^>]*>/g, "")}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ_section;

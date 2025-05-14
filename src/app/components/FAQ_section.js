"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

const FAQ_section = ({ FaqDetail, FaqPostDeatil }) => {
  const categories = FaqPostDeatil;
  const [activeTab, setActiveTab] = useState(0);
  const [activeQuestions, setActiveQuestions] = useState(
    categories.map(() => 0)
  );
  const [isScrolled, setIsScrolled] = useState(false);

  const contentRefs = useRef([]);
  const tabsBoxRef = useRef(null);
  const leftArrowRef = useRef(null);
  const rightArrowRef = useRef(null);
  const isDraggingRef = useRef(false);

  const toggleQuestion = (categoryIndex, questionIndex) => {
    setActiveQuestions((prev) =>
      prev.map((q, i) => {
        if (i !== categoryIndex) return q;
        return q === questionIndex ? null : questionIndex;
      })
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 130) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    contentRefs.current = contentRefs.current.slice(
      0,
      categories[activeTab].posts.length
    );
  }, [activeTab, categories]);

  useEffect(() => {
    const tabsBox = tabsBoxRef.current;

    const handleIcons = (scrollVal) => {
      const maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
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

    handleIcons(tabsBox.scrollLeft);

    return () => {
      tabsBox.removeEventListener("mousedown", handleMouseDown);
      tabsBox.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <section className="banner pt-[100px] xl:pb-[100px] lg:pb-20 md:pb-14 sm:pb-10 pb-6 bg-white-100">
      <div className="relative">
        <div className="flex xmd:flex-row flex-col min-h-screen">
          {/* Sidebar Tabs */}
          <div className="xl:w-[20%] xmd:w-[30%] w-full xmd:pt-14 pt-10 pb-6 px-2 xmd:shadow-none shadow-lg xmd:relative sticky xmd:top-0 top-[100px] xmd:bg-transparent bg-white-100 z-30">
            <div className="sticky top-[160px] z-20">
              <div className="container relative">
                {/* Scroll Arrows */}
                <div
                  ref={leftArrowRef}
                  onClick={() => iconClick("left")}
                  className="icon absolute left-0 top-1/2 transform -translate-y-1/2 bg-white z-10 px-2 cursor-pointer hidden sm:flex"
                >
                  <i className="fas fa-chevron-left text-gray-600"></i>
                </div>
                <div
                  ref={rightArrowRef}
                  onClick={() => iconClick("right")}
                  className="icon absolute right-0 top-1/2 transform -translate-y-1/2 bg-white z-10 px-2 cursor-pointer hidden sm:flex"
                >
                  <i className="fas fa-chevron-right text-gray-600"></i>
                </div>

                {/* Category Buttons */}
                <div
                  ref={tabsBoxRef}
                  className="tablink-main w-full flex xmd:flex-col flex-row gap-2 scroll-smooth xmd:whitespace-pre-wrap whitespace-nowrap no-scrollbar overflow-x-auto"
                >
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setActiveTab(index);
                        setActiveQuestions((prev) => {
                          const newState = [...prev];
                          newState[index] = 0;
                          return newState;
                        });
                      }}
                      className={`tablinks block text-left font-inter py-2 px-2 ${
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
          </div>

          {/* FAQ Content */}
          <div className="xl:w-[80%] xmd:w-[70%] w-full xmd:p-14 p-8">
            <div className="section-heading z-index-5 flex flex-col justify-start items-start text-left gap-4 pb-8  border-b border-solid border-b-black-200">
              <h1 className="text-h2 font-ivy font-semibold relative before:content-[''] before:w-[67px] before:h-[67px] before:rounded-full before:bg-pink before:absolute before:top-[-12px] xsm:before:left-[-24px] before:left-[-14px] before:opacity-20 before:z-0 xsm:text-left text-left">
                {FaqDetail?.faq_title}
              </h1>
              <p className="text-p">
                {FaqDetail?.faq_desc.replace(/<\/?p[^>]*>/g, "")}
              </p>
            </div>
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
                  className="accordion-item border-b py-6 space-y-2 max-w-[1024px] w-full"
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

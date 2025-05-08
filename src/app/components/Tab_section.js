"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const Tab_section = ({
  our_free_tools_title,
  our_free_tools_desc,
  free_tools,
}) => {
  const [activeTab, setActiveTab] = useState(1);
  const tabButtonsRef = useRef(null);

  useEffect(() => {
    showTab(activeTab);
  }, [activeTab]);

  useEffect(() => {
    enableMobileTabFeatures();
    window.addEventListener("resize", enableMobileTabFeatures);
    return () => window.removeEventListener("resize", enableMobileTabFeatures);
  }, []);

  const showTab = (tabNumber) => {
    document.querySelectorAll(".tab-button").forEach((button) => {
      button.classList.remove("border-b-2", "border-black");
    });
    document.querySelectorAll(".content-tab").forEach((content) => {
      content.classList.add("opacity-0", "h-0", "max-h-0", "absolute");
      content.classList.remove(
        "opacity-100",
        "relative",
        "h-auto",
        "max-h-screen"
      );
    });

    const activeButton = document.getElementById(`tab-${tabNumber}`);
    if (activeButton)
      activeButton.classList.add("border-b-2", "border-[#eea7df4d]");

    const activeContent = document.getElementById(`content-${tabNumber}`);
    if (activeContent) {
      activeContent.classList.remove("opacity-0", "h-0", "max-h-0", "absolute");
      setTimeout(() => {
        activeContent.classList.add(
          "opacity-100",
          "relative",
          "h-auto",
          "max-h-screen"
        );
      }, 50);
    }
  };

  const enableMobileTabFeatures = () => {
    const draggableTabs = tabButtonsRef.current;
    if (!draggableTabs) return;

    let isDragging = false;
    let startX;
    let scrollLeft;

    const onMouseDown = (e) => {
      if (window.innerWidth > 768) return;
      isDragging = true;
      draggableTabs.classList.add("cursor-grabbing");
      startX = e.pageX - draggableTabs.offsetLeft;
      scrollLeft = draggableTabs.scrollLeft;
    };

    const onMouseUpOrLeave = () => {
      isDragging = false;
      draggableTabs.classList.remove("cursor-grabbing");
    };

    const onMouseMove = (e) => {
      if (!isDragging || window.innerWidth > 768) return;
      e.preventDefault();
      const x = e.pageX - draggableTabs.offsetLeft;
      const walk = (x - startX) * 2;
      draggableTabs.scrollLeft = scrollLeft - walk;
    };

    draggableTabs.addEventListener("mousedown", onMouseDown);
    draggableTabs.addEventListener("mouseleave", onMouseUpOrLeave);
    draggableTabs.addEventListener("mouseup", onMouseUpOrLeave);
    draggableTabs.addEventListener("mousemove", onMouseMove);
  };

  return (
    <section className="tab-section lg:py[150px] md:py-[80px] sm:py-[50px] py-6 w-full h-full bg-dots_bg bg-cover bg-center bg-no-repeat border-b-[1px] border-b-black-200 border-b-solid border-t-[1px] border-t-black-200 border-t-solid">
      <div className="container">
        <div className="top text-black text-center w-[90%] mx-auto lg:space-y-[64px] space-y-8">
          <div className="title flex justify-center items-center">
            <h2
              className="text-h1 font-ivy font-semibold relative before:content-[''] before:w-[67px] before:h-[67px] before:rounded-full before:bg-pink before:absolute before:top-[-12px] before:left-[-16px] before:opacity-20 before:z-0"
              dangerouslySetInnerHTML={{ __html: our_free_tools_title }}
            ></h2>
          </div>
          <div
            className="text text-h5 font-inter"
            dangerouslySetInnerHTML={{ __html: our_free_tools_desc }}
          ></div>
        </div>
        <div className="tabs-container mx-auto mt-10">
          <div
            ref={tabButtonsRef}
            className="tab-list flex md:justify-center justify-start items-center xlg:gap-[100px] lg:gap-[48px] gap-4 md:overflow-x-hidden overflow-x-auto no-scrollbar"
          >
            {free_tools.map((tool, index) => (
              <button
                key={index}
                id={`tab-${index + 1}`}
                className={`tab-button1 p-2 text-lg font-inter font-medium text-black transition-all duration-300 ease-in-out md:flex-shrink flex-shrink-0 flex-grow-0 ${
                  activeTab === index + 1 ? "bg-[#eea7df4d]" : ""
                }`}
                onClick={() => setActiveTab(index + 1)}
              >
                {tool.tool_title}
              </button>
            ))}
          </div>
          <div className="tab-content mt-4 relative overflow-hidden">
            {free_tools.map((tool, tabIndex) => (
              <div
                key={tabIndex}
                id={`content-${tabIndex + 1}`}
                className={`content-tab transition-all duration-1000 ease-in-out ${
                  activeTab === tabIndex + 1
                    ? "opacity-100 relative h-auto max-h-screen"
                    : "opacity-0 absolute h-0 max-h-0 overflow-hidden"
                }`}
              >
                {activeTab === tabIndex + 1 && (
                  <div className="tab-content1 mt-4 relative overflow-hidden space-y-8">
                    <div className="img">
                      <Image
                        src={tool.tool_image.url}
                        width={1456}
                        height={421}
                        alt={tool.tool_title}
                        layout="responsive"
                      />
                    </div>
                    {tool.tool_button && (
                      <div className="btn-link border-green hover:border-black cursor-pointer mx-auto">
                        <Link
                          href={tool.tool_button.url}
                          role="link"
                          className="flex gap-3 items-center justify-center"
                        >
                          {tool.tool_button.title}
                          <svg
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M19.5 12.1089H5.5"
                              stroke="black"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M14.5 17.1089L19.5 12.1089"
                              stroke="black"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M14.5 7.10889L19.5 12.1089"
                              stroke="black"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                      </div>
                    )}
                    <div className="text text-black-100 space-y-4">
                      <h3 className="text-h3 w-fit font-inter font-semibold text-black">
                        {tool.tool_heading_title}
                      </h3>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: tool.toot_description,
                        }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tab_section;

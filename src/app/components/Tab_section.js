"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const Tab_section = () => {
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
            <h2 className="text-h1 font-ivy font-semibold relative before:content-[''] before:w-[67px] before:h-[67px] before:rounded-full before:bg-pink before:absolute before:top-[-12px] before:left-[-16px] before:opacity-20 before:z-0">
              Our Free Tools
            </h2>
          </div>
          <div className="text text-h5 font-inter">
            <p>
              At Adaptive Investments, we offer a suite of powerful, free tools
              to help investors and financial professionals optimize portfolio
              performance, understand risk, and enhance their investment
              strategies.
            </p>
          </div>
        </div>
        <div className="tabs-container mx-auto mt-10">
          <div
            ref={tabButtonsRef}
            className="tab-list flex md:justify-center justify-start items-center xlg:gap-[100px] lg:gap-[48px] gap-4 md:overflow-x-hidden overflow-x-auto no-scrollbar"
          >
            {[
              "Portfolio Protection Calculator",
              "Risk Contribution",
              "Factor Analysis",
              "Risk Weather",
            ].map((tab, index) => (
              <button
                key={index}
                id={`tab-${index + 1}`}
                className={`tab-button1 p-2 text-lg font-inter font-medium text-black transition-all duration-300 ease-in-out md:flex-shrink flex-shrink-0 flex-grow-0 ${
                  activeTab === index + 1 ? "bg-[#eea7df4d]" : ""
                }`}
                onClick={() => setActiveTab(index + 1)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="tab-content mt-4 relative overflow-hidden">
            {[1, 2, 3, 4].map((tabIndex) => (
              <div
                key={tabIndex}
                id={`content-${tabIndex}`}
                className={`content-tab transition-all duration-1000 ease-in-out ${
                  activeTab === tabIndex
                    ? "opacity-100 relative h-auto max-h-screen"
                    : "opacity-0 absolute h-0 max-h-0 overflow-hidden"
                }`}
              >
                {activeTab === tabIndex && (
                  <div className="tab-content1 mt-4 relative overflow-hidden space-y-8">
                    <div className="img">
                      <Image
                        src="/img/graph.png"
                        width={1456}
                        height={421}
                        alt="Risk Graph"
                        layout="responsive"
                      />
                    </div>
                    <div className="btn-link w-fit text-[16px] bg-transparent font-overpass font-medium text-black px-4 py-2 border-solid border-[1.5px] border-green hover:border-black transition-all duration-480 ease-in-out cursor-pointer mx-auto">
                      <a
                        href="#"
                        role="link"
                        className="flex gap-3 items-center justify-center"
                      >
                        Use Risk Weather Tool Now
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
                      </a>
                    </div>
                    <div className="text text-black-100 space-y-4">
                      <h3 className="text-h3 w-fit font-inter font-semibold text-black">
                        Easily assess the right protection level for your
                        portfolio.
                      </h3>
                      <p>
                        The
                        <span className="font-medium">
                          {" "}
                          Portfolio Protection Calculator (PPC)
                        </span>{" "}
                        is a free, user-friendly tool that helps you determine
                        the optimal protection for your portfolio. By evaluating
                        the potential costs and benefits of hedging strategies,
                        PPC ensures you can manage risk effectively without
                        compromising on returns.
                      </p>
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

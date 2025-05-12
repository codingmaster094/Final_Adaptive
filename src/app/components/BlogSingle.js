"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const BlogSingle = ({ SinglePost }) => {
  const tocCollapseRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isLargeScreen = window.innerWidth >= 1070;
    if (!isLargeScreen) return; // Stop all scroll-related logic on small devices

    const tocCollapse = tocCollapseRef.current;
    const toggleBtn = document.getElementById("toc-toggle");
    const tocLinks = document.querySelectorAll(".toc-link");
    const sections = Array.from(
      document.querySelectorAll("main > div[id^='section']")
    );
    const progressLine = document.getElementById("toc-progress");
    let isClickScrolling = false;
    const offset = 80;

    const handleToggle = () => {
      tocCollapse.classList.toggle("expanded");
      if (tocCollapse.classList.contains("expanded")) {
        tocCollapse.style.maxHeight = `${tocCollapse.scrollHeight}px`;
      } else {
        tocCollapse.style.maxHeight = "150px";
      }
    };

    const onScroll = () => {
      if (isClickScrolling) return;

      let currentIndex = 0;
      let minDistance = Infinity;

      sections.forEach((section, i) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top);
        if (distance < minDistance) {
          minDistance = distance;
          currentIndex = i;
        }
      });

      updateTOC(currentIndex);
      updateProgressBar(currentIndex);
      updateSVGColor(currentIndex);
    };

    const updateTOC = (currentIndex) => {
      tocLinks.forEach((link, i) => {
        if (i === currentIndex) {
          link.classList.remove("text-black");
          link.classList.add("text-purple");

          if (!tocCollapse.classList.contains("expanded")) {
            link.scrollIntoView({ behavior: "smooth", block: "nearest" });
          }
        } else {
          link.classList.remove("text-purple");
          link.classList.add("text-black");
        }
      });
    };

    const updateProgressBar = (currentIndex) => {
      const containerHeight = tocCollapse.scrollHeight;
      const heightPerSection = containerHeight / sections.length;
      const progressHeight = (currentIndex + 1) * heightPerSection;
      progressLine.style.height = `${progressHeight}px`;
    };

    const updateSVGColor = (currentIndex) => {
      const svgPath = document.querySelector(".d1");
      if (svgPath) {
        const containerHeight = tocCollapse.scrollHeight;
        const heightPerSection = containerHeight / sections.length;
        const progressHeight = (currentIndex + 1) * heightPerSection;
        const fullHeight = sections.length * heightPerSection;

        svgPath.setAttribute(
          "stroke",
          progressHeight >= fullHeight ? "#960E79" : "#EEA7DF"
        );
      }
    };

    tocLinks.forEach((link, index) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetEl = document.getElementById(targetId);

        if (targetEl) {
          isClickScrolling = true;
          const top =
            targetEl.getBoundingClientRect().top + window.scrollY - offset;

          window.scrollTo({ top, behavior: "smooth" });

          setTimeout(() => {
            updateTOC(index);
            updateProgressBar(index);
            updateSVGColor(index);
            isClickScrolling = false;
          }, 600);
        }
      });
    });

    toggleBtn.addEventListener("click", handleToggle);
    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => {
      toggleBtn.removeEventListener("click", handleToggle);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  


  return (
    <div className="container">
      <div className="xl:pt-[150px] lg:pt-[180px] md:pt-[160px] pt-[140px]  xl:pb-[100px] lg:pb-20 md:pb-14 sm:pb-10 pb-6 ">
        <div className="btn-green *:text-4 mb-8">
          <Link role="link" href="/blog" className="block rotate-180">
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
              ></path>
              <path
                d="M14.5 17.1089L19.5 12.1089"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M14.5 7.10889L19.5 12.1089"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </Link>
        </div>
        <div className="top lg:space-y-16 md:space-y-6 space-y-6">
          <div className="main-text space-y-6">
            <h1 className="text-h2 font-semibold w-[90%] font-ivy">
              {SinglePost[0].title.rendered}
            </h1>
            <div className="con flex gap-3 justify-start items-center">
              <span className="bg-pink-50 block text-sm pl-[6px] pr-[6px] w-fit rounded-[4px]">
                {SinglePost[0].category_names[0]}
              </span>
              <span className="text-sm font-semibold">
                {new Date(SinglePost[0].date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>

          <div className="scroll-section flex lg:gap-16 gap-8 lg:flex-row flex-col">
            <aside
              className="lg:w-[30%] w-full"
              aria-label="Table of contents and sharing"
            >
              <div className="sticky pb-6 top-[20%]">
                <div className="bg-white overflow-hidden pt-6 relative border-2 rounded-xl border-black-100">
                  <div className="pb-4 px-6">
                    <button
                      id="toc-toggle"
                      className="flex justify-between items-center w-full"
                    >
                      <h3 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium wrap-balance">
                        Table of contents
                      </h3>
                      <svg
                        id="toc-arrow"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-7 h-7 -mr-2 transition-transform duration-300 rotate-90"
                      >
                        <path
                          d="M7 11.25h-.75v1.5H7v-1.5Zm9.75 1.5h.75v-1.5h-.75v1.5Zm-3.22-5.78L13 6.44 11.94 7.5l.53.53 1.06-1.06ZM17.5 12l.53.53.53-.53-.53-.53-.53.53Zm-5.03 3.97-.53.53L13 17.56l.53-.53-1.06-1.06ZM7 12.75h9.75v-1.5H7v1.5Zm5.47-4.72 4.5 4.5 1.06-1.06-4.5-4.5-1.06 1.06Zm4.5 3.44-4.5 4.5 1.06 1.06 4.5-4.5-1.06-1.06Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>
                  </div>

                  <div className="main-bar relative">
                    <div
                      className="overflow-hidden transition-all duration-500 max-h-[150px]"
                      id="toc-collapse"
                      ref={tocCollapseRef}
                    >
                      <div className="relative" style={{ transform: "none" }}>
                        <div className="w-1 bg-pink absolute top-0 left-10 bottom-2.5 hidden lg:block"></div>
                        <div
                          className="w-1 origin-top bg-purple absolute top-0 left-10 hidden lg:block"
                          id="toc-progress"
                        ></div>
                        <div className="list px-6 flex flex-col lg:gap-5 gap-3">
                          <div className="">
                            <a
                              href="#section1"
                              data-target="section1"
                              className="toc-link inline-block lg:ml-8 text-h5 font-medium text-black leading-6 px-2 relative transition-colors duration-200 pl-2 mb-3"
                            >
                              Stock market & investment
                            </a>
                          </div>

                          <div className="">
                            <a
                              href="#section2"
                              data-target="section2"
                              className="toc-link inline-block lg:ml-8 text-h5 font-medium text-black leading-6 px-2 relative transition-colors duration-200 pl-2 mb-3"
                            >
                              Parturient Venenatis Etiam
                            </a>
                          </div>

                          <div className="">
                            <a
                              href="#section3"
                              data-target="section3"
                              className="toc-link inline-block lg:ml-8 text-h5 font-medium text-black leading-6 px-2 relative transition-colors duration-200 pl-2 mb-3"
                            >
                              Graph
                            </a>
                          </div>

                          <div className="">
                            <a
                              href="#section4"
                              data-target="section4"
                              className="toc-link inline-block lg:ml-8 text-h5 font-medium text-black  leading-6 px-2 relative transition-colors duration-200 pl-2 mb-3"
                            >
                              Tortor Nullam Fringilla
                            </a>
                          </div>
                        </div>
                        <div className="items-center bg-gray-F7 rounded-lg z-10 relative mx-2.5 -mt-1 hidden lg:flex bg-white">
                          <svg
                            width="64"
                            height="64"
                            viewBox="0 0 64 64"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className=""
                          >
                            <path
                              className="d1"
                              d="M32 0C32 0 32 7.92318 32 13C21 13 12 22 12 33C12 44 21 53 32 53C43 53 52 44 52 33C52 22 43 13 32.5 13"
                              stroke="#eea7df"
                              strokeWidth="4"
                            ></path>
                            <path
                              d="M32 0C32 0 32 7.92318 32 13C21 13 12 22 12 33C12 44 21 53 32 53C43 53 52 44 52 33C52 22 43 13 32.5 13"
                              stroke="#960E79"
                              strokeWidth="4"
                              pathLength="1"
                              strokeDashoffset="0px"
                              strokeDasharray="0px 1px"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M25 30.5C24.4477 30.5 24 30.9477 24 31.5V39.5C24 40.0523 24.4477 40.5 25 40.5H39C39.5523 40.5 40 40.0523 40 39.5V31.5C40 30.9477 39.5523 30.5 39 30.5H25ZM31.5 33.5C30.9477 33.5 30.5 33.9477 30.5 34.5V37.5C30.5 38.0523 30.9477 38.5 31.5 38.5H32.5C33.0523 38.5 33.5 38.0523 33.5 37.5V34.5C33.5 33.9477 33.0523 33.5 32.5 33.5H31.5Z"
                              fill="#960E79"
                            ></path>
                            <path
                              d="M36.5 30.5V29C36.5 26.5147 34.4853 24.5 32 24.5V24.5C29.5147 24.5 27.5 26.5147 27.5 29V30.5"
                              stroke="#960E79"
                              strokeWidth="3"
                              pathLength="1"
                              strokeDashoffset="0px"
                              strokeDasharray="[object Object]px 1px"
                            ></path>
                          </svg>
                          {/* <div className="text-base-tight flex flex-col">
                          <span className="font-bold">Congratulations!</span>
                        </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative bottom-10 left-10">
                    <div style={{ position: "relative" }}></div>
                  </div>
                </div>
                <div className="share text-h5 font-bold *:text-black flex justify-start items-center gap-6 mt-4">
                  <p>Share article: </p>
                  <div className="flex justify-start items-center gap-6">
                    <Link href="/">
                      <svg
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_149_19637)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.4313 1.06013C0.592762 1.29062 0.00156427 2.05692 3.253e-06 2.91533C-0.00155777 3.76651 0.558849 4.54105 1.35392 4.78664C1.7156 4.89833 2.20003 4.89252 2.54037 4.7724C3.89073 4.2957 4.29426 2.58435 3.29399 1.57609C2.81815 1.09643 2.0616 0.88686 1.4313 1.06013ZM11.5385 6.07608C10.4853 6.19542 9.51837 6.75895 8.99777 7.55691L8.85833 7.77065V7.03982V6.30899H7.25828H5.65824V11.6555V17.002H7.31288H8.96756L8.98746 13.9677C9.00866 10.7387 9.01232 10.6746 9.20718 10.1171C9.44024 9.45047 9.89457 9.09924 10.6564 8.99668C11.2444 8.91757 11.8643 9.10087 12.1542 9.43946C12.3303 9.64524 12.4258 9.84412 12.535 10.2325C12.6214 10.5399 12.6226 10.5785 12.6429 13.7629L12.6633 16.9825L14.3317 16.9927L16 17.0028L15.9999 13.695C15.9998 11.7417 15.9833 10.2034 15.9595 9.93836C15.7738 7.86677 15.0676 6.75435 13.633 6.27402C13.1095 6.09876 12.1439 6.00748 11.5385 6.07608ZM0.259718 6.33502C0.245396 6.3493 0.233688 8.75523 0.233688 11.6815V17.002H1.91179H3.58988V11.6555V6.30899H1.93782C1.02915 6.30899 0.274001 6.3207 0.259718 6.33502Z"
                            fill="#252525"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_149_19637">
                            <rect
                              width="16"
                              height="16"
                              fill="white"
                              transform="translate(0 0.535156)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </Link>
                    <Link href="/">
                      <svg
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_149_19639)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M2.12935 6.0632C2.02311 6.09715 1.89715 6.15048 1.84948 6.18176L1.76272 6.23858L5.03523 8.42011L8.30774 10.6016H8.49943H8.69115L11.9596 8.42529C13.7573 7.22831 15.2285 6.24045 15.229 6.23004C15.2305 6.1993 14.9918 6.093 14.8114 6.04405C14.6732 6.00658 13.5686 5.99888 8.48326 6.00005C2.5905 6.00139 2.31414 6.00413 2.12935 6.0632ZM1.03747 7.21803C1.01088 7.3236 1 8.52799 1 11.3663C1 15.2469 1.00194 15.3721 1.06576 15.5786C1.1348 15.8019 1.28078 16.06 1.43028 16.2228C1.57167 16.3768 1.89772 16.5736 2.13113 16.6457C2.3425 16.711 2.45617 16.7121 8.5 16.7121C14.5217 16.7121 14.6582 16.7107 14.8665 16.6464C15.0898 16.5773 15.3478 16.4313 15.5107 16.2818C15.6647 16.1405 15.8615 15.8144 15.9335 15.581C15.9983 15.3714 16 15.2613 16 11.3663C16 7.33431 15.992 7.0395 15.8833 7.08119C15.8609 7.08979 14.3524 8.08887 12.5312 9.30132C10.4268 10.7022 9.15273 11.5302 9.03571 11.5727C8.76749 11.6701 8.18537 11.6652 7.94065 11.5635C7.84479 11.5237 6.27411 10.4962 4.45027 9.28016C2.62643 8.06416 1.12084 7.06927 1.10456 7.06927C1.08826 7.06927 1.05806 7.1362 1.03747 7.21803Z"
                            fill="#252525"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_149_19639">
                            <rect
                              width="16"
                              height="16"
                              fill="white"
                              transform="translate(0 0.535156)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </aside>

            <main className="lg:w-[70%] w-full flex flex-col gap-6">
              <div id="section1" className="">
                <h2 className="text-h3 font-bold mb-4">
                  Stock market & investment
                </h2>
                <div className="space-y-4">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu{" "}
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu{" "}
                  </p>
                </div>
              </div>
              <div id="section2" className="">
                <h2 className="text-h3 font-semibold mb-4">
                  Parturient Venenatis Etiam
                </h2>
                <div className="space-y-4">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu{" "}
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu{" "}
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu{" "}
                  </p>
                </div>
              </div>
              <div id="section3" className="">
                <div>
                  <img src="/img/chart.svg" alt="chart image" role="img" />
                </div>
              </div>
              <div id="section4" className="">
                <h2 className="text-h3 font-semibold mb-4">
                  Tortor Nullam Fringilla
                </h2>
                <ul className="list-disc sapce-y-4 ml-6 marker:text-black-200 marker:text-lg">
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu{" "}
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu{" "}
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu{" "}
                  </li>
                </ul>
              </div>
            </main>
          </div>

          <div className="btm-block grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {SinglePost[0].related_posts?.map((item, i) => {
              return (
                <div
                  key={i}
                  className="right font-inter flex flex-col justify-between px-4 pb-6 space-y-8 border-b border-solid border-b-black-200"
                >
                  <div className="head space-y-5">
                    <div className="con flex gap-3 justify-start items-center">
                      <span className="bg-pink-50 block text-[11px] pl-[6px] pr-[6px] w-fit rounded-[4px]">
                        {item.categories[0]}
                      </span>
                      <span className="text-[12px] font-semibold">
                        {new Date(item.date).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="main space-y-4 text-body">
                      <h3 className="font-semibold w-[90%]">{item.title}</h3>
                      <div
                        className="para line-clamp-4"
                        dangerouslySetInnerHTML={{
                          __html: item.excerpt,
                        }}
                      ></div>
                    </div>
                  </div>

                  <div className="view w-full flex justify-between items-center sm:flex-nowrap flex-wrap gap-3">
                    <div className="left flex gap-3 justify-start items-center text-body">
                      <img
                        src={item.author_avatar}
                        alt="author image"
                        role="img"
                        className="w-6 h-6 rounded-full"
                      />
                      <span className="font-semibold">
                        By {item?.author_name}
                      </span>
                    </div>
                    {/* <div className="right flex gap-3 justify-start items-center text-body">
                    <div className="flex gap-2 justify-start items-center">
                      <img src="/img/eye.svg" alt="eye image" role="img" />
                      <span>388</span>
                    </div>
                  </div> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSingle;

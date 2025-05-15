"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Timeline_Section = ({
  title,
  description,
  button_title,
  m_title,
  Data_features,
  why_choose_title,
  why_choose_desc,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % Data_features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [Data_features.length]);

  useEffect(() => {
    const titles = document.querySelectorAll(".title-head");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("font-bold", "after:w-[180px]");
              entry.target.classList.remove("font-normal");
            }, 500);
          } else {
            entry.target.classList.remove("font-bold", "after:w-[180px]");
            entry.target.classList.add("font-normal");
          }
        });
      },
      { threshold: 0.75 }
    );

    titles.forEach((title) => observer.observe(title));
    return () => titles.forEach((title) => observer.unobserve(title));
  }, []);

  return (
    <section className="timeline-section lg:py[150px] md:py-[80px] sm:py-[50px] py-6 h-full">
      <div className="container">
        <div className="inner lg:space-y-[100px] md:space-y-[64px] space-y-8">
          <div className="timeline-top w-full">
            <div className="t-left w-full">
              <h2
                className="text-h2 font-ivy font-semibold relative before:content-[''] before:w-[67px] before:h-[67px] before:rounded-full before:bg-pink before:absolute before:top-[-12px] before:left-[-16px] before:opacity-20 before:z-0 mb-8"
                dangerouslySetInnerHTML={{ __html: title }}
              ></h2>
              <div className="content flex justify-start items-center gap-8 flex-col lg:flex-row">
                <div className="t-left lg:w-[85%] w-full">
                  <div
                    className="text font-inter text-black-100 font-normal text-body space-y-4"
                    dangerouslySetInnerHTML={{ __html: description }}
                  ></div>
                </div>
                {button_title && (
                  <div className="t-right lg:w-[15%] w-full flex justify-start lg:justify-end items-end">
                    <div className="btn-link *:text-4 border-green hover:border-black">
                      <Link href={button_title.url} role="link">
                        {button_title.title}
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="timeline-mid flex justify-start items-start gap-[30px] flex-col lg:flex-row">
            <div className="time-left lg:w-[50%] w-full">
              <div className="top">
                <div className="title relative">
                  <h3 className="title-head text-h3 font-normal relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[5px] after:bg-bg_line2 after:bg-center after:bg-cover after:bg-no-repeat after:transition-all after:duration-500 transition-all duration-300 ease-in-out text-black">
                    {m_title}
                  </h3>
                </div>
              </div>
              <div className="timeline-box flex flex-col lg:flex-row gap-4 mt-[48px] md:w-[80%] w-full">
                <div className="menu1 flex- 1">
                  {Data_features.map((feature, index) => (
                    <div
                      key={index}
                      className="menu-item flex items-center gap-2 mb-5 transition-all relative cursor-pointer"
                      data-target={index}
                      onClick={() => setActiveIndex(index)}
                    >
                      <div
                        className={`indicator w-4 h-4 border-[2px] rounded-full absolute top-[16px] left-0 -translate-y-1/2 transition-colors flex justify-center items-center ${
                          activeIndex === index
                            ? "border-green"
                            : "border-gray-300"
                        }`}
                      >
                        <div
                          className={`circle w-2 h-2 border rounded-full transition-colors ${
                            activeIndex === index ? "bg-black" : "bg-[#D9D9D9]"
                          }`}
                        ></div>
                      </div>

                      <ul className="list-none ml-[32px] p-0">
                        <li>
                          <h3 className="title text-h5 font-bold font-inter mb-[10px]">
                            {feature.title}
                          </h3>
                          <div
                            className={`menu-content ${
                              activeIndex === index ? "block" : "hidden"
                            }`}
                            data-target={index}
                          >
                            <div
                              className="text text-black-100"
                              dangerouslySetInnerHTML={{
                                __html: feature.description,
                              }}
                            ></div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="time-right lg:w-[50%] full">
              <div className="content-area flex-2 relative">
                {Data_features[activeIndex] && (
                  <div className="content-item">
                    <div className="image">
                      <Image
                        src={Data_features[activeIndex].image.url}
                        width={746}
                        height={468}
                        alt={Data_features[activeIndex].title}
                        className="w-full rounded-lg"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="timeline-btm font-inter font-normal">
            <div className="top mb-5">
              <div className="title relative">
                <h3 className="title-head text-h3 font-normal relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[5px] after:bg-bg_line2 after:bg-center after:bg-cover after:bg-no-repeat after:transition-all after:duration-500 transition-all duration-300 ease-in-out">
                  {why_choose_title}
                </h3>
              </div>
            </div>
            <div
              className="text space-y-4 text-black-100"
              dangerouslySetInnerHTML={{
                __html: why_choose_desc,
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline_Section;

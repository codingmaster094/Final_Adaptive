"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Timeline_Section = ({
  title,
  description,
  sub_title,
  sub_description,
  button_title,
  Data_features,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % Data_features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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
            {!sub_title && (
              <div className="t-left w-full">
                <h2 className="text-h2 font-ivy font-semibold relative before:content-[''] before:w-[67px] before:h-[67px] before:rounded-full before:bg-pink before:absolute before:top-[-12px] before:left-[-16px] before:opacity-20 before:z-0 mb-8">
                  {title}
                </h2>
                <div className="content flex justify-start items-center gap-8 flex-col lg:flex-row">
                  <div className="t-left lg:w-[85%] w-full">
                    <div className="text font-inter text-black-100 font-normal text-body space-y-4">
                      <p>{description}</p>
                    </div>
                  </div>
                  {button_title && (
                    <div className="t-right lg:w-[15%] w-full flex justify-start lg:justify-end items-end">
                      <div className="btn-link *:text-4 border-green hover:border-black">
                        <a href="#" role="link">
                          Explore market Shield
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="timeline-mid flex justify-start items-start gap-[30px] flex-col lg:flex-row">
            <div className="time-left lg:w-[50%] w-full">
              {sub_title ? (
                <div className="top">
                  <div className="title relative md:space-y-[48px] space-y-6">
                    <h2 className="text-h2 font-ivy font-semibold relative before:content-[''] before:w-[67px] before:h-[67px] before:rounded-full before:bg-pink before:absolute before:top-[-12px] xsm:before:left-[-16px] before:left-[0] before:opacity-20 before:z-0">
                      {sub_title}
                    </h2>
                    <p>{sub_description}</p>
                  </div>
                </div>
              ) : (
                <div className="top">
                  <div className="title relative">
                    <h3 className="title-head text-h3 font-normal relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[5px] after:bg-bg_line2 after:bg-center after:bg-cover after:bg-no-repeat after:transition-all after:duration-500 transition-all duration-300 ease-in-out text-black">
                      What Makes Market Shield Unmatched?
                    </h3>
                  </div>
                </div>
              )}

              <div className="timeline-box flex flex-col lg:flex-row gap-4 mt-[48px] md:w-[80%] w-full">
                <div className="menu1 flex-1">
                  {Data_features.map((feature, index) => (
                    <div
                      key={index}
                      className="menu-item flex items-center gap-2 mb-5 transition-all relative cursor-pointer"
                      data-target={index}
                      onClick={() => setActiveIndex(index)}
                    >
                      {/* Indicator Circle */}
                      <div
                        className={`indicator w-4 h-4 border-[2px] rounded-full absolute top-[16px] left-0 -translate-y-1/2 transition-colors flex justify-center items-center ${
                          activeIndex === index
                            ? sub_title
                              ? "border-green"
                              : "border-green"
                            : "border-gray-300"
                        }`}
                      >
                        <div
                          className={`circle w-2 h-2 border rounded-full transition-colors ${
                            activeIndex === index ? "bg-black" : "bg-[#D9D9D9]"
                          }`}
                        ></div>
                      </div>

                      {/* Title and Content */}
                      <ul className="list-none ml-[32px] p-0">
                        <h3 className="title text-h5 font-bold font-inter mb-[10px]">
                          {feature.title}
                        </h3>

                        {/* Content Section */}
                        <li
                          className={`menu-content ${
                            activeIndex === index ? "block" : "hidden"
                          }`}
                          data-target={index}
                        >
                          <div className="text text-black-100">
                            <p>{feature.content}</p>
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
                        src={Data_features[activeIndex].image}
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

          {!sub_title && (
            <div className="timeline-btm font-inter font-normal">
              <div className="top mb-5">
                <div className="title relative">
                  <h3 className="title-head text-h3 font-normal relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[5px] after:bg-bg_line2 after:bg-center after:bg-cover after:bg-no-repeat after:transition-all after:duration-500 transition-all duration-300 ease-in-out">
                    Why Choose Market Shield?
                  </h3>
                </div>
              </div>
              <div className="text space-y-4 text-black-100">
                <p>
                  Market Shield embodies Adaptive’s philosophy:
                  <span className="font-semibold text-black">
                    anticipate, adapt, and achieve.
                  </span>
                  It’s not just about protecting what you have—it’s about
                  setting the stage for growth. With Market Shield, you stay
                  ahead of market volatility, shield your investments from
                  downside risks, and maximize long-term performance.
                </p>
                <p>
                  Experience the
                  <span className="text-black">
                    next generation of portfolio
                  </span>
                  protection with Market Shield—because the smartest investment
                  strategies begin with safeguarding your future.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Timeline_Section;

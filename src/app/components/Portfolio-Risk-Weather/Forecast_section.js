"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const Forecast_section = ({ 
  title,
  description,
  button,
  forecast_tool_content,
  forecast_tool_right_image,
  decoding_title,
  decoding_desc,
  decoding_lists,
  decoding_bottom_desc
}) => {
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
    <section className="t-section forecast-section lg:py[150px] md:py-[80px] sm:py-[50px] py-6 h-full">
      <div className="container">
        <div className="inner">
          {/* Top Section */}
          <div className="timeline-top w-full">
            <div className="t-left w-full">
              <h2
                className="text-h2 font-ivy font-semibold relative before:content-[''] before:w-[67px] before:h-[67px] before:rounded-full before:bg-pink before:absolute before:top-[-12px] before:left-[-16px] before:opacity-20 before:z-0 md:mb-8 mb-6"
                dangerouslySetInnerHTML={{ __html: title }}
              >
              </h2>
              <div className="content flex justify-start items-center md:gap-8 gap-4 flex-col lg:flex-row">
                <div className="t-left lg:w-[85%] w-full">
                  <div
                    className="text font-inter text-black-100 font-normal text-body"
                    dangerouslySetInnerHTML={{ __html: description }}
                  ></div>
                </div>
                <div className="t-right lg:w-[15%] w-full flex justify-start lg:justify-end items-end">
                  <Link
                    href={button.url}
                    target={button.target}
                    className="btn-green text-[18px]"
                    onClick={() => alert("Sign-up Clicked!")}
                  >
                    {button.title}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Mid Section */}
          <div className="timeline-mid flex justify-start items-start lg:gap-16 md:gap-8 gap-6 flex-col lg:flex-row mt-4">
            <div
              className="time-left lg:w-[50%] w-full space-y-4"
              dangerouslySetInnerHTML={{ __html: forecast_tool_content }}
            ></div>

            <div className="time-right lg:w-[50%] w-full">
              <Image
                src={forecast_tool_right_image.url}
                alt="forecast image"
                role="img"
                className="w-full h-auto lg:aspect-[2/1] inset-0 aspect-auto object-cover"
                width={712}
                height={420}
              />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="timeline-btm font-inter font-normal lg:mt-16 md:mt-12 mt-8">
            <div className="top mb-5">
              <div className="title relative">
                <h3
                  className="title-head text-h3 relative after:content-[''] after:absolute after:bottom-[-12px] after:left-0 after:h-[20px] after:bg-bg_line2 after:bg-center after:bg-cover after:bg-no-repeat after:transition-all after:duration-500 transition-all duration-300 ease-in-out font-bold after:w-[180px]"
                  dangerouslySetInnerHTML={{ __html: decoding_title }}
                ></h3>
              </div>
            </div>

            <div className="text space-y-4 text-black-100">
              <p>{decoding_desc.replace(/<\/?p[^>]*>/g, "")}</p>
              <div className="box bg-black-200 p-6">
                <div className="list-b [&_ul>li]:list-disc w-fit mx-auto">
                  <ul>
                    {decoding_lists?.map((risk, index) => (
                      <li key={index}>{risk.lists}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <p>{decoding_bottom_desc.replace(/<\/?span[^>]*>/g, "")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forecast_section;

"use client";
import React from "react";

const Forecast_section = ({ data }) => {
  return (
    <section className="t-section forecast-section lg:py[150px] md:py-[80px] sm:py-[50px] py-6 h-full">
      <div className="container">
        <div className="inner">
          {/* Top Section */}
          <div className="timeline-top w-full">
            <div className="t-left w-full">
              <h2 className="text-h2 font-ivy font-semibold relative before:content-[''] before:w-[67px] before:h-[67px] before:rounded-full before:bg-pink before:absolute before:top-[-12px] before:left-[-16px] before:opacity-20 before:z-0 md:mb-8 mb-6">
                {data.title}
              </h2>
              <div className="content flex justify-start items-center md:gap-8 gap-4 flex-col lg:flex-row">
                <div className="t-left lg:w-[85%] w-full">
                  <div className="text font-inter text-black-100 font-normal text-body">
                    {data.description.map((para, index) => (
                      <p key={index}>{para}</p>
                    ))}
                  </div>
                </div>
                <div className="t-right lg:w-[15%] w-full flex justify-start lg:justify-end items-end">
                  <button
                    className="btn-green text-[18px]"
                    onClick={() => alert("Sign-up Clicked!")}
                  >
                    {data.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mid Section */}
          <div className="timeline-mid flex justify-start items-start lg:gap-16 md:gap-8 gap-6 flex-col lg:flex-row mt-4">
            <div className="time-left lg:w-[50%] w-full space-y-4">
              {data.timeline.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
              <p>
                {data.resourcesTitle}:{" "}
                {data.resources.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.link}
                    role="link"
                    className="underline"
                  >
                    <b>{resource.name}</b>
                    {index < data.resources.length - 1 && " | "}
                  </a>
                ))}
              </p>
            </div>

            <div className="time-right lg:w-[50%] w-full">
              <img
                src={data.image}
                alt="forecast image"
                role="img"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="timeline-btm font-inter font-normal lg:mt-16 md:mt-12 mt-8">
            <div className="top mb-5">
              <div className="title relative">
                <h3 className="title-head text-h3 relative after:content-[''] after:absolute after:bottom-[-12px] after:left-0 after:h-[20px] after:bg-bg_line2 after:bg-center after:bg-cover after:bg-no-repeat after:transition-all after:duration-500 transition-all duration-300 ease-in-out font-bold after:w-[180px]">
                  {data.riskTitle}
                </h3>
              </div>
            </div>

            <div className="text space-y-4 text-black-100">
              <p>{data.riskDescription}</p>
              <div className="box bg-black-200 p-6">
                <div className="list-b [&_ul>li]:list-disc w-fit mx-auto">
                  <ul>
                    {data.riskLevels.map((risk, index) => (
                      <li key={index}>{risk.label}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <p>{data.riskNote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forecast_section;

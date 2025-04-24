import React from "react";

const PortfolioAbout = ({
  title,
  description,
  protectionLevels,
  conclusion,
}) => {
  return (
    <section className="tools-section lg:py[150px] md:py-[80px] sm:py-[50px] py-6 w-full bg-dots_bg bg-cover bg-center bg-no-repeat border-b-[1px] border-b-black-200 border-b-solid border-t-[1px] border-t-black-200 border-t-solid">
      <div className="container">
        <div className="inner">
          <div className="tool-content font-inter space-y-8">
            <div className="text-h5">
              <p>
                <strong dangerouslySetInnerHTML={{ __html: title }}></strong>
              </p>
            </div>
            <div
              className="text-black-300 space-y-4"
              dangerouslySetInnerHTML={{ __html: description }}
            ></div>
            <ul className="text-gray-600 space-y-4 relative [&_li]:relative [&_li]:pl-6 [&_li]:before:content-[''] [&_li]:before:w-2 [&_li]:before:h-2 [&_li]:before:bg-gray-400 [&_li]:before:rounded-full [&_li]:before:absolute [&_li]:before:top-[7px] [&_li]:before:left-0 [&_li]:before:z-0">
              {protectionLevels.map((level, index) => (
                  <li key={index}>
                  <strong
                    dangerouslySetInnerHTML={{ __html: level.title }}
                  ></strong>
                    <br />
                    {level.content.replace(/<\/?p[^>]*>/g, "")}
                  </li>
              ))}
            </ul>
            <div dangerouslySetInnerHTML={{ __html: conclusion}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioAbout;

import React from "react";

const Factor_about = ({ title, description, features }) => {
  return (
    <section className="tools-section lg:py[150px] md:py-[80px] sm:py-[50px] py-6 w-full bg-dots_bg bg-cover bg-center bg-no-repeat border-b-[1px] border-b-black-200 border-b-solid border-t-[1px] border-t-black-200 border-t-solid">
      <div className="container">
        <div className="inner">
          <div className="tool-content font-inter md:space-y-8 space-y-6">
            <div className="text-h3">
              <p>
                <strong>{title}</strong>
              </p>
            </div>

            <div className="*:text-black-300 space-y-4">
              {description.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>

            <div className="features md:space-y-8 space-y-6">
              <h2 className="text-h3 font-ivy font-[600]">Features</h2>

              <ul className="feature-list grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 [&_li]:relative [&_li]:pl-8 [&_li]:before:content-[''] [&_li]:before:w-[18px] [&_li]:before:h-[18px] [&_li]:before:absolute [&_li]:before:top-[3px] [&_li]:before:left-0 [&_li]:before:bg-tick_icon [&_li]:before:bg-cover [&_li]:before:bg-center [&_li]:before:bg-no-repeat [&_li]:text-h5 font-[600]">
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Factor_about;

import React from "react";

const Hero_Section2 = ({ data }) => {
  return (
    <section className="hero-section pt-[100px]">
      <div className="container">
        <div className="inner pt-[18px] lg:pt-0">
          <div className="inner-content flex flex-col lg:flex-row lg:space-y-0 space-y-[56px]">
            <div className="hero-left px-2 lg:px-8 py-6 sm:py-[70px] lg:py-[100px] xl:py-[130px] w-full flex justify-start flex-col items-start text-left">
              <div className="hero-text sm:space-y-8 space-y-4 text-h5 font-inter text-black-100">
                <h1 className="text-h1 text-black font-ivy font-semibold">
                  {data.title}
                </h1>
                <p>{data.description}</p>
              </div>
              <div className="button-area flex flex-wrap justify-start items-start lg:gap-12 gap-4 lg:mt-16 md:mt-8 mt-4">
                {data.buttons.map((btn, index) => (
                  <div
                    key={index}
                    className={`btn ${
                      btn.variant === "outline"
                        ? "btn-link"
                        : "btn-green"
                    } `}
                  >
                    <a href={btn.link} role="link">
                      {btn.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero_Section2;

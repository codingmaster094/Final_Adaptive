import Link from "next/link";
import React from "react";

const Hero_without_img = ({ hideshow , hero_text, hero_peragraph, button1, button2 }) => {
  return (
    hideshow &&
    <section className="hero-section pt-[100px]">
      <div className="container">
        <div className="inner pt-[18px] lg:pt-0">
          <div className="inner-content flex flex-col lg:flex-row lg:space-y-0 space-y-[56px]">
            <div className="hero-left px-2 lg:px-8 py-6 sm:py-[70px] lg:py-[100px] xl:py-[130px] w-full flex justify-center flex-col items-center text-center">
              <div className="hero-text sm:space-y-8 space-y-4 text-h5 font-inter text-black-100">
                <h1 className="text-h1 text-black font-ivy font-semibold">
                  {hero_text}
                </h1>
                {hero_peragraph && (
                  <div dangerouslySetInnerHTML={{ __html: hero_peragraph }} />
                )}
              </div>
              <div className="button-area flex flex-wrap justify-center items-center lg:gap-[48px] gap-4 lg:mt-[64px] md:mt-8 mt-4">
                {button1 && (
                  <div className={`btn-link *:text-4`}>
                    <Link href={button1.url} role="link">
                      {button1.title}
                    </Link>
                  </div>
                )}

                {/* Button 2 with Dynamic Color */}
                {button2 && (
                  <div className={`btn-green *:text-4`}>
                    <Link href={button2.url} role="link">
                      {button2.title}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero_without_img;

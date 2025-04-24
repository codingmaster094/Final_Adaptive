"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero_Section = ({ hero_text, hero_peragraph, button1, button2, image }) => {
    return (
      <section className="hero-section pt-[100px]">
        <div className="container">
          <div className="inner pt-[48px] lg:pt-0">
            <div className="inner-content flex flex-col lg:flex-row lg:space-y-0 space-y-[56px]">
              {/* Left Section */}
              <div className="hero-left py-0 md:py-8 lg:py-[100px] xl:py-[130px] lg:w-[45%] w-full pr-0 lg:pr-[50px] xl:pr-[100px] flex justify-center flex-col">
                <div className="hero-text sm:space-y-8 space-y-4 text-h5 font-inter text-black-100">
                  <h1
                    className="text-h1 text-black font-ivy font-semibold"
                    dangerouslySetInnerHTML={{ __html: hero_text }}
                  ></h1>
                  <div
                    dangerouslySetInnerHTML={{ __html: hero_peragraph }}
                  ></div>
                </div>

                {/* Buttons Section */}
                <div className="button-area flex flex-wrap items-center lg:gap-[48px] gap-4 lg:mt-[64px] mt-8">
                  {/* Button 1 */}
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

              {/* Right Section (Image) */}
              <div className="hero-right lg:w-[55%] w-full flex lg:justify-end justify-start xl:items-end md:items-center items-end">
                <Image
                  src={image.url}
                  width={818}
                  height={483}
                  alt="Hero image"
                  role="img"
                  className="lg:w-fit w-full lg:h-auto h-full"
                  quality={75}
                  priority={true}
                  unoptimized
                  layout='responsive'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Hero_Section;

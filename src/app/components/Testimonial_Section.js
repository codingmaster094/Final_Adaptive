"use client";
import Image from "next/image";
import React from "react";

const Testimonial_Section = ({
  testimonial_title,
  testimonial_desc,
  testimonial_items,
}) => {
  return (
    <section className="testimonial-section lg:py[150px] md:py-[80px] sm:py-[50px] py-6 overflow-hidden">
      <div className="container">
        <div className="top text-black text-center lg:w-[70%] w-full mx-auto lg:space-y-[64px] space-y-8">
          <div className="title flex justify-center items-center">
            <h2
              className="text-h1 font-ivy font-semibold relative before:content-[''] before:w-[67px] before:h-[67px] before:rounded-full before:bg-pink before:absolute before:top-[-12px] xsm:before:left-[-16px] before:left-[0] before:opacity-20 before:z-0"
              dangerouslySetInnerHTML={{ __html: testimonial_title }}
            ></h2>
          </div>
          <div
            className="text italic text-h5 font-inter font-normal"
            dangerouslySetInnerHTML={{ __html: testimonial_desc }}
          ></div>
        </div>

        <div className="testimonial-block lg:mt-[100px] md:mt-[48px] mt-8 flex gap-8 md:flex-row flex-col">
          {testimonial_items?.map((item, i) => {
            return (
              <div className="item test-items md:w-1/2 w-full" key={i}>
                <div className="test-inner flex justify-start items-center flex-col xlg:flex-row md:flex-col xsm:flex-row">
                  <div className="testleft w-[40%]">
                    <div className="testimg max-w-[250px] w-full">
                      <Image
                        src={item?.author_image?.url}
                        width={250}
                        height={251}
                        alt="PhilipSun"
                        role="img"
                      />
                    </div>
                  </div>

                  <div className="testright p-[30px] xlg:w-[60%] md:w-full xsm:w-[60%] w-full xsm:text-left text-center">
                    <div className="test-content space-y-8"  dangerouslySetInnerHTML={{ __html: item.description }}/>
                      <div className="details flex flex-col mt-6">
                        <span className="font-medium">{item.author}</span>
                        <span>{item.postion}</span>
                      </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonial_Section;

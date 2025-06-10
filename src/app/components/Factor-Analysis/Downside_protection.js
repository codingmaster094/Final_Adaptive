import Image from "next/image";
import React from "react";

const Downside_protection = ({ title, full_manage_protection_desc, second_manage_protection_desc ,imageSrc }) => {  
  return (
    <section className="t-section model-section lg:py[150px] md:py-[80px] sm:py-[50px] py-6 w-full border-b-[1px] border-b-black-200 border-b-solid">
      <div className="container">
        <div className="inner md:space-y-[48px] space-y-6">
          <div className="top text-left space-y-8">
            <div className="title flex justify-start items-start">
              <h2
                className="text-h2 font-ivy font-semibold relative before:content-[''] before:w-[67px] before:h-[67px] before:rounded-full before:bg-pink before:absolute before:top-[-12px] xsm:before:left-[-16px] before:left-[0] before:opacity-20 before:z-0 text-black"
                dangerouslySetInnerHTML={{ __html: title }}
              ></h2>
            </div>
            <div
              className="text text-body font-inter font-normal text-black-300 space-y-4"
              dangerouslySetInnerHTML={{ __html: full_manage_protection_desc }}
            ></div>
          </div>
          <div className="protection-text flex justify-start items-start lg:gap-[64px] gap-8 lg:flex-row flex-col">
            <div
              className="p-text-left font-inter space-y-4 !text-black-300 lg:w-[58%] w-full"
              dangerouslySetInnerHTML={{
                __html: second_manage_protection_desc,
              }}
            ></div>
            <div className="p-text-right lg:w-[42%] w-full">
              <Image
                src={imageSrc.url}
                width={598}
                height={258}
                alt="protection market Image"
                role="img"
                className="w-full h-auto lg:aspect-[2/1] inset-0 aspect-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Downside_protection;

import Image from "next/image";
import React from "react";

const Market_Protection_Estimate = ({
  revers,
  title,
  description,
  protectionDetails,
  protectionDetailsArray,
  imageSrc,
  ulData,
}) => {
  return (
    <section className="t-section market-section lg:py[150px] md:py-[80px] sm:py-[50px] py-6 w-full border-b-[1px] border-b-black-200 border-b-solid">
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
              className="text text-body font-inter font-normal text-black-300"
              dangerouslySetInnerHTML={{ __html: description }}
            ></div>
          </div>

          <div
            className={`protection-text flex justify-start items-start lg:gap-[64px] gap-8 lg:flex-row flex-col-reverse ${
              revers ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
          >
            {protectionDetails && (
              <div
                className="p-text-left font-inter space-y-4 !text-black-300 lg:w-[58%] w-full"
                dangerouslySetInnerHTML={{ __html: protectionDetails }}
              ></div>
            )}
            {protectionDetailsArray && (
              <>
                <ul class="[&amp;_li]:pl-8 [&amp;_li]:relative [&amp;_li]:before:content-[''] [&amp;_li]:before:w-[10px] [&amp;_li]:before:h-[10px] [&amp;_li]:before:bg-black-200 [&amp;_li]:before:absolute [&amp;_li]:before:left-0 [&amp;_li]:before:top-[6px] [&amp;_li]:before:rounded-full space-y-2">
                  {protectionDetailsArray &&
                    protectionDetailsArray?.map((items, i) => {
                      return <li key={i}>{items.content}</li>;
                    })}
                </ul>
              </>
            )}

            <div className="p-text-right lg:w-[42%] w-full">
              <Image
                src={imageSrc.url}
                width={598}
                height={294}
                alt="protection market image"
                role="img"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Market_Protection_Estimate;

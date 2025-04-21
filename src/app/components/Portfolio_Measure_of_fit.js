import Image from "next/image";
import Link from "next/link";
import React from "react";

const Portfolio_Measure_of_fit = ({
  title,
  des,
  buttonTitle,
  measures,
  imageSrc,
  borderBlack,
}) => {
  console.log("imageSrc", imageSrc.url);
  return (
    <section className="t-section factor-section lg:py[150px] md:py-[80px] sm:py-[50px] py-6 w-full border-b-[1px] border-b-black-200 border-b-solid">
      <div className="container">
        <div className="inner md:space-y-[48px] space-y-6">
          <div className="top text-left space-y-8">
            <div className="title flex justify-start items-start">
              {title && (
                <h2
                  className="text-h2 font-ivy font-semibold relative before:content-[''] before:w-[67px] before:h-[67px] before:rounded-full before:bg-pink before:absolute before:top-[-12px] xsm:before:left-[-16px] before:left-[0] before:opacity-20 before:z-0 text-black"
                  dangerouslySetInnerHTML={{ __html: title }}
                ></h2>
              )}
            </div>
            {des && (
              <div
                className="text text-body font-inter font-normal text-black-300 space-y-4"
                dangerouslySetInnerHTML={{ __html: des }}
              ></div>
            )}
          </div>

          <div className="btm-column flex md:gap-[48px] gap-8 md:flex-row flex-col-reverse">
            <div className="btm-col-left flex flex-col justify-start items-start space-y-8 md:w-1/2 w-full">
              <div className="btm-col-main space-y-6">
                {measures.map((measure, index) => (
                  <div key={index} className="measure-item space-y-2">
                    <h3 className="relative before:content-[''] before:w-[10px] before:h-[10px] before:bg-green text-h5 font-semibold text-black pl-5 before:absolute before:top-0 before:left-0 before:rounded-full before:mt-[11px]">
                      {measure.item_title}
                    </h3>
                    {measure.item_desc && (
                      <div
                        dangerouslySetInnerHTML={{ __html: measure.item_desc }}
                      ></div>
                    )}
                  </div>
                ))}
              </div>
              {buttonTitle && (
                <div className="btn-pink bg-green font-overpass font-medium text-black text-[body] px-4 py-2 border-solid border-[1.5px] border-transparent hover:bg-transparent hover:border-green transition-all duration-480 ease-in-out cursor-pointer">
                  <Link href={buttonTitle.url} role="link">
                    {buttonTitle.title}
                  </Link>
                </div>
              )}
            </div>

            <div
              className={`btm-col-right md:w-1/2 w-full ${
                borderBlack && "border border-solid border-black"
              } p- h-full`}
            >
              <Image
                src={imageSrc.url}
                alt={imageSrc.alt}
                width={712}
                height={391}
                role="img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio_Measure_of_fit;

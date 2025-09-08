import Image from "next/image";
import Link from "next/link";
import React from "react";

const Toolssection = ({
  show_cta_section,
  upload_video,
  featured_image,
  title,
  description,
  data,
}) => {
  return (
    <section className="tools-section lg:py[150px] py-[80px] w-full bg-dots_bg bg-cover bg-center bg-no-repeat ">
      <div className="container">
        <div className="md:space-y-8 space-y-4">
          <div className="top w-full flex justify-center items-center xmd:mb-16 mb-10">
            <div className="logo">
              <Link href="/" role="link">
                <Image
                  src={"/img/Frame.webp"}
                  width={310}
                  height={85}
                  alt="Adaptive logo"
                  role="img"
                  className="w-[150px] md:w-[200px] lg:w-[310px] h-auto"
                />
              </Link>
            </div>
          </div>
          <div className="inner-content flex flex-col space-y-8">
            <div className="heading">
              <h2
                className="text-h2 font-ivy font-semibold relative before:content-[''] before:w-[67px] before:h-[67px] before:rounded-full before:bg-pink before:absolute before:top-[-12px] xsm:before:left-[-24px] before:left-[-12px] before:opacity-20 before:z-0 text-left"
                dangerouslySetInnerHTML={{ __html: title }}
              ></h2>

              {description && (
                <div
                  className="content font-inter flex flex-col gap-4 xmd:pt-8 pt-4 text-p text-black-300"
                  dangerouslySetInnerHTML={{ __html: description }}
                ></div>
              )}
            </div>

            <div className="inner flex lg:gap-16 gap-8 flex-col">
              {featured_image != null && (
                <div className="left w-full flex-shrink-0">
                  <Image
                    src={featured_image && featured_image}
                    width={1488}
                    height={489}
                    alt="advisory image 1"
                    role="img"
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}
              {upload_video && (
                <div className="left w-full flex-shrink-0">
                  <video
                    src={upload_video.url}
                    controls
                    width="100%"
                    height="auto"
                  >
                  </video>
                </div>
              )}

              <div className="right font-inter flex flex-col xmd:flex-row xmd:gap-8 gap-4">
                <div className="left-block grid grid-cols-1 sm:grid-cols-2 md:gap-8 gap-4 w-full">
                  {data.promotion_detail_description &&
                    data.promotion_detail_description.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-start items-start bg-white border border-solid border-black-200 md:p-6 p-4 gap-3"
                      >
                        <div className="icon w-[18px] h-[28px] flex-shrink-0">
                          <Image
                            src="/img/tick-svggreen.svg"
                            width={18}
                            height={28}
                            alt="tick icon"
                            role="img"
                            className="w-[18px] h-[28px] flex-shrink-0"
                          />
                        </div>
                        <div className="content space-y-2">
                          <h3 className="text-body font-bold font-inter heading flex-1">
                            {item.title}
                          </h3>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: item.description,
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
          {show_cta_section && (
            <div className="sub-box py-8 space-y-8 flex flex-col justify-center items-center">
              <h2
                className="text-h2 font-ivy font-semibold relative text-center"
                dangerouslySetInnerHTML={{ __html: data.cta_title }}
              ></h2>
              <div className="btn-green *:text-4">
                {data.cta_link.url && (
                  <Link href={data.cta_link.url} role="link">
                    {data.cta_link.title}
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Toolssection;

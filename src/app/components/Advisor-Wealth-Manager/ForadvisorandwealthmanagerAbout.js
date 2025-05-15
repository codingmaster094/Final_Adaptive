import Image from 'next/image'
import React from 'react'

const ForadvisorandwealthmanagerAbout = ({
title,
image,
content}) => {
  return (
    <section className="tools-section lg:py[150px] md:py-[80px] sm:py-[50px] py-6 w-full bg-dots_bg bg-cover bg-center bg-no-repeat border-b-[1px] border-b-black-200 border-b-solid border-t-[1px] border-t-black-200 border-t-solid">
      <div className="container">
        <div className="inner-content flex flex-col space-y-8">
          <div className="heading mx-8">
            <h2
              className="text-h2 font-ivy font-semibold relative before:content-[''] before:w-[67px] before:h-[67px] before:rounded-full before:bg-pink before:absolute before:top-[-12px] xsm:before:left-[-24px] before:left-3 before:opacity-20 before:z-0 xsm:text-left text-center"
              dangerouslySetInnerHTML={{ __html: title }}
            ></h2>
          </div>

          <div className="inner flex lg:gap-16 gap-8 xlg:flex-row flex-col">
            <div className="left">
              <Image
                width={655}
                height={450}
                src={image.url}
                alt="advisory image 1"
                role="img"
              />
            </div>
            <div className="right font-inter">
              <div className="right-block space-y-8">
                {content?.map((item, i) => (
                  <div
                    key={i}
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
                      <h3
                        className="text-h5 font-semibold"
                        dangerouslySetInnerHTML={{ __html: item.item_title }}
                      ></h3>
                      <p
                        dangerouslySetInnerHTML={{ __html: item.item_desc }}
                      ></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ForadvisorandwealthmanagerAbout
import Link from 'next/link';
import React from 'react'
import Image from "next/image";

const PortfolioRisk_tools_market_section = ({title, description, boxes , BTN}) => {
  return (
    <section className="t-section market-section bg-dots_bg lg:py[150px] md:py-[80px] sm:py-[50px] py-6 w-full border-b-[1px] border-b-black-200 border-b-solid">
      <div className="container">
        <div className="inner md:space-y-[48px] space-y-6">
          {/* Top Section */}
          <div className="top text-left md:space-y-8 space-y-6">
            <div className="title flex justify-center items-center text-center">
              <h2
                className="text-h2 font-ivy font-semibold relative before:content-[''] before:w-[67px] before:h-[67px] before:rounded-full before:bg-pink before:absolute before:top-[-12px] xsm:before:left-[-16px] before:left-[0] before:opacity-20 before:z-0 text-black"
                dangerouslySetInnerHTML={{ __html: title }}
              ></h2>
            </div>
            <div
              className="text-center text-body font-inter font-normal text-black-300 space-y-2"
              dangerouslySetInnerHTML={{ __html: description }}
            ></div>
          </div>

          {/* Grid Section */}
          <div className="block-box grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-16 md:gap-8 gap-4">
            {boxes.map((box, index) => (
              <div
                key={index}
                className="box p-4 flex flex-col space-y-4 bg-white justify-start items-start border border-black-200 border-solid"
              >
                <Image src={box.image.url} width={120} height={121} alt="box image" role="img" />
                <div className="sm:space-y-5 space-y-4 font-inter">
                  <h3
                    className="text-h5 font-semibold"
                    dangerouslySetInnerHTML={{ __html: box.title }}
                  ></h3>
                  <p>{box.desciption.replace(/<\/?p[^>]*>/g, "")}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="btn-green mx-auto">
            {BTN && (
              <Link href={BTN.url} target={BTN.target} role="link">
                {BTN.title}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioRisk_tools_market_section
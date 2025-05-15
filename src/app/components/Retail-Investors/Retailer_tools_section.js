import Image from 'next/image';
import React from 'react'

const Retailer_tools_section = ({ title , description , image}) => {
  return (
    <section className="tools-section lg:py-[150px] md:py-[80px] sm:py-[50px] py-6 w-full bg-dots_bg bg-cover bg-center bg-no-repeat border-b-[1px] border-b-black-200 border-b-solid border-t-[1px] border-t-black-200 border-t-solid">
      <div className="container">
        <div className="inner-content flex flex-col lg:space-y-16 md:space-y-10 space-y-6">
          <div className="top text-black text-center w-[90%] mx-auto md:space-y-8 space-y-6">
            <div className="title flex justify-center items-center">
              <h2
                className="text-h2 font-ivy font-semibold relative before:content-[''] before:w-[67px] before:h-[67px] before:rounded-full before:bg-pink before:absolute before:top-[-12px] sm:before:left-[-16px] xsm:before:left-[-30px]  before:left-[20px] before:opacity-20 before:z-0"
                dangerouslySetInnerHTML={{ __html: title }}
              ></h2>
            </div>
            <div
              className="text"
              dangerouslySetInnerHTML={{ __html: description }}
            ></div>
          </div>
          <div className="inner flex justify-center items-center">
            <Image
              src={image}
              width={960}
              height={485}
              alt="Market Shield image"
              role="img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Retailer_tools_section
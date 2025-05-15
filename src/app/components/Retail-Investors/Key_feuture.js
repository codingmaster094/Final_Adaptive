import Image from 'next/image';
import React from 'react'

const Key_feuture = ({ Main_titel,  Main_des,  keyFeatures }) => {
  return (
    <section className="t-section lg:py-[150px] md:py-[80px] sm:py-[50px] py-6 w-full border-y border-black-200 bg-white-100">
      <div className="container">
        <div className="inner-content flex flex-col space-y-8">
          <div className="top text-black text-center w-[90%] mx-auto md:space-y-8 space-y-10">
            <div className="title flex justify-center items-center">
              <h2
                className="text-h2 font-ivy font-semibold relative before:content-[''] before:w-[67px] before:h-[67px] before:rounded-full before:bg-pink before:absolute before:top-[-12px] before:left-[-16px] before:opacity-20 before:z-0"
                dangerouslySetInnerHTML={{ __html: Main_titel }}
              ></h2>
            </div>
            <div
              className="text"
              dangerouslySetInnerHTML={{ __html: Main_des }}
            ></div>
          </div>

          <div className="inner flex flex-col lg:gap-16 sm:gap-8 gap-4">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className={`box bg-white xsm:p-8 p-4 flex justify-start sm:gap-8 gap-6 w-full ${
                  index % 2 === 0
                    ? "xmd:flex-row flex-col-reverse"
                    : "xmd:flex-row-reverse flex-col-reverse"
                }`}
              >
                <div className="xmd:w-1/2 w-full">
                  <Image
                    width={696}
                    height={312}
                    src={feature.key_feature_item_image.url}
                    alt={`key-feature image ${index + 1}`}
                    role="img"
                    className="w-full rounded-md xsm:h-full h-[200px] object-cover"
                  />
                </div>
                <div className="xmd:w-1/2 w-full xmd:space-y-8 space-y-6">
                  <div className="content font-inter flex flex-col gap-4 xmd:py-8 py-0">
                    <span
                      className="text-h5 font-semibold"
                      dangerouslySetInnerHTML={{
                        __html: feature.key_feature_item_title,
                      }}
                    ></span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: feature.key_feature_item_desc,
                      }}
                    ></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Key_feuture
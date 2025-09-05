import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Key_Features = ({ title, description, data }) => {
  console.log('DATA+++++', title)
  console.log('DATA+++++', description)
  return (
    <section className="t-section lg:py-[150px] md:py-[80px] sm:py-[50px] py-6 w-full border-y border-black-200 bg-white-100">
      <div className="container">
        <div className="inner-content flex flex-col items-center space-y-8">
          <div className="top text-black text-center w-[90%] mx-auto md:space-y-8 space-y-10">
            <div className="title flex justify-center items-center">
              <h2
                className="text-h2 font-ivy font-semibold relative before:content-[''] before:w-[67px] before:h-[67px] before:rounded-full before:bg-pink before:absolute before:top-[-12px] before:left-[-16px] before:opacity-20 before:z-0"
                dangerouslySetInnerHTML={{ __html: title}}></h2>
            </div>
            <div
              className="text"
            dangerouslySetInnerHTML={{__html: description}}>
            </div>
          </div>

          <div className="inner flex flex-col items-center lg:gap-16 sm:gap-8 gap-4">
            {data.map((item, index) => (
              <div
                key={index}
                className={`box bg-white xsm:p-8 p-4 flex justify-start sm:gap-8 gap-6 w-full ${index % 2 === 0
                    ? "xmd:flex-row flex-col-reverse"
                    : "xmd:flex-row-reverse flex-col-reverse"
                  }`}
              >
                {/* Image */}
                <div className="xmd:w-1/2 w-full">
                  <Image
                    width={item.key_feature_item_image.width || 696}
                    height={item.key_feature_item_image.height || 312}
                    src={item.key_feature_item_image.url}
                    alt={item.key_feature_item_image.alt || "key-feature image"}
                    role="img"
                    className="w-full rounded-md xsm:h-full h-[200px] aspect-[2/1] inset-0 object-cover"
                  />
                </div>

                {/* Content */}
                <div className="xmd:w-1/2 w-full xmd:space-y-8 space-y-6">
                  <div className="content font-inter flex flex-col gap-4 xmd:py-8 py-0">
                    <span className="text-h5 font-semibold">
                      {item.key_feature_item_title}
                    </span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: item.key_feature_item_desc,
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          <div className=" btn-green *:text-4">
            <Link href={"/"} role="link">
              Features
            </Link>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Key_Features
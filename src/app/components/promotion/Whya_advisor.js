import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Whya_advisor = ({data}) => {
  return (
     <section className="t-section lg:py[150px] md:py-[80px] sm:py-[50px] py-6 w-full border-b-[1px] border-b-black-200 border-b-solid border-t-[1px] border-t-black-200 border-t-solid">
              <div className="container">
                <div className="inner-content flex flex-col  space-y-8">
                  <div className="heading mx-auto">
                    <h2 className="text-h2 font-ivy font-semibold relative before:content-[''] before:w-[67px] before:h-[67px] 
                    before:rounded-full before:bg-pink before:absolute before:top-[-12px] xsm:before:left-[-16px] before:left-4 before:opacity-20 before:z-0
                     text-black text-center" dangerouslySetInnerHTML={{__html: data.why_advisor_title}}>
                    </h2>
                  </div>
        
                  <div className="inner flex lg:gap-16 gap-8 flex-col">
                    {data.why_advisor?.map((item, index) => (
                      <div
                        key={index}
                        className="box1 bg-white-100 xmd:pb-6 pb-0 pt-6 xmd:pl-8 pl-6 xmd:pr-0 pr-6 flex justify-start lg:gap-16 gap-8 w-full xmd:flex-row flex-col"
                      >
                        <div className="left xmd:w-1/2 w-full xl:space-y-16 xmd:space-y-8 space-y-6">
                          <div className="number text-blue text-h2 font-ivy font-bold">
                            {String(index + 1).padStart(2, "0")}
                          </div>
                          <div className="content font-inter flex flex-col gap-2">
                            <span
                              className="text-h5 font-semibold"
                              dangerouslySetInnerHTML={{ __html: item.item_title }}
                            ></span>
                            <span
                              dangerouslySetInnerHTML={{ __html: item.item_desc }}
                            ></span>
                            <span className="font-semibold">{item.additionalInfo}</span>
                               <div className=" btn-green *:text-4">
                            <Link href={"/"} role="link">
                              Advisors
                            </Link>
                          </div>
                          </div>
                        </div>
                        <div className="right xmd:w-1/2 w-full">
                          <Image
                            width={696}
                            height={390}
                            src={item.item_image.url}
                            alt={`advisory image ${index + 1}`}
                            role="img"
                            className="w-full rounded-l-md xmd:rounded-b-md rounded-b-none xmd:rounded-r-none rounded-r-md h-full object-cover"
                          />
                        </div>
                      </div>
                    ))}
    
                  </div>
                </div>
              </div>
            </section>
  )
}

export default Whya_advisor
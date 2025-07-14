import React from "react";
import Image from "next/image"
import Link from "next/link";
const Page = async() => {
  return (
   <section className="tools-section lg:py[150px] py-[80px] w-full bg-dots_bg bg-cover bg-center bg-no-repeat ">
                    <div className="container">
                         <div className="md:space-y-8 space-y-4">      
                            <div className="top w-full flex justify-center items-center xmd:mb-16 mb-10">
                                <div className="logo">
                                    <Link href="/" role="link">
                                        <Image src="/img/logo.svg" width={310} height={85} alt="Adaptive logo" role="img" className="w-[150px] md:w-[200px] lg:w-[310px] h-auto"/>
                                    </Link>
                                </div>
                             </div>
                           
                            <div className="inner-content flex flex-col space-y-8">
                                <div className="heading">
                                    <h2 className="text-h2 font-ivy font-semibold relative before:content-[''] before:w-[67px] before:h-[67px] before:rounded-full before:bg-pink before:absolute before:top-[-12px] xsm:before:left-[-24px] before:left-[-12px] before:opacity-20 before:z-0 text-left">Protect Your Client Portfolios, Unlock Hidden Income</h2>
                                    <div className="content font-inter flex flex-col gap-4 xmd:pt-8 pt-4 text-p text-black-300">
                                        <span>Don’t let market volatility threaten your clients assets. Adaptive Portfolio Options Intelligence provides clear, effective guidance to shield portfolios from major downturns while simultaneously generating valuable covered call income. </span>
                                        <span>Here’s what your Portfolio Options Intelligence subscription delivers:</span>
                                    </div>
                                </div>

                                <div className="inner flex lg:gap-16 gap-8 flex-col">
                                    <div className="left w-full flex-shrink-0">
                                        <Image src="/img/frame-image.webp" width={1488} height={489} alt="advisory image 1" role="img" className="w-full h-auto object-cover"/>
                                    </div>
                                    <div className="right font-inter flex flex-col xmd:flex-row xmd:gap-8 gap-4">
                                        <div className="left-block xmd:space-y-8 space-y-4">
                                            <div className="flex justify-start items-start bg-white border border-solid border-black-200 md:p-6 p-4 gap-3">
                                                <div className="icon w-[18px] h-[28px] flex-shrink-0">
                                                    <Image src="/img/tick-svggreen.svg" width={18} height={28} alt="tick icon" role="img" className="w-[18px] h-[28px] flex-shrink-0"/>
                                                </div>
                                                <div className="content space-y-2">
                                                    <h3 className="text-h5 font-semibold">Concise Monthly Reports:</h3>
                                                    <p>See correlated index put costs and potential covered call income for up to 25 client portfolios.</p>
                                                </div>
                                            </div>
                                           
                                            <div className="flex justify-start items-start bg-white border border-solid border-black-200 md:p-6 p-4 gap-3">
                                                <div className="icon w-[18px] h-[28px] flex-shrink-0">
                                                    <Image src="/img/tick-svggreen.svg" width={18} height={28} alt="tick icon" role="img" className="w-[18px] h-[28px] flex-shrink-0"/>
                                                </div>
                                                <div className="content space-y-2">
                                                    <h3 className="text-h5 font-semibold">Downside Risk Analysis:</h3>
                                                    <p>See the cost of protection equivalent to a conservative60/40 equity/fixed allocation.</p>
                                                </div>
                                            </div>
                                           
                                            <div className="flex justify-start items-start bg-white border border-solid border-black-200 md:p-6 p-4 gap-3">
                                                <div className="icon w-[18px] h-[28px] flex-shrink-0">
                                                    <Image src="/img/tick-svggreen.svg" width={18} height={28} alt="tick icon" role="img" className="w-[18px] h-[28px] flex-shrink-0"/>
                                                </div>
                                                <div className="content space-y-2">
                                                    <h3 className="text-h5 font-semibold">Strategic Income Generation:</h3>
                                                    <p>View indicative covered call pricing designed for just a 1 in 6 chance of stock being called at expiration</p>
                                                </div>
                                            </div>
                                           
                                        </div>
                                       
                                        <div className="right-block xmd:space-y-8 space-y-4">
                                            <div className="flex justify-start items-start bg-white border border-solid border-black-200 md:p-6 p-4 gap-3">
                                                <div className="icon w-[18px] h-[28px] flex-shrink-0">
                                                    <Image src="/img/tick-svggreen.svg" width={18} height={28} alt="tick icon" role="img" className="w-[18px] h-[28px] flex-shrink-0"/>
                                                </div>
                                                <div className="content space-y-2">
                                                    <h3 className="text-h5 font-semibold">Timely Market Insights:</h3>
                                                    <p>Templated commentary assessing current market risk</p>
                                                </div>
                                            </div>
                                           
                                            <div className="flex justify-start items-start bg-white border border-solid border-black-200 md:p-6 p-4 gap-3">
                                                <div className="icon w-[18px] h-[28px] flex-shrink-0">
                                                    <Image src="/img/tick-svggreen.svg" width={18} height={28} alt="tick icon" role="img" className="w-[18px] h-[28px] flex-shrink-0"/>
                                                </div>
                                                <div className="content space-y-2">
                                                    <h3 className="text-h5 font-semibold">Customize Your Approach:</h3>
                                                    <p>Subscribers gain access to the Adaptive platform -- adjust protection levels, expiration dates, and risk tolerance.</p>
                                                </div>
                                            </div>
                                           
                                            <div className="flex justify-start items-start bg-white border border-solid border-black-200 md:p-6 p-4 gap-3">
                                                <div className="icon w-[18px] h-[28px] flex-shrink-0">
                                                    <Image src="/img/tick-svggreen.svg" width={18} height={28} alt="tick icon" role="img" className="w-[18px] h-[28px] flex-shrink-0"/>
                                                </div>
                                                <div className="content space-y-2">
                                                    <h3 className="text-h5 font-semibold">Client portfolio data is always anonymized for privacy</h3>
                                                    <p>Send data via direct CSV upload Ready to enhance your client protection and income strategies? </p>
                                                </div>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                                <div className="sub-box py-8 space-y-8 flex flex-col justify-center items-center">
                                    <h2 className="text-h2 font-ivy font-semibold relative text-center">Just $500 per month. Cancel Anytime.</h2>
                                    <div className="btn-green *:text-4">
                                    <Link href="/" role="link">Subscribe Now!</Link>
                                </div>
                                </div>
                            </div>
                         </div>
                    </div>
                </section>
  );
}


export default Page;
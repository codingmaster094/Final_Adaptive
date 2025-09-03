import React from "react";
import Image from "next/image";
import Link from "next/link";
import Alldata from "../../../utile/AllDatafetch";
const Page = async () => {
  // let client_portfolios_unlock_hidden_income;
  // try {
  //   client_portfolios_unlock_hidden_income = await Alldata(
  //     `protect-your-client-portfolios-unlock-hidden-income`
  //   );
  //   console.log('client_portfolios_unlock_hidden_income', client_portfolios_unlock_hidden_income)
  // } catch (error) {
  //   console.error("Error fetching data:", error);
  //   return <div>Error loading data.</div>;
  // }

  // if (!client_portfolios_unlock_hidden_income) {
  //   return <div>No data available.</div>;
  // }
  return (
    <section className="tools-section lg:py[150px] py-[80px] w-full bg-dots_bg bg-cover bg-center bg-no-repeat ">
      <div className="container">
        <div className="md:space-y-8 space-y-4">
          <div className="top w-full flex justify-center items-center xmd:mb-16 mb-10">
            <div className="logo">
              <Link href="/" role="link">
                <Image
                  src={'http://app.dev.adaptive-investments.com/wp-content/uploads/2025/09/Frame.webp'}
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
                className="text-h2 font-ivy font-semibold relative before:content-[''] before:w-[67px] before:h-[67px] before:rounded-full before:bg-pink before:absolute before:top-[-12px] xsm:before:left-[-24px] before:left-[-12px] before:opacity-20 before:z-0 text-left">Protect Your Client Portfolios, Unlock Hidden Income</h2>
              <div
                className="content font-inter flex flex-col gap-4 xmd:pt-8 pt-4 text-p text-black-300">
                <p>Don’t let market volatility threaten your clients assets. Adaptive Portfolio Options Intelligence provides clear, effective guidance to shield portfolios from major downturns while simultaneously generating valuable covered call income.</p>
                <p>Here’s what your Portfolio Options Intelligence subscription delivers:</p>
              </div>
            </div>

            <div className="inner flex lg:gap-16 gap-8 flex-col">
              <div className="left w-full flex-shrink-0">
                <Image
                  src={'http://app.dev.adaptive-investments.com/wp-content/uploads/2025/09/Frame-36794.webp'}
                  width={1488}
                  height={489}
                  alt="advisory image 1"
                  role="img"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="right font-inter flex flex-col xmd:flex-row xmd:gap-8 gap-4">
                {/* Left Block */}
                <div className="left-block grid grid-cols-1 sm:grid-cols-2 md:gap-8 gap-4 w-full">
                  <div
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
                      <h3 className="text-body font-bold font-inter heading flex-1">Concise Monthly Reports:</h3>
                      <div>
                        <p>See correlated index put costs and potential covered call income for up to 25 client portfolios.</p>
                      </div>
                    </div>
                  </div>
                  <div
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
                      <h3 className="text-body font-bold font-inter heading flex-1">Timely Market Insights:</h3>
                      <div>
                        <p>Templated commentary assessing current market risk</p>
                      </div>
                    </div>
                  </div>
                  <div
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
                      <h3 className="text-body font-bold font-inter heading flex-1">Downside Risk Analysis:</h3>
                      <div>
                        <p>See the cost of protection equivalent to a conservative60/40 equity/fixed allocation.</p>
                      </div>
                    </div>
                  </div>
                  <div
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
                      <h3 className="text-body font-bold font-inter heading flex-1">Customize Your Approach:</h3>
                      <div>
                        <p>Subscribers gain access to the Adaptive platform -- adjust protection levels, expiration dates, and risk tolerance.</p>
                      </div>
                    </div>
                  </div>
                  <div
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
                      <h3 className="text-body font-bold font-inter heading flex-1">Strategic Income Generation:</h3>
                      <div>
                        <p>View indicative covered call pricing designed for just a 1 in 6 chance of stock being called at expiration</p>
                      </div>
                    </div>
                  </div>
                  <div
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
                      <h3 className="text-body font-bold font-inter heading flex-1">Client portfolio data is always anonymized for privacy</h3>
                      <div>
                        <p>Send data via direct CSV upload Ready to enhance your client protection and income strategies? </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sub-box py-8 space-y-8 flex flex-col justify-center items-center">
            <h2
              className="text-h2 font-ivy font-semibold relative text-center"
            >Just $500 per month. Cancel Anytime.</h2>
            <div className="btn-green *:text-4">
              <Link
                href={'/'}
                role="link"
              >
                Subscribe Now!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;

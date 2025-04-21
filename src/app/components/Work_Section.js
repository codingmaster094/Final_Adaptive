import Image from 'next/image'
import React from 'react'

const Work_Section = () => {
  return (
    <section className="t-section work-section lg:py[150px] md:py-[80px] sm:py-[50px] py-6 w-full border-b-[1px] border-b-black-200 border-b-solid">
      <div className="container">
        <div className="inner md:space-y-[48px] space-y-6">
          <div className="top text-black text-left md:space-y-[48px] space-y-6">
            <div className="title flex justify-start items-start">
              <h2 className="text-h2 font-ivy font-semibold relative before:content-[''] before:w-[67px] before:h-[67px] before:rounded-full before:bg-pink before:absolute before:top-[-12px] xsm:before:left-[-16px] before:left-[0] before:opacity-20 before:z-0">
                How Does the Portfolio Protection Calculator Work?
              </h2>
            </div>
            <div className="text text-body font-inter font-normal text-black-100">
              <p>
                The Portfolio Protection Calculator operates through a simple
                interface where you input relevant data about your investments:
              </p>
            </div>
          </div>

          <div className="work-area flex justify-start items-stretch sm:gap-8 gap-4 flex-wrap *:w-full *:sm:w-[calc(50%-16px)] *:xlg:w-[calc(25%-24px)] ">
            <div className="work-block flex justify-start items-start gap-[10px]">
              <div className="indicator-icon mt-[5px] w-[5%]">
                <Image
                  src="/img/greenicon.svg"
                  width={14}
                  height={16}
                  alt="indicator-icon"
                  role="img"
                  className="w-4 h-4"
                />
              </div>
              <div className="content w-[95%]">
                <div className="title text">
                  <h3 className="title text-h5 font-bold font-inter mb-[10px]">
                    Current value of your portfolio:
                  </h3>
                  <p>This includes stocks, bonds, and other assets.</p>
                </div>
              </div>
            </div>

            <div className="work-block flex justify-start items-start gap-[10px]">
              <div className="indicator-icon mt-[5px] w-[5%]">
                <Image
                  src="/img/greenicon.svg"
                  width={14}
                  height={16}
                  alt="indicator-icon"
                  role="img"
                  className="w-4 h-4"
                />
              </div>
              <div className="content w-[95%]">
                <div className="title text">
                  <h3 className="title text-h5 font-bold font-inter mb-[10px]">
                    Select Your Investment Goals:
                  </h3>
                  <p>Whether it’s long-term growth or short-term profits</p>
                </div>
              </div>
            </div>

            <div className="work-block flex justify-start items-start gap-[10px]">
              <div className="indicator-icon mt-[5px] w-[5%]">
                <Image
                  src="/img/greenicon.svg"
                  width={14}
                  height={16}
                  alt="indicator-icon"
                  role="img"
                  className="w-4 h-4"
                />
              </div>
              <div className="content w-[95%]">
                <div className="title text">
                  <h3 className="title text-h5 font-bold font-inter mb-[10px]">
                    Your risk tolerance level:
                  </h3>
                  <p>
                    High-risk portfolios can lead to greater volatility but also
                    larger returns.
                  </p>
                </div>
              </div>
            </div>

            <div className="work-block flex justify-start items-start gap-[10px]">
              <div className="indicator-icon mt-[5px] w-[5%]">
                <Image
                  src="/img/greenicon.svg"
                  width={14}
                  height={16}
                  alt="indicator-icon"
                  role="img"
                  className="w-4 h-4"
                />
              </div>
              <div className="content w-[95%]">
                <div className="title text">
                  <h3 className="title text-h5 font-bold font-inter mb-[10px]">
                    Desired level of protection:
                  </h3>
                  <p>
                    Consider whether adjustments to your portfolio asset
                    allocation are required.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text text-body font-inter font-normal text-black-100">
            <p>
              After processing this information, the calculator provides
              suggestions on the most effective ways to protect your portfol
              from potential losses. Based on the data inputted, the calculator
              may suggest guidelines for asset allocation that combines
              equities, bonds, and hedging strategies effectively.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work_Section
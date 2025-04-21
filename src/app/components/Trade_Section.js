"use client";
import Image from "next/image";
import { useEffect } from "react";

const Trade_Section = () => {
      useEffect(() => {
        const titles = document.querySelectorAll(".title-head");
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setTimeout(() => {
                  entry.target.classList.add("font-bold", "after:w-[180px]");
                  entry.target.classList.remove("font-normal");
                }, 500);
              } else {
                entry.target.classList.remove("font-bold", "after:w-[180px]");
                entry.target.classList.add("font-normal");
              }
            });
          },
          { threshold: 0.75 }
        );
    
        titles.forEach((title) => observer.observe(title));
        return () => titles.forEach((title) => observer.unobserve(title));
      }, []);
  return (
    <section className="t-section trade-section lg:py[150px] md:py-[80px] sm:py-[50px] py-6 w-full border-b-[1px] border-b-black-200 border-b-solid">
      <div className="container">
        <div className="inner md:space-y-[48px] space-y-6">
          <div className="top text-black text-left md:space-y-[48px] space-y-6">
            <div className="title flex justify-start items-start">
              <h2 className="text-h2 font-ivy font-semibold relative before:content-[''] before:w-[67px] before:h-[67px] before:rounded-full before:bg-pink before:absolute before:top-[-12px] xsm:before:left-[-16px] before:left-[0] before:opacity-20 before:z-0">
                Exploring Options Trading for Portfolio Protection
              </h2>
            </div>
            <div className="text text-body font-inter font-normal text-black-100">
              <p>
                Options trading provides multiple avenues for investors to
                protect their portfolios. Here are two common strategies:
              </p>
            </div>
          </div>

          <div className="work-area flex justify-start items-stretch md:gap-[48px] gap-4 flex-wrap *:w-full *:md:w-[calc(50%-24px)]">
            <div className="trading-left md:space-y-8 space-y-6">
              <div className="top mb-5">
                <div className="title relative md:space-y-8 space-y-6">
                  <h3 className="title-head text-h3 font-normal relative after:content-[''] after:absolute after:bottom-[-12px] after:left-0 after:w-0 after:h-[20px] after:bg-bg_line2 after:bg-center after:bg-cover after:bg-no-repeat after:transition-all after:duration-500 transition-all duration-300 ease-in-out">
                    Put Buying
                  </h3>
                  <p>
                    Put buying involves purchasing put options that give you the
                    right to sell a specific stock at a predetermined price. Th
                    strategy can serve as insurance for your investments:
                  </p>
                </div>
              </div>
              <div className="work-inn md:space-y-8 space-y-4 text-black-100">
                <div className="work-block flex justify-start items-start gap-[10px]">
                  <div className="indicator-icon mt-[5px] w-[5%]">
                    <Image
                      width={14}
                      height={16}
                      src="/img/greenicon.svg"
                      alt="indicator-icon"
                      role="img"
                      className="w-4 h-4"
                    />
                  </div>
                  <div className="content w-[95%]">
                    <div className="title text">
                      <h3 className="text-black title text-h5 font-bold font-inter mb-[10px]">
                        Protection:
                      </h3>
                      <p>
                        If the stock{" '"}s price drops, the put option can
                        offset some of your losses.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="work-block flex justify-start items-start gap-[10px]">
                  <div className="indicator-icon mt-[5px] w-[5%]">
                    <Image
                      width={14}
                      height={16}
                      src="/img/greenicon.svg"
                      alt="indicator-icon"
                      role="img"
                      className="w-4 h-4"
                    />
                  </div>
                  <div className="content w-[95%]">
                    <div className="title text">
                      <h3 className="text-black title text-h5 font-bold font-inter mb-[10px]">
                        Flexibility:
                      </h3>
                      <p>
                        You can choose the strike price and expiration date that
                        align with your investment strategy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="trading-right md:space-y-8 space-y-6">
              <div className="top mb-5 text-black-100">
                <div className="title relative md:space-y-8 space-y-6">
                  <h3 className="text-black title-head text-h3 font-normal relative after:content-[''] after:absolute after:bottom-[-12px] after:left-0 after:w-0 after:h-[20px] after:bg-bg_line2 after:bg-center after:bg-cover after:bg-no-repeat after:transition-all after:duration-500 transition-all duration-300 ease-in-out">
                    Call Writing
                  </h3>
                  <p>
                    Call writing involves selling call options against stocks
                    you own. This strategy generates income and can provide some
                    downside protection:
                  </p>
                </div>
              </div>

              <div className="work-inn md:space-y-8 space-y-4 text-black-100">
                <div className="work-block flex justify-start items-start gap-[10px]">
                  <div className="indicator-icon mt-[5px] w-[5%]">
                    <Image
                      width={14}
                      height={16}
                      src="/img/greenicon.svg"
                      alt="indicator-icon"
                      role="img"
                      className="w-4 h-4"
                    />
                  </div>
                  <div className="content w-[95%]">
                    <div className="title text">
                      <h3 className="text-black title text-h5 font-bold font-inter mb-[10px]">
                        Income Generation:
                      </h3>
                      <p>By writing calls, you receive premium payments.</p>
                    </div>
                  </div>
                </div>

                <div className="work-block flex justify-start items-start gap-[10px]">
                  <div className="indicator-icon mt-[5px] w-[5%]">
                    <Image
                      width={14}
                      height={16}
                      src="/img/greenicon.svg"
                      alt="indicator-icon"
                      role="img"
                      className="w-4 h-4"
                    />
                  </div>
                  <div className="content w-[95%]">
                    <div className="title text">
                      <h3 className="text-black title text-h5 font-bold font-inter mb-[10px]">
                        Partial Downside Coverage:
                      </h3>
                      <p>
                        The premiums can offset losses if the stock price
                        declines.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trade_Section
import React from "react";

const Downside_protection = () => {
  return (
    <section className="t-section model-section lg:py[150px] md:py-[80px] sm:py-[50px] py-6 w-full border-b-[1px] border-b-black-200 border-b-solid">
      <div className="container">
        <div className="inner md:space-y-[48px] space-y-6">
          <div className="top text-left space-y-8">
            <div className="title flex justify-start items-start">
              <h2 className="text-h2 font-ivy font-semibold relative before:content-[''] before:w-[67px] before:h-[67px] before:rounded-full before:bg-pink before:absolute before:top-[-12px] xsm:before:left-[-16px] before:left-[0] before:opacity-20 before:z-0 text-black">
                How to manage the cost of downside protection?
              </h2>
            </div>
            <div className="text text-body font-inter font-normal text-black-300 space-y-4">
              <p>
                Downside protection, also known as a portfolio hedge, refers to
                investments and agreements. These pay off when the market or
                portfolio goes down. Common forms include ‘put options’ and
                futures contracts which require special expertise and trading
                permissions.
              </p>
            </div>
          </div>
          <div className="protection-text flex justify-start items-start lg:gap-[64px] gap-8 lg:flex-row flex-col">
            <div className="p-text-left font-inter space-y-4 !text-black-300 lg:w-[58%] w-full">
              <p>
                Downside protection can limit potential losses, thus reducing
                the overall risk of a portfolio even while staying invested for
                potential growth.
              </p>
              <p>
                The cost of downside protection is a drag on a portfolio’s
                performance, compared to an unprotected portfolio. At the same
                time downside protection can sometimes lead to improved
                risk-adjusted returns as compared to buy-and-hold without
                protection, if protection proceeds are reinvested at lower
                prices in a portfolio which is growing over the long term
              </p>
            </div>
            <div className="p-text-right lg:w-[42%] w-full">
              <img
                src="/img/protection.webp"
                alt="protection market image"
                role="img"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Downside_protection;

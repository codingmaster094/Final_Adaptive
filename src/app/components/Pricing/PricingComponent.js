"use client";
import React, { useEffect, useState } from "react";

// Define your plans data
const plans = [
  {
    id: "free",
    title: "Free",
    description: "No Sign In Required",
    prices: {
      annual: "0",
      monthly: "0",
    },
    features: [
      { status: "not-active", title: "Risk Contribution" },
      { status: "not-active", title: "Factor Analysis" },
      { status: "not-active", title: "Risk Weather" },
      { status: "not-active", title: "Protection Calculator" },
      { status: "close", title: "Backtest" },
      { status: "close", title: "Forward Test" },
      { status: "close", title: "Market Shield" },
      { status: "close", title: "Call Writing for Income" },
      { status: "close", title: "Custom Portfolio" },
      { status: "close", title: "Market Quotes" },
      { status: "close", title: "Upload Portfolio" },
      { status: "close", title: "Download Options Trades" },
      { status: "close", title: "Call Writing Optimization" },
      { status: "close", title: "Brokerage Platforms" },
    ],
    ctaText: "Try Now",
    link: "/",
    Green_bg: false,
  },
  {
    id: "investor",
    title: "Investor",
    description: "",
    prices: {
      annual: "29",
      monthly: "35",
    },
    features: [
      { status: "active", title: "Advance Risk Contribution" },
      { status: "active", title: "Advance Factor Analysis" },
      { status: "active", title: "Advance Risk Weather" },
      { status: "active", title: "Advance Protection Calculator" },
      { status: "active", title: "Backtest" },
      { status: "active", title: "Forward Test" },
      { status: "active", title: "Market Shield for Downside Protection" },
      { status: "active", title: "Streamlined Call Writing for Income" },
      { status: "active", title: "Up to 3 Portfolios of max 50 Tickers" },
      { status: "active", title: "Market Quotes (Prev Close)" },
      { status: "active", title: "User Upload & Update of Portfolio" },
      { status: "active", title: "User Download of Possible Options Trades" },
      { status: "close", title: "Call Writing Optimization During Trial" },
      { status: "close", title: "Link to Brokerage Platforms" },
    ],
    ctaText: "Start Free Trial Now",
    link: "/",
    Green_bg: true,
  },
  {
    id: "advisor",
    title: "Advisor",
    description: "",
    prices: {
      annual: "65",
      monthly: "75",
    },
    features: [
      { status: "active", title: "Advance Risk Contribution" },
      { status: "active", title: "Advance Factor Analysis" },
      { status: "active", title: "Advance Risk Weather" },
      { status: "active", title: "Advance Protection Calculator" },
      { status: "active", title: "Backtest" },
      { status: "active", title: "Forward Test" },
      { status: "active", title: "Market Shield for Downside Protection" },
      { status: "active", title: "Streamlined Call Writing for Income" },
      { status: "active", title: "Up to 10 Portfolios of max 100 Tickers" },
      { status: "active", title: "Market Quotes (Prev Close)" },
      { status: "active", title: "User Upload & Update of Portfolio" },
      { status: "active", title: "User Download of Options Trades" },
      { status: "active", title: "Call Writing Optimization During Trial" },
      { status: "active", title: "Unlimited if Linked to Brokerage" },
    ],
    ctaText: "Start Free Trial Now",
    link: "/",
    Green_bg: true,
  },
  {
    id: "advisorPro",
    title: "Advisor Pro",
    description: "",
    prices: {
      annual: "500",
      monthly: "600",
    },
    features: [
      { status: "active", title: "Advance Risk Contribution" },
      { status: "active", title: "Advance Factor Analysis" },
      { status: "active", title: "Advance Risk Weather" },
      { status: "active", title: "Advance Protection Calculator" },
      { status: "active", title: "Backtest" },
      { status: "active", title: "Forward Test" },
      { status: "active", title: "Market Shield for Downside Protection" },
      { status: "active", title: "Streamlined Call Writing for Income" },
      { status: "active", title: "Up to 10 Portfolios of max 100 Tickers" },
      { status: "active", title: "Market Quotes (Prev Close)" },
      { status: "active", title: "User Upload & Update of Portfolio" },
      { status: "active", title: "User Download of Options Trades" },
      { status: "active", title: "Call Writing Optimization During Trial" },
      { status: "active", title: "Unlimited if Linked to Brokerage" },
    ],
    ctaText: "Start Free Trial Now",
    link: "/",
    Green_bg: true,
  },
];

const PricingComponent = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  useEffect(() => {
    const equalizeHeights = () => {
      document
        .querySelectorAll(".top-head")
        .forEach((el) => (el.style.height = "auto"));
      document
        .querySelectorAll(".price-list li")
        .forEach((el) => (el.style.height = "auto"));

      const topHeads = document.querySelectorAll(".top-head");
      let maxTopHeadHeight = 0;
      topHeads.forEach((el) => {
        maxTopHeadHeight = Math.max(maxTopHeadHeight, el.offsetHeight);
      });
      topHeads.forEach((el) => {
        el.style.height = `${maxTopHeadHeight}px`;
      });

      const allPriceLists = document.querySelectorAll(".price-list");
      const maxItems = Math.max(
        ...Array.from(allPriceLists).map((ul) => ul.children.length)
      );

      for (let i = 0; i < maxItems; i++) {
        let maxLiHeight = 0;
        const liGroup = [];

        allPriceLists.forEach((ul) => {
          const li = ul.children[i];
          if (li) {
            li.style.height = "auto";
            liGroup.push(li);
            maxLiHeight = Math.max(maxLiHeight, li.offsetHeight);
          }
        });

        liGroup.forEach((li) => {
          li.style.height = `${maxLiHeight}px`;
        });
      }
    };

    setTimeout(equalizeHeights, 100);
    window.addEventListener("resize", () => setTimeout(equalizeHeights, 100));

    return () => {
      window.removeEventListener("resize", () =>
        setTimeout(equalizeHeights, 100)
      );
    };
  }, []);

  return (
    <section className="tools-section lg:py-[150px] md:py-[80px] sm:py-[50px] py-6 w-full bg-dots_bg bg-cover bg-center bg-no-repeat border-b-[1px] border-b-black-200 border-b-solid border-t-[1px] border-t-black-200 border-t-solid">
      <div className="container">
        {/* Title */}
        <div className="inner-content flex flex-col lg:space-y-16 md:space-y-10 space-y-6">
          <div className="top text-black text-center w-[90%] mx-auto md:space-y-8 space-y-10">
            <div className="title flex justify-center items-center">
              <h2 className="text-h1 font-ivy font-semibold relative before:content-[''] before:w-[67px] before:h-[67px] before:rounded-full before:bg-pink before:absolute before:top-[-12px] before:left-[-16px] before:opacity-20 before:z-0">
                Our Pricing Plans
              </h2>
            </div>
          </div>

          {/* Toggle Switch */}
          <div className="inner flex justify-center items-center">
            <div className="w-full">
              <div className="flex justify-center max-w-[14rem] mx-auto mb-8">
                <div className="relative flex w-full p-1">
                  <span
                    className="absolute inset-0 m-1 pointer-events-none"
                    aria-hidden="true"
                  >
                    <span
                      id="toggleSwitch"
                      className={`absolute inset-0 w-1/2 bg-black shadow-sm transform transition-transform duration-150 ease-in-out ${
                        isAnnual ? "translate-x-0" : "translate-x-full"
                      }`}
                    ></span>
                  </span>
                  <button
                    id="yearlyBtn"
                    onClick={() => setIsAnnual(true)}
                    className={`relative flex-1 text-p font-medium p-4 text-center transition-colors duration-150 ease-in-out border-[2px] border-solid border-black ${
                      isAnnual ? "text-white" : "text-black"
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    id="monthlyBtn"
                    onClick={() => setIsAnnual(false)}
                    className={`relative flex-1 font-medium p-4 text-center transition-colors duration-150 ease-in-out border-[2px] border-solid border-black ${
                      isAnnual ? "text-black" : "text-white"
                    }`}
                  >
                    Yearly
                  </button>
                </div>
              </div>

              {/* Plans Grid */}
              <div className="grid xl:grid-cols-4 xsm:grid-cols-2 grid-cols-1 items-stretch gap-y-4 xmd:gap-x-0 gap-x-4">
                {plans.map((plan) => (
                  <div
                    key={plan.id}
                    className="hover:bg-white hover:shadow-[2px_10px_40px_0px_#00000040] transition-all duration-500 linear xmd:bg-transparent bg-white xmd:shadow-none shadow-[2px_10px_40px_0px_#00000040]"
                  >
                    <div className="top-list flex flex-col h-full">
                      <div className="p-6 flex flex-col top-head">
                        <h3 className="text-h2 font-semibold font-ivy text-black mb-8">
                          {plan.title}
                        </h3>
                        {plan.description ? (
                          <span className="font-bold text-h5 text-black mb-6 flex items-center flex-1">
                            No Sign In Required
                          </span>
                        ) : (
                          <span className="font-semibold 2xl:text-h1 text-h2 text-black mb-6 flex-1">
                            $
                            {isAnnual
                              ? plan.prices.annual
                              : plan.prices.monthly}
                            <span className="text-black-300 font-medium text-p ml-2">
                              / Per {!isAnnual ? "Year" : "Month"}
                            </span>
                          </span>
                        )}
                        <a
                          href={plan.link}
                          className={`${
                            plan.Green_bg ? "btn-green" : "btn-link"
                          } block w-full text-center mt-auto`}
                        >
                          {plan.ctaText}
                        </a>
                      </div>
                      <ul className="price-list my-6 [&_li]:pl-10 [&_li]:pr-6 [&_li]:pb-4 [&_li]:border-b [&_li]:border-b-solid [&_li]:border-b-black-200 flex flex-col flex-1 [&_li]:flex [&_li]:items-stretch space-y-4 [&>li:last-child]:border-b-0">
                        {plan.features.map((feature, index) => (
                          <li key={index} className={feature.status}>{feature.title}</li>
                        ))}
                      </ul>
                      <span className="block px-6 pb-4 mt-auto">
                        <a
                          href={plan.link}
                          className={`${
                            plan.Green_bg ? "btn-green" : "btn-link"
                          } block w-full text-center mt-auto`}
                        >
                          {plan.ctaText}
                        </a>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingComponent;

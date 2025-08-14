"use client";
import React, { useEffect, useState } from "react";
import  Link  from 'next/link';

const PricingComponent = ({
  pricing_main_title,
  pricing_description,
  Month_plan_Card,
  year_plan_Card,
}) => {
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
              <h2
                className="text-h1 font-ivy font-semibold relative before:content-[''] before:w-[67px] before:h-[67px] before:rounded-full before:bg-pink before:absolute before:top-[-12px] before:left-[-16px] before:opacity-20 before:z-0"
                dangerouslySetInnerHTML={{ __html: pricing_main_title }}
              ></h2>
            </div>
            <p
              className="text-h3"
              dangerouslySetInnerHTML={{ __html: pricing_description }}
            ></p>
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
                    aria-label="toggle button"
                    id="yearlyBtn"
                    onClick={() => setIsAnnual(true)}
                    className={`relative flex-1 text-p font-medium p-4 text-center transition-colors duration-150 ease-in-out border-[2px] border-solid border-black ${
                      isAnnual ? "text-white" : "text-black"
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    aria-label="toggle button"
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
              <div className="grid xl:grid-cols-3 xsm:grid-cols-2 grid-cols-1 items-stretch gap-y-4 xmd:gap-x-0 gap-x-4">
                {(isAnnual ? Month_plan_Card : year_plan_Card).map(
                  (plan, i) => (
                    <div
                      key={i}
                      className="hover:bg-white hover:shadow-[2px_10px_40px_0px_#00000040] transition-all duration-500 linear xmd:bg-transparent bg-white xmd:shadow-none shadow-[2px_10px_40px_0px_#00000040]"
                    >
 
                      <div className="top-list flex flex-col h-full">
                        <div className="p-6 flex flex-col top-head">
                          <div className="mb-3 space-y-2">
                            <h3
                              className="text-h2 font-semibold font-ivy text-black"
                              dangerouslySetInnerHTML={{
                                __html: plan.plan_title,
                              }}
                            ></h3>
                            <span
                              className="inline-block text-h4"
                              dangerouslySetInnerHTML={{
                                __html: plan.sub_title,
                              }}
                            ></span>
                          </div>
                          {plan.plan_desc && (
                            <span className="font-bold text-h5 text-black mb-6 flex items-center flex-1">
                              {plan.currency_symbol != "" ? (
                                <span className="font-semibold 2xl:text-h1 text-h2 text-black  flex-1">
                                  {plan.currency_symbol}
                                  {plan.plan_desc && plan.plan_desc}
                                  <span className="text-black-300 font-medium text-p ml-2">
                                    / Per {!isAnnual ? "Year" : "Month"}
                                  </span>
                                </span>
                              ) : (
                                plan.plan_desc
                              )}
                            </span>
                          )}
                          {plan.plan_button && (
                            <Link
                              href={plan.plan_button.url}
                              className={`${
                                plan.currency_symbol != ""
                                  ? "btn-green"
                                  : "btn-link"
                              } block w-full text-center mt-auto`}
                            >
                              {plan.plan_button.title}
                            </Link>
                          )}
                        </div>
                        <ul className="price-list my-6 [&_li]:pl-10 [&_li]:pr-6 [&_li]:pb-4 [&_li]:border-b [&_li]:border-b-solid [&_li]:border-b-black-200 flex flex-col flex-1  space-y-4 [&>li:last-child]:border-b-0">
                          {plan.plan_list.map((feature, index) => (
                            <li
                              key={index}
                              className={feature.plan_status}
                              dangerouslySetInnerHTML={{
                                __html: feature.plan_sub_title,
                              }}
                            ></li>
                          ))}
                        </ul>
                        <span className="block px-6 pb-4 mt-auto">
                          {plan.plan_button && (
                            <Link
                              href={plan.plan_button.url}
                              className={`${
                                plan.currency_symbol != ""
                                  ? "btn-green"
                                  : "btn-link"
                              } block w-full text-center mt-auto`}
                            >
                              {plan.plan_button.title}
                            </Link>
                          )}
                        </span>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingComponent;

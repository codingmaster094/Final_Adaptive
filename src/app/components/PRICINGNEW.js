
"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

// PricingComponent
// Props:
//  - pricing_main_title (string, HTML allowed)
//  - pricing_description (string, HTML allowed)
//  - PricingData (object) -> structure like the JSON you provided (monthly in pricing_table_headers/pricing_features, yearly in yearly_pricing_table_headers/yearly_pricing_features)

export default function PricingComponent({ pricing_main_title, pricing_description, PricingData }) {
  const [isYearly, setIsYearly] = useState(false); // false => Monthly, true => Yearly

  // Equalize heights for nicer table rows (keeps your original behavior)
  useEffect(() => {
    const equalizeHeights = () => {
      document.querySelectorAll(".top-head").forEach((el) => (el.style.height = "auto"));
      document.querySelectorAll(".price-list li").forEach((el) => (el.style.height = "auto"));

      const topHeads = document.querySelectorAll(".top-head");
      let maxTopHeadHeight = 0;
      topHeads.forEach((el) => {
        maxTopHeadHeight = Math.max(maxTopHeadHeight, el.offsetHeight);
      });
      topHeads.forEach((el) => {
        el.style.height = `${maxTopHeadHeight}px`;
      });

      const allPriceLists = document.querySelectorAll(".price-list");
      const maxItems = Math.max(...Array.from(allPriceLists).map((ul) => ul.children.length));

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

    const t = setTimeout(equalizeHeights, 120);
    window.addEventListener("resize", () => setTimeout(equalizeHeights, 120));
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", () => setTimeout(equalizeHeights, 120));
    };
  }, [isYearly, PricingData]);

  // Helpers: safely read headers/features for current mode
  const headers = isYearly
    ? PricingData?.yearly_pricing_table_headers || []
    : PricingData?.pricing_table_headers || [];
  const features = isYearly
    ? PricingData?.yearly_pricing_features || []
    : PricingData?.pricing_features || [];

  return (
    <section className="tools-section lg:py-[150px] md:py-[80px] sm:py-[50px] py-6 w-full bg-dots_bg bg-cover bg-center bg-no-repeat border-b-[1px] border-b-black-200 border-b-solid border-t-[1px] border-t-black-200 border-t-solid">
      <div className="container">
        <div className="inner-content flex flex-col lg:space-y-16 md:space-y-10 space-y-6">
          <div className="top text-black text-center w-[90%] mx-auto md:space-y-8 space-y-10">
            <div className="title flex justify-center items-center">
              <h2
                className="text-h1 font-ivy font-semibold relative before:content-[''] before:w-[67px] before:h-[67px] before:rounded-full before:bg-pink before:absolute before:top-[-12px] before:left-[-16px] before:opacity-20 before:z-0"
                dangerouslySetInnerHTML={{ __html: pricing_main_title }}
              ></h2>
            </div>
            <p className="text-h3" dangerouslySetInnerHTML={{ __html: pricing_description }}></p>
          </div>

          {/* Toggle Switch */}
          <div className="inner flex justify-center items-center">
            <div className="w-full">
              <div className="flex justify-center max-w-[14rem] mx-auto mb-8">
                <div className="relative flex w-full p-1 rounded-md border-2 border-black">
                  {/* highlight bar */}
                  <span className="absolute inset-0 m-1 pointer-events-none">
                    <span
                      id="toggleSwitch"
                      className={`absolute inset-0 w-1/2 shadow-sm transform transition-transform duration-200 ease-in-out ${isYearly ? 'translate-x-full' : 'translate-x-0'}`}
                      style={{ backgroundColor: 'black' }}
                      aria-hidden
                    />
                  </span>

                  <button
                    aria-pressed={!isYearly}
                    onClick={() => setIsYearly(false)}
                    className={`relative flex-1 font-medium p-3 text-center transition-colors duration-150 ease-in-out ${!isYearly ? 'text-white' : 'text-black'}`}
                  >
                    Monthly
                  </button>

                  <button
                    aria-pressed={isYearly}
                    onClick={() => setIsYearly(true)}
                    className={`relative flex-1 font-medium p-3 text-center transition-colors duration-150 ease-in-out ${isYearly ? 'text-white' : 'text-black'}`}
                  >
                    Yearly
                  </button>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-[1000px] xlg:w-full border border-gray-300 text-sm text-center">
                  <thead className="text-black">
                    <tr>
                      <th className="border border-gray-300 px-6 py-3 text-left !bg-white font-semibold font-ivy xxl:text-h2 text-h3">Features</th>

                      {headers.map((h, idx) => (
                        <th key={idx} className="border border-gray-300 px-6 py-3 !bg-white font-semibold text-center space-y-4">
                          <div className="font-bold font-ivy xxl:text-h2 text-h3">{h.plan_title}</div>
                          {h.plan_description && <div className="text-p">{h.plan_description}</div>}
                          <Link href={"/"} className="btn-green block w-full text-center mt-auto font-medium text-p ">{h.cta_text}</Link>
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {features.map((f, idx) => (
                      <>
                      <tr key={idx}>
                        <td className="border px-6 py-3 text-left font-medium text-p">
                          <div className="flex items-center gap-2">
                            <span 
                            data-tooltip-id={`tooltip-${idx}`}
                                  data-tooltip-content={f.feature_hover_name}
                                  aria-label={`More info about ${f.feature_name}`}
                                  dangerouslySetInnerHTML={{__html: f.feature_name}}
                            ></span>
                            {f.feature_hover_name && (
                              <>
                                <button
                                  data-tooltip-id={`tooltip-${idx}`}
                                  data-tooltip-content={f.feature_hover_name}
                                  aria-label={`More info about ${f.feature_name}`}
                                  className="text-[10px] text-p text-blue px-1 py-0.5 rounded-sm border"
                                >
                                  i
                                </button>
                                <ReactTooltip id={`tooltip-${idx}`} place="top" />
                              </>
                            )}
                          </div>
                        </td>
                            
                        {/* For each plan column we assume the JSON keys follow the pattern: investor_plan, advisor_plan, advisor_pro_plan. We will render any keys that end with "_plan" */}
                         {Object.keys(f)
                          .filter((k) => k.endsWith("_plan") && k !== "feature_hover_name")
                          .map((planKey, planIdx) => {
                            return (
                            <td key={planIdx} className="border px-6 py-3 text-p">
                                {
                                 f[planKey] === 'TRUE' ? (
                                    <Image src="/img/list-tick.svg" className="mx-auto" width={24} height={24} alt={f[planKey]}/>
                                 ) : 
                                    f[planKey] === 'FALSE' ? (
                                      <Image src="/img/close.svg" className="mx-auto" width={24} height={24} alt={f[planKey]}/>     
                                    ): f[planKey]
                                }
                            </td>
                          )
                          })}
                      </tr>
                      </>
                    ))}
                   <tr>
                    <td className="border px-6 py-3 text-left font-medium text-p"></td>
                    {
                      headers.map((h, ind) => (
                        <td className="border px-6 py-3 text-left font-medium text-p" key={ ind}>
                          <Link href={"/"} className="btn-green block w-full text-center mt-auto font-medium text-p ">{h.cta_text}</Link>
                        </td>
                      ))
                    }

                   </tr>
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


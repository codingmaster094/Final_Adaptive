import React from "react";
import Image from "next/image";
import Link from "next/link";
import Alldata from "../../../utile/AllDatafetch";
const Page = async () => {
  let client_portfolios_unlock_hidden_income;
  try {
    client_portfolios_unlock_hidden_income = await Alldata(
      `protect-your-client-portfolios-unlock-hidden-income`
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  if (!client_portfolios_unlock_hidden_income) {
    return <div>No data available.</div>;
  }
  return (
    <section className="tools-section lg:py[150px] py-[80px] w-full bg-dots_bg bg-cover bg-center bg-no-repeat ">
      <div className="container">
        <div className="md:space-y-8 space-y-4">
          <div className="top w-full flex justify-center items-center xmd:mb-16 mb-10">
            <div className="logo">
              <Link href="/" role="link">
                <Image
                  src={
                    client_portfolios_unlock_hidden_income?.adaptive_header_logo.url
                  }
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
                className="text-h2 font-ivy font-semibold relative before:content-[''] before:w-[67px] before:h-[67px] before:rounded-full before:bg-pink before:absolute before:top-[-12px] xsm:before:left-[-24px] before:left-[-12px] before:opacity-20 before:z-0 text-left"
                dangerouslySetInnerHTML={{
                  __html: client_portfolios_unlock_hidden_income?.main_title,
                }}
              ></h2>
              <div
                className="content font-inter flex flex-col gap-4 xmd:pt-8 pt-4 text-p text-black-300"
                dangerouslySetInnerHTML={{
                  __html: client_portfolios_unlock_hidden_income?.main_desc,
                }}
              ></div>
            </div>

            <div className="inner flex lg:gap-16 gap-8 flex-col">
              <div className="left w-full flex-shrink-0">
                <Image
                  src={client_portfolios_unlock_hidden_income?.image.url}
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
                  {client_portfolios_unlock_hidden_income?.portfolio_options.map(
                    (val, i) => (
                      <div
                        key={i}
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
                          <h3
                            className="text-h5 font-semibold"
                            dangerouslySetInnerHTML={{
                              __html: val?.titile,
                            }}
                          />
                          <p dangerouslySetInnerHTML={{ __html: val.desc }} />
                        </div>
                      </div>
                    )
                  )}
                </div>

                {/* Right Block */}
                {/* <div className="right-block xmd:space-y-8 space-y-4">
                        {rightItems.map((val, i) => (
                          <div
                            key={i + mid} // Ensure unique key
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
                              <h3
                                className="text-h5 font-semibold"
                                dangerouslySetInnerHTML={{
                                  __html: val?.titile,
                                }}
                              />
                              <p
                                dangerouslySetInnerHTML={{ __html: val.desc }}
                              />
                            </div>
                          </div>
                        ))}
                      </div> */}
              </div>
            </div>
          </div>
          <div className="sub-box py-8 space-y-8 flex flex-col justify-center items-center">
            <h2
              className="text-h2 font-ivy font-semibold relative text-center"
              dangerouslySetInnerHTML={{
                __html: client_portfolios_unlock_hidden_income?.cta_title,
              }}
            ></h2>
            <div className="btn-green *:text-4">
              {client_portfolios_unlock_hidden_income && (
                <Link
                  href={client_portfolios_unlock_hidden_income?.cta_link?.url}
                  role="link"
                >
                  {client_portfolios_unlock_hidden_income?.cta_link?.title}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;

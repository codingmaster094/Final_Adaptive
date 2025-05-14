import React from "react";

const FactorUnderstandingAbout = ({
  title,
  factor_analysis_desc,
  factor_analysis_sub_desc,
  basket_title,
  basket,
}) => {
  return (
    <section className="t-section factor-section lg:py[150px] md:py-[80px] sm:py-[50px] py-6 w-full border-b-[1px] border-b-black-200 border-b-solid">
      <div className="container">
        <div className="inner md:space-y-[48px] space-y-6">
          <div className="top text-left md:space-y-8 space-y-6">
            <div className="title flex justify-start items-start">
              <h2
                className="text-h2 font-ivy font-semibold relative before:content-[''] before:w-[67px] before:h-[67px] before:rounded-full before:bg-pink before:absolute before:top-[-12px] xsm:before:left-[-16px] before:left-[0] before:opacity-20 before:z-0 text-black"
                dangerouslySetInnerHTML={{ __html: title }}
              ></h2>
            </div>
            <div
              className="text text-body font-inter font-normal text-black-300 space-y-4"
              dangerouslySetInnerHTML={{ __html: factor_analysis_desc }}
            ></div>
            <ul className="[&_li]:pl-6 [&_li]:relative [&_li]:before:content-[''] [&_li]:before:w-[10px] [&_li]:before:h-[10px] [&_li]:before:bg-black-200 [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-[6px] [&_li]:before:rounded-full space-y-2">
              {factor_analysis_sub_desc.map((definition, index) => (
                <li
                  key={index}
                  dangerouslySetInnerHTML={{ __html: definition.title }}
                ></li>
              ))}
            </ul>

            <div className="basket md:space-y-8 space-y-6">
              <p
                className="text-h5 font-bold"
                dangerouslySetInnerHTML={{ __html: basket_title }}
              ></p>
              <div className="basket-block grid md:grid-cols-2 grid-cols-1 gap-4">
                {basket.map((candidate, index) => (
                  <div
                    key={index}
                    className="b-block flex flex-col space-y-4 p-8 bg-white-100"
                  >
                    <span className="text-h5 font-[600]">
                      {candidate.title}
                    </span>
                    <span dangerouslySetInnerHTML={{ __html: candidate.desc }}>
                    </span>
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

export default FactorUnderstandingAbout;

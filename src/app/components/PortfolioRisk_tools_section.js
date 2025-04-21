import React from "react";

const PortfolioRisk_tools_section = ({ data }) => {
  return (
    <section className="tools-section lg:py[150px] md:py-[80px] sm:py-[50px] py-6 h-full bg-white-100">
      <div className="container">
        <div className="inner font-inter space-y-8">
          {/* Top Section */}
          <div className="top flex flex-col justify-center items-center text-center lg:gap-8 gap-4 mb-8">
            <img src={data.image} alt="measure image" role="img" />
            <div className="text space-y-2">
              <h2 className="text-h5">
                <b>
                  {data.title}{" "}
                  <span className="text-green block">{data.riskLevel}</span>
                </b>
              </h2>
              <p>
                {data.description}{" "}
                <span className="text-purple font-semibold">
                  {data.learnMoreText}
                </span>
              </p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="btm-block space-y-4 text-center">
            <h3 className="text-h3 font-semibold">{data.chartTitle}</h3>
            <img src={data.chartImage} alt="chart image" role="img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioRisk_tools_section;

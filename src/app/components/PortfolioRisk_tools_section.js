import Image from "next/image";
import React from "react";

const PortfolioRisk_tools_section = ({
  title,
  imageUrl1,
  description,
  chart_title,
  imageUrl2,
}) => {
  return (
    <section className="tools-section lg:py[150px] md:py-[80px] sm:py-[50px] py-6 h-full bg-white-100">
      <div className="container">
        <div className="inner font-inter space-y-8">
          {/* Top Section */}
          <div className="top flex flex-col justify-center items-center text-center lg:gap-8 gap-4 mb-8">
            <Image src={imageUrl1.url} alt="measure image" role="img" width={362} height={300} />
            <div className="text space-y-2">
              {/* <h2
                className="text-h5"
                dangerouslySetInnerHTML={{ __html: title }}
              ></h2> */}
              <h2 className="text-h5">
                <b>
                  {title.replace(/<\/?span[^>]*>/g, "")}{" "}
                  <span className="text-green block">LOW</span>
                </b>
              </h2>
              <div dangerouslySetInnerHTML={{ __html: description }}></div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="btm-block space-y-4 text-center">
            <h3
              className="text-h3 font-semibold"
              dangerouslySetInnerHTML={{ __html: chart_title }}
            ></h3>
            <Image src={imageUrl2.url} width={1488} height={528} alt="chart image" role="img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioRisk_tools_section;

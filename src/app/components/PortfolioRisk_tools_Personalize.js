import React from "react";

const PortfolioRisk_tools_Personalize = ({ data }) => {
  return (
    <section className="t-section lg:py[150px] md:py-[80px] sm:py-[50px] py-6 w-full border-b-[1px] border-b-black-200 border-b-solid">
      <div className="container">
        <div className="inner md:space-y-[48px] space-y-6">
          <div className="top text-left md:space-y-8 space-y-6">
            <div className="basket md:space-y-8 space-y-6">
              <div className="basket-block grid md:grid-cols-2 grid-cols-1 lg:gap-16 md:gap-8 gap-4">
                {data.map((item, index) => (
                  <div
                    key={index}
                    className="b-block flex flex-col md:space-y-8 space-y-4 md:p-8 sm:p-6 p-4 bg-white-100"
                  >
                    <span className="text-h5 font-[600]">{item.title}</span>
                    <div className="para space-y-4">
                      {item.description.map((text, idx) => (
                        <p key={idx}>{text}</p>
                      ))}
                    </div>
                    {item.features && (
                      <div className="space-y-2">
                        {item.features.map((feature, idx) => (
                          <span key={idx} className="flex items-center gap-3">
                            {feature.icon && (
                              <img
                                src={feature.icon}
                                alt="icon"
                                className="w-5 h-5"
                              />
                            )}
                            {feature.text}
                          </span>
                        ))}
                      </div>
                    )}
                    <p>
                      <b>{item.highlight}</b>
                    </p>
                    <div className="btn-link">
                      <a href={item.link.url} role="link">
                        {item.link.text}
                      </a>
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

export default PortfolioRisk_tools_Personalize;

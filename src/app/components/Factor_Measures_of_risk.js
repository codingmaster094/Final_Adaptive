import React from 'react'

const Factor_Measures_of_risk = ({ sectionTitle,description, measuresOfRiskData }) => {
  return (
    <section className="t-section measure-section lg:py[150px] md:py-[80px] sm:py-[50px] py-6 w-full border-b-[1px] border-b-black-200 border-b-solid bg-white-100">
      <div className="container">
        <div className="inner md:space-y-8 space-y-6">
          <div className="top text-left md:space-y-8 space-y-6">
            <div className="title flex justify-center items-center text-center">
              <h2 className="text-h2 font-ivy font-semibold relative before:content-[''] before:w-[67px] before:h-[67px] before:rounded-full before:bg-pink before:absolute before:top-[-12px] xsm:before:left-[-16px] before:left-[0] before:opacity-20 before:z-0 text-black">
                {sectionTitle}
              </h2>
            </div>
            <div className="text-center text-body font-inter font-normal text-black-300 space-y-4">
              <p>{description}</p>
            </div>
          </div>

          <div className="measure-card-block flex gap-8 flex-wrap">
            {measuresOfRiskData.map((measure) => (
              <div
                key={measure.id}
                className="m-card md:w-[calc(50%-20px)] w-full"
              >
                <img
                  src={measure.image}
                  alt="measure card image"
                  role="img"
                  className="mb-8"
                />
                <h3 className="text-h3 font-bold mb-4">{measure.title}</h3>
                <p>
                  {measure.description}
                  {measure.links.map((link, index) => (
                    <span key={index}>
                      <a
                        href={link.url}
                        role="link"
                        className="font-bold underline"
                      >
                        {link.text}
                      </a>
                      {index < measure.links.length - 1 && ", "}
                      {link.des}{" "}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Factor_Measures_of_risk
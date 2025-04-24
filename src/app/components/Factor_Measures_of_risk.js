import React from 'react'

const Factor_Measures_of_risk = ({ sectionTitle,description, measures }) => {
  return (
    <section className="t-section measure-section lg:py[150px] md:py-[80px] sm:py-[50px] py-6 w-full border-b-[1px] border-b-black-200 border-b-solid bg-white-100">
      <div className="container">
        <div className="inner md:space-y-8 space-y-6">
          <div className="top text-left md:space-y-8 space-y-6">
            <div className="title flex justify-center items-center text-center">
              <h2
                className="text-h2 font-ivy font-semibold relative before:content-[''] before:w-[67px] before:h-[67px] before:rounded-full before:bg-pink before:absolute before:top-[-12px] xsm:before:left-[-16px] before:left-[0] before:opacity-20 before:z-0 text-black"
                dangerouslySetInnerHTML={{ __html: sectionTitle }}
              ></h2>
            </div>
            <div
              className="text-center text-body font-inter font-normal text-black-300 space-y-4"
              dangerouslySetInnerHTML={{ __html: description }}
            ></div>
          </div>

          <div className="measure-card-block flex gap-8 flex-wrap">
            {measures?.map((measure, i) => (
              <div key={i} className="m-card md:w-[calc(50%-20px)] w-full">
                <img
                  src={measure.image.url}
                  alt="measure card image"
                  role="img"
                  className="mb-8"
                />
                <h3
                  className="text-h3 font-bold mb-4"
                  dangerouslySetInnerHTML={{ __html: measure.title }}
                ></h3>
                <div
                  dangerouslySetInnerHTML={{ __html: measure.description }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Factor_Measures_of_risk
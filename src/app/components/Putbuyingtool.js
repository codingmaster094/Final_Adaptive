import React from 'react';

const Putbuyingtool = ({ title, sections, footerText }) => {
  return (
    <section className="t-section lg:py[150px] md:py-[80px] sm:py-[50px] py-6 w-full border-b-[1px] border-b-black-200 border-b-solid">
      <div className="container">
        <div className="inner md:space-y-[48px] space-y-6">
          <div className="top text-left md:space-y-8 space-y-6 font-inter">
            <div className="title flex justify-start items-start">
              <h2 className="text-h2 font-ivy font-semibold relative before:content-[''] before:w-[67px] before:h-[67px] before:rounded-full before:bg-pink before:absolute before:top-[-12px] xsm:before:left-[-16px] before:left-[0] before:opacity-20 before:z-0 text-black">
                {title}
              </h2>
            </div>

            <div className="basket md:space-y-8 space-y-6">
              <div className="basket-block grid md:grid-cols-2 grid-cols-1 lg:gap-16 md:gap-8 gap-4">
                {sections.map((section, index) => (
                  <div
                    key={index}
                    className="b-block flex flex-col space-y-4 md:p-8 sm:p-6 p-4 bg-white-100"
                  >
                    <span className="text-h5 font-[600]">
                      {section.item_title}
                    </span>
                    <div className="para space-y-4">
                      <div
                        dangerouslySetInnerHTML={{ __html: section.item_desc }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="font-bold font-inter">
              <p>{footerText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Putbuyingtool;

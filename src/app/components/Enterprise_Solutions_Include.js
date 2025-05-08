import Image from "next/image";
import React from "react";

const Enterprise_Solutions_Include = ({ items }) => {
  return (
    <>
      <section className="tools-section lg:py[150px] md:py-[80px] sm:py-[50px] py-6 w-full bg-dots_bg bg-cover bg-center bg-no-repeat  border-t-[1px] border-t-black-200 border-t-solid">
        <div className="block-enterprice top container text-left">
          <div className="title flex flex-col justify-start items-start md:space-y-8 space-y-6 md:text-left text-center">
            <h2 className="text-h2 font-ivy font-semibold relative before:content-[''] before:w-[67px] before:h-[67px] before:rounded-full before:bg-pink before:absolute before:top-[-12px] xsm:before:left-[-16px] before:left-[0] before:opacity-20 before:z-0 text-black">
              Enterprise Solutions Include
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu{" "}
            </p>
          </div>
        </div>
      </section>
      <section className="tools-section">
        {items.map((item) => (
          <div
            key={item.id} // Use a unique identifier if available
            className={`block-enterprice t-section w-full ${
              item.bgClass
            } border-b-[1px] border-b-black-200 border-b-solid ${
              item.reverse ? "md:flex-row-reverse" : "md:flex-row"
            } lg:py-[100px] md:py-[80px] sm:py-[50px] py-6`}
          >
            <div className="container">
              <div className="inner-content flex flex-col lg:space-y-16 md:space-y-10 space-y-6">
                <div
                  className={`inner flex justify-center items-center lg:gap-16 gap-8 flex-col md:flex-row ${
                    item.reverse ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="left md:w-1/2 w-full space-y-4">
                    <h3 className="text-h3 font-semibold">{item.title}</h3>
                    <div className="space-y-2">
                      <p>
                        <b>{item.boldText}</b>
                      </p>
                      <p>{item.description}</p>
                    </div>
                  </div>
                  <div className="right md:w-1/2 w-full xsm:px-12 px-0 flex justify-start">
                    <Image
                    width={434}
                    height={416}
                      src={item.image}
                      alt={item.imageAlt || "Description of the image"} // Fallback alt text
                      role="img"
                      className=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Enterprise_Solutions_Include;

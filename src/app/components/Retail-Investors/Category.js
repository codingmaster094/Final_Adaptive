import Link from "next/link";
import React from "react";

const Category = ({ title, description, dots_bg, BTN }) => {
  return (
    <section
      className={`t-section market-section ${
        dots_bg ? "bg-dots_bg" : "bg-white-100"
      } lg:py[150px] md:py-[80px] sm:py-[50px] py-6 w-full border-b-[1px] border-b-black-200 border-b-solid`}
    >
      <div className="container">
        <div className="inner md:space-y-[48px] space-y-6">
          <div className="top text-left space-y-8">
            <div className="title flex justify-center items-center text-center">
              {title && (
                <h2
                  className="text-h2 font-ivy font-semibold relative before:content-[''] before:w-[67px] before:h-[67px] before:rounded-full before:bg-pink before:absolute before:top-[-12px] xsm:before:left-[-16px] before:left-[0] before:opacity-20 before:z-0 text-black"
                  dangerouslySetInnerHTML={{ __html: title }}
                ></h2>
              )}
            </div>
            {description && (
              <div
                className="text-center text-body font-inter font-normal text-black-300 space-y-4"
                dangerouslySetInnerHTML={{ __html: description }}
              ></div>
            )}
            {BTN && (
              <div className="btn-link border-green hover:border-black mx-auto">
                <Link
                  href={BTN.url}
                  role="link"
                  className="flex gap-3 items-center justify-center"
                  target={BTN.target}
                >
                  {BTN.title}
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.5 12.1089H5.5"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.5 17.1089L19.5 12.1089"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.5 7.10889L19.5 12.1089"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;

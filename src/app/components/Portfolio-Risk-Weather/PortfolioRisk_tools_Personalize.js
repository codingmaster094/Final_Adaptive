import Image from "next/image";
import Link from "next/link";
import React from "react";

const PortfolioRisk_tools_Personalize = ({
  box1_title,
  box1_description,
  box1_personalize_content,
  box1_BTN,
  box2_title,
box2_description,
box2_automate_list,
automate_sub_title,
box2_BTN
}) => {
  return (
    <section className="t-section lg:py[150px] md:py-[80px] py-[50px] w-full border-b-[1px] border-b-black-200 border-b-solid">
      <div className="container">
        <div className="inner md:space-y-[48px] space-y-6">
          <div className="top text-left md:space-y-8 space-y-6">
            <div className="basket md:space-y-8 space-y-6">
              <div className="basket-block grid md:grid-cols-2 grid-cols-1 lg:gap-16 md:gap-8 gap-4">
                <div className="b-block flex flex-col md:space-y-8 space-y-4 md:p-8 sm:p-6 p-4 bg-white-100">
                  <span
                    className="text-h5 font-[600]"
                    dangerouslySetInnerHTML={{ __html: box1_title }}
                  ></span>
                  <div
                    className="para space-y-4"
                    dangerouslySetInnerHTML={{ __html: box1_description }}
                  ></div>
                  <p>
                    <b
                      dangerouslySetInnerHTML={{
                        __html: box1_personalize_content,
                      }}
                    ></b>
                  </p>
                  <div className="btn-link">
                    {box1_BTN && (
                      <Link href={box1_BTN.url} role="link">
                        {box1_BTN.title}
                      </Link>
                    )}
                  </div>
                </div>

                <div className="b-block flex flex-col md:space-y-8 space-y-4 md:p-8 sm:p-6 p-4 bg-white-100">
                  <span
                    className="text-h5 font-[600]"
                    dangerouslySetInnerHTML={{ __html: box2_title }}
                  ></span>
                  <div
                    className="para space-y-2"
                    dangerouslySetInnerHTML={{ __html: box2_description }}
                  ></div>
                  <div className="space-y-2">
                    {box2_automate_list &&
                      box2_automate_list.map((item, i) => {
                        return (
                          <span className="flex items-center gap-3">
                            <Image src={item.condition_image.url} width={24} height={25} />{" "}
                            {item.condition_items}
                          </span>
                        );
                      })}
                  </div>
                  <p>
                    <b
                      dangerouslySetInnerHTML={{ __html: automate_sub_title }}
                    ></b>
                  </p>
                  <div className="btn-link">
                    {box2_BTN && (
                      <Link href={box2_BTN.url} role="link">
                        {box2_BTN.title}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioRisk_tools_Personalize;

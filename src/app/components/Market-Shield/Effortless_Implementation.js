"use client"
import { useEffect } from "react";

const Effortless_Implementation = ({
  title,
  description,
  shield_work_description,
  shield_work_title,
  shield_work,
}) => {
  useEffect(() => {
    const titles = document.querySelectorAll(".title-head");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("font-bold", "after:w-[180px]");
              entry.target.classList.remove("font-normal");
            }, 500);
          } else {
            entry.target.classList.remove("font-bold", "after:w-[180px]");
            entry.target.classList.add("font-normal");
          }
        });
      },
      { threshold: 0.75 }
    );

    titles.forEach((title) => observer.observe(title));
    return () => titles.forEach((title) => observer.unobserve(title));
  }, []);
  return (
    <section className="t-section work-section lg:py[150px] md:py-[80px] py-[50px] w-full border-b-[1px] border-b-black-200 border-b-solid">
      <div className="container">
        <div className="inner md:space-y-[48px] space-y-6">
          <div className="top text-black text-left md:space-y-[48px] space-y-6">
            <div className="title flex justify-start items-start">
              <h2
                className="text-h2 font-ivy font-semibold relative before:content-[''] before:w-[67px] before:h-[67px] before:rounded-full before:bg-pink before:absolute before:top-[-12px] xsm:before:left-[-16px] before:left-[0] before:opacity-20 before:z-0"
                dangerouslySetInnerHTML={{ __html: title }}
              ></h2>
            </div>
            <div
              className="text text-body font-inter font-normal text-black-100"
              dangerouslySetInnerHTML={{ __html: description }}
            ></div>
          </div>

          <div className="space-y-8">
            <h3
              className="title-head text-h3 font-normal relative after:content-[''] after:absolute after:bottom-[-12px] after:left-0 after:w-0 after:h-[20px] after:bg-bg_line2 after:bg-center after:bg-cover after:bg-no-repeat after:transition-all after:duration-500 transition-all duration-300 ease-in-out"
              dangerouslySetInnerHTML={{ __html: shield_work_title }}
            >
            </h3>
            <div className="work-area flex justify-start items-stretch sm:gap-8 gap-4 flex-wrap *:w-full *:sm:w-[calc(50%-16px)] *:xlg:w-[calc(33%-24px)] ">
              {shield_work &&
                shield_work.map((item, i) => {
                  return (
                    <div className="work-block flex justify-start items-start gap-[10px]">
                      <div className="indicator-icon mt-[5px] w-[5%]">
                        <img
                          src="/img/greenicon.svg"
                          alt="indicator-icon"
                          role="img"
                          className="w-4 h-4"
                        />
                      </div>
                      <div className="content w-[95%]">
                        <div className="title text">
                          <h3
                            className="title text-h5 font-bold font-inter mb-[10px]"
                            dangerouslySetInnerHTML={{ __html: item.title }}
                          ></h3>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: item.desc.replace(/<\/?p[^>]*>/g, ""),
                            }}
                          ></p>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          <div
            className="text text-body font-inter font-normal text-black-100"
            dangerouslySetInnerHTML={{ __html: shield_work_description }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Effortless_Implementation
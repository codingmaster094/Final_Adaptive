"use client"
import { useEffect } from "react";

const Effortless_Implementation = () => {

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
      <section class="t-section work-section lg:py[150px] md:py-[80px] py-[50px] w-full border-b-[1px] border-b-black-200 border-b-solid">
        <div class="container">
          <div class="inner md:space-y-[48px] space-y-6">
            <div class="top text-black text-left md:space-y-[48px] space-y-6">
              <div class="title flex justify-start items-start">
                <h2 class="text-h2 font-ivy font-semibold relative before:content-[''] before:w-[67px] before:h-[67px] before:rounded-full before:bg-pink before:absolute before:top-[-12px] xsm:before:left-[-16px] before:left-[0] before:opacity-20 before:z-0">
                  Effortless Implementation for Maximum Efficiency
                </h2>
              </div>
              <div class="text text-body font-inter font-normal text-black-100">
                <p>
                  Why complicate risk management? Our one-click system
                  streamlines the implementation process, ensuring that advisors
                  spend less time speculating and more time nurturing client
                  relationships and gaining profits. By simplifying the
                  protection strategy execution, your clients can enjoy peace of
                  mind knowing their investments are secured. Experience
                  efficiency that enhances your service offerings while driving
                  client trust and loyalty.
                </p>
              </div>
            </div>

            <div class="space-y-8">
              <h3 class="title-head text-h3 font-normal relative after:content-[''] after:absolute after:bottom-[-12px] after:left-0 after:w-0 after:h-[20px] after:bg-bg_line2 after:bg-center after:bg-cover after:bg-no-repeat after:transition-all after:duration-500 transition-all duration-300 ease-in-out">
                How Market Shield Works
              </h3>
              <div class="work-area flex justify-start items-stretch sm:gap-8 gap-4 flex-wrap *:w-full *:sm:w-[calc(50%-16px)] *:xlg:w-[calc(33%-24px)] ">
                <div class="work-block flex justify-start items-start gap-[10px]">
                  <div class="indicator-icon mt-[5px] w-[5%]">
                    <img
                      src="/img/greenicon.svg"
                      alt="indicator-icon"
                      role="img"
                      class="w-4 h-4"
                    />
                  </div>
                  <div class="content w-[95%]">
                    <div class="title text">
                      <h3 class="title text-h5 font-bold font-inter mb-[10px]">
                        Protective Puts:
                      </h3>
                      <p>
                        Minimize potential losses by securing a floor on your
                        investments.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="work-block flex justify-start items-start gap-[10px]">
                  <div class="indicator-icon mt-[5px] w-[5%]">
                    <img
                      src="/img/greenicon.svg"
                      alt="indicator-icon"
                      role="img"
                      class="w-4 h-4"
                    />
                  </div>
                  <div class="content w-[95%]">
                    <div class="title text">
                      <h3 class="title text-h5 font-bold font-inter mb-[10px]">
                        Collars:
                      </h3>
                      <p>
                        Balance risk and reward with strategies that limit
                        losses while capturing moderate gains.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="work-block flex justify-start items-start gap-[10px]">
                  <div class="indicator-icon mt-[5px] w-[5%]">
                    <img
                      src="/img/greenicon.svg"
                      alt="indicator-icon"
                      role="img"
                      class="w-4 h-4"
                    />
                  </div>
                  <div class="content w-[95%]">
                    <div class="title text">
                      <h3 class="title text-h5 font-bold font-inter mb-[10px]">
                        Covered Calls & Cash-Secured Puts:
                      </h3>
                      <p>
                        Optimize income and manage neutral to bearish market
                        conditions with ease.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="text text-body font-inter font-normal text-black-100">
              <p>
                Whether you’re a seasoned advisor or an individual investor,
                Market Shield provides the confidence and capability secure your
                financial future. Try free 30-day trial of Adaptive. Experience
                how our innovative risk manageme solutions can enhance your
                portfolio strategies and client outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Effortless_Implementation
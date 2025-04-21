import Image from 'next/image'
import React from 'react'

const Imp_Section = () => {
  return (
    <section className="t-section imp-section bg-white-100 lg:py[150px] md:py-[80px] sm:py-[50px] py-6 w-full border-b-[1px] border-b-black-200 border-b-solid">
      <div className="container">
        <div className="inner md:space-y-[48px] space-y-6">
          <div className="top text-black text-left md:space-y-[48px] space-y-6">
            <div className="title flex justify-start items-start">
              <h2 className="text-h2 font-ivy font-semibold relative before:content-[''] before:w-[67px] before:h-[67px] before:rounded-full before:bg-pink before:absolute before:top-[-12px] xsm:before:left-[-16px] before:left-[0] before:opacity-20 before:z-0">
                The Importance of Portfolio Protection
              </h2>
            </div>
            <div className="text text-body font-inter font-normal text-black-100">
              <p>
                Effective portfolio protection is crucial for several reasons:
              </p>
            </div>
          </div>

          <div className="card-area flex justify-start items-stretch xlg:gap-[56px] sm:gap-8 gap-4 flex-wrap *:w-full *:sm:w-[calc(50%-16px)] *:xlg:w-[calc(33%-35px)] text-black-100">
            <div className="card-sec flex flex-col justify-start items-start gap-[10px] bg-white px-4 pt-4 pb-[36px] rounded-[20px] space-y-6">
              <div className="cardimg mt-[5px] rounded-[4px]  w-full *:w-full *:h-full *:object-cover">
                <Image
                  src="/img/stock-trading-workplace-background.jpg"
                  width={350}
                  height={192}
                  alt="card img"
                  role="img"
                />
              </div>
              <div className="content">
                <div className="title text">
                  <h3 className="text-black title text-h5 font-bold font-inter mb-[10px]">
                    Minimize Losses:
                  </h3>
                  <p>
                    Various strategies, such as put buying, can help limit your
                    losses during a market downturn.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-sec flex flex-col justify-start items-start gap-[10px] bg-white px-4 pt-4 pb-[36px] rounded-[20px] space-y-6">
              <div className="cardimg mt-[5px] rounded-[4px] w-full *:w-full *:h-full *:object-cover">
                <Image
                  src="/img/cardimg2.jpg"
                  width={350}
                  height={192}
                  alt="card img"
                  role="img"
                />
              </div>
              <div className="content">
                <div className="title text">
                  <h3 className="text-black title text-h5 font-bold font-inter mb-[10px]">
                    Maintain Peace of Mind:
                  </h3>
                  <p>
                    Knowing you have a protection plan in place allows you to
                    invest with confidence.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-sec flex flex-col justify-start items-start gap-[10px] bg-white p-4 rounded-[20px] space-y-6">
              <div className="cardimg mt-[5px] rounded-[4px] w-full *:w-full *:h-full *:object-cover">
                <Image
                  src="/img/cardimg3.jpg"
                  width={350}
                  height={192}
                  alt="card img"
                  role="img"
                />
              </div>
              <div className="content">
                <div className="title text">
                  <h3 className="text-black title text-h5 font-bold font-inter mb-[10px]">
                    Enhance Returns:
                  </h3>
                  <p>
                    A well-diversified portfolio may enable you to capture
                    periodic gains from different sectors du various market
                    conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Imp_Section
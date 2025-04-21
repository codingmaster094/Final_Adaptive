import React from "react";

const PPC_Tools_Section = () => {
  return (
    <section className="tools-section lg:py[150px] md:py-[80px] sm:py-[50px] py-6 w-full bg-dots_bg bg-cover bg-center bg-no-repeat border-b-[1px] border-b-black-200 border-b-solid border-t-[1px] border-t-black-200 border-t-solid">
      <div className="container">
        <div className="inner lg:space-y-[100px] md:space-y-[64px] space-y-6">
          <div className="top text-black text-left space-y-6">
            <div className="title flex justify-start items-start">
              <h2 className="text-h2 font-ivy font-semibold relative before:content-[''] before:w-[67px] before:h-[67px] before:rounded-full before:bg-pink before:absolute before:top-[-12px] xsm:before:left-[-16px] before:left-[0] before:opacity-20 before:z-0">
                Understanding Portfolio Protection to Minimize the Cost of
                Hedging
              </h2>
            </div>
            <div className="text text-body font-inter font-normal text-black-100">
              <p>
                As an investment professional you already know that you can keep
                clients invested for long-term growth—even while smoothing out
                the inevitable downturns—through this use of diversification,
                rebalancing, and hedging. Adaptive streamlined options tools
                enable you to easily quote a live market price for downside
                protection of stock portfolios using cost-effective index puts
                which also position clients to take advantage of corrections.
                Adaptive’s Options Intelligence c easily, quickly power your own
                practice with precise calculations of downside protection costs
                for the varied portfolios of existing and would-be clients.
              </p>
            </div>
          </div>
          <div className="top text-black text-left space-y-6">
            <div className="title flex justify-start items-start">
              <h2 className="text-h2 font-ivy font-semibold relative before:content-[''] before:w-[67px] before:h-[67px] before:rounded-full before:bg-pink before:absolute before:top-[-12px] xsm:before:left-[-16px] before:left-[0] before:opacity-20 before:z-0">
                What is the Portfolio Protection Calculator?
              </h2>
            </div>
            <div className="text text-body font-inter font-normal text-black-100">
              <p>
                Adaptive’s rigorous options analytics looks for a diversified
                market index such as the S&P 500 or Nasdaq 100 which c be used
                as a proxy hedge for the portfolio, along with specific options
                contracts (expiration and strike price) to target t downside
                risk equivalent of a less volatile stock-bond portfolio.
                Adaptive also identifies puts on individual names whi can
                supplement the overall fit of the proxy hedge at a lower cost
                than puts on each of the portfolio holdings, taki advantage of
                the benefits of portfolio diversification to minimize hedging
                costs. The Risk Contribution Chart provid client-friendly
                visualization of the individual sources of risk and
                diversification in a portfolio, while the Backtest tool sho how
                such hedges would have performed in the past for a selected
                client portfolio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PPC_Tools_Section;

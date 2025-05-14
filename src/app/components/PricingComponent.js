'use client';
import React, { useEffect, useState } from 'react';

const PricingComponent = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  useEffect(() => {
    const updatePrices = () => {
      document.querySelectorAll('[data-annual]').forEach((priceEl) => {
        const annual = priceEl.getAttribute('data-annual');
        const monthly = priceEl.getAttribute('data-monthly');
        priceEl.textContent = isAnnual ? annual : monthly;
      });

      const toggle = document.querySelector('#toggleSwitch');
      const yearlyBtn = document.querySelector('#yearlyBtn');
      const monthlyBtn = document.querySelector('#monthlyBtn');

      if (toggle && yearlyBtn && monthlyBtn) {
        toggle.classList.toggle('translate-x-0', isAnnual);
        toggle.classList.toggle('translate-x-full', !isAnnual);

        yearlyBtn.classList.toggle('text-white', isAnnual);
        yearlyBtn.classList.toggle('text-sblack', !isAnnual);

        monthlyBtn.classList.toggle('text-white', !isAnnual);
        monthlyBtn.classList.toggle('text-black', isAnnual);
      }
    };

    updatePrices();
  }, [isAnnual]);

  useEffect(() => {
    const equalizeHeights = () => {
      document.querySelectorAll('.top-head').forEach((el) => (el.style.height = 'auto'));
      document.querySelectorAll('.price-list li').forEach((el) => (el.style.height = 'auto'));

      const topHeads = document.querySelectorAll('.top-head');
      let maxTopHeadHeight = 0;
      topHeads.forEach((el) => {
        maxTopHeadHeight = Math.max(maxTopHeadHeight, el.offsetHeight);
      });
      topHeads.forEach((el) => {
        el.style.height = `${maxTopHeadHeight}px`;
      });

      const allPriceLists = document.querySelectorAll('.price-list');
      const maxItems = Math.max(...Array.from(allPriceLists).map((ul) => ul.children.length));

      for (let i = 0; i < maxItems; i++) {
        let maxLiHeight = 0;
        const liGroup = [];

        allPriceLists.forEach((ul) => {
          const li = ul.children[i];
          if (li) {
            li.style.height = 'auto';
            liGroup.push(li);
            maxLiHeight = Math.max(maxLiHeight, li.offsetHeight);
          }
        });

        liGroup.forEach((li) => {
          li.style.height = `${maxLiHeight}px`;
        });
      }
    };

    setTimeout(equalizeHeights, 100);
    window.addEventListener('resize', () => setTimeout(equalizeHeights, 100));

    return () => {
      window.removeEventListener('resize', () => setTimeout(equalizeHeights, 100));
    };
  }, []);

  return (
    <section className="tools-section lg:py[150px] md:py-[80px] sm:py-[50px] py-6 w-full bg-dots_bg bg-cover bg-center bg-no-repeat border-b-[1px] border-b-black-200 border-b-solid border-t-[1px] border-t-black-200 border-t-solid">
            <div className="container">
                <div className="inner-content flex flex-col lg:space-y-16 md:space-y-10 space-y-6">
                    <div className="top text-black text-center w-[90%] mx-auto md:space-y-8 space-y-10">
                        <div className="title flex justify-center items-center">
                            <h2 className="text-h1 font-ivy font-semibold relative before:content-[''] before:w-[67px] before:h-[67px] before:rounded-full before:bg-pink before:absolute before:top-[-12px] before:left-[-16px] before:opacity-20 before:z-0">Our Pricing Plans</h2>
                        </div>
                    </div>
                    <div className="inner flex justify-center items-center">
                        <div className="w-full">
                  
                        <div className="flex justify-center max-w-[14rem] mx-auto mb-8">
        <div className="relative flex w-full p-1">
          <span className="absolute inset-0 m-1 pointer-events-none" aria-hidden="true">
            <span
              id="toggleSwitch"
              className="absolute inset-0 w-1/2 bg-black shadow-sm transform transition-transform duration-150 ease-in-out"
            ></span>
          </span>
          <button
            id="yearlyBtn"
            onClick={() => setIsAnnual(true)}
            className="relative flex-1 text-p font-medium p-4 text-center font-overpass transition-colors duration-150 ease-in-out border-[2px] border-solid border-black"
          >
            Monthly
          </button>
          <button
            id="monthlyBtn"
            onClick={() => setIsAnnual(false)}
            className="relative flex-1 font-medium p-4 text-center font-overpass transition-colors duration-150 ease-in-out text-p border-[2px] border-solid border-black"
          >
            Yearly
          </button>
        </div>
      </div>
                      
                            <div className="grid xl:grid-cols-4 xsm:grid-cols-2 grid-cols-1 items-stretch gap-y-4 xmd:gap-x-0 gap-x-4">
                           
                                <div className="hover:bg-white hover:shadow-[2px_10px_40px_0px_#00000040] transition-all duration-500 linear xmd:bg-transparent bg-white xmd:shadow-none shadow-[2px_10px_40px_0px_#00000040]">
                                    <div className="top-list flex flex-col h-full">
                                        <div className="p-6 flex flex-col top-head">
                                            <h3 className="text-h2 font-semibold font-ivy text-black mb-8">Free</h3>
                                            <span className="font-bold text-h5 text-black mb-6 flex items-center flex-1">No Sign In Required</span>
                                            <a href="#" className="btn-link w-full text-center mt-auto">Try Now</a>
                                        </div>
                                        <ul className="price-list my-6 [&_li]:pl-10 [&_li]:pr-6 [&_li]:pb-4 [&_li]:border-b [&_li]:border-b-solid [&_li]:border-b-black-200 flex flex-col flex-1 [&_li]:flex [&_li]:items-stretch space-y-4 [&>li:last-child]:border-b-0">
                                            <li className="not-active">Risk Contribution</li>
                                            <li className="not-active">Factor Analysis</li>
                                            <li className="not-active">Risk Weather</li>
                                            <li className="not-active">Protection Calculator</li>
                                            <li className="close">Backtest</li>
                                            <li className="close">Forward Test</li>
                                            <li className="close">Market Shield</li>
                                            <li className="close">Call Writing for Income</li>
                                            <li className="close">Custom Portfolio</li>
                                            <li className="close">Market Quotes</li>
                                            <li className="close">Upload Portfolio</li>
                                            <li className="close">Download Options Trades</li>
                                            <li className="close">Call Writing Optimization</li>
                                            <li className="close">Brokerage Platforms</li>
                                        </ul>
                                        <span className="block px-6 pb-4 mt-auto">
                                            <a href="#" className="btn-link w-full text-center">Try Now</a>
                                        </span>
                                    </div>
                                </div>
                        
                                <div className="hover:bg-white hover:shadow-[2px_10px_40px_0px_#00000040] transition-all duration-500 linear xmd:bg-transparent bg-white xmd:shadow-none shadow-[2px_10px_40px_0px_#00000040]">
                                    <div className="top-list flex flex-col h-full">
                                        <div className="p-6 flex flex-col top-head">
                                            <h3 className="text-h2 font-semibold font-ivy text-black mb-8">Investor</h3>
                                             <span className="font-semibold 2xl:text-h1 text-h2 text-black mb-6 flex-1">$<span   data-annual="29" data-monthly="35">29</span> <span className="text-black-300 font-medium text-p">/ Per Month</span></span>
                                           
                                            <a href="#" className="btn-green block w-full text-center mt-auto">Start Free Trial Now</a>
                                        </div>
                                        <ul className="price-list my-6 [&_li]:pl-10 [&_li]:pr-6 [&_li]:pb-4 [&_li]:border-b [&_li]:border-b-solid [&_li]:border-b-black-200 flex flex-col flex-1 [&_li]:flex [&_li]:items-stretch space-y-4 [&>li:last-child]:border-b-0">
                                            <li>Advance Risk Contribution </li>
                                            <li>Advance Factor Analysis</li>
                                            <li>Advance Risk Weather</li>
                                            <li>Advance Protection Calculator</li>
                                            <li>Backtest</li>
                                            <li>Forward Test</li>
                                            <li>Market Shield for Downside Protection</li>
                                            <li>Streamlined Call Writing for Income</li>
                                            <li>Up to 3 Portfolios of maximum 50 Tickers</li>
                                            <li>Market Quotes (Prev Close)</li>
                                            <li>User Upload & Update of Portfolio Positions</li>
                                            <li>User Download of Possible Options Trades</li>
                                            <li className="close">Call Writing Optimization</li>
                                            <li className="close">Link to Brokerage Platforms</li>
                                        </ul>
                                        <span className="block px-6 pb-4 mt-auto">
                                             <a href="#" className="btn-green block w-full text-center">Start Free Trial Now</a>
                                        </span>
                                    </div>
                                </div>
                                
                     
                                  <div className="hover:bg-white hover:shadow-[2px_10px_40px_0px_#00000040] transition-all duration-500 linear xmd:bg-transparent bg-white xmd:shadow-none shadow-[2px_10px_40px_0px_#00000040]">
                                    <div className="top-list flex flex-col h-full">
                                        <div className="p-6 flex flex-col top-head">
                                            <h3 className="text-h2 font-semibold font-ivy text-black mb-8">Advisor</h3>
                                             <span className="font-semibold 2xl:text-h1 text-h2 text-black mb-6 flex-1">$<span   data-annual="65" data-monthly="75">65</span> <span className="text-black-300 font-medium text-p">/ Per Month</span></span>
                                           
                                            <a href="#" className="btn-green block w-full text-center mt-auto">Start Free Trial Now</a>
                                        </div>
                                        <ul className="price-list my-6 [&_li]:pl-10 [&_li]:pr-6 [&_li]:pb-4 [&_li]:border-b [&_li]:border-b-solid [&_li]:border-b-black-200 flex flex-col flex-1 [&_li]:flex [&_li]:items-stretch space-y-4 [&>li:last-child]:border-b-0">
                                            <li>Advance Risk Contribution </li>
                                            <li>Advance Factor Analysis</li>
                                            <li>Advance Risk Weather</li>
                                            <li>Advance Protection Calculator</li>
                                            <li>Backtest</li>
                                            <li>Forward Test</li>
                                            <li>Market Shield for Downside Protection</li>
                                            <li>Streamlined Call Writing for Income</li>
                                            <li>Up to 10 Portfolios of maximum 100 Tickers</li>
                                            <li>Market Quotes (Prev Close)</li>
                                            <li>User Upload & Update of Portfolio Positions</li>
                                            <li>User Download of Possible Options Trades</li>
                                            <li>Call Writing Optimization During Trial Period</li>
                                            <li>Unlimited if Linked to Brokerage Platforms</li>
                                        </ul>
                                        <span className="block px-6 pb-4 mt-auto">
                                             <a href="#" className="btn-green block w-full text-center">Start Free Trial Now</a>
                                        </span>
                                    </div>
                                </div>
                     
                                  <div className="hover:bg-white hover:shadow-[2px_10px_40px_0px_#00000040] transition-all duration-500 linear xmd:bg-transparent bg-white xmd:shadow-none shadow-[2px_10px_40px_0px_#00000040]">
                                    <div className="top-list flex flex-col h-full">
                                        <div className="p-6 flex flex-col top-head">
                                            <h3 className="text-h2 font-semibold font-ivy text-black mb-8">Advisor Pro</h3>
                                             <span className="font-semibold 2xl:text-h1 text-h2 text-black mb-6 flex-1">$<span   data-annual="500" data-monthly="600">500</span> <span className="text-black-300 font-medium text-p">/ Per Month</span></span>
                                           
                                            <a href="#" className="btn-green block w-full text-center mt-auto">Start Free Trial Now</a>
                                        </div>
                                        <ul className="price-list my-6 [&_li]:pl-10 [&_li]:pr-6 [&_li]:pb-4 [&_li]:border-b [&_li]:border-b-solid [&_li]:border-b-black-200 flex flex-col flex-1 [&_li]:flex [&_li]:items-stretch space-y-4 [&>li:last-child]:border-b-0">
                                            <li>Advance Risk Contribution </li>
                                            <li>Advance Factor Analysis</li>
                                            <li>Advance Risk Weather</li>
                                            <li>Advance Protection Calculator</li>
                                            <li>Backtest</li>
                                            <li>Forward Test</li>
                                            <li>Market Shield for Downside Protection</li>
                                            <li>Streamlined Call Writing for Income</li>
                                            <li>Up to 10 Portfolios of maximum 100 Tickers</li>
                                            <li>Market Quotes (Prev Close)</li>
                                            <li>User Upload & Update of Portfolio Positions</li>
                                            <li>User Download of Possible Options Trades</li>
                                            <li>Call Writing Optimization During Trial Period</li>
                                            <li>Unlimited if Linked to Brokerage Platforms</li>
                                        </ul>
                                        <span className="block px-6 pb-4 mt-auto">
                                             <a href="#" className="btn-green block w-full text-center">Start Free Trial Now</a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default PricingComponent
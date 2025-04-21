import React from 'react'

const Index_section = () => {
  return (
    <section className="t-section index-section lg:py[150px] md:py-[80px] sm:py-[50px] py-6 w-full border-b-[1px] border-b-black-200 border-b-solid bg-white-100">
        <div className="container">
            <div className="inner space-y-8 md:space-y-[64px] lg:space-y-[100px]">
                <div className="main md:space-y-[48px] space-y-6">
                    <div className="top text-black text-left md:space-y-[48px] space-y-6">
                        <div className="title flex justify-start items-start">
                            <h2 className="text-h2 font-ivy font-semibold relative before:content-[''] before:w-[67px] before:h-[67px] before:rounded-full before:bg-pink before:absolute before:top-[-12px] xsm:before:left-[-16px] before:left-[0] before:opacity-20 before:z-0">Using Index Puts for Hedging
                            </h2>
                        </div>
                        <div className="text text-body font-inter font-normal text-black-100">
                            <p>Index puts are another effective tool for portfolio protection. By purchasing index puts, you create a safety net for yo entire portfolio. Here{" '"}s how it works:</p>
                        </div>
                    </div>
                    
                    <div className="work-area flex justify-start items-stretch sm:gap-8 gap-4 flex-wrap *:w-full *:sm:w-[calc(50%-16px)] *:xlg:w-[calc(33%-24px)] text-black-100">
                        <div className="work-block flex justify-start items-start gap-[10px]">
                            <div className="indicator-icon mt-[5px] w-[5%]">
                                <img src="/img/greenicon.svg" alt="indicator-icon" role="img" className="w-4 h-4"/>
                            </div>
                            <div className="content w-[95%]">
                                <div className="title text">
                                    <h3 className="text-black title text-h5 font-bold font-inter mb-[10px]">Market Coverage:</h3>
                                    <p>Index puts hedge against overall market declines rather than individual stocks.
                                    </p>
                                </div>   
                            </div>
                        </div>
                        
                        <div className="work-block flex justify-start items-start gap-[10px]">
                            <div className="indicator-icon mt-[5px] w-[5%]">
                                <img src="/img/greenicon.svg" alt="indicator-icon" role="img" className="w-4 h-4"/>
                            </div>
                            <div className="content w-[95%]">
                                <div className="title text">
                                    <h3 className="text-black title text-h5 font-bold font-inter mb-[10px]">Cost-Effective:</h3>
                                    <p>They often cost less than buying puts on multiple individual stocks.
                                    </p>
                                </div>   
                            </div>
                        </div>
                   
                        
                    </div>
                    
                </div>
                <div className="main md:space-y-[48px] space-y-6">
                    <div className="top text-black text-left md:space-y-[48px] space-y-6">
                        <div className="title flex justify-start items-start">
                            <h2 className="text-h2 font-ivy font-semibold relative before:content-[''] before:w-[67px] before:h-[67px] before:rounded-full before:bg-pink before:absolute before:top-[-12px] xsm:before:left-[-16px] before:left-[0] before:opacity-20 before:z-0">Reducing Risk During a Downturn
                            </h2>
                        </div>
                        <div className="text text-body font-inter font-normal text-black-100">
                            <p>A market downturn can be daunting. However, employing the right strategies can minimize its impact on your
                                investments. Here are some steps to consider:
                                </p>
                        </div>
                    </div>
                    
                    <div className="work-area flex justify-start items-stretch sm:gap-8 gap-4 flex-wrap *:w-full *:sm:w-[calc(50%-16px)] *:xlg:w-[calc(33%-24px)] text-black-100">
                        <div className="work-block flex justify-start items-start gap-[10px]">
                            <div className="indicator-icon mt-[5px] w-[5%]">
                                <img src="/img/greenicon.svg" alt="indicator-icon" role="img" className="w-4 h-4"/>
                            </div>
                            <div className="content w-[95%]">
                                <div className="title text">
                                    <h3 className="text-black title text-h5 font-bold font-inter mb-[10px]"> Assess Your Risk Tolerance:</h3>
                                    <p>Understand how much risk you{" '"}re willing to accept.
                                    </p>
                                </div>   
                            </div>
                        </div>
                        
                        <div className="work-block flex justify-start items-start gap-[10px]">
                            <div className="indicator-icon mt-[5px] w-[5%]">
                                <img src="/img/greenicon.svg" alt="indicator-icon" role="img" className="w-4 h-4"/>
                            </div>
                            <div className="content w-[95%]">
                                <div className="title text">
                                    <h3 className="title text-black text-h5 font-bold font-inter mb-[10px]">Use the Portfolio Protection Calculator:</h3>
                                    <p>Input your portfolio details to find the right protective strategies.
                                    </p>
                                </div>   
                            </div>
                        </div>
                        
                        <div className="work-block flex justify-start items-start gap-[10px]">
                            <div className="indicator-icon mt-[5px] w-[5%]">
                                <img src="/img/greenicon.svg" alt="indicator-icon" role="img" className="w-4 h-4"/>
                            </div>
                            <div className="content w-[95%]">
                                <div className="title text">
                                    <h3 className="text-black title text-h5 font-bold font-inter mb-[10px]">Implement Hedging Techniques:</h3>
                                    <p>Consider options like put buying or index puts to shield your investments effectively.
                                    </p>
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

export default Index_section
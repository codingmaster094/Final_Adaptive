import React from 'react'

const T_Section = () => {
  return (
    <section className="t-section lg:py[150px] md:py-[80px] sm:py-[50px] py-6 w-full border-b-[1px] border-b-black-200 border-b-solid bg-white-100">
    <div className="container">
        <div className="inner lg:space-y-[100px] md:space-y-[64px] space-y-6 text-black-100">
            <div className="top">
                <div className="title relative md:space-y-[48px] space-y-6">
                    <h2 className="text-h2 text-black font-ivy font-semibold relative before:content-[''] before:w-[67px] before:h-[67px] before:rounded-full before:bg-pink before:absolute before:top-[-12px] xsm:before:left-[-16px] before:left-[0] before:opacity-20 before:z-0">Conclusion
                    </h2>
                    <p>In an unpredictable financial landscape, knowing how to protect your investments is vital. A Portfolio Protection Calculator - Free can guide you in navigating the complex world of options trading, enabling you to implement effecti strategies like put buying and call writing. By being proactive, you can ensure your portfolio withstands downturns, giving you peace of mind as you strive to achieve your financial goals.</p>
                </div>
            </div>
            <div className="mid flex justify-center items-center flex-col gap-8">
                <p>Get personalised portfolio protection recommendations and more</p>
                <div className="btn-link w-fit text-[16px]  bg-transparent font-overpass font-medium text-black text-[body] px-4 py-2 border-solid border-[1.5px] border-black  hover:border-green  transition-all duration-480 ease-in-out cursor-pointer *:flex gap-[10px]">
                    <a href="#" role="link">Sign Up Now
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 12H5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14 17L19 12" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14 7L19 12" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        </a>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default T_Section
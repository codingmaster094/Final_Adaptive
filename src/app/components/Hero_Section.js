import Image from 'next/image';
import React from 'react';

const Hero_Section = ({ hero_text, hero_peragraph, button1, button2, image }) => {
    // Ensure button2 color is mapped correctly to Tailwind classes

    return (
        <section className="hero-section pt-[100px]">
            <div className="container">
                <div className="inner pt-[48px] lg:pt-0">
                    <div className="inner-content flex flex-col lg:flex-row lg:space-y-0 space-y-[56px]">
                        {/* Left Section */}
                        <div className="hero-left py-0 md:py-8 lg:py-[100px] xl:py-[130px] lg:w-[45%] w-full pr-0 lg:pr-[50px] xl:pr-[100px] flex justify-center flex-col">
                            <div className="hero-text sm:space-y-8 space-y-4 text-h5 font-inter text-black-100">
                                <h1 className="text-h1 text-black font-ivy font-semibold">
                                    {hero_text}
                                </h1>
                                <p>{hero_peragraph}</p>
                            </div>

                            {/* Buttons Section */}
                            <div className="button-area flex flex-wrap items-center lg:gap-[48px] gap-4 lg:mt-[64px] mt-8">
                                {/* Button 1 */}
                                {button1 && (
                                    <div className={`btn-link *:text-4`}>
                                        <a href="#" role="link">{button1}</a>
                                    </div>
                                )}

                                {/* Button 2 with Dynamic Color */}
                                {button2?.title && (
                                    <div className={`btn-green *:text-4`}>
                                        <a href="#" role="link">{button2.title}</a>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Right Section (Image) */}
                        <div className="hero-right lg:w-[55%] w-full flex lg:justify-end justify-start items-end">
                            <Image
                                src={image}
                                width={818}
                                height={483}
                                alt="Hero image"
                                role="img"
                                className="lg:w-fit w-full lg:h-auto h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero_Section;

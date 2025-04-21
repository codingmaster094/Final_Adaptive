'use client'
import Image from 'next/image'
import React from 'react'

const Testimonial_Section = () => {
  return (
    <section className="testimonial-section lg:py[150px] md:py-[80px] sm:py-[50px] py-6 overflow-hidden">
            <div className="container">
                <div className="top text-black text-center lg:w-[70%] w-full mx-auto lg:space-y-[64px] space-y-8">
                    <div className="title flex justify-center items-center">
                        <h2 className="text-h1 font-ivy font-semibold relative before:content-[''] before:w-[67px] before:h-[67px] before:rounded-full before:bg-pink before:absolute before:top-[-12px] xsm:before:left-[-16px] before:left-[0] before:opacity-20 before:z-0">What Our Leadership Says</h2>
                    </div>
                    <div className="text italic text-h5 font-inter font-normal">
                        <p>“We believe that by offering investors access to instant, personalized portfolio protection and income solutions, we can change the future of investing and unlock new opportunities.”</p>
                    </div>
                </div>
    
                <div className="testimonial-block lg:mt-[100px] md:mt-[48px] mt-8 flex gap-8 md:flex-row flex-col">
                   
                        <div className="item test-items md:w-1/2 w-full">
                            <div className="test-inner flex justify-start items-center flex-col xlg:flex-row md:flex-col xsm:flex-row">
                                <div className="testleft w-[40%]">
                                    <div className="testimg max-w-[250px] w-full">
                                        <Image src="/img/PhilipSun.jpg" width={250} height={251} alt="PhilipSun" role="img"/>
                                    </div>
                                </div>
                                
                                <div className="testright p-[30px] xlg:w-[60%] md:w-full xsm:w-[60%] w-full xsm:text-left text-center">
                                    <div className="test-content space-y-8">
                                        <p>“We believe that by offering investors access to instant, personalized portfolio protection and income solutions, we can change the future of investing and unlock new opportunities.”</p>
                                        <div className="details flex flex-col">
                                            <span className="font-medium">Philip Sun, PhD</span>
                                            <span>Co-founder & CEO</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="item test-items md:w-1/2 w-full">
                            <div className="test-inner flex justify-start items-center flex-col xlg:flex-row md:flex-col xsm:flex-row">
                                <div className="testleft w-[40%]">
                                    <div className="testimg max-w-[250px] w-full">
                                        <Image src="/img/NathanielWice.jpg" width={250} height={251} alt="Nathaniel Wice" role="img"/>
                                    </div>
                                </div>
                                
                                <div className="testright p-[30px] xlg:w-[60%] md:w-full xsm:w-[60%] w-full xsm:text-left text-center">
                                    <div className="test-content space-y-8">
                                        <p>“We believe that by offering investors access to instant, personalized portfolio protection and income solutions, we can change the future of investing and unlock new opportunities.”</p>
                                        <div className="details flex flex-col">
                                            <span className="font-medium">Nathaniel Wice</span>
                                            <span>Co-founder & CEO</span>
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

export default Testimonial_Section
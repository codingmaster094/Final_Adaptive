'use client'
import Image from 'next/image'
import React,{useState} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Card_Section = ({title, description , cards}) => {
     const [swiperInstance, setSwiperInstance] = useState(null);

     const nextSlide = () => {
       if (swiperInstance) swiperInstance.slideNext();
     };

     const prevSlide = () => {
       if (swiperInstance) swiperInstance.slidePrev();
     };
  
    const duplicatedSlides = cards?.concat(
      cards
    );

  return (
    <section className="card-section lg:py[150px] md:py-[80px] sm:py-[50px] py-6 border-b-[1px] border-b-black-200 border-b-solid border-t-[1px] border-t-black-200 border-t-solid overflow-hidden">
      <div className="container">
        <div className="top sm:w-[83%] w-full md:pb-0 pb-5">
          <div className="title">
            <h2 className="text-h2 font-ivy font-semibold relative before:content-[''] before:w-[67px] before:h-[67px] before:rounded-full before:bg-pink before:absolute before:top-[-12px] before:left-[-16px] before:opacity-20 before:z-0 mb-8">
              {title}
            </h2>
          </div>
          <div className="text text-h5 font-inter">
            <p>{description}</p>
          </div>
        </div>
        <div className="card-block relative">
          <Swiper
            className="lg:!pt-[100px] md:!pt-20 sm:!pt-14 !pt-10 !pb-12"
            modules={[Navigation, Autoplay, Pagination]}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".custom-swiper-button-next",
              prevEl: ".custom-swiper-button-prev",
            }}
            loop={true}
            spaceBetween={16}
            slidesPerView={4}
            breakpoints={{
              1280: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2,
              },
              480: {
                slidesPerView: 1,
              },
              0: {
                slidesPerView: 1,
              },
            }}
            onSwiper={setSwiperInstance}
          >
            {duplicatedSlides &&
              duplicatedSlides.map((card, index) => (
                <SwiperSlide
                  className="item card-item"
                  key={index}
                >
                  <div className="bg-white px-4">
                    <Image
                      src={card.image}
                      width={230}
                      height={240}
                      alt={card.title}
                      className="w-full md:h-[240px] h-auto"
                    />
                    <div className="content space-y-[20px] my-6">
                      <div className="flex justify-between items-center">
                        <span className="text-[12px] font-medium font-inter uppercase text-black-100 bg-[#EEA7DF33] p-[6px] rounded-[4px]">
                          {card.category}
                        </span>
                        <span className="text-[12px] font-medium float-right font-inter text-black-100">
                          {card.date}
                        </span>
                      </div>
                      <h3 className="text-body font-bold font-inter">
                        {card.title}
                      </h3>
                      <div className="text text-black-100 font-inter font-normal">
                        <p>{card.description}</p>
                      </div>
                    </div>
                    <a
                      href={card.link}
                      className="text-black font-semibold font-overpass block underline underline-offset-4"
                    >
                      {card.BTNTitle}
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            <div className="swiper-pagination static mt-3 md:mt-6 sm:hidden block" />
          </Swiper>

          {/* Custom navigation arrows */}
          <button
            className="custom-swiper-button-prev absolute top-3 z-10 xl:left-[93%] lg:left-[92%] xmd:left-[87%] sm:left-[84%] left-[65%] translate-x-[50%] sm:block hidden"
            onClick={prevSlide}
          >
            <Image
              src="/img/prevarrow.svg"
              alt="prevarrow"
              width={8}
              height={8}
              className="w-8 h-8 object-cover"
            />
          </button>

          <button
            className="custom-swiper-button-next z-10 absolute top-3 right-5 sm:block hidden"
            onClick={nextSlide}
          >
            <Image
              src="/img/Arrownext.svg"
              alt="nextarrow"
              width={8}
              height={8}
              className="w-8 h-8 object-cover"
            />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Card_Section
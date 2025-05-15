"use client";
import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import dayjs from 'dayjs';
import Link from "next/link";

const Card_Section = ({ title, description, cards }) => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const nextSlide = () => {
    if (swiperInstance) swiperInstance.slideNext();
  };

  const prevSlide = () => {
    if (swiperInstance) swiperInstance.slidePrev();
  };

  const duplicatedSlides = cards?.concat(cards);
  
   const BlogPost = duplicatedSlides?.filter(
     (cat) => cat.category_names[0] !== "Uncategorized"
   );

  const setEqualHeight = useCallback((elementWrapper, element) => {
    let maxHeight = 0;
    const elements = document.querySelectorAll(
      `.${elementWrapper} .${element}`
    );
    elements.forEach((el) => {
      el.style.height = "auto";
      maxHeight = Math.max(maxHeight, el.clientHeight);
    });
    elements.forEach((el) => {
      el.style.height = `${maxHeight}px`;
    });
  }, []);


  return (
    <section className="card-section lg:py[150px] md:py-[80px] sm:py-[50px] py-6 border-b-[1px] border-b-black-200 border-b-solid border-t-[1px] border-t-black-200 border-t-solid overflow-hidden">
      <div className="container">
        <div className="top sm:w-[83%] w-full">
          <div className="title">
            <h2
              className="text-h2 font-ivy font-semibold relative before:content-[''] before:w-[67px] before:h-[67px] before:rounded-full before:bg-pink before:absolute before:top-[-12px] before:left-[-16px] before:opacity-20 before:z-0 mb-8"
              dangerouslySetInnerHTML={{ __html: title }}
            ></h2>
          </div>
          <div
            className="text text-h5 font-inter"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        </div>

        <div className="card-block relative">
          <Swiper
            className="lg:!pt-[100px] md:!pt-20 !pt-14 sm:!pb-12 !pb-16 md:mt-[-50px]"
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
              1280: { slidesPerView: 4 },
              1024: { slidesPerView: 3 },
              640: { slidesPerView: 2 },
              480: { slidesPerView: 1 },
              0: { slidesPerView: 1 },
            }}
            onSwiper={setSwiperInstance}
          >
            {BlogPost?.map((card, index) => (
              <SwiperSlide className="item card-item" key={index}>
                <div className="bg-white px-4 flex flex-col h-full flex-1">
                  <Image
                    src={card?.featured_image_data?.url}
                    width={230}
                    height={240}
                    alt={card.title}
                    className="w-full h-[240px] object-cover"
                  />
                  <div className="content lg:space-y-5 space-y-3 my-6 equal-text flex flex-col h-full flex-1">
                    <div className="flex justify-between items-center">
                      <span className="text-[12px] font-medium font-inter uppercase text-black-100 bg-[#EEA7DF33] p-[6px] rounded-[4px]">
                        {card.category_names}
                      </span>
                      <span className="text-[12px] font-medium float-right font-inter text-black-100">
                        {dayjs(card.date).format("D MMMM YYYY")}
                      </span>
                    </div>
                    <h3
                      className="text-body font-bold font-inter heading flex-1"
                      dangerouslySetInnerHTML={{
                        __html: card.title?.rendered,
                      }}
                    ></h3>
                    <div
                      className="text text-black-100 font-inter font-normal paragraph line-clamp-2"
                      dangerouslySetInnerHTML={{
                        __html: card.excerpt?.rendered,
                      }}
                    ></div>
                  </div>
                  <Link
                    href={`/blog/${card.slug}`}
                    className="text-black font-semibold font-overpass block underline underline-offset-4"
                  >
                    Read More
                  </Link>
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination static mt-3 md:mt-6 sm:hidden block" />
          </Swiper>

          <button
            aria-label="swiper button"
            className="custom-swiper-button-prev absolute top-3 z-10 xl:left-[93%] lg:left-[92%] xmd:left-[90%] sm:left-[84%] xsm:left-[80%] left-[70%] -translate-x-[50%]"
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
            aria-label="swiper button"
            className="custom-swiper-button-next z-10 absolute top-3 right-5"
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
};

export default Card_Section;

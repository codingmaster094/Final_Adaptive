"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";

const Tools_Section = () => {
  const [activeImage, setActiveImage] = useState("/img/banner-img.webp");
  const sectionsRef = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = sectionsRef.current.filter((section) => section); // Filter out null elements
    const stickyImage = document.getElementById("stickyImage");
    const container = containerRef.current;

    if (!stickyImage || sections.length === 0 || !container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveImage(entry.target.getAttribute("data-image"));
          }
        });
      },
      {
        threshold: [0.4, 0.6, 0.8],
        rootMargin: "-40% 0px -40% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    const adjustHeight = () => {
      const stickyImageHeight = stickyImage.offsetHeight;
      sections.forEach((section) => {
        section.style.minHeight = `${stickyImageHeight}px`;
      });
      container.style.minHeight = `${stickyImageHeight * sections.length}px`;
    };

    adjustHeight();
    window.addEventListener("resize", adjustHeight);

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
      window.removeEventListener("resize", adjustHeight);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="tools-section lg:py[150px] md:py-[80px] sm:py-[50px] py-6 bg-[#f7f7f7]  border-t-[1px] border-t-black-200 border-t-solid"
    >
      <div className="container">
        <div className="flex flex-col lg:flex-row items-start lg:gap-[100px] md:gap-[48px] gap-[32px]">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col lg:gap-20 gap-8">
            {[
              {
                title: "Advisors & Wealth Managers",
                subtitle:
                  "Strategic tools for professionals managing client portfolios.",
                description:
                  "Adaptive provides advisors with cutting-edge risk management tools like Market Shield, offering detailed analytics, customizable hedging strategies, and tax-smart planning solutions.",
                link: "Learn More About Solutions for Advisors",
                image: "/img/banner-img.webp",
              },
              {
                title: "Enterprises",
                subtitle:
                  "Scale innovation with enterprise-level tools and solutions.",
                description:
                  "Adaptive offers robust tools and comprehensive API access for secure integration of advanced risk analytics and portfolio protection.",
                link: "Explore Enterprise Solutions",
                image: "/img/frame.png",
              },
              {
                title: "Retail Investors",
                subtitle:
                  "Make informed decisions with professional-grade tools.",
                description:
                  "For individual investors, Adaptive simplifies portfolio management by providing tools to fine-tune risk in asset allocations and hedge market risks.",
                link: "Discover Retail Investor Solutions",
                image: "/img/banner-img.webp",
              },
            ].map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) sectionsRef.current[index] = el;
                }}
                className="content-section space-y-8 flex flex-col"
                data-image={item.image}
              >
                <h2 className="text-h2 font-ivy font-semibold relative before:content-[''] before:w-[67px] before:h-[67px] before:rounded-full before:bg-pink before:absolute before:top-[-12px] before:left-[-16px] before:opacity-20 before:z-0">
                  {item.title}
                </h2>
                <div className="text font-inter text-black-100 font-normal text-body space-y-4">
                  <h3 className="text-black font-medium">{item.subtitle}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="btn-link *:text-4 border-green hover:border-black">
                  <a href="#" role="link">
                    {item.link}
                  </a>
                </div>
                <div className="content-img w-full mb-8 lg:hidden block">
                  <Image
                    src={item.image}
                    alt="image"
                    width={694}
                    height={410}
                    role="img"
                    className="w-full"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Sticky Image Box */}
          <div className="stick-box w-full lg:w-1/2 sticky top-40 lg:block hidden">
            <Image
              id="stickyImage"
              src={activeImage}
              width={694}
              height={410}
              alt="Sticky Image"
              className="relative w-full h-full object-cover transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools_Section;

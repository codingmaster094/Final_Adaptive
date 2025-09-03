'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'

const solutions = [
        {
            title: "Advisors & Wealth Managers",
            sub_title: "Strategic tools for professionals managing client portfolios.",
            description: "<p>Adaptive provides advisors with cutting-edge risk management tools like Market Shield, offering detailed analytics, customizable hedging strategies, and tax-smart planning solutions.</p>\n",
            button: {
                title: "Learn More About Solutions for Advisors",
                url: "#",
                target: ""
            },
            "image": {
                ID: 4292,
                id: 4292,
                title: "timeline",
                filename: "timeline.webp",
                filesize: 21806,
                url: "https://app.dev.adaptive-investments.com/wp-content/uploads/2025/04/timeline.webp",
                link: "https://app.dev.adaptive-investments.com/home/timeline/",
                alt: "",
                author: "7",
                description: "",
                caption: "",
                name: "timeline",
                status: "inherit",
                uploaded_to: 4243,
                date: "2025-04-21 10:26:57",
                modified: "2025-04-21 10:26:57",
                menu_order: 0,
                mime_type: "image/webp",
                type: "image",
                subtype: "webp",
                icon: "https://app.dev.adaptive-investments.com/wp-includes/images/media/default.png",
                width: 746,
                height: 468,
            }
        },
        {
            title: "Advisors & Wealth Managers",
            sub_title: "Strategic tools for professionals managing client portfolios.",
            description: "<p>Adaptive provides advisors with cutting-edge risk management tools like Market Shield, offering detailed analytics, customizable hedging strategies, and tax-smart planning solutions.</p>\n",
            button: {
                title: "Learn More About Solutions for Advisors",
                url: "#",
                target: ""
            },
            "image": {
                ID: 4292,
                id: 4292,
                title: "timeline",
                filename: "timeline.webp",
                filesize: 21806,
                url: "https://app.dev.adaptive-investments.com/wp-content/uploads/2025/04/timeline.webp",
                link: "https://app.dev.adaptive-investments.com/home/timeline/",
                alt: "",
                author: "7",
                description: "",
                caption: "",
                name: "timeline",
                status: "inherit",
                uploaded_to: 4243,
                date: "2025-04-21 10:26:57",
                modified: "2025-04-21 10:26:57",
                menu_order: 0,
                mime_type: "image/webp",
                type: "image",
                subtype: "webp",
                icon: "https://app.dev.adaptive-investments.com/wp-includes/images/media/default.png",
                width: 746,
                height: 468,
            }
        },
        {
            title: "Advisors & Wealth Managers",
            sub_title: "Strategic tools for professionals managing client portfolios.",
            description: "<p>Adaptive provides advisors with cutting-edge risk management tools like Market Shield, offering detailed analytics, customizable hedging strategies, and tax-smart planning solutions.</p>\n",
            button: {
                title: "Learn More About Solutions for Advisors",
                url: "#",
                target: ""
            },
            "image": {
                ID: 4292,
                id: 4292,
                title: "timeline",
                filename: "timeline.webp",
                filesize: 21806,
                url: "https://app.dev.adaptive-investments.com/wp-content/uploads/2025/04/timeline.webp",
                link: "https://app.dev.adaptive-investments.com/home/timeline/",
                alt: "",
                author: "7",
                description: "",
                caption: "",
                name: "timeline",
                status: "inherit",
                uploaded_to: 4243,
                date: "2025-04-21 10:26:57",
                modified: "2025-04-21 10:26:57",
                menu_order: 0,
                mime_type: "image/webp",
                type: "image",
                subtype: "webp",
                icon: "https://app.dev.adaptive-investments.com/wp-includes/images/media/default.png",
                width: 746,
                height: 468,
            }
        },
    
      ]
const Scroll_tools_section = () => {
    const [activeImage, setActiveImage] = useState(solutions[0]?.image?.url);
        const sectionsRef = useRef([]);
        const containerRef = useRef(null);
      
        useEffect(() => {
          const sections = sectionsRef.current.filter((section) => section);
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
            {solutions &&
              solutions?.map((item, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    if (el) sectionsRef.current[index] = el;
                  }}
                  className="content-section space-y-8 flex flex-col"
                  data-image={item.image.url}
                >
                  <h2 className="text-h2 font-ivy font-semibold relative before:content-[''] before:w-[67px] before:h-[67px] before:rounded-full before:bg-pink before:absolute before:top-[-12px] before:left-[-16px] before:opacity-20 before:z-0">
                    {item.title}
                  </h2>
                  <div className="text font-inter text-black-100 font-normal text-body space-y-4">
                    <h3 className="text-black font-medium">{item.sub_title}</h3>
                    <div
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    ></div>
                  </div>
                  <div className="btn-link *:text-4 border-green hover:border-black">
                    <Link href={item.button.url} role="link">
                      {item.button.title}
                    </Link>
                  </div>
                  <div className="content-img w-full mb-8 lg:hidden block">
                    <Image
                      src={item.image.url}
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
              src={activeImage} // Will show the active image
              width={694}
              height={410}
              alt="Sticky Image"
              className="relative w-full h-full object-cover transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Scroll_tools_section
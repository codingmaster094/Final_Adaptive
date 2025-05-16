// "use client";
// import { createContext, useState, useRef, useEffect } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import { usePathname } from "next/navigation";

// gsap.registerPlugin(ScrollTrigger);

// export const TransitionContext = createContext({});

// export function TransitionProvider({ children }) {
//   const [timeline, setTimeline] = useState(() =>
//     gsap.timeline({ paused: true })
//   );
//   const container = useRef(null);
//   const pathname = usePathname();

//   const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;

//   // useGSAP(() => {
//   //   // Skip animations if not desktop
//   //   if (!isDesktop) return;

//   //   const tl = gsap.timeline();

//   //   // Clean up existing ScrollTriggers
//   //   ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

//   //   tl.from("header", { duration: 0.5, delay: 1, opacity: 0 })
//   //     .from(".hero-text h1, .hero-text p, .hero-left .button-area", {
//   //       y: 10,
//   //       opacity: 0,
//   //       delay: 0.2,
//   //       duration: 0.3,
//   //       stagger: 0.2,
//   //     })
//   //     .from(
//   //       ".hero-right img",
//   //       {
//   //         y: 10,
//   //         delay: 0.3,
//   //         opacity: 0,
//   //         stagger: 0.1,
//   //         duration: 0.2,
//   //       },
//   //       "-=0.7"
//   //     )
//   //     .from(".tools-section", { y: 5, opacity: 0, duration: 0.1 });

//   //   const createScrollAnimation = (trigger, elements, options = {}) => {
//   //     const defaults = { y: 30, opacity: 0, duration: 0.6, stagger: 0.2 };
//   //     const animationOptions = { ...defaults, ...options };

//   //     gsap
//   //       .timeline({
//   //         scrollTrigger: {
//   //           trigger,
//   //           start: "top 80%",
//   //           end: options.end || "top 0%",
//   //           scrub: 2,
//   //         },
//   //       })
//   //       .from(elements, animationOptions);
//   //   };

//   //   const initPageAnimations = () => {
//   //     createScrollAnimation(
//   //       ".timeline-section",
//   //       ".timeline-top, .timeline-mid, .timeline-btm"
//   //     );
//   //     createScrollAnimation(
//   //       ".tab-section",
//   //       ".tab-section h2, .tab-section .text p, .tabs-container, .tabs-container .tab-btn button"
//   //     );
//   //     createScrollAnimation(
//   //       ".testimonial-section",
//   //       ".testimonial-section h2, .testimonial-section .text p",
//   //       { end: "top 30%" }
//   //     );
//   //     createScrollAnimation(".testimonial-section", ".testimonial-block", {
//   //       x: 300,
//   //     });
//   //     createScrollAnimation(
//   //       ".card-section",
//   //       ".card-section .top, .card-section .card-block",
//   //       { delay: 0.3, end: "top 80%" }
//   //     );
//   //   };

//   //   const initializeAnimations = () => {
//   //     document.querySelectorAll(".t-section").forEach((section) => {
//   //       const inner = section.querySelector(".inner");

//   //       gsap
//   //         .timeline({
//   //           scrollTrigger: {
//   //             trigger: section,
//   //             start: "top 90%",
//   //             end: "bottom 20%",
//   //             scrub: 1,
//   //           },
//   //         })
//   //         .from(inner, {
//   //           y: 30,
//   //           opacity: 0,
//   //           duration: 1,
//   //           ease: "power3.out",
//   //         });
//   //     });
//   //   };

//   //   const initFooterAnimation = () => {
//   //     gsap.set("footer, .footer", { opacity: 0, y: 50 });

//   //     gsap
//   //       .timeline({
//   //         scrollTrigger: {
//   //           trigger: "footer, .footer",
//   //           start: "top 95%",
//   //           end: "top 70%",
//   //           scrub: 1,
//   //         },
//   //       })
//   //       .to("footer, .footer", { opacity: 1, y: 0, duration: 1 });
//   //   };

//   //   initPageAnimations();
//   //   initializeAnimations();
//   //   // initFooterAnimation();

//   //   timeline.add(gsap.to(container.current, { opacity: 0 }));
//   // }, [pathname, isDesktop]);

//   return (
//     <TransitionContext.Provider value={{ timeline, setTimeline }}>
//       <div ref={container}>{children}</div>
//     </TransitionContext.Provider>
//   );
// }

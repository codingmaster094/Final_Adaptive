import React from "react";
import Hero_without_img from "../components/Hero_without_img";
import Enterprise_Solutions_Include from "../components/Enterprise_Solutions_Include";
import Category from "../components/Category";

const page = () => {
     const data = {
       hero_title: "Enterprise - Scale Risk Management",
       hero_desc:
         "<p>Adaptive Investments powers institutions, fintech platforms, and asset managers with custom hedging infrastructure and deep options expertise.</p>\n",
       hero_left_button: {
         title: "Try it now. It’s free",
         url: "/",
         target: "",
       },
       hero_right_button: {
         title: "Sign up Today!",
         url: "/",
         target: "",
       },
     };

     const sectionData = [
    {
      title: "Custom Strategy Design",
      boldText: "Build protection models suited to your user base or asset mix",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      image: "/img/illustration-img1.webp",
      imageAlt: "Illustration Image",
      bgClass: "bg-dots_bg bg-cover bg-center bg-no-repeat",
      reverse: false,
    },
    {
      title: "API Access",
      boldText: "Direct, scalable integration with your tech stack",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      image: "/img/illustration-img1.webp",
      imageAlt: "Illustration Image",
      bgClass: "bg-white-100",
      reverse: true,
    },
    {
      title: "Risk Aggregation Tools",
      boldText: "Manage exposure across accounts, users, or entire platforms",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      image: "/img/illustration-img1.webp",
      imageAlt: "Illustration Image",
      bgClass: "",
      reverse: false,
    },
  ];
  return (
    <>
      <Hero_without_img
        hero_text={data?.hero_title}
        hero_peragraph={data?.hero_desc}
        button1={data?.hero_left_button}
        button2={data?.hero_right_button}
      />
      <Enterprise_Solutions_Include items={sectionData} />
      <Category
        title="Build for Scale, Designed for Impact"
        description={`<p>Whether you are running a digital advice platform, Managing proprietary strategies, or Offering custom SMAs, Our tools help you deliver differentiated outcomes at scale</p><p><b>Trusted by Institutional Innovators Across the U.S</b></p>`}
        dots_bg={true}
        BTN={{
          title: "Request a Custom Demo",
          url: "/",
          target: "",
        }}
      />
    </>
  );
};

export default page;

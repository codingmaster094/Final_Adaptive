import React from "react";
import Hero_Section from "../components/home/Hero_Section";
import Tailored_Downside_Protection from "../components/Market-Shield/Tailored_Downside_Protection";
import MarkShieldBoxcomponent from "../components/Market-Shield/MarkShieldBoxcomponent";
import Effortless_Implementation from "../components/Market-Shield/Effortless_Implementation";


export default async function Page(){
const Datas = {
    hero_title: "Secure Your Portfolio with Confidence.",
    hero_desc: "<p>Market Shield provides advanced risk management solutions designed to protect your investments through intelligent strategies and real-time insights.</p>\n",
    hero_button_left: {
        "title": "Explore Market Shield Today",
        "url": "#",
        "target": ""
    },
    hero_button_right: {
        "title": "Sign up Today!",
        "url": "#",
        "target": ""
    },
    hero_image:{
        url:"/img/banner-img.webp",
        alt:"hero image"
    }
}

const sectionData = [
  {
    title: "Personalized Risk Management Tailored to You",
    boldText: "",
    description:`<p>Market Shield employs a personalized approach to risk management. By assessing your portfolio beta, we create a protective layer specifically catered to your investment strategy. This means you can enjoy customized security against market downturns while still pursuing growth opportunities.</p>
    <p>Take control of your financial future with a tool designed to empower you in balancing risk with potential rewards, all while protecting your hard-earned investments.</p>
    `,
    image: "/img/market-img1.webp",
    imageAlt: "Illustration Image",
    bgClass: "",
    reverse: false,
  },
  {
    title: "Customizable Strategies to Match Portfolio Goals",
    boldText: "",
    description:`<p>Every client is unique, and so are their portfolios. Market Shield provides tailored solutions, allowing you to customize protection strategies based on specific portfolio objectives. Whether your clients seek broad market coverage or targeted asset hedges, our flexible platform adapts to their desires. This level of personalization not only enhances client satisfaction but also empowers financial advisors to deliver results that resonate with individual investment goals fostering a deeper advisor-client relationship.</p>
    `,
    image: "/img/market-img2.webp",
    imageAlt: "Illustration Image",
    bgClass: "bg-white-100",
    reverse: true,
  },
];
  return (
    <>

      <Hero_Section
        hero_text={Datas?.hero_title}
        hero_peragraph={Datas?.hero_desc}
        button1={Datas?.hero_button_left}
        button2={Datas?.hero_button_right}
        image={Datas?.hero_image}
      />
      <Tailored_Downside_Protection />

      <MarkShieldBoxcomponent items={sectionData}/>
      <Effortless_Implementation />
    </>
  );
};


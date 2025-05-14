import React from "react";
import Hero_without_img from "../components/Hero_without_img/Hero_without_img";
import Category from "../components/Retail-Investors/Category";
import Retailer_tools_section from "../components/Retail-Investors/Retailer_tools_section";
import Key_feuture from "../components/Retail-Investors/Key_feuture";
export default async function Page(){
  const data = {
    hero_title: "Protect What You’ve Built Stay Invested for Long Term Growth.",
    hero_desc:
      "<p>At Adaptive Investments, we empower individual investors with tools to help safeguard their portfolios— without compromising long-term growth potential.</p>\n",
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
  return (
    <>
      <Hero_without_img
        hero_text={data?.hero_title}
        hero_peragraph={data?.hero_desc}
        button1={data?.hero_left_button}
        button2={data?.hero_right_button}
      />
      
      <Retailer_tools_section
        title="Market Shield for Individuals"
        description=" Our flagship solution, Market Shield™, provides cost-effective portfolio protection using options strategies tailored for retail investors. Whether you’re nearing retirement, planning for the future, or simply seeking peace of mind, our tools help you stay invested — even in volatile markets."
        image="/img/marketsheild.webp"
      />
      <Key_feuture
        keyFeatures={[
          {
            title: "Automated Put Protection aligned with your Portfolio",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu",
            image: "/img/key-feature-1.webp",
            reverse: true,
          },
          {
            title:
              "Education First Interface to Help you Learn While you Protect",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu",
            image: "/img/key-feature-2.webp",
            reverse: false,
          },
          {
            title: "Transparent Pricing and No Hidden Fees",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu",
            image: "/img/key-feature-3.webp",
            reverse: true,
          },
          {
            title: "Seamless Integration with Major Brokerages",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu",
            image: "/img/key-feature-4.webp",
            reverse: false,
          },
        ]}
      />
      <Category
        title="Take Control of Market Risk — Without Timing the Market."
        description="<p>Discover how to protect your assests while staying on track for your goals.</p>"
        dots_bg={true}
        BTN={{
          title: "Explore",
          url: "/",
          target: "",
        }}
      />
    </>
  );
};


import React from 'react'
import Hero_without_img from "../components/Hero_without_img/Hero_without_img";
import PricingComponent from "../components/Pricing/PricingComponent";
export default async function Page(){
    const data = {
        hero_title: "Invest with peace of mind",
        hero_desc: "<p>Adaptive is the right solution for individual investors, RIAs and the nation’s largest brokers</p>\n",
        hero_left_button: {
            "title": "Try it now. It’s free",
            "url": "/",
            "target": ""
        },
        hero_right_button: {
            "title": "Sign up Today!",
            "url": "/",
            "target": ""
        },
    }
  return (
    <>
       <Hero_without_img
        hero_text={data?.hero_title}
        hero_peragraph={data?.hero_desc}
        button1={data?.hero_left_button}
        button2={data?.hero_right_button}
      /> 
     <PricingComponent/>
    </>
  )
}

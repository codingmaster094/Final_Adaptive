import React from 'react'
import Hero_without_img from "../components/Hero_without_img/Hero_without_img";
import ForadvisorandwealthmanagerAbout from '../components/Advisor-Wealth-Manager/ForadvisorandwealthmanagerAbout';
import Advisors_Choose_Adaptive from '../components/Advisor-Wealth-Manager/Advisors_Choose_Adaptive';
const page = () => {
    const data = {
        hero_title: "Modern Risk Management for Modern Advisors",
        hero_desc: "<p>Adaptive Investments is your partner in delivering smarter, more resilient client portfolios. We offer scalable, compliant solutions that make it easy to integrate options-based risk management — with minimal lift and maximum impact</p>\n",
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
     <ForadvisorandwealthmanagerAbout 
      title="Tailored Tools for Advisors"
      image="/img/advisory-1.webp"
      content={[
        {
          title: "Put Buying Strategies:",
          description: "Automated hedging that adjusts to market shifts and portfolio allocations"
        },
        {
          title: "Collar Strategies:",
          description: "Preserve upside while capping downside - ideal for taxable accounts and concentrated stock positions"
        },
        {
          title: "Model Integration:",
          description: "Align protection with your models and investment philosophy."
        }
      ]}
/>
      <Advisors_Choose_Adaptive 
         title="Why Advisors Choose Adaptive"
         subtitle='Stay Focused on Advice. We’ll Handle the Protection.'
         description='Offer more value to your clients with differentiated strategies built to perform under pressure.'
         sections = {[
        {
            heading: 'Customizable Strategy Overlays',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            additionalInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: '/img/advisory-3.webp',
        },
        {
            heading: 'White-Label Dashboards and Client Reporting',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            additionalInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: '/img/advisory-2.webp',
        },
        {
            heading: 'Seamless Custodian and Portfolio Management Software Integration',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            additionalInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: '/img/advisory-4.webp',
        },
    ]}
      />
    </>
  )
}

export default page
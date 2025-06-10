import React from 'react'
import Hero_without_img from "../components/Hero_without_img/Hero_without_img";
import PricingComponent from "../components/Pricing/PricingComponent";
import Alldata from '../../../utile/AllDatafetch';
export default async function Page(){
    let PricingData;
      try {
        PricingData = await Alldata(`pricing`);
      } catch (error) {
        console.error("Error fetching data:", error);
        return <div>Error loading data.</div>;
      }
    
      if (!PricingData) {
        return <div>No data available.</div>;
      }
  return (
    <>
      <Hero_without_img
        hero_text={PricingData?.banner_title}
        hero_peragraph={PricingData?.banner_content}
        button1={PricingData?.try_now}
        button2={PricingData?.start_free_}
      />
      <PricingComponent
        pricing_main_title={PricingData?.title}
        pricing_description={PricingData?.plans_description}
        Month_plan_Card={PricingData?.monthly_plan}
        year_plan_Card={PricingData?.Yearly_plan}
      />
    </>
  );
}

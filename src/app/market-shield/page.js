import React from "react";
import Hero_Section from "../components/home/Hero_Section";
import Tailored_Downside_Protection from "../components/Market-Shield/Tailored_Downside_Protection";
import MarkShieldBoxcomponent from "../components/Market-Shield/MarkShieldBoxcomponent";
import Effortless_Implementation from "../components/Market-Shield/Effortless_Implementation";
import Alldata from "../../../utile/AllDatafetch";


export default async function Page(){
    let Market_shield_Data;
    try {
      Market_shield_Data = await Alldata("market-shield");
    } catch (error) {
      console.error("Error fetching data:", error);
      return <div>Error loading data.</div>;
    }
  
    if (!Market_shield_Data) {
      return <div>No data available.</div>;
    }

  return (
    <>
      <Hero_Section
        hero_text={Market_shield_Data?.hero_title}
        hero_peragraph={Market_shield_Data?.hero_desc}
        button1={Market_shield_Data?.explore}
        button2={Market_shield_Data?.sign_up_today}
        image={Market_shield_Data?.hero_image}
      />
      <Tailored_Downside_Protection down_side={Market_shield_Data?.down_side} />

      <MarkShieldBoxcomponent items={Market_shield_Data?.personalized} />
      <Effortless_Implementation
        title={Market_shield_Data?.effortless_title}
        description={Market_shield_Data?.effortless_desc}
        shield_work_description={Market_shield_Data?.shield_work_desc}
        shield_work_title={Market_shield_Data?.shield_work_title}
        shield_work={Market_shield_Data?.shield_work}
      />
    </>
  );
};


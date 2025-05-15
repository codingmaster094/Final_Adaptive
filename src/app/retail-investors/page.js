import React from "react";
import Hero_without_img from "../components/Hero_without_img/Hero_without_img";
import Category from "../components/Retail-Investors/Category";
import Retailer_tools_section from "../components/Retail-Investors/Retailer_tools_section";
import Key_feuture from "../components/Retail-Investors/Key_feuture";
import Alldata from "../../../utile/AllDatafetch";
export default async function Page(){
  let Retail_Investors;
      try {
        Retail_Investors = await Alldata("retail-investors");
      } catch (error) {
        console.error("Error fetching data:", error);
        return <div>Error loading data.</div>;
      }
    
      if (!Retail_Investors) {
        return <div>No data available.</div>;
      }
  
  return (
    <>
      <Hero_without_img
        hero_text={Retail_Investors?.hero_title}
        hero_peragraph={Retail_Investors?.hero_desc}
        button1={Retail_Investors?.try_now}
        button2={Retail_Investors?.sign_up}
      />

      <Retailer_tools_section
        title={Retail_Investors?.market_shield_title}
        description={Retail_Investors?.market_shield_desc}
        image={Retail_Investors?.market_shield_image.url}
      />
      <Key_feuture
        Main_titel={Retail_Investors?.key_feature_title}
        Main_des={Retail_Investors?.key_feature_desc}
        keyFeatures={Retail_Investors?.key_features}
      />
      <Category
        title={Retail_Investors?.take_control_title}
        description={Retail_Investors?.take_control_desc}
        dots_bg={true}
        BTN={Retail_Investors?.take_control_button}
      />
    </>
  );
};


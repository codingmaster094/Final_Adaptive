import React from "react";
import Hero_Section2 from "../components/Portfolio-Risk-Weather/Hero_Section2";
import PortfolioRisk_tools_section from "../components/Portfolio-Risk-Weather/PortfolioRisk_tools_section";
import Forecast_section from "../components/Portfolio-Risk-Weather/Forecast_section";
import PortfolioRisk_tools_market_section from "../components/Portfolio-Risk-Weather/PortfolioRisk_tools_market_section";
import PortfolioRisk_tools_Personalize from "../components/Portfolio-Risk-Weather/PortfolioRisk_tools_Personalize";
import Card_Section from "../components/home/Card_Section";
import Alldata from "../../../utile/AllDatafetch";
import AllPostGet from "../../../utile/AllPostget";
import MetaDataAPIS from "../../../utile/metadataAPI";
import dynamic from "next/dynamic";
const SchemaInjector = dynamic(() => import("../Schema-Markup/SchemaInjector"));
export default async function Page(){
  let PortfolioRiskWeatherTool;
   let blogsdatas;
     let schemaJSON;
    try {
       PortfolioRiskWeatherTool = await Alldata("portfolioriskweathertool");
       blogsdatas = await AllPostGet();
        const metadata = await MetaDataAPIS("/portfolioriskweathertool");
         const schemaMatch = metadata.head.match(
           /<script[^>]*type="application\/ld\+json"[^>]*class="rank-math-schema"[^>]*>([\s\S]*?)<\/script>/
         );
         schemaJSON = schemaMatch ? schemaMatch[1].trim() : null;
     } catch (error) {
       console.error("Error fetching data:", error);
     }
    
     if (!PortfolioRiskWeatherTool || !blogsdatas) {
       return <div>No data available.</div>;
     }
      
  return (
    <>
     <SchemaInjector schemaJSON={schemaJSON} />
      <Hero_Section2
        title={PortfolioRiskWeatherTool?.hero_title}
        description={PortfolioRiskWeatherTool?.hero_desc}
        buttons1={PortfolioRiskWeatherTool?.hero_left_button_}
        buttons2={PortfolioRiskWeatherTool?.hero_right_button}
      />
      <PortfolioRisk_tools_section
        title={PortfolioRiskWeatherTool?.risk_weather_title}
        imageUrl1={PortfolioRiskWeatherTool?.risk_weather_image}
        description={PortfolioRiskWeatherTool?.risk_weather_desc}
        chart_title={PortfolioRiskWeatherTool?.chart_title}
        imageUrl2={PortfolioRiskWeatherTool?.chart_image}
      />
      <Forecast_section
        title={PortfolioRiskWeatherTool?.forecast_too_title}
        description={PortfolioRiskWeatherTool?.forecast_tool_desc}
        button={PortfolioRiskWeatherTool?.forecast_tool_button}
        forecast_tool_content={PortfolioRiskWeatherTool?.forecast_tool_content}
        forecast_tool_right_image={
          PortfolioRiskWeatherTool?.forecast_tool_right_image
        }
        decoding_title={PortfolioRiskWeatherTool?.decoding_title}
        decoding_desc={PortfolioRiskWeatherTool?.decoding_desc}
        decoding_lists={PortfolioRiskWeatherTool?.decoding_lists}
        decoding_bottom_desc={PortfolioRiskWeatherTool?.decoding_bottom_desc}
      />
      <PortfolioRisk_tools_market_section
        title={PortfolioRiskWeatherTool?.downside_protection_title}
        description={PortfolioRiskWeatherTool?.downside_protection_desc}
        BTN={PortfolioRiskWeatherTool?.downside_protection_button}
        boxes={PortfolioRiskWeatherTool?.downside_protection}
      />
      <PortfolioRisk_tools_Personalize
        box1_title={PortfolioRiskWeatherTool?.personalize_risk}
        box1_description={PortfolioRiskWeatherTool?.personalize_description}
        box1_personalize_content={PortfolioRiskWeatherTool?.personalize_content}
        box1_BTN={PortfolioRiskWeatherTool?.personalize_button}
        box2_title={PortfolioRiskWeatherTool?.automate_title}
        box2_description={PortfolioRiskWeatherTool?.automate_desc}
        box2_automate_list={PortfolioRiskWeatherTool?.automate_list}
        automate_sub_title={PortfolioRiskWeatherTool?.automate_sub_title}
        box2_BTN={PortfolioRiskWeatherTool?.automate_button}
      />
      <Card_Section
        title={PortfolioRiskWeatherTool?.post_title}
        description={PortfolioRiskWeatherTool?.post_content}
        cards={blogsdatas}
      />
    </>
  );
};

export async function generateMetadata() {
  let metadata = await MetaDataAPIS("/portfolioriskweathertool");

  // Extract metadata from the head string
  const titleMatch = metadata.head.match(/<title>(.*?)<\/title>/);
  const descriptionMatch = metadata.head.match(
    /<meta name="description" content="(.*?)"/
  );
  const canonicalMatch = metadata.head.match(
    /<link\s+rel="canonical"\s+href="([^"]+)"/i
  );
  const title = titleMatch ? titleMatch[1] : "Default Title";
  const description = descriptionMatch
    ? descriptionMatch[1]
    : "Default Description";
  const canonical =
    canonicalMatch?.[1] || "https://app.dev.adaptive-investments.com";
  return {
    title,
    description,
    alternates: {
      canonical,
    },
  };
} 
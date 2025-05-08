import React from "react";
import Hero_Section2 from "../components/Hero_Section2";
import PortfolioRisk_tools_section from "../components/PortfolioRisk_tools_section";
import Forecast_section from "../components/Forecast_section";
import PortfolioRisk_tools_market_section from "../components/PortfolioRisk_tools_market_section";
import PortfolioRisk_tools_Personalize from "../components/PortfolioRisk_tools_Personalize";
import Card_Section from "../components/Card_Section";
import Alldata from "../../../utile/AllDatafetch";
import AllPostGet from "../../../utile/AllPostget";
const page = async() => {
  let PortfolioRiskWeatherTool;
   let blogsdatas;
     PortfolioRiskWeatherTool = await Alldata("portfolioriskweathertool");
     blogsdatas = await AllPostGet();
    
     if (!PortfolioRiskWeatherTool || !blogsdatas) {
       return <div>No data available.</div>;
     }
      
  return (
    <>
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

export default page;

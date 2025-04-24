import React from "react";
import Hero_without_img from "../components/Hero_without_img";
import Factor_about from "../components/Factor_about";
import FactorUnderstandingAbout from "../components/FactorUnderstandingAbout";
import Factor_Measures_of_risk from "../components/Factor_Measures_of_risk";
import Portfolio_Measure_of_fit from "../components/Portfolio_Measure_of_fit";
import Category from "../components/Category";
import Downside_protection from "../components/Downside_protection";
import Alldata from "../../../utile/AllDatafetch";

const Page = async() => {
    let FactorAnalysis;

    try {
      FactorAnalysis = await Alldata("factor-analysis");
     } catch (error) {
       console.error("Error fetching data:", error);
       return <div>Error loading data.</div>;
     }
    
     if (!FactorAnalysis) {
       return <div>No data available.</div>;
     }
    
     const downsideProtectionData = {
       title: "How to manage the cost of downside protection?",
       description:
         "Downside protection, also known as a portfolio hedge, refers to investments and agreements. These pay off when the market or portfolio goes down. Common forms include ‘put options’ and futures contracts which require special expertise and trading permissions.",
       protectionText: [
         "Downside protection can limit potential losses, thus reducing the overall risk of a portfolio even while staying invested for potential growth.",
         "The cost of downside protection is a drag on a portfolio’s performance, compared to an unprotected portfolio. At the same time, downside protection can sometimes lead to improved risk-adjusted returns as compared to buy-and-hold without protection, if protection proceeds are reinvested at lower prices in a portfolio which is growing over the long term.",
       ],
       imageSrc: "/img/protection.webp",
     };

  return (
    <>
      <Hero_without_img
        hero_text={FactorAnalysis?.hero_title}
        hero_peragraph={FactorAnalysis?.hero_desc}
        button1={FactorAnalysis?.hero_left_button}
        button2={FactorAnalysis?.hero_right_button}
      />

      <Factor_about
        title={FactorAnalysis?.features_title}
        subtitle={FactorAnalysis?.features_sub_title}
        description={FactorAnalysis?.features_desc}
        features={FactorAnalysis?.features}
      />

      <FactorUnderstandingAbout
        title={FactorAnalysis?.factor_analysis_title}
        factor_analysis_desc={FactorAnalysis?.factor_analysis_desc}
        factor_analysis_sub_desc={FactorAnalysis?.factor_analysis_sub_desc}
        basket_title={FactorAnalysis?.basket_title}
        basket={FactorAnalysis?.basket}
      />

      <Factor_Measures_of_risk
        sectionTitle={FactorAnalysis?.measures_title}
        description={FactorAnalysis?.measures_desc}
        measures={FactorAnalysis?.measures}
      />
      <Portfolio_Measure_of_fit
        title={FactorAnalysis?.analysis_title}
        measures={FactorAnalysis?.analysis}
        imageSrc={FactorAnalysis?.analysis_image}
        buttonTitle={FactorAnalysis?.analysis_button}
        borderBlack={true}
      />
      <Category
        title={FactorAnalysis?.manage_portfolio_title}
        description={FactorAnalysis?.manage_portfolio_desc}
      />
      <Downside_protection
        title={FactorAnalysis?.manage_protection_title}
        full_manage_protection_desc={
          FactorAnalysis?.full_manage_protection_desc
        }
        second_manage_protection_desc={
          FactorAnalysis?.second_manage_protection_desc
        }
        imageSrc={FactorAnalysis?.manage_protection_image}
      />
    </>
  );
};

export default Page;

import React from "react";
import Hero_without_img from "../components/Hero_without_img/Hero_without_img";
import Factor_about from "../components/Factor-Analysis/Factor_about";
import FactorUnderstandingAbout from "../components/Factor-Analysis/FactorUnderstandingAbout";
import Factor_Measures_of_risk from "../components/Factor-Analysis/Factor_Measures_of_risk";
import Portfolio_Measure_of_fit from "../components/Factor-Analysis/Portfolio_Measure_of_fit";
import Category from "../components/Retail-Investors/Category";
import Downside_protection from "../components/Factor-Analysis/Downside_protection";
import Alldata from "../../../utile/AllDatafetch";
import MetaDataAPIS from "../../../utile/metadataAPI";
import dynamic from "next/dynamic";
const SchemaInjector = dynamic(() => import("../Schema-Markup/SchemaInjector"));
export default async function Page(){
  let FactorAnalysis;
let schemaJSON;
  try {
    FactorAnalysis = await Alldata(`factor-analysis`);
     const metadata = await MetaDataAPIS("/factor-analysis");
     const schemaMatch = metadata.head.match(
       /<script[^>]*type="application\/ld\+json"[^>]*class="rank-math-schema"[^>]*>([\s\S]*?)<\/script>/
     );
     schemaJSON = schemaMatch ? schemaMatch[1].trim() : null;
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  if (!FactorAnalysis) {
    return <div>No data available.</div>;
  }

  return (
    <>
      <SchemaInjector schemaJSON={schemaJSON} />
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

export async function generateMetadata() {
  let metadata = await MetaDataAPIS("/factor-analysis");

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

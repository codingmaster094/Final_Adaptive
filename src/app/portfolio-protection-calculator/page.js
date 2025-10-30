import React from "react";
import Hero_without_img from "../components/Hero_without_img/Hero_without_img";
import PortfolioAbout from "../components/Portfolio-Protection-Calculator/PortfolioAbout";
import Market_Protection_Estimate from "../components/Portfolio-Protection-Calculator/Market_Protection_Estimate";
import Projected_Risk_Projected_Value from "../components/Portfolio-Protection-Calculator/Projected_Risk_Projected_Value";
import Category from "../components/Retail-Investors/Category";
import Alldata from "../../../utile/AllDatafetch";
import MetaDataAPIS from "../../../utile/metadataAPI";
import dynamic from "next/dynamic";
const SchemaInjector = dynamic(() => import("../Schema-Markup/SchemaInjector"));
export default async function Page(){
  let portfolioprotectioncalculator = null;
  let schemaJSON;
  try {
    portfolioprotectioncalculator = await Alldata(
      "portfolioprotectioncalculator"
    );
     const metadata = await MetaDataAPIS("/portfolioprotectioncalculator");
    const schemaMatch = metadata.head.match(
      /<script[^>]*type="application\/ld\+json"[^>]*className="rank-math-schema"[^>]*>([\s\S]*?)<\/script>/
    );
    schemaJSON = schemaMatch ? schemaMatch[1].trim() : null;
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  if (!portfolioprotectioncalculator) {
    return <div>No data available.</div>;
  }

  return (
    <>
    <SchemaInjector schemaJSON={schemaJSON} />
      <Hero_without_img
        hero_text={portfolioprotectioncalculator?.hero_title}
        button1={portfolioprotectioncalculator?.hero_left_button}
        button2={portfolioprotectioncalculator?.hero_right_button}
      />
      <PortfolioAbout
        title={portfolioprotectioncalculator?.long_term_title}
        description={portfolioprotectioncalculator?.long_term_desc}
        protectionLevels={portfolioprotectioncalculator?.long_term_sub_desc}
        conclusion={portfolioprotectioncalculator?.long_term_last_content}
      />
      <Market_Protection_Estimate
        title={portfolioprotectioncalculator?.estimate_title}
        description={portfolioprotectioncalculator?.estimate_desc}
        protectionDetails={portfolioprotectioncalculator?.estimate_left_desc}
        imageSrc={portfolioprotectioncalculator?.estimate_image}
        revers={false}
      />
      <Projected_Risk_Projected_Value
        title={portfolioprotectioncalculator?.protection_calculator_title}
        description={portfolioprotectioncalculator?.protection_calculator_desc}
        riskMeasures={portfolioprotectioncalculator?.model_portfolio}
        tableHeaders={portfolioprotectioncalculator?.table_header}
        tableData={portfolioprotectioncalculator?.risk_rows}
        projectedValueDescription={
          portfolioprotectioncalculator?.project_risk_desc
        }
      />
      <Market_Protection_Estimate
        title={portfolioprotectioncalculator?.downside_protection_title}
        description={portfolioprotectioncalculator?.downside_protection_desc}
        protectionDetails={
          portfolioprotectioncalculator?.downside_protection_right_desc
        }
        imageSrc={portfolioprotectioncalculator?.downside_protection_image}
        revers={true}
      />
      <Category
        title={portfolioprotectioncalculator?.portfolio_protection_title}
        description={portfolioprotectioncalculator?.portfolio_protection_desc}
        dots_bg={portfolioprotectioncalculator?.dots_bg}
      />
      <Market_Protection_Estimate
        title={portfolioprotectioncalculator?.model_portfolios_title}
        description={portfolioprotectioncalculator?.model_portfolios_desc}
        protectionDetailsArray={
          portfolioprotectioncalculator?.model_portfolios_left_desc
        }
        imageSrc={portfolioprotectioncalculator?.model_portfolios_image}
        revers={false}
      />
    </>
  );
};

export async function generateMetadata() {
  let metadata = await MetaDataAPIS("/portfolioprotectioncalculator");

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

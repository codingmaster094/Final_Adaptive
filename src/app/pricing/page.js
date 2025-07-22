import React from 'react'
import Hero_without_img from "../components/Hero_without_img/Hero_without_img";
import PricingComponent from "../components/Pricing/PricingComponent";
import Alldata from '../../../utile/AllDatafetch';
import MetaDataAPIS from "../../../utile/metadataAPI";
import dynamic from "next/dynamic";
const SchemaInjector = dynamic(() => import("../Schema-Markup/SchemaInjector"));
export default async function Page(){
    let PricingData;
      let schemaJSON;
      try {
        PricingData = await Alldata(`pricing`);
         const metadata = await MetaDataAPIS("/pricing");
         const schemaMatch = metadata.head.match(
           /<script[^>]*type="application\/ld\+json"[^>]*class="rank-math-schema"[^>]*>([\s\S]*?)<\/script>/
         );
         schemaJSON = schemaMatch ? schemaMatch[1].trim() : null;
      } catch (error) {
        console.error("Error fetching data:", error);
        return <div>Error loading data.</div>;
      }
    
      if (!PricingData) {
        return <div>No data available.</div>;
      }
  return (
    <>
     <SchemaInjector schemaJSON={schemaJSON} />
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

export async function generateMetadata() {
  let metadata = await MetaDataAPIS("/pricing");
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
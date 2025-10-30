import React from "react";
import Hero_Section from "../components/home/Hero_Section";
import Tailored_Downside_Protection from "../components/Market-Shield/Tailored_Downside_Protection";
import MarkShieldBoxcomponent from "../components/Market-Shield/MarkShieldBoxcomponent";
import Effortless_Implementation from "../components/Market-Shield/Effortless_Implementation";
import Alldata from "../../../utile/AllDatafetch";
import MetaDataAPIS from "../../../utile/metadataAPI";
import dynamic from "next/dynamic";
const SchemaInjector = dynamic(() => import("../Schema-Markup/SchemaInjector"));

export default async function Page(){
    let Market_shield_Data;
    let schemaJSON;
    try {
      Market_shield_Data = await Alldata("market-shield");
       const metadata = await MetaDataAPIS("/market-shield");
       const schemaMatch = metadata.head.match(
         /<script[^>]*type="application\/ld\+json"[^>]*className="rank-math-schema"[^>]*>([\s\S]*?)<\/script>/
       );
       schemaJSON = schemaMatch ? schemaMatch[1].trim() : null;
    } catch (error) {
      console.error("Error fetching data:", error);
      return <div>Error loading data.</div>;
    }
  
    if (!Market_shield_Data) {
      return <div>No data available.</div>;
    }

  return (
    <>
      <SchemaInjector schemaJSON={schemaJSON} />
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

export async function generateMetadata() {
  let metadata = await MetaDataAPIS("/market-shield");

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
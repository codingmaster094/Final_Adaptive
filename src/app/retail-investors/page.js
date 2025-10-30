import React from "react";
import Hero_without_img from "../components/Hero_without_img/Hero_without_img";
import Category from "../components/Retail-Investors/Category";
import Retailer_tools_section from "../components/Retail-Investors/Retailer_tools_section";
import Key_feuture from "../components/Retail-Investors/Key_feuture";
import Alldata from "../../../utile/AllDatafetch";
import MetaDataAPIS from "../../../utile/metadataAPI";
import dynamic from "next/dynamic";
const SchemaInjector = dynamic(() => import("../Schema-Markup/SchemaInjector"));
export default async function Page(){
  let Retail_Investors;
  let schemaJSON;
      try {
        Retail_Investors = await Alldata("retail-investors");
         const metadata = await MetaDataAPIS("/retail-investors");
    const schemaMatch = metadata.head.match(
      /<script[^>]*type="application\/ld\+json"[^>]*className="rank-math-schema"[^>]*>([\s\S]*?)<\/script>/
    );
    schemaJSON = schemaMatch ? schemaMatch[1].trim() : null;
      } catch (error) {
        console.error("Error fetching data:", error);
        return <div>Error loading data.</div>;
      }
    
      if (!Retail_Investors) {
        return <div>No data available.</div>;
      }
  
  return (
    <>
    <SchemaInjector schemaJSON={schemaJSON} />
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

export async function generateMetadata() {
  let metadata = await MetaDataAPIS("/retail-investors");

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
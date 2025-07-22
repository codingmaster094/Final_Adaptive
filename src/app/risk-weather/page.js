import React from "react";
import RiskWeather from "@/app/components/Tools/RiskWeather/RiskWeather";
import { FetchRiskData } from "@/app/api/FetchRiskData";
import ToolsTabsection from "@/app/components/ToolsTabsection";
import MetaDataAPIS from "../../../utile/metadataAPI";
import dynamic from "next/dynamic";
const SchemaInjector = dynamic(() => import("../Schema-Markup/SchemaInjector"));
export default async function RiskWeatherScreen() {
    let data = null;
    let schemaJSON;
    try {
        data = await FetchRiskData();
         const metadata = await MetaDataAPIS("/portfolioriskweathertool");
         const schemaMatch = metadata.head.match(
           /<script[^>]*type="application\/ld\+json"[^>]*class="rank-math-schema"[^>]*>([\s\S]*?)<\/script>/
         );
         schemaJSON = schemaMatch ? schemaMatch[1].trim() : null;
    } catch (error) {
        console.error("Error fetching risk data:", error);
    }   

    if (data !== 0 ) {
        return <div>No data available.</div>;
      }
    return (
      <>
        <SchemaInjector schemaJSON={schemaJSON} />
        <ToolsTabsection />
        <RiskWeather data={data} />
      </>
    );
}

export async function generateMetadata() {
  let metadata = await MetaDataAPIS("/portfolioriskweathertool")
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
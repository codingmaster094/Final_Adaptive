import React from "react";
import Ppcnew from "@/app/components/Tools/Ppcnew/Ppcnew";
import ToolsTabsection from "@/app/components/ToolsTabsection";
import { portfoliosWithManual } from "@/app/utilites/Constants";
import { FetchTickerData } from "@/app/api/FetchTickerData";

export default async function ProtectionCalculatorScreen() {
  const initPortfolio = portfoliosWithManual[0]['name'];
  const initPortfolioValue = 100000.00;

  let tickerData = null;
  try {
    tickerData = await FetchTickerData();
 
  } catch (error) {
    console.log("Error fetching ticker data:", error);
  }
  if (tickerData !== 0 ) {
    return <div>No data available.</div>;
  }
  return (
    <>
     <SchemaInjector schemaJSON={schemaJSON} />
      <ToolsTabsection />
      <Ppcnew
        initPortfolio={initPortfolio}
        initPortfolioValue={initPortfolioValue}
        initTickerData={tickerData}
      />
    </>
  );
}

export async function generateMetadata() {
  let metadata = await MetaDataAPIS("/portfolioriskweathertool");
  console.log("metadata", metadata);
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
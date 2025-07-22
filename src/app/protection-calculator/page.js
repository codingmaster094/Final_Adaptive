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
      <ToolsTabsection />
      <Ppcnew
        initPortfolio={initPortfolio}
        initPortfolioValue={initPortfolioValue}
        initTickerData={tickerData}
      />
    </>
  );
}


import React from "react";
import RiskContribution from "@/app/components/Tools/RiskContribution/RiskContribution";
import HaloRiskContribution from "@/app/components/Tools/RiskContribution/HaloRiskContribution";
import { portfolios } from "@/app/utilites/Constants";
import { FetchTickerData } from "@/app/api/FetchTickerData";
import { withHostname } from "@/app/hocs/withHostname";
import ToolsTabsection from "@/app/components/ToolsTabsection";

export default async function RiskContributionScreen({ hostLabel, ...otherProps }) {
    const initPortfolio = portfolios[0]["name"];
    const initPortfolioValue = 100000.00;
    
    // Fetch data during server rendering
    let tickerData = null;
    try {
        tickerData = await FetchTickerData();
    } catch (error) {   
        console.error("Error fetching ticker data:", error);
    }

    if (tickerData !== 0 ) {
        return <div>No data available.</div>;
      }
    return (
        <>
            <ToolsTabsection />
            {hostLabel === "halo" ? (
                <HaloRiskContribution
                    initPortfolio={initPortfolio}
                    initPortfolioValue={initPortfolioValue}
                    initTickerData={tickerData}
                    hostname={hostLabel}
                    {...otherProps}
                />
            ) : (
                <RiskContribution
                    initPortfolio={initPortfolio}
                    initPortfolioValue={initPortfolioValue}
                    initTickerData={tickerData}
                    {...otherProps}
                />
            )}
        </>
    );
}
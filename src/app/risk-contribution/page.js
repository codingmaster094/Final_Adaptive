"use client";

import React, { useState, useEffect } from "react";
import RiskContribution from "@/app/components/Tools/RiskContribution/RiskContribution";
import HaloRiskContribution from "@/app/components/Tools/RiskContribution/HaloRiskContribution";
import { portfolios } from "@/app/utilites/Constants";
import { FetchTickerData } from "@/app/api/FetchTickerData";
import { withHostname } from "@/app/hocs/withHostname";
import ToolsTabsection from "@/app/components/ToolsTabsection";
function RiskContributionScreen({ hostLabel, ...otherProps }) {
    const [tickerData, setTickerData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const initPortfolio = portfolios[0]["name"];
    const initPortfolioValue = 100000.00;

    useEffect(() => {
        const fetchTickerData = async () => {
            setIsLoading(true);
            const fetchedTickerData = await FetchTickerData();
            setTickerData(fetchedTickerData);
            setIsLoading(false);
        };

        fetchTickerData();
    }, []);

    if (!hostLabel) {
        return <div className="blank-screen"></div>;
    }

    return (
        <>
        <ToolsTabsection/>
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

export default withHostname(RiskContributionScreen);

import React from "react";
import RiskWeather from "@/app/components/Tools/RiskWeather/RiskWeather";
import { FetchRiskData } from "@/app/api/FetchRiskData";
import ToolsTabsection from "@/app/components/ToolsTabsection";
export default async function RiskWeatherScreen() {
    let data = null;
    try {
        data = await FetchRiskData();
    } catch (error) {
        console.error("Error fetching risk data:", error);
    }   

    if (data !== 0 ) {
        return <div>No data available.</div>;
      }
    return (
        <>
            <ToolsTabsection />
            <RiskWeather data={data} />
        </>
    );
}

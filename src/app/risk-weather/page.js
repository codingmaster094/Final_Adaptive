"use client";

import React, { useState, useEffect } from "react";
import RiskWeather from "@/app/components/Tools/RiskWeather/RiskWeather";
import { FetchRiskData } from "@/app/api/FetchRiskData";
import ToolsTabsection from "@/app/components/ToolsTabsection";
export default function RiskWeatherScreen() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const fetchedData = await FetchRiskData();
            setData(fetchedData);
        };
        fetchData();
    }, []);

    return (
        <>
        <ToolsTabsection/>
        <RiskWeather data={data} />
        </>
    )
}

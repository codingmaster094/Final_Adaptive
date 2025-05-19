"use client";

import React, { useState, useEffect } from "react";
import Ppcnew from "@/app/components/Tools/Ppcnew/Ppcnew";
import ToolsTabsection from "@/app/components/ToolsTabsection";
import { portfoliosWithManual } from "@/app/utilites/Constants";
import { FetchTickerData } from "@/app/api/FetchTickerData";

export default function ProtectionCalculatorScreen() {
    const [tickerData, setTickerData] = useState(null);
    const initPortfolio = portfoliosWithManual[0]['name'];
    const initPortfolioValue = 100000.00;

    useEffect(() => {
        const fetchTickerData = async () => {
            const fetchedTickerData = await FetchTickerData();
            setTickerData(fetchedTickerData);
        };
        fetchTickerData();
    }, []);

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
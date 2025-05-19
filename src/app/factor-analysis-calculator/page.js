"use client";

import React, { useState, useEffect } from "react";
import FactorAnalysis from "@/app/components/Tools/FactorAnalysis/FactorAnalysis";
import { portfolios } from "@/app/utilites/Constants";

export default function FactorAnalysisScreen() {
    const initPortfolio = portfolios[0]['name'];
    const initPortfolioValue = 100000.00;
    const version = 2

   return (
    <FactorAnalysis 
        initPortfolio={initPortfolio} 
        initPortfolioValue={initPortfolioValue} 
        version = {version}
    />
);
}
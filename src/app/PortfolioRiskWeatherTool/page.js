import React from "react";
import Hero_Section2 from "../components/Hero_Section2";
import PortfolioRisk_tools_section from "../components/PortfolioRisk_tools_section";
import Forecast_section from "../components/Forecast_section";
import PortfolioRisk_tools_market_section from "../components/PortfolioRisk_tools_market_section";
import PortfolioRisk_tools_Personalize from "../components/PortfolioRisk_tools_Personalize";
import Card_Section from "../components/Card_Section";

const page = () => {
  const heroData = {
    title:
      "Optimize Your Strategy: Timing Calls and Downside Protection with Risk Weather",
    description:
      "Risk Weather helps you decide when to write calls or buy downside protection by analyzing market conditions. It evaluates the cost of protection based on price premiums and implied volatility.",
    buttons: [
      { text: "Explore Market Shield Today", link: "#", variant: "outline" },
      { text: "Sign up Today!", link: "#", variant: "filled" },
    ],
  };

  const riskData = {
    image: "/img/measure-image.svg",
    title: "Risk Weather is",
    riskLevel: "LOW",
    description:
      "The market is currently anticipating relatively small moves down or up. Downside protection costs are cheaper than historical averages.",
    learnMoreText: "Learn more",
    chartTitle: "CBOE Volatility Index (VIX) Chart",
    chartImage: "/img/chart.svg",
  };

    const forecastData = {
      title: "Understanding Risk Weather: Your Market Forecast Tool",
      description: [
        "Adaptive Risk Weather is your go-to tool for gauging the affordability of downside protection based on market conditions.",
        "When Risk Weather is ‘Low’ or ‘Medium’, protection costs are typically lower, while ‘High’ or ‘Very High’ levels indicate higher expenses.",
      ],
      buttonText: "Sign up Today!",
      timeline: [
        "It measures market expectations for price movements by analyzing the price premium and implied volatility of publicly traded stock options.",
        "Think of it as a forecast for market conditions—calm seas or stormy weather—reflected in the cost of downside protection (e.g., put options) and the premium for upside protection (e.g., call options).",
        "Currently, the VIX (often called the ‘fear index’) serves as the primary measure.",
        "The VIX estimates the implied volatility of the S&P 500 over the next 30 days, calculated from publicly traded options.",
      ],
      resourcesTitle: "Learn more about the VIX and implied volatility",
      resources: [
        { name: "Wikipedia", link: "https://wikipedia.org" },
        { name: "Investopedia", link: "https://investopedia.com" },
        { name: "CBOE", link: "https://cboe.com" },
      ],
      image: "/img/forecast-image.webp",
      riskTitle: "Decoding VIX Risk Levels: Color-Coded Market Insights",
      riskDescription:
        "Adaptive calculates VIX risk levels using historical S&P 500 options data. The risk levels are color-coded for easy interpretation:",
      riskLevels: [
        {
          label: "Green (Low): VIX ≤ 15 (calm market conditions)",
        },
        {
          label: "Yellow (Medium): VIX 15–20 (moderate market conditions)",
        },
        {
          label: "Red (High): VIX 20–30 (stormy market conditions)",
        },
        {
          label: "Critical (Very High): VIX > 30 (extreme volatility)",
        },
      ],
      riskNote:
        "When Risk Weather is ‘Low’ or ‘Medium’, downside protection tends to be more affordable. In contrast, ‘High’ or ‘Very High’ levels signal increased costs due to higher market uncertainty.",
    };

    const PortfolioRiskToolsMarketSection = {
      title: "Safeguard Your Portfolio with Downside Protection",
      description: [
        "Investors and advisors often seek to reduce portfolio risk. Risk Weather provides insights into the cost of downside protection, helping you decide when to hedge your investments.",
        "By incorporating downside protection strategies, you can defend your portfolio against market dips and reinvest payoffs for long-term gains.",
      ],
      BTN: {
        title: "Sign up Today!",
        url: "/",
      },
      boxes: [
        {
          title: "Buy Low, Sell High",
          description:
            "Use Risk Weather Alerts to identify when protection costs are relatively low (ideal for longer-term coverage) or high (opt for shorter-term protection).",
          image: "/img/stock-trading-workplace.webp",
        },
        {
          title: "Hedge Against Market Dips",
          description:
            "Secure your investments by utilizing strategic options to hedge against unexpected market downturns.",
          image: "/img/stock-trading-workplace.webp",
        },
        {
          title: "Reinvest for Long-Term Growth",
          description:
            "Take advantage of market recoveries by reinvesting hedging payoffs into long-term assets.",
          image: "/img/stock-trading-workplace.webp",
        },
      ],
    };

    const riskWeatherContent = [
      {
        title: "Personalize Risk Weather for Your Portfolio",
        description: [
          "To customize Risk Weather for your specific portfolio, a pilot account is required.",
          "Request a demo or pilot account today to explore Adaptive’s breakthrough fintech technology.",
        ],
        highlight: "Request a demo or pilot account today!",
        link: { text: "Request Demo", url: "#" },
      },
      {
        title: "Automate Risk Weather Alerts",
        description: ["Stay informed about market conditions automatically."],
        features: [
          {
            text: "Strategic Hedging with Precision",
            icon: "/img/hedge.svg",
          },
          {
            text: "Get notified when Risk Weather changes",
            icon: "/img/alert.svg",
          },
        ],
        highlight:
          "Stay ahead of market volatility with timely, actionable insights.",
        link: { text: "Sign Up for Alerts", url: "#" },
      },
    ];

    const cardData = [
      {
        image: "/img/slide-1.jpg",
        title: "The Power Of Meeting Equity For Successful Hybrid Reunion",
        date: "14 Jul 2023",
        category: "Consulting",
        description:
          "Meeting equity is crucial for successful hybrid meetings, promoting inclusivity...",
        BTNTitle: "Read More",
        link: "/",
      },
      {
        image: "/img/slide2.jpg",
        title: "Why Financial Agility Matters Now More Than Ever",
        date: "10 Jul 2023",
        category: "Finance",
        description: "Adaptive strategies for a changing economic environment...",
        BTNTitle: "Read More",
        link: "/",
      },
      {
        image: "/img/slide3.jpg",
        title: "Top 5 Risk Management Trends of 2023",
        date: "01 Jul 2023",
        category: "Risk",
        description: "Stay ahead by knowing what’s trending in risk strategy...",
        BTNTitle: "Read More",
        link: "/",
      },
      {
        image: "/img/slide4.jpg",
        title: "How Retail Investors Are Changing the Game",
        date: "25 Jun 2023",
        category: "Investing",
        description:
          "The rise of retail investors is reshaping financial markets...",
           BTNTitle: "Read More",
        link: "/",
      },
      {
        image: "/img/slide4.jpg",
        title: "How Retail Investors Are Changing the Game",
        date: "25 Jun 2023",
        category: "Investing",
        description:
          "The rise of retail investors is reshaping financial markets...",
           BTNTitle: "Read More",
        link: "/",
      }
    ];
  return (
    <>
      <Hero_Section2 data={heroData} />
      <PortfolioRisk_tools_section data={riskData} />
      <Forecast_section data={forecastData} />
      <PortfolioRisk_tools_market_section
        data={PortfolioRiskToolsMarketSection}
      />
      <PortfolioRisk_tools_Personalize data={riskWeatherContent} /> 
      <Card_Section
        title="Stay Updated with Adaptive"
        description="Stay informed with the latest updates from Adaptive, including new tools, features, and special offers. Discover how our innovative strategies continue to redefine risk management and investment solutions for advisors, retail investors, and enterprises."
        cards={cardData}
      />
    </>
  );
};

export default page;

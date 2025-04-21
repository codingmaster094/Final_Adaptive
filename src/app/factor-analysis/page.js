import React from "react";
import Hero_without_img from "../components/Hero_without_img";
import Factor_about from "../components/Factor_about";
import FactorUnderstandingAbout from "../components/FactorUnderstandingAbout";
import Factor_Measures_of_risk from "../components/Factor_Measures_of_risk";
import Portfolio_Measure_of_fit from "../components/Portfolio_Measure_of_fit";
import Category from "../components/Category";
import Downside_protection from "../components/Downside_protection";

const Page = () => {
  const heroContent = {
    hero_text: "Optimize Your Portfolio: Calculate Hedge Ratios",
    hero_peragraph: "Hedge in liquid markets than individual stocks",
    button1: { title: "Try it now. It’s free", link: "#" },
    button2: { title: "Sign up Today!", link: "#", color: "green" },
  };

  const factorContent = {
    title:
      "Adaptive’s Factor Analysis identifies risk drivers using market indexes for US stocks and ETFs in a portfolio. It helps in downside protection by hedging liquid market indexes like the S&P 500 instead of individual stocks.",
    description: [
      "Adaptive uses key measures of risk include historical volatility and implied volatility derived from stock and index options. The factor analysis uses various market indexes with active futures and ETFs for cost-effective portfolio hedging.",
      "Fit measures include beta, R-squared, and tracking error to assess portfolio performance against factors.Understanding risk factors aids in cost-effective hedging strategies compared to individual equity positions. The cost of downside protection can impact performance but may improve risk-adjusted returns over time.",
    ],
    features: [
      "Cost-effective portfolio hedging",
      "Reduce risk of a portfolio",
      "Portfolio Performance",
      "Downside protection",
      "limits potential losses",
    ],
  };

  const basketCandidatesData = {
    description: [
      "Adaptive Factor Analysis finds hidden risk factors in market indexes within a portfolio of US stocks and ETFs. It aims to identify a market index, or a mix of indexes, that explains how the portfolio performs.",
      "For example, a mix of large-cap stocks behaves similarly to the S&P 500. The S&P 500 is an index of 500 large-cap stocks. This similarity helps with downside protection. It is often inexpensive to hedge a liquid market index like the S&P 500 than to hedge individual stocks. Knowing that the S&P 500 fits well can save money on downside protection. Using liquid market indexes can also help improve the fit. For instance, you can see if a portfolio leans toward value or growth, or large-cap or small-cap stocks.",
      "Adaptive’s Factor Analysis uses several market indexes. These indexes usually have active futures, ETFs, and options contracts. This helps with cost-effective and actionable portfolio hedging.",
    ],
    definitions: [
      {
        title: "Benchmark Portfolio",
        description:
          " refers to the S&P 500 index as a point of comparison for the portfolio being analyzed.",
      },
      {
        title: "Factor Portfolio",
        description:
          " means a group of market indexes and related ETFs. This group is used to compare with the portfolio being analyzed.",
      },
    ],
    basketCandidates: [
      {
        title: "^GSPC, the S&P 500 index",
        description:
          "This is a common ticker symbol for the S&P 500 index. It is different from an ETF like SPY that lets you invest in the index. The S&P 500 is made up of stocks with large market capitalization (“large cap”)—read more about the S&P 500 index at",
        links: [
          { text: "Wikipedia", url: "/" },
          {
            text: "Investopedia",
            url: "",
          },
          {
            text: "S&P Dow Jones Indices",
            url: "",
          },
        ],
      },
      {
        title: "^RUT, the Russell 2000 index",
        description:
          "A measure of exposure to US stocks with relatively small market capitalization (“small cap”). Like ^GSPC, this is an index, not an ETF. Read more about the Russell 2000 index at",
        links: [
          {
            text: "Wikipedia",
            url: "",
          },
          {
            text: "Investopedia",
            url: "",
          },
          { text: "Russell US Indexes", url: "" },
        ],
      },
      {
        title: "IWD, the iShares Russell 1000 Value ETF",
        description:
          "This investable ETF is based on the Russell 1000 Value index US value stocks. Read more about the Russell 1000 Value index at",
        links: [
          {
            text: "Wikipedia",
            url: "https://en.wikipedia.org/wiki/Russell_1000_Value_Index",
            des: "and",
          },
          {
            text: "Investopedia",
            url: "https://www.investopedia.com/terms/r/russell1000valueindex.asp",
            des: "read more about the Russell 1000 Value ETF at iShares.com:",
          },
          {
            text: "iShares Russell 1000 Value ETF",
            url: "https://www.ishares.com/us/products/239726/",
            des: "",
          },
        ],
      },
      {
        title: "IWF, the iShares Russell 1000 Growth ETF",
        description:
          "A measure of exposure to US growth stocks. Read more about the Russell 1000 Growth index at",
        links: [
          {
            text: "Wikipedia",
            url: "https://en.wikipedia.org/wiki/Russell_1000_Growth_Index",
            des: "",
          },
          {
            text: "Investopedia",
            url: "https://www.investopedia.com/terms/r/russell1000growthindex.asp",
            des: "read more about the Russell 1000 growth ETF at iShares.com:",
          },
          {
            text: "iShares Russell 1000 Growth ETF",
            url: "https://www.ishares.com/us/products/239727/",
            des: "",
          },
        ],
      },
    ],
  }; 

  const measuresOfRiskData = [
    {
      id: 1,
      title: "Historical Volatility",
      description:
        "This backward-looking measure of risk is based on the standard deviation of historical negative daily returns below the mean of a given stock or index. Read more about historical volatility at ",
      links: [
        {
          text: "Wikipedia",
          url: "https://en.wikipedia.org/wiki/Volatility",
          des: "and",
        },
        {
          text: "Investopedia",
          url: "https://www.investopedia.com/terms/v/volatility.asp",
          des: "",
        },
      ],
      image: "/img/measure-img-1.webp",
    },
    {
      id: 2,
      title: "Implied Volatility",
      description:
        "This forward-looking measure of risk is derived from market prices for stock and index options, which theoretically reflect the market’s expectations for the magnitude of changes in the underlying price of an asset. Possible distortions include market-moving events such as a scheduled release of quarterly earnings. The VIX, currently used as Adaptive’s measure of Market Weather, is an estimation of average implied volatility of the constituents of S&P 500 market index. Read more about implied volatility at ",
      links: [
        {
          text: "Wikipedia",
          url: "https://en.wikipedia.org/wiki/Implied_volatility",
          des: "and",
        },
        {
          text: "Investopedia",
          url: "https://www.investopedia.com/terms/i/impliedvolatility.asp",
          des: "",
        },
      ],
      image: "/img/measure-img-2.webp",
    },
  ];

   const measures = [
     {
       item_title: "Beta",
       item_desc:
         "A sensitivity of portfolio’s return on one of the four factors (also known as 'factor returns'). For example, if the portfolio’s beta on a factor is 0.5, it means when the factor’s price rises or falls by 1%, then the portfolio’s value will rise or fall by 0.5%. Beta is calculated based on daily log returns over the past five years.",
       links: [
         {
           text: "Wikipedia",
           url: "https://en.wikipedia.org/wiki/Beta_(finance)",
         },
         {
           text: "Investopedia",
           url: "https://www.investopedia.com/terms/b/beta.asp",
         },
       ],
     },
     {
       item_title: "R-squared",
       item_desc:
         "A measure of how much of a portfolio’s performance can be explained by the returns from the factors. If a portfolio’s total return precisely matches that of the factors, its R-squared is 1.00. If a portfolio’s return bears no relationship to the returns of the factors, its R-squared would be zero.",
       links: [
         {
           text: "Wikipedia",
           url: "https://en.wikipedia.org/wiki/Coefficient_of_determination",
         },
         {
           text: "Investopedia",
           url: "https://www.investopedia.com/terms/r/r-squared.asp",
         },
       ],
     },
     {
       item_title: "Tracking Error",
       item_desc:
         "A measure of precision between factors and an analyzed portfolio, where less error is a more precise approximation. Even very liquid ETFs show some tracking error compared to the index they aim to follow, aside from fees or transaction costs.",
       links: [
         {
           text: "Wikipedia",
           url: "https://en.wikipedia.org/wiki/Tracking_error",
         },
         {
           text: "Investopedia",
           url: "https://www.investopedia.com/terms/t/tracking-error.asp",
         },
       ],
     },
   ];

    const categoryData = {
      title: "Manage portfolio risk with Adaptive’s Risk Factor",
      description: `Alternative market 'factor' hedging strategies use a group of liquid market indexes. This approach is often inexpensive than hedging each stock in a portfolio. However, it comes with some trade-offs in tracking error and correlation. <strong><a href="/">What is Adaptive’s Factor Analysis?</a></strong>`,
    };

     const downsideProtectionData = {
       title: "How to manage the cost of downside protection?",
       description:
         "Downside protection, also known as a portfolio hedge, refers to investments and agreements. These pay off when the market or portfolio goes down. Common forms include ‘put options’ and futures contracts which require special expertise and trading permissions.",
       protectionText: [
         "Downside protection can limit potential losses, thus reducing the overall risk of a portfolio even while staying invested for potential growth.",
         "The cost of downside protection is a drag on a portfolio’s performance, compared to an unprotected portfolio. At the same time, downside protection can sometimes lead to improved risk-adjusted returns as compared to buy-and-hold without protection, if protection proceeds are reinvested at lower prices in a portfolio which is growing over the long term.",
       ],
       imageSrc: "/img/protection.webp",
     };

  return (
    <>
      <Hero_without_img {...heroContent} />

      <Factor_about {...factorContent} />

      <FactorUnderstandingAbout
        title="Understanding Adaptive’s Factor Analysis"
        Data={basketCandidatesData}
        basketCandidates={basketCandidatesData.basketCandidates}
      />

      <Factor_Measures_of_risk
        sectionTitle="Measures of risk and fit in Adaptive’s Factor Analysis"
        description="Adaptive’s Factor Analysis relies on a range of market data and
                statistical analysis:"
        measuresOfRiskData={measuresOfRiskData}
      />
      <Portfolio_Measure_of_fit
        title="Measure of fit to the portfolio under analysis"
        measures={measures}
        imageSrc={{
          url: "/img/under-analysisimg.webp",
          alt: "image",
          width: 629,
          height: 390,
        }}
        buttonTitle={{
          title: "Sign up Today!",
          url: "/",
        }}
        borderBlack={true}
      />
      <Category
        title={categoryData.title}
        description={categoryData.description}
      />
      <Downside_protection
        title={downsideProtectionData.title}
        description={downsideProtectionData.description}
        protectionText={downsideProtectionData.protectionText}
        imageSrc={downsideProtectionData.imageSrc}
      />
    </>
  );
};

export default Page;

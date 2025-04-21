import React from "react";
import Hero_without_img from "../components/Hero_without_img";
import PortfolioAbout from "../components/PortfolioAbout";
import Market_Protection_Estimate from "../components/Market_Protection_Estimate";
import Projected_Risk_Projected_Value from "../components/Projected_Risk_Projected_Value";
import Category from "../components/Category";

const Page = () => {
  const heroContent = {
    hero_text:
      "Check the market price to protect your portfolio with cost-effective index puts",
    hero_peragraph: "",
    button1: { title: "Explore Market Shield Today", link: "#" },
    button2: { title: "Sign up Today!", link: "#", color: "green" },
  };

  const portfolioAboutData = {
    title:
      "Adaptive Portfolio Protection Calculator looks a diversified market index that can help hedge the downside risk of your portfolio to a less volatile target such as 60/40, all the while staying largely invested for long-term growth.",
    description: [
      "Adaptive rigorous options analytics look for a diversified market index such as the S&P 500 (or Nasdaq 100 or Russell 2000) which can be used as a proxy hedge for the portfolio, along with specific options contracts (expiration and strike price) to target the downside risk equivalent of a less volatile stock-bond portfolio.",
      "Adaptive also identifies puts on individual names which can supplement the overall fit of the proxy hedge at a lower cost than puts on each of the portfolio holdings, taking advantage of the benefits of portfolio diversification to minimize hedging costs.",
      "The related [public tool link]Risk Contribution Chart[/link] provides client-friendly visualization of the individual sources of risk and diversification in a portfolio. [pricing link]Sign-up for a free trial[/link] which includes a Backtest tool to show how such hedges would have performed in the past for a selected client portfolio.",
    ],
    protectionLevels: [
      {
        title: "Protection Level",
        description:
          "A higher Protection Level protects more portfolio value and almost always costs more, all other things being equal, than a lower Protection Level, which allows for greater losses. 90% Protection means that 90% of the portfolio value is protected. In other words, portfolio losses are limited to 10% of the total portfolio value (apart from the cost of the puts), and Protection will pay out for any losses in excess of 10%. The higher the Protection Level, the more likely there will be a Protection payout.",
      },
      {
        title: "Protection Period",
        description:
          "A longer Protection Period protects portfolio value for a longer time, and almost always costs more, all other things being equal, than a shorter Protection Period. The longer the Protection Period, the more likely there will be a Protection payout. Protection can also be renewed (also known as 'rolled') for continuous protection whether each Protection Period is shorter or longer. Check the Risk Weather for a broad gauge of whether downside protection is more or less affordable based on market conditions.",
      },
    ],
    conclusion:
      "As an experienced investor you already know that you can keep clients and your own portfolios invested for long-term growth—even while smoothing out the inevitable downturns—through this use of diversification, rebalancing, and hedging. Adaptive’s streamlined options tools enable you to easily quote a live market price for downside protection of stock portfolios using cost-effective index puts which also position clients to take advantage of corrections.",
  };

   const marketProtectionData = {
     title: "What is the ‘Market Protection Estimate’?",
     description: [
       "The Market Protection Estimate is the estimated price of downside protection based on recent trading prices for a market hedge that is liquid and often relatively inexpensive. Price estimates for downside protection are currently based on the Mini-SPX Put Options on the S&P 500 market index, with approximated strike price & expiration. Further refinements are in the works for the Portfolio Protection Calculator.",
     ],
     protectionDetails: [
       "Market Protection has a trade off of accepting some tracking error, meaning that is protection for a related but not identical portfolio. See Market Protection for the specific ‘put option’ contracts being priced. Adaptive’s Portfolio Protection Calculator adjusts the number of put option contracts, and the associated price estimate, in part based on the so-called ‘beta’ of the Model Portfolio being considered for protection, often resulting in lower estimated protection costs for portfolios which are diversified for example with bonds as well as stocks. Read more about the finance use of ‘beta’ at <strong>Investopedia</strong> and <strong>Wikipedia.</strong>",
       "Larger portfolios enjoy some economies of scale, since Mini-SPX Put options are sold in 100-share increments with a notional value in the neighborhood of $60,000 each (100x the current SPY price). Rounding on smaller accounts may involve some degree of over-hedging.",
       "This technology preview of the Portfolio Protection Calculator also lists put contracts under Portfolio Protection for individual holdings. Tracking error is typically lower, as compared to Market Protection but the price is usually significantly higher.",
       "<strong>Request an Adaptive demo or pilot account to test drive our breakthrough fintech technology</strong>. Pilot users can securely link brokerage accounts for automated risk analysis and downside protection pricing.",
     ],
     imageSrc: "/img/protection-market-img.webp",
   };

    const projectedRiskData = {
      title:
        "What is Projected Risk and Projected Value in the Portfolio Protection Calculator?",
      description: [
        "The Projected Risk in Adaptive’s Portfolio Protection Calculator is a powerful tool to measure how downside protection can ‘dial down’ the risk of losses in a portfolio, even while staying in the market for expected growth over the long-term.",
        "Projected Risk compares the observed downside volatility of three different portfolios, based on the selected Model Portfolio:",
      ],
      riskMeasures: [
        {
          title: "Market Risk",
          description:
            "Measure of the observed downside volatility of the S&P 500 index. It is in effect a portfolio made up entirely of the S&P 500. Read more about the S&P 500 at Wikipedia, Investopedia and S&P Dow Jones Indices.",
        },
        {
          title: "Portfolio Risk",
          description:
            "Measure of the observed downside volatility of the selected Model Portfolio. Model Portfolios which are diversified among asset classes, such as bonds in addition to stocks, tend to have lower observed downside volatility compared to Adaptive’s measure of Market Risk.",
        },
        {
          title: "Protected Portfolio Risk",
          description:
            "This reflects the reduced downside risk of the portfolio, with the selected Protection Level. Increasing the Protection Level—in effect adding more protection—for example from ‘80%’ to ‘90%’ will tend to ‘dial down’ the Protected Portfolio Risk as more protection is added.",
        },
      ],
      tableTitles:
        "Adaptive currently uses an absolute scale for characterized Risk,based on the <strong>Risk Weather definition:</strong>",
      tableHeaders: ["PROJECTED RISK", "VIX RANGE", "NOTES"],
      tableData: [
        {
          projectedRisk: "Low",
          vixRange: "0 to 15",
          notes: "VIX 15 is Medium",
        },
        {
          projectedRisk: "Medium",
          vixRange: "15 to 20",
          notes: "VIX 20 is High",
        },
        {
          projectedRisk: "High",
          vixRange: "20 to 30",
          notes: "VIX 30 is Very High",
        },
        { projectedRisk: "Very High", vixRange: "30 or Greater", notes: "" },
      ],
      projectedValueDescription:
        "The Projected Value shows possible outcomes for the selected Model Portfolio based on the selected Protection Period, with the selected Protection Level also displayed as Potential Losses. The top and bottom projections represent the least likely outcomes, calculated as likely to occur only three in 1,000 times (three standard deviations).",
    };

const marketProtectionData1 = {
  title: "What is downside protection?",
  description: [
    "Downside protection, often called a portfolio hedge, is a general term for investments and other agreements which pay off in market and portfolio declines. Common forms include ‘put options’ and futures contracts which require special expertise and trading permissions.",
    "Downside protection can limit potential losses, thus reducing the overall risk of a portfolio even while staying invested for potential growth.",
  ],
  protectionDetails: [
    "The cost of downside protection is a drag on a portfolio’s performance, compared to an unprotected portfolio. At the same time downside protection can sometimes lead to improved risk-adjusted returns as compared to buy-and-hold without protection, if protection proceeds are reinvested at lower prices in a portfolio which is growing over the long term.",

    "Adaptive seeks to smooth out the ride—and level the playing field—so investors can stay invested for long-term growth with tools which are otherwise the province of the ultra high-net-worth.<strong>Request an Adaptive demo or pilot account to test drive our breakthrough fintech technology.</strong> an Adaptive demo or pilot account to test drive our breakthrough fintech technology. Pilot users can securely link brokerage accounts for automated risk analysis and downside protection pricing.",

    "The Portfolio Protection Calculator programmatically generates a list of possible put option contracts with strike price and expiration based on the selection of Protection Level and Protection Period. This is NOT investment advice. Consult a licensed broker for options trading information and approvals.",
  ],
  imageSrc: "/img/downside-image.webp",
};

const categoryData = {
  title: "Can I automate alerts about portfolio protection?",
  description: `Yes, you can automate Risk Weather alerts in two forms, for Daily Update email delivery, and also for less frequent Status Update, also email delivery, when the Risk Weather changes, for example from ‘Medium’ to ‘High’. More at Adaptive’s <strong>Risk Weather</strong>.`,
};

const marketProtectionData2 = {
  title:
    "Can I get personalized protection for my own investment portfolio, in addition to the available Model Portfolios?",
  description: [
    "Yes, though it requires a pilot account with customization and account-linking features not included in this public Adaptive’s Portfolio Protection Calculator tool.<strong>Request an Adaptive demo or pilot account to test drive our breakthrough fintech technology</strong>. Pilot users can securely link brokerage accounts for automated risk analysis and downside protection pricing.",
    "Adaptive’s Options Intelligence can easily, quickly power your investing with precise calculations of downside protection costs for the varied portfolios of existing and would-be clients, as well as your own accounts.",
  ],
  protectionDetails: [],
  imageSrc: "/img/protection-market-img.webp",
  ulData: [
    "The Portfolio Protection Calculator helps investors manage risk and minimize hedging costs effectively.",
    "It uses options analytics to provide downside protection for diversified portfolios like S&P 500 or Nasdaq 100.",
    "Users input portfolio value, investment goals, risk tolerance, and desired protection level for tailored strategies.",
    "Effective portfolio protection minimizes losses, maintains peace of mind, and enhances returns through diversification.",
    "Common strategies include put buying for insurance and call writing for income generation and partial protection.",
    "Index puts offer cost-effective market coverage, protecting entire portfolios against declines.",
    "The calculator guides users in selecting suitable protection strategies based on investment goals and market conditions.",
    "Adaptive Investment Solutions LLC provides tools and resources for advisors, retail investors, and enterprises.",
  ],
};
  return (
    <>
      <Hero_without_img {...heroContent} />
      <PortfolioAbout {...portfolioAboutData} />
      <Market_Protection_Estimate
        title={marketProtectionData.title}
        description={marketProtectionData.description}
        protectionDetails={marketProtectionData.protectionDetails}
        imageSrc={marketProtectionData.imageSrc}
        revers={false}
      />
      <Projected_Risk_Projected_Value
        title={projectedRiskData.title}
        description={projectedRiskData.description}
        riskMeasures={projectedRiskData.riskMeasures}
        tableTitle={projectedRiskData.tableTitles}
        tableHeaders={projectedRiskData.tableHeaders}
        tableData={projectedRiskData.tableData}
        projectedValueDescription={projectedRiskData.projectedValueDescription}
      />
      <Market_Protection_Estimate
        title={marketProtectionData1.title}
        description={marketProtectionData1.description}
        protectionDetails={marketProtectionData1.protectionDetails}
        imageSrc={marketProtectionData1.imageSrc}
        revers={true}
      />
      <Category
        title={categoryData.title}
        description={categoryData.description}
        linkText={categoryData.linkText}
        linkUrl={categoryData.linkUrl}
        dots_bg={true}
      />

      <Market_Protection_Estimate
        title={marketProtectionData2.title}
        description={marketProtectionData2.description}
        protectionDetails={marketProtectionData2.protectionDetails}
        imageSrc={marketProtectionData2.imageSrc}
        revers={false}
        ulData={marketProtectionData2.ulData}
      />
    </>
  );
};

export default Page;

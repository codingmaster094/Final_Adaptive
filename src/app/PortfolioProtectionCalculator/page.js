import React from "react";
import Hero_without_img from "../components/Hero_without_img";
import PortfolioAbout from "../components/PortfolioAbout";
import Market_Protection_Estimate from "../components/Market_Protection_Estimate";
import Projected_Risk_Projected_Value from "../components/Projected_Risk_Projected_Value";
import Category from "../components/Category";
import Alldata from "../../../utile/AllDatafetch";

const Page = async () => {
  let portfolioprotectioncalculator = null;
  try {
    portfolioprotectioncalculator = await Alldata(
      "portfolioprotectioncalculator"
    );
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  if (!portfolioprotectioncalculator) {
    return <div>No data available.</div>;
  }

  return (
    <>
      <Hero_without_img
        hero_text={portfolioprotectioncalculator?.hero_title}
        button1={portfolioprotectioncalculator?.hero_left_button}
        button2={portfolioprotectioncalculator?.hero_right_button}
      />
      <PortfolioAbout
        title={portfolioprotectioncalculator?.long_term_title}
        description={portfolioprotectioncalculator?.long_term_desc}
        protectionLevels={portfolioprotectioncalculator?.long_term_sub_desc}
        conclusion={portfolioprotectioncalculator?.long_term_last_content}
      />
      <Market_Protection_Estimate
        title={portfolioprotectioncalculator?.estimate_title}
        description={portfolioprotectioncalculator?.estimate_desc}
        protectionDetails={portfolioprotectioncalculator?.estimate_left_desc}
        imageSrc={portfolioprotectioncalculator?.estimate_image}
        revers={false}
      />
      <Projected_Risk_Projected_Value
        title={portfolioprotectioncalculator?.protection_calculator_title}
        description={portfolioprotectioncalculator?.protection_calculator_desc}
        riskMeasures={portfolioprotectioncalculator?.model_portfolio}
        tableHeaders={portfolioprotectioncalculator?.table_header}
        tableData={portfolioprotectioncalculator?.risk_rows}
        projectedValueDescription={
          portfolioprotectioncalculator?.project_risk_desc
        }
      />
      <Market_Protection_Estimate
        title={portfolioprotectioncalculator?.downside_protection_title}
        description={portfolioprotectioncalculator?.downside_protection_desc}
        protectionDetails={
          portfolioprotectioncalculator?.downside_protection_right_desc
        }
        imageSrc={portfolioprotectioncalculator?.downside_protection_image}
        revers={true}
      />
      <Category
        title={portfolioprotectioncalculator?.portfolio_protection_title}
        description={portfolioprotectioncalculator?.portfolio_protection_desc}
        dots_bg={portfolioprotectioncalculator?.dots_bg}
      />
      <Market_Protection_Estimate
        title={portfolioprotectioncalculator?.model_portfolios_title}
        description={portfolioprotectioncalculator?.model_portfolios_desc}
        protectionDetailsArray={
          portfolioprotectioncalculator?.model_portfolios_left_desc
        }
        imageSrc={portfolioprotectioncalculator?.model_portfolios_image}
        revers={false}
      />
    </>
  );
};

export default Page;

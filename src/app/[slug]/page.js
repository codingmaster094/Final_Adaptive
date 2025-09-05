import React from "react";
import AlldataPromotion from "../../../utile/AlldataPromotion";
import Key_Features from "../components/promotion/Key_Features";
import Toolssection from "../components/promotion/Toolssection";
import Scroll_tools_section from "../components/promotion/Scroll_tools_section";
import Whya_advisor from "../components/promotion/Whya_advisor";

const Page = async () => {
  let client_portfolios_unlock_hidden_income;
  try {
    client_portfolios_unlock_hidden_income = await AlldataPromotion(
      `protect-your-client-portfolios-unlock-hidden-income`
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  if (!client_portfolios_unlock_hidden_income) {
    return <div>No data available.</div>;
  }

  return (
    <>
      <Toolssection title={client_portfolios_unlock_hidden_income.title}
       description={client_portfolios_unlock_hidden_income.acf.promotion_description}
       data={client_portfolios_unlock_hidden_income.acf}/>
       <Key_Features title={client_portfolios_unlock_hidden_income.acf.key_feature_title} 
       description={client_portfolios_unlock_hidden_income.acf.key_feature_desc}
       data={client_portfolios_unlock_hidden_income.acf.key_features}/>
      <Scroll_tools_section data={client_portfolios_unlock_hidden_income.acf}/>
      <Whya_advisor data={client_portfolios_unlock_hidden_income.acf}/>
    
    </> 
  );
};

export default Page;

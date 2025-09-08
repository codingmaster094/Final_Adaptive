import React from "react";
import AlldataPromotion from "../../../../utile/AlldataPromotion";
import Key_Features from "../../components/promotion/Key_Features";
import Toolssection from "../../components/promotion/Toolssection";
import Scroll_tools_section from "../../components/promotion/Scroll_tools_section";
import Whya_advisor from "../../components/promotion/Whya_advisor";

const Page = async ({params}) => {
  const { slug } = await params;
  let client_portfolios_unlock_hidden_income;
  try {
    client_portfolios_unlock_hidden_income = await AlldataPromotion(`${slug}`);
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  if (!client_portfolios_unlock_hidden_income) {
    return <div>No data available.</div>;
  }

  return (
    <>
      <Toolssection 
      featured_image={client_portfolios_unlock_hidden_income.featured_image}
      title={client_portfolios_unlock_hidden_income.title}
      upload_video={client_portfolios_unlock_hidden_income.acf.upload_video}
       description={client_portfolios_unlock_hidden_income.acf.promotion_description}
       data={client_portfolios_unlock_hidden_income.acf}
       show_cta_section={client_portfolios_unlock_hidden_income.acf.show_cta_section}
       />
       <Key_Features title={client_portfolios_unlock_hidden_income.acf.key_feature_title} 
       description={client_portfolios_unlock_hidden_income.acf.key_feature_desc}
       data={client_portfolios_unlock_hidden_income.acf.key_features}
       show_key_feature_section_cta={client_portfolios_unlock_hidden_income.acf.show_key_feature_section_}
       />
      <Scroll_tools_section data={client_portfolios_unlock_hidden_income.acf}
      show_solutions_section_cta={client_portfolios_unlock_hidden_income.acf.show_solutions_section_}
      />
      <Whya_advisor data={client_portfolios_unlock_hidden_income.acf} 
      show_advisor_section_cta={client_portfolios_unlock_hidden_income.acf.show_advisor_section_}
      />
    
    </> 
  );
};

export default Page;

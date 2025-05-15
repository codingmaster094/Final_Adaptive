import React from "react";
import Hero_without_img from "../components/Hero_without_img/Hero_without_img";
import Enterprise_Solutions_Include from "../components/Enterprise-Illustration/Enterprise_Solutions_Include";
import Category from "../components/Retail-Investors/Category";
import Alldata from "../../../utile/AllDatafetch";

export default async function Page(){
  let EnterPrice_illustration;
  try {
    EnterPrice_illustration = await Alldata(
      "enterprise-risk-management-with-illustration"
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  if (!EnterPrice_illustration) {
    return <div>No data available.</div>;
  }

  return (
    <>
      <Hero_without_img
        hero_text={EnterPrice_illustration?.hero_title}
        hero_peragraph={EnterPrice_illustration?.hero_desc}
        button1={EnterPrice_illustration?.try_now}
        button2={EnterPrice_illustration?.sign_up_today}
      />
      <Enterprise_Solutions_Include
        Main_title={EnterPrice_illustration?.enterprise_solution__title}
        Main_des={EnterPrice_illustration?.enterprise_solution__desc}
        items={EnterPrice_illustration?.enterprise_solution_list}
      />
      <Category
        title={EnterPrice_illustration?.build_title}
        description={EnterPrice_illustration?.build_content}
        dots_bg={true}
        BTN={EnterPrice_illustration?.request_demo}
      />
    </>
  );
};



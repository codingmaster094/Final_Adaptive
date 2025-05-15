import React from "react";
import Hero_without_img from "../components/Hero_without_img/Hero_without_img";
import Enterprice_image_box from "../components/Enterprise-Images/Enterprice_image_box";
import Category from "../components/Retail-Investors/Category";
import Alldata from "../../../utile/AllDatafetch";

export default async function Page(){
     let EnterPrice_Images;
      try {
        EnterPrice_Images = await Alldata(
          "enterprise-risk-management-with-images"
        );
      } catch (error) {
        console.error("Error fetching data:", error);
        return <div>Error loading data.</div>;
      }
    
      if (!EnterPrice_Images) {
        return <div>No data available.</div>;
      }

    
  return (
    <>
      <Hero_without_img
        hero_text={EnterPrice_Images?.hero_title}
        hero_peragraph={EnterPrice_Images?.hero_desc}
        button1={EnterPrice_Images?.try_now}
        button2={EnterPrice_Images?.sign_up_today}
      />
      <Enterprice_image_box
        Main_title={EnterPrice_Images?.enterprise_solution__title}
        Main_des={EnterPrice_Images?.enterprise_solution__desc}
        itemsData={EnterPrice_Images?.enterprise_solution_list}
      />
      <Category
        title={EnterPrice_Images?.build_title}
        description={EnterPrice_Images?.build_content}
        dots_bg={true}
        BTN={EnterPrice_Images?.request_demo}
      />
    </>
  );
};


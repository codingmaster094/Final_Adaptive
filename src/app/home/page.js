import React from "react";
import Hero_Section from "../components/home/Hero_Section";
import Tools_Section from "../components/home/Tools_Section";
import Timeline_Section from "../components/home/Timeline_Section";
import Tab_section from "../components/home/Tab_section";
import Testimonial_Section from "../components/home/Testimonial_Section";
import Card_Section from "../components/home/Card_Section";
import Alldata from "../../../utile/AllDatafetch";
import AllPostGet from "../../../utile/AllPostget";

export default async function Page(){
  let Homepagedata;
  let blogsdatas;
  try {
    Homepagedata = await Alldata(`home`);
    blogsdatas = await AllPostGet();
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  if (!Homepagedata || !blogsdatas) {
    return <div>No data available.</div>;
  }

  return (
    <>
{/* 
      <Hero_Section
        hero_text={Homepagedata?.hero_title}
        hero_peragraph={Homepagedata?.hero_desc}
        button1={Homepagedata?.hero_button_left}
        button2={Homepagedata?.hero_button_right}
        image={Homepagedata?.hero_image}
      /> */}
      <Tools_Section toolsData={Homepagedata?.solutions} />

      <Timeline_Section
        title={Homepagedata?.market_shield_title}
        description={Homepagedata?.market_shield_desc}
        button_title={Homepagedata?.market_shield_button}
        m_title={Homepagedata?.market_shield_sub_title}
        Data_features={Homepagedata?.market_shiled}
        why_choose_title={Homepagedata?.why_choose_title}
        why_choose_desc={Homepagedata?.why_choose_desc}
      />

      <Tab_section
        our_free_tools_title={Homepagedata?.our_free_tools_title}
        our_free_tools_desc={Homepagedata?.our_free_tools_desc}
        free_tools={Homepagedata?.free_tools}
      />

      <Testimonial_Section
        testimonial_title={Homepagedata?.testimonial_title}
        testimonial_desc={Homepagedata?.testimonial_desc}
        testimonial_items={Homepagedata?.testimonial_items}
      />
      <Card_Section
        title={Homepagedata?.blog_title}
        description={Homepagedata?.blog_desc}
        cards={blogsdatas}
      />
    </>
  );
};


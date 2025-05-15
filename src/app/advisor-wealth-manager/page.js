import React from 'react'
import Hero_without_img from "../components/Hero_without_img/Hero_without_img";
import ForadvisorandwealthmanagerAbout from '../components/Advisor-Wealth-Manager/ForadvisorandwealthmanagerAbout';
import Advisors_Choose_Adaptive from '../components/Advisor-Wealth-Manager/Advisors_Choose_Adaptive';
import Alldata from '../../../utile/AllDatafetch';
const page = async() => {
   let AdvisorsWealthManagers;
    try {
      AdvisorsWealthManagers = await Alldata("for-advisors-wealth-managers");
    } catch (error) {
      console.error("Error fetching data:", error);
      return <div>Error loading data.</div>;
    }
  
    if (!AdvisorsWealthManagers) {
      return <div>No data available.</div>;
    }
  return (
    <>
      <Hero_without_img
        hero_text={AdvisorsWealthManagers?.hero_title}
        hero_peragraph={AdvisorsWealthManagers?.hero_desc}
        button1={AdvisorsWealthManagers?.hero_btn1}
        button2={AdvisorsWealthManagers?.sign_up}
      />
      <ForadvisorandwealthmanagerAbout
        title={AdvisorsWealthManagers?.tailored_tools_title}
        image={AdvisorsWealthManagers?.tailored_tools_image}
        content={AdvisorsWealthManagers?.tailored_tools}
      />
      <Advisors_Choose_Adaptive
        title={AdvisorsWealthManagers?.why_advisor_title}
        subtitle={AdvisorsWealthManagers?.stay_focused_title}
        description={AdvisorsWealthManagers?.stay_focused_desc}
        content={AdvisorsWealthManagers?.why_advisor}
      />
    </>
  );
}

export default page
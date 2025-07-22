import React from 'react'
import Hero_without_img from "../components/Hero_without_img/Hero_without_img";
import ForadvisorandwealthmanagerAbout from '../components/Advisor-Wealth-Manager/ForadvisorandwealthmanagerAbout';
import Advisors_Choose_Adaptive from '../components/Advisor-Wealth-Manager/Advisors_Choose_Adaptive';
import Alldata from '../../../utile/AllDatafetch';
import MetaDataAPIS from "../../../utile/metadataAPI";
import dynamic from "next/dynamic";
const SchemaInjector = dynamic(() => import("../Schema-Markup/SchemaInjector"));
const page = async() => {
   let AdvisorsWealthManagers;
     let schemaJSON;
    try {
      AdvisorsWealthManagers = await Alldata("for-advisors-wealth-managers");
      const metadata = await MetaDataAPIS("/for-advisors-wealth-managers");
    const schemaMatch = metadata.head.match(
      /<script[^>]*type="application\/ld\+json"[^>]*class="rank-math-schema"[^>]*>([\s\S]*?)<\/script>/
    );
    schemaJSON = schemaMatch ? schemaMatch[1].trim() : null;
    } catch (error) {
      console.error("Error fetching data:", error);
      return <div>Error loading data.</div>;
    }
  
    if (!AdvisorsWealthManagers) {
      return <div>No data available.</div>;
    }
  return (
    <>
    <SchemaInjector schemaJSON={schemaJSON} />
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

export async function generateMetadata() {
  let metadata = await MetaDataAPIS("/for-advisors-wealth-managers");

  // Extract metadata from the head string
  const titleMatch = metadata.head.match(/<title>(.*?)<\/title>/);
  const descriptionMatch = metadata.head.match(
    /<meta name="description" content="(.*?)"/
  );
  const canonicalMatch = metadata.head.match(
    /<link\s+rel="canonical"\s+href="([^"]+)"/i
  );
  const title = titleMatch ? titleMatch[1] : "Default Title";
  const description = descriptionMatch
    ? descriptionMatch[1]
    : "Default Description";
    const canonical =
      canonicalMatch?.[1] || "https://app.dev.adaptive-investments.com";
  return {
    title,
    description,
    alternates: {
      canonical,
    },
  };
}
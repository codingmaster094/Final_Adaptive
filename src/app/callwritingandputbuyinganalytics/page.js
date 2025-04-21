import React from 'react'
import Hero_without_img from '../components/Hero_without_img';
import Callwritingcangenerate_tools from '../components/Callwritingcangenerate_tools';
import Category from '../components/Category';
import Portfolio_Measure_of_fit from '../components/Portfolio_Measure_of_fit';
import Putbuyingtool from '../components/Putbuyingtool';

const page = async() => {
 let Callwritingcangenerate;
 try {
   const response = await fetch(
     `https://adaptive.rocket-wp.com/wp-json/custom/v1/page-acf-data?slug=call-writing`,
     {
       cache: "no-store",
     }
   );
   if (!response) {
     throw new Error(`Failed to fetch data: ${response.statusText}`);
   }

   const data = await response.json();
   Callwritingcangenerate = data;
 } catch (error) {
   console.error("Error fetching data:", error);
   return <div>Error loading data.</div>;
 }

 if (!Callwritingcangenerate) {
   return <div>No data available.</div>;
 }

  return (
    <>
      <Hero_without_img
        hero_text={Callwritingcangenerate?.hero_title}
        button1={Callwritingcangenerate?.hero_left_button}
        button2={Callwritingcangenerate?.hero_right_button}
      />
      <Callwritingcangenerate_tools
        img={Callwritingcangenerate?.features__left_image}
        title={Callwritingcangenerate?.feature_title}
        description={Callwritingcangenerate?.feature_desc}
        subtitle={Callwritingcangenerate?.features_sub_title}
        subdescription={Callwritingcangenerate?.features}
      />
      <Category
        title={Callwritingcangenerate?.cta_title}
        description={Callwritingcangenerate?.cta_desc}
        dots_bg={Callwritingcangenerate?.bgdots}
        BTN={Callwritingcangenerate?.cta_button}
      />
      <Portfolio_Measure_of_fit
        title={Callwritingcangenerate?.tool_title}
        des={Callwritingcangenerate?.tool_desc}
        buttonTitle={Callwritingcangenerate?.tool_button}
        measures={Callwritingcangenerate?.tool_items}
        imageSrc={Callwritingcangenerate?.risk_weather_right_image}
        borderBlack={Callwritingcangenerate?.borderblack}
      />

      <Putbuyingtool
        title={Callwritingcangenerate?.risk_weather_title}
        sections={Callwritingcangenerate?.risk_weather_items}
        footerText={Callwritingcangenerate?.risk_weather_below_title}
      />
    </>
  );
}

export default page
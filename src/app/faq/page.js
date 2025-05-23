import React from 'react'
import FAQ_section from '../components/Faq/FAQ_section'
import Alldata from "../../../utile/AllDatafetch";
import FaqPost from "../../../utile/FaqPost";

export default async function Page(){
  let FaqDetail;
  let FaqPostDeatil;

  try {
    FaqDetail = await Alldata(`faq`);
    FaqPostDeatil = await FaqPost();

  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  if (!FaqDetail || !FaqPostDeatil) {
    return <div>No data available.</div>;
  }
  return (
    <FAQ_section FaqDetail={FaqDetail} FaqPostDeatil={FaqPostDeatil}/>
  )
}

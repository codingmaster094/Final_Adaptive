import React from 'react'
import FAQ_section from '../components/FAQ_section'
import Alldata from "../../../utile/AllDatafetch";
import FaqPost from "../../../utile/FaqPost";

const page = async() => {
  let FaqDetail;
  let FaqPostDeatil;

  try {
    FaqDetail = await Alldata(`faq`);
    FaqPostDeatil = await FaqPost();
    console.log("FaqDetail , FaqPostDeatil" , FaqDetail , FaqPostDeatil)
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

export default page
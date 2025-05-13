import React from "react";
import BlogSingle from "../../components/BlogSingle";
import SinglePostGet from "../../../../utile/SinglePostGet";


const Page = async({params}) => {
  let SinglepostData; 
  const { slug } = await params
  SinglepostData = await SinglePostGet(slug);
  console.log('SinglepostData', SinglepostData)
  return <BlogSingle SinglePost={SinglepostData} />;
};

export default Page;
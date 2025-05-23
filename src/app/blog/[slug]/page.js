import React from "react";
import BlogSingle from "../../components/blogs/BlogSingle";
import SinglePostGet from "../../../../utile/SinglePostGet";


  export default async function Page({params}){
  let SinglepostData; 
  const { slug } = await params
  SinglepostData = await SinglePostGet(slug);
  return <BlogSingle SinglePost={SinglepostData} />;
};

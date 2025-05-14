export const dynamic = "force-dynamic"; // 👈 add this line at the top

import React from "react";
import AllPostGet from "../../../utile/AllPostget";
import AllCategorys from "../../../utile/AllCategorys";
import BlogTab from "../components/blogs/BlogTab";

export default async function Page() {
  let postData;
  let Categorys;

  try {
    postData = await AllPostGet();
    Categorys = await AllCategorys();
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  if (!postData || !Categorys) {
    return <div>No data available.</div>;
  }

  return <BlogTab AllpostData={postData} AllCategorys={Categorys} />;
}

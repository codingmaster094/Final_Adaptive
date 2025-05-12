import React from "react";
import BlogTab from "../components/BlogTab";
import AllPostGet from "../../../utile/AllPostget";
import AllCategorys from "../../../utile/AllCategorys";


const Page = async () => {
  let postData;
  let Categorys;

  try {
    postData = await AllPostGet();
    Categorys = await AllCategorys();
    console.log("Fetched postData:", postData); // Log the fetched posts
    console.log("Fetched Categorys:", Categorys); // Log the fetched categories
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  if (!postData || !Categorys) {
    return <div>No data available.</div>;
  }

  return <BlogTab AllpostData={postData} AllCategorys={Categorys} />;
};


export default Page;

export const dynamic = "force-dynamic"; // 👈 add this line at the top
import React from "react";
import AllPostGet from "../../../utile/AllPostget";
import BlogsCard from "../components/blog/BlogsCard";
import MetaDataAPIS from "../../../utile/metadataAPI";
import SchemaInjector from "../Schema-Markup/SchemaInjector";
  const page = async() => {
  let postData;
  let schemaJSON;

  try {
    postData = await AllPostGet();
    // Categorys = await AllCategorys();
     const metadata = await MetaDataAPIS("/blog");
         const schemaMatch = metadata.head.match(
           /<script[^>]*type="application\/ld\+json"[^>]*class="rank-math-schema"[^>]*>([\s\S]*?)<\/script>/
         );
         schemaJSON = schemaMatch ? schemaMatch[1].trim() : null;
  } catch (error) {
    console.error("Error fetching data:", error); 
    return <div>Error loading data.</div>;
  }
  if (!postData) {
    return <div>No data available.</div>;
  }
  return (
    <>
     <SchemaInjector schemaJSON={schemaJSON} />
     <BlogsCard AllpostData={postData}/>
   </>
  );
};
export default page;

export async function generateMetadata() {
  let metadata = await MetaDataAPIS("/blog");

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

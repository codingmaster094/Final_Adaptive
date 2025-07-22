import React from "react";
import BlogSingle from "../../components/blogs/BlogSingle";
import SinglePostGet from "../../../../utile/SinglePostGet";
import MetaDataAPIS from "../../../../utile/metadataAPI";
import dynamic from "next/dynamic";
const SchemaInjector = dynamic(() => import("../../Schema-Markup/SchemaInjector"));

  export default async function Page({params}){
  let SinglepostData; 
    let schemaJSON;
  const { slug } = await params
  try{
    SinglepostData = await SinglePostGet(slug);
     const metadata = await MetaDataAPIS(`/${slug}`);
     const schemaMatch = metadata.head.match(
       /<script[^>]*type="application\/ld\+json"[^>]*class="rank-math-schema"[^>]*>([\s\S]*?)<\/script>/
     );
     schemaJSON = schemaMatch ? schemaMatch[1].trim() : null;
  }catch (error) {
    console.error("Error fetching data:", error); 
    return <div>Error loading data.</div>;
  }

   if (!SinglepostData) {
     return <div>No data available.</div>;
   }
  return (
  <>
 <SchemaInjector schemaJSON={schemaJSON} />
  <BlogSingle SinglePost={SinglepostData} />
  </>
  )
};

export async function generateMetadata({params}) {
  const { slug } = await params;
  let metadata = await MetaDataAPIS(`/${slug}`);
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
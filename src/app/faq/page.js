import React from 'react'
import FAQ_section from '../components/Faq/FAQ_section'
import Alldata from "../../../utile/AllDatafetch";
import FaqPost from "../../../utile/FaqPost";
import MetaDataAPIS from "../../../utile/metadataAPI";
import dynamic from "next/dynamic";
const SchemaInjector = dynamic(() => import("../Schema-Markup/SchemaInjector"));
export default async function Page(){
  let FaqDetail;
  let FaqPostDeatil;
  let schemaJSON;
  try {
    FaqDetail = await Alldata(`faq`);
    FaqPostDeatil = await FaqPost();
 const metadata = await MetaDataAPIS("/faq");
         const schemaMatch = metadata.head.match(
           /<script[^>]*type="application\/ld\+json"[^>]*className="rank-math-schema"[^>]*>([\s\S]*?)<\/script>/
         );
         schemaJSON = schemaMatch ? schemaMatch[1].trim() : null;
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  if (!FaqDetail || !FaqPostDeatil) {
    return <div>No data available.</div>;
  }
  return (
    <>
 <SchemaInjector schemaJSON={schemaJSON} />
    <FAQ_section FaqDetail={FaqDetail} FaqPostDeatil={FaqPostDeatil}/>
    </>
  )
}

export async function generateMetadata() {
  let metadata = await MetaDataAPIS("/faq");
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
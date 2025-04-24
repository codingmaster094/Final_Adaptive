import React from 'react'
const page = async({params}) => {
  const {slug} = await params
  let Single_blogsdata;
 try {
   const response = await fetch(`https://adaptive.rocket-wp.com/${slug}`, {
     cache: "no-store",
   });
   if (!response) {
     throw new Error(`Failed to fetch data: ${response.statusText}`);
   }

   const data = await response.json();
   Single_blogsdata = data;
 } catch (error) {
   console.error("Error fetching data:", error);
   return <div>Error loading data.</div>;
 }

 if (!Single_blogsdata) {
   return <div>No data available.</div>;
 }
  return (
    <div>page</div>
  )
}

export default page
import Link from 'next/link'
import React from 'react'
import Webinars from '../components/Webinars/Webinars'
import Alldata from '../../../utile/AllDatafetch';

const page = async() => {
      let Weninarspagedata;
      try {
        Weninarspagedata = await Alldata(`webinars`);
      } catch (error) {
        console.error("Error fetching data:", error);
        return <div>Error loading data.</div>;
      }
    
      if (!Weninarspagedata) {
        return <div>No data available.</div>;
      }
    return (
       <Webinars Weninarspagedata={Weninarspagedata}/>
    )
}

export default page
import Link from 'next/link'
import React from 'react'
import Webinars from '../components/Webinars/Webinars'
import CategoriesWebinars from '../../../utile/CategoriesWebinarsGet';
import Webinarpost from '../../../utile/Webinarpost';

const page = async() => {
      let Weninarspagedata;
      let Categories;
      try {
        Weninarspagedata = await Webinarpost(`webinars`);
        Categories = await CategoriesWebinars();
      } catch (error) {
        console.error("Error fetching data:", error);
        return <div>Error loading data.</div>;
      }
    
      if (!Weninarspagedata || !Categories) {
        return <div>No data available.</div>;
      }
    return (
       <Webinars Weninarspagedata={Weninarspagedata} Categories={Categories}/>
    )
}

export default page
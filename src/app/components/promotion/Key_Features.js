import Image from 'next/image'
import React from 'react'

const Key_Features = () => {
  return (
   <section className="t-section lg:py-[150px] md:py-[80px] sm:py-[50px] py-6 w-full border-y border-black-200 bg-white-100">
           <div className="container">
             <div className="inner-content flex flex-col space-y-8">
               <div className="top text-black text-center w-[90%] mx-auto md:space-y-8 space-y-10">
                 <div className="title flex justify-center items-center">
                   <h2
                     className="text-h2 font-ivy font-semibold relative before:content-[''] before:w-[67px] before:h-[67px] before:rounded-full before:bg-pink before:absolute before:top-[-12px] before:left-[-16px] before:opacity-20 before:z-0"
                   >Key Features</h2>
                 </div>
                 <div
                   className="text"
                 ><p>Phasellus accumsan imperdiet tempor. Cras tincidunt, arcu nec eleifend porttitor, orci est vehicula</p></div>
               </div>
   
               <div className="inner flex flex-col lg:gap-16 sm:gap-8 gap-4">
   
                 <div
                   className={`box bg-white xsm:p-8 p-4 flex justify-start sm:gap-8 gap-6 w-full xmd:flex-row flex-col-reverse`}
                 >
                   <div className="xmd:w-1/2 w-full">
                     <Image
                       width={696}
                       height={312}
                       src="http://app.dev.adaptive-investments.com/wp-content/uploads/2025/06/Automated-put-protection-aligned-with-your-portfolio.png"
                       alt={`key-feature image`}
                       role="img"
                       className="w-full rounded-md xsm:h-full h-[200px] aspect-[2/1] inset-0 object-cover"
                     />
                   </div>
                   <div className="xmd:w-1/2 w-full xmd:space-y-8 space-y-6">
                     <div className="content font-inter flex flex-col gap-4 xmd:py-8 py-0">
                       <span
                         className="text-h5 font-semibold"
                       >Automated Put Protection aligned with your Portfolio</span>
                       <span
                       ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore euZ</p></span>
                     </div>
                   </div>
                 </div>
                 <div
                   className={`box bg-white xsm:p-8 p-4 flex justify-start sm:gap-8 gap-6 w-full xmd:flex-row-reverse flex-col-reverse`}
                 >
                   <div className="xmd:w-1/2 w-full">
                     <Image
                       width={696}
                       height={312}
                       src="http://app.dev.adaptive-investments.com/wp-content/uploads/2025/06/Education-first-interface.png"
                       alt={`key-feature image`}
                       role="img"
                       className="w-full rounded-md xsm:h-full h-[200px] aspect-[2/1] inset-0 object-cover"
                     />
                   </div>
                   <div className="xmd:w-1/2 w-full xmd:space-y-8 space-y-6">
                     <div className="content font-inter flex flex-col gap-4 xmd:py-8 py-0">
                       <span
                         className="text-h5 font-semibold"
                       >Education First Interface to Help you Learn While you Protect</span>
                       <span
                       ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                         </p>
                       </span>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </section>
  )
}

export default Key_Features
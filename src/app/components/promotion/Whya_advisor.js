import Image from 'next/image'
import React from 'react'

const why_advisorData = [
        {
            item_number: "01",
            item_title: "Customizable Strategy Overlays ",
            item_desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu </p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>\n",
            item_image: {
                ID: 4896,
                id: 4896,
                title: "Customisablestrategyoverlays",
                filename: "Customisablestrategyoverlays.png",
                filesize: 2666464,
                url: "https://app.dev.adaptive-investments.com/wp-content/uploads/2025/06/Customisablestrategyoverlays.png",
                link: "https://app.dev.adaptive-investments.com/for-advisors-wealth-managers/customisablestrategyoverlays/",
                alt: "Customisablestrategyoverlays",
                author: "7",
                description: "",
                caption: "",
                name: "customisablestrategyoverlays",
                status: "inherit",
                uploaded_to: 4714,
                date: "2025-06-09 11:35:07",
                modified: "2025-06-09 11:35:40",
                menu_order: 0,
                mime_type: "image/png",
                type: "image",
                subtype: "png",
                icon: "https://app.dev.adaptive-investments.com/wp-includes/images/media/default.png",
                width: 1492,
                height: 934,
            }
        },
        {
            item_number: "02",
            item_title: "White-Label Dashboards and Client Reporting",
            item_desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu </p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>\n",
            item_image: {
                ID: 4897,
                id: 4897,
                title: "Whitelabeldashboards&clientreporting",
                filename: "Whitelabeldashboardsclientreporting.png",
                filesize: 1956950,
                url: "https://app.dev.adaptive-investments.com/wp-content/uploads/2025/06/Whitelabeldashboardsclientreporting.png",
                link: "https://app.dev.adaptive-investments.com/for-advisors-wealth-managers/whitelabeldashboardsclientreporting/",
                alt: "White-label-dashboardsclientreporting",
                author: "7",
                description: "",
                caption: "",
                name: "whitelabeldashboardsclientreporting",
                status: "inherit",
                uploaded_to: 4714,
                date: "2025-06-09 11:36:17",
                modified: "2025-06-09 11:36:43",
                menu_order: 0,
                mime_type: "image/png",
                type: "image",
                subtype: "png",
                icon: "https://app.dev.adaptive-investments.com/wp-includes/images/media/default.png",
                width: 1492,
                height: 934,
            }
        },
        {
            item_number: "03",
            item_title: "Seamless Custodian and Portfolio Management Software Integration",
            item_desc: "<p>Seamless Custodian and Portfolio Management Software Integration</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu </p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>\n",
            item_image: {
                ID: 4898,
                id: 4898,
                title: "Seamless-custodian-portfolio-management-software",
                filename: "Seamless-custodian-portfolio-management-software.png",
                filesize: 2647101,
                url: "https://app.dev.adaptive-investments.com/wp-content/uploads/2025/06/Seamless-custodian-portfolio-management-software.png",
                link: "https://app.dev.adaptive-investments.com/for-advisors-wealth-managers/seamless-custodian-portfolio-management-software/",
                alt: "Seamless-custodian-portfolio-management-software",
                author: "7",
                description: "",
                caption: "",
                name: "seamless-custodian-portfolio-management-software",
                status: "inherit",
                uploaded_to: 4714,
                date: "2025-06-09 11:37:00",
                modified: "2025-06-09 11:37:07",
                menu_order: 0,
                mime_type: "image/png",
                type: "image",
                subtype: "png",
                icon: "https://app.dev.adaptive-investments.com/wp-includes/images/media/default.png",
                width: 1492,
                height: 934,
            }
        }
    ]
const Whya_advisor = () => {
  return (
     <section className="t-section lg:py[150px] md:py-[80px] sm:py-[50px] py-6 w-full border-b-[1px] border-b-black-200 border-b-solid border-t-[1px] border-t-black-200 border-t-solid">
              <div className="container">
                <div className="inner-content flex flex-col space-y-8">
                  <div className="heading mx-auto">
                    <h2 className="text-h2 font-ivy font-semibold relative before:content-[''] before:w-[67px] before:h-[67px] before:rounded-full before:bg-pink before:absolute before:top-[-12px] xsm:before:left-[-16px] before:left-4 before:opacity-20 before:z-0 text-black text-center">
                     Why Advisors Choose Adaptive
                    </h2>
                  </div>
        
                  <div className="inner flex lg:gap-16 gap-8 flex-col">
                    {why_advisorData?.map((item, index) => (
                      <div
                        key={index}
                        className="box1 bg-white-100 xmd:pb-6 pb-0 pt-6 xmd:pl-8 pl-6 xmd:pr-0 pr-6 flex justify-start lg:gap-16 gap-8 w-full xmd:flex-row flex-col"
                      >
                        <div className="left xmd:w-1/2 w-full xl:space-y-16 xmd:space-y-8 space-y-6">
                          <div className="number text-blue text-h2 font-ivy font-bold">
                            {String(index + 1).padStart(2, "0")}
                          </div>
                          <div className="content font-inter flex flex-col gap-2">
                            <span
                              className="text-h5 font-semibold"
                              dangerouslySetInnerHTML={{ __html: item.item_title }}
                            ></span>
                            <span
                              dangerouslySetInnerHTML={{ __html: item.item_desc }}
                            ></span>
                            <span className="font-semibold">{item.additionalInfo}</span>
                          </div>
                        </div>
                        <div className="right xmd:w-1/2 w-full">
                          <Image
                            width={696}
                            height={390}
                            src={item.item_image.url}
                            alt={`advisory image ${index + 1}`}
                            role="img"
                            className="w-full rounded-l-md xmd:rounded-b-md rounded-b-none xmd:rounded-r-none rounded-r-md h-full object-cover"
                          />
                        </div>
                      </div>
                    ))}
        
                    <div className="title relative space-y-6">
                      <h3 className="title-head text-h3 relative after:content-[''] after:absolute after:bottom-[-12px] after:left-0 after:h-[20px] after:bg-bg_line2 after:bg-center after:bg-cover after:bg-no-repeat after:transition-all after:duration-500 transition-all duration-300 ease-in-out font-bold after:w-[180px]">
                       Stay Focused on Advice. We’ll Handle the Protection
                      </h3>
                      <p>Offer more value to your clients with differentiated strategies built to perform under pressure.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
  )
}

export default Whya_advisor
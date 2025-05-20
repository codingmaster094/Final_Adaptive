"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function ToolsTabsection() {
  const pathname = usePathname();

  const tabs = [
    { label: "Portfolio Protection Calculator", path: "/protection-calculator" },
    { label: "Risk Contribution", path: "/risk-contribution" },
    { label: "Factor Analysis", path: "/forward-test" },
    { label: "Risk Weather", path: "/risk-weather" },
  ];

  return (
    <div className="tab-main bg-dots_bg xxl:pt-[193px] md:pt-[170px] pt-[150px]">
      <div className="container">
        <div className="tabs-container mx-auto">
          <div className="tab-list flex justify-start items-center xl:gap-[100px] lg:gap-[60px] md:gap-8 gap-4 lg:overflow-x-hidden overflow-x-auto no-scrollbar lg:whitespace-pre-wrap whitespace-nowrap">
            {tabs.map((tab, index) => (
              <Link
                href={tab.path}
                prefetch={true}
                key={index}
                className={`tab-button1 p-4 text-lg font-inter font-medium text-black transition-all duration-300 ease-in-out ${
                  pathname === tab.path ? "bg-[#eea7df4d]" : ""
                }`}
              >
                {tab.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

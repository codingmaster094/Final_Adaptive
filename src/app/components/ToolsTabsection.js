"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
export default function ToolsTabsection() {
  const pathname = usePathname();

  const tabs = [
    { label: "Portfolio Protection Calculator", path: "/protection-calculator" },
    { label: "Risk Contribution", path: "/risk-contribution" },
    { label: "Factor Analysis", path: "/forward-test" },
    { label: "Risk Weather", path: "/risk-weather" },
  ];

  return (
    <div className="tabs-container mx-auto mt-[150px]">
      <div className="tab-list flex md:justify-center justify-start items-center xlg:gap-[100px] lg:gap-[48px] gap-4 md:overflow-x-hidden overflow-x-auto no-scrollbar">
        {tabs.map((tab, index) => (
          <Link
            href={tab.path}
            key={index}
            className={`tab-button1 p-2 text-lg font-inter font-medium text-black transition-all duration-300 ease-in-out ${
              pathname === tab.path ? "bg-[#eea7df4d]" : ""
            }`}
          >
            {tab.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

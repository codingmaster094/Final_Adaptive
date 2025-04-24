'use client'
import Image from "next/image";
import React, { useState } from "react";
import Logo from "./Logo";
import Link from "next/link";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="header fixed py-[34px] border-b-black-200 border-b-solid border-b-[1px] w-full left-0 top-0 z-[99] bg-white">
      <div className="container">
        <div className="w-full flex justify-between items-center gap:3 2xl:gap-8">
          <div className="logo max-w-[170px] h-auto">
            <Link href="/" role="link">
              <Logo />
            </Link>
          </div>

          {/* Sidebar Navigation */}
          <nav
            className={`fixed lg:relative top-0 left-0 w-[300px] lg:w-auto h-full lg:h-auto p-6 lg:p-0 bg-blue lg:bg-transparent flex lg:justify-center justify-start lg:items-center items-start gap-[48px] flex-col lg:flex-row z-[9999] transition-transform duration-500 ease-in-out transform ${
              isSidebarOpen
                ? "translate-x-0"
                : "-translate-x-full lg:translate-x-0"
            }`}
          >
            {/* Close Button */}
            <button
              className="lg:hidden vs-menu-toggle w-5 h-5 absolute top-3 right-3"
              onClick={toggleSidebar}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 384 512"
              >
                <path
                  d="M342.6 150.6a32 32 0 0 0-45.3-45.3L192 210.7 86.6 105.4a32 32 0 0 0-45.3 45.3L146.7 256 41.4 361.4a32 32 0 0 0 45.3 45.3L192 301.3l105.4 105.3a32 32 0 0 0 45.3-45.3L237.3 256l105.3-105.4z"
                  fill="#ffffff"
                ></path>
              </svg>
            </button>

            <ul className="flex lg:items-center items-start gap-4 2xl:gap-[55px] text-body lg:flex-row flex-col lg:text-black text-white font-inter font-medium">
              <li>
                <Link href="/factor-analysis">Factor Analysis</Link>
              </li>
              <li>
                <Link href="/PortfolioProtectionCalculator">
                  PortfolioProtectionCalculator
                </Link>
              </li>
              <li>
                <Link href="/PortfolioRiskWeatherTool">
                  PortfolioRiskWeatherTool
                </Link>
              </li>
              <li>
                <Link href="/callwritingandputbuyinganalytics">
                  Callwritingandputbuyinganalytics
                </Link>
              </li>

              {/* <li>
                <Link href="/">Services for</Link>
              </li>
              <li>
                <Link href="/">Our Services</Link>
              </li>
              <li>
                <Link href="/">Tools</Link>
              </li>
              <li>
                <Link href="/">Pricing</Link>
              </li>
              <li>
                <Link href="/">Resources</Link>
              </li> */}
            </ul>
            <div className="button-area flex items-center">
              <div className="btn-link *:text-4 border-green hover:border-black">
                <a href="#" role="link">
                  Sign In
                </a>
              </div>
              <div className="btn-green *:text-4">
                <a href="#" role="link">
                  Sign Up
                </a>
              </div>
            </div>
          </nav>

          {/* Hamburger Menu Button */}
          <div
            className="menu w-10 h-10 p-1 flex flex-col justify-center items-center gap-1 border-blue border-[1px] border-solid cursor-pointer lg:hidden"
            onClick={toggleSidebar}
          >
            <div className="bg-blue w-8 h-[3px] transition-all duration-300"></div>
            <div className="bg-blue w-8 h-[3px] transition-all duration-300"></div>
            <div className="bg-blue w-8 h-[3px] transition-all duration-300"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import Logo from "./Logo";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Refs for all dropdown buttons and menus
  const dropdownRefs = useRef([]);

  // For storing menu elements separately
  const dropdownMenus = useRef([]);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  // Helper to assign refs for each dropdown
  const setDropdownRef = (index, button, menu) => {
    dropdownRefs.current[index] = { button, menu };
  };

  // Detect mobile
  const isMobile = () =>
    typeof window !== "undefined" && window.innerWidth <= 1024;

  // Functions to open/close menus
  const openMenu = (menuElement) => {
    if (menuElement) {
      menuElement.style.maxHeight = menuElement.scrollHeight + "px";
      menuElement.classList.remove(
        "border-transparent",
        "opacity-0",
        "invisible"
      );
      menuElement.classList.add("border-black-200", "opacity-1", "visible");
      if (isMobile()) {
        menuElement.classList.add("mt-3");
      }
    }
  };

  const closeMenu = (menuElement) => {
    if (menuElement) {
      menuElement.style.maxHeight = "0px";
      menuElement.classList.remove("border-black-200", "opacity-1", "visible");
      menuElement.classList.add("border-transparent", "opacity-0", "invisible");
      if (isMobile()) {
        menuElement.classList.remove("mt-3");
      }
    }
  };

  // Attach event listeners to all dropdowns
  useEffect(() => {
    dropdownRefs.current.forEach(({ button, menu }) => {
      let hideTimeout;

      if (!button || !menu) return;

      const handleMouseEnterButton = () => {
        if (isMobile()) return;
        clearTimeout(hideTimeout);
        openMenu(menu);
      };

      const handleMouseLeaveButton = () => {
        if (isMobile()) return;
        hideTimeout = setTimeout(() => closeMenu(menu), 200);
      };

      const handleMouseEnterMenu = () => {
        if (isMobile()) return;
        clearTimeout(hideTimeout);
        openMenu(menu);
      };

      const handleMouseLeaveMenu = () => {
        if (isMobile()) return;
        hideTimeout = setTimeout(() => closeMenu(menu), 200);
      };

      const handleClickButton = (e) => {
        if (!isMobile()) return;
        e.preventDefault();
        const isOpen = menu.style.maxHeight && menu.style.maxHeight !== "0px";
        if (isOpen) {
          closeMenu(menu);
        } else {
          openMenu(menu);
        }
      };

      // Attach listeners
      button.addEventListener("mouseenter", handleMouseEnterButton);
      button.addEventListener("mouseleave", handleMouseLeaveButton);
      menu.addEventListener("mouseenter", handleMouseEnterMenu);
      menu.addEventListener("mouseleave", handleMouseLeaveMenu);
      button.addEventListener("click", handleClickButton);

      // Cleanup
      return () => {
        button.removeEventListener("mouseenter", handleMouseEnterButton);
        button.removeEventListener("mouseleave", handleMouseLeaveButton);
        menu.removeEventListener("mouseenter", handleMouseEnterMenu);
        menu.removeEventListener("mouseleave", handleMouseLeaveMenu);
        button.removeEventListener("click", handleClickButton);
        clearTimeout(hideTimeout);
      };
    });
  }, []);

  return (
    <header className="header fixed lg:py-0 py-[34px] border-b-black-200 border-b-solid border-b-[1px] w-full left-0 top-0 z-[99] bg-white">
      <div className="container">
        <div className="w-full flex justify-between items-center gap-3 2xl:gap-8">
          {/* Logo */}
          <div className="logo max-w-[170px]">
            <Link href="/" role="link">
              <Logo />
            </Link>
          </div>

          {/* Navigation */}
          <div
            className={`curtain lg:static fixed left-0 top-0 lg:w-auto w-full lg:h-auto h-full lg:bg-transparent bg-[rgba(0,0,0,0.5)] lg:opacity-1 lg:visible transition duration-300 z-[9999] ${
              isSidebarOpen
                ? "translate-x-0"
                : "lg:translate-x-0 -translate-x-full"
            }`}
          >
            <nav
              className={`fixed left-0 transform lg:translate-x-0 transition-transform duration-500 lg:left-0 top-0 lg:relative w-[300px] lg:w-auto h-full lg:h-auto px-6 py-12 lg:p-0 bg-blue lg:bg-transparent flex lg:justify-center justify-start lg:items-center items-start gap-[48px] flex-col lg:flex-row overflow-y-auto lg:overflow-visible z-[9999] no-scrollbar ${
                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              {/* Sidebar toggle button */}
              <button
                className="lg:hidden vs-menu-toggle w-5 h-5 absolute top-3 right-3"
                onClick={toggleSidebar}
              >
                {/* Hamburger icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 384 512"
                >
                  <path
                    d="M342.6 150.6a32 32 0 0 0-45.3-45.3L192 210.7 86.6 105.4a32 32 0 0 0-45.3 45.3L146.7 256 41.4 361.4a32 32 0 0 0 45.3 45.3L192 301.3l105.4 105.3a32 32 0 0 0 45.3-45.3L237.3 256l105.3-105.4z"
                    fill="#fff"
                  />
                </svg>
              </button>

              {/* Navigation list with static items */}
              <ul className="flex lg:items-center items-start gap-4 2xl:gap-3 text-body lg:flex-row flex-col lg:text-black text-white font-inter font-medium lg:w-auto w-full">
                {/* First Dropdown: Services for */}
                <li className="relative w-full lg:w-auto">
                  {/* Button */}
                  <Link
                    href="#"
                    role="button"
                    className="group flex items-center justify-between lg:text-black text-white hover:lg:text-blue cursor-pointer w-full lg:w-auto"
                    ref={(el) => {
                      if (el) {
                        setDropdownRef(0, el, dropdownMenus.current[0]);
                      }
                    }}
                  >
                    Services for
                    <span className="down-arrow ml-2">
                      <svg
                        className="transition-colors duration-300 !fill-white lg:!fill-black group-hover:fill-blue"
                        height="14"
                        width="14"
                        viewBox="0 0 330 330"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z" />
                      </svg>
                    </span>
                  </Link>
                  {/* Menu */}
                  <div
                    className="dropdown-content single-column static lg:absolute left-1/2 top-full lg:bg-white bg-transparent rounded overflow-hidden transition-all duration-300 max-h-0 lg:max-h-0 z-10 lg:w-[20vw] w-full lg:-translate-x-[60%] lg:shadow-xl shadow-[0px_4px_10px_rgba(255,255,255,0.5)] border-t border-t-black-200 opacity-0 invisible"
                    ref={(el) => {
                      if (el) {
                        dropdownMenus.current[0] = el;
                        setDropdownRef(0, dropdownRefs.current[0]?.button, el);
                      }
                    }}
                    data-dropdown-menu
                  >
                    <div className="listing grid grid-cols-1 gap-4 p-4">
                      {/* Static list items for 'Services for' */}
                      <ul className="flex flex-col xmd:p-4 !p-0 space-y-4 lg:text-black text-white w-full">
                        <li>
                          <Link
                            href="/advisor-wealth-manager"
                            aria-label="nav-link"
                            role="link"
                            className="hover:lg:text-blue w-full"
                            onClick={() => setIsSidebarOpen(false)}
                          >
                            Advisors & Wealth Managers
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/retail-investors "
                            aria-label="nav-link"
                            role="link"
                            className="hover:lg:text-blue w-full"
                            onClick={() => setIsSidebarOpen(false)}
                          >
                            Retail Investors
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/enterprise-Illustration"
                            aria-label="nav-link"
                            role="link"
                            className="hover:lg:text-blue w-full"
                            onClick={() => setIsSidebarOpen(false)}
                          >
                            Enterprises
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                {/* Second Dropdown: Our Services */}
                <li className="relative w-full lg:w-auto">
                  {/* Button */}
                  <Link
                    href="#"
                    role="button"
                    className="group flex items-center justify-between lg:text-black text-white hover:lg:text-blue cursor-pointer w-full lg:w-auto"
                    ref={(el) => {
                      if (el) {
                        setDropdownRef(1, el, dropdownMenus.current[1]);
                      }
                    }}
                  >
                    Our Services
                    <span className="down-arrow ml-2">
                      <svg
                        className="transition-colors duration-300 !fill-white lg:!fill-black group-hover:fill-blue"
                        height="14"
                        width="14"
                        viewBox="0 0 330 330"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                          fill=""
                        />
                      </svg>
                    </span>
                  </Link>
                  <div
                    className="dropdown-content multi-column static lg:absolute left-1/2 top-full lg:bg-white bg-transparent rounded overflow-hidden transition-all duration-300 max-h-0 lg:max-h-0 z-10 xl:w-[25vw] lg:w-[30vw] w-full lg:-translate-x-[60%] lg:shadow-xl shadow-[0px_4px_10px_rgba(255,255,255,0.5)] border-t border-t-black-200 opacity-0 invisible"
                    ref={(el) => {
                      if (el) {
                        dropdownMenus.current[1] = el;
                        setDropdownRef(1, dropdownRefs.current[1]?.button, el);
                      }
                    }}
                    data-dropdown-menu
                  >
                    <div className="listing grid lg:grid-cols-2 grid-cols-1 gap-4 p-4">
                      <ul className="flex flex-col xmd:p-4 !p-0  space-y-4 lg:text-black text-white w-full">
                        <li>
                          <Link
                            href="/market-shield"
                            aria-label="nav-link"
                            role="link"
                            className="hover:lg:text-blue w-full"
                            onClick={() => setIsSidebarOpen(false)}
                          >
                            Market Shield
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/factor-analysis"
                            aria-label="nav-link"
                            role="link"
                            className="hover:lg:text-blue w-full"
                            onClick={() => setIsSidebarOpen(false)}
                          >
                            Factor Analysis
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/portfolio-protection-calculator"
                            aria-label="nav-link"
                            role="link"
                            className="hover:lg:text-blue w-full"
                            onClick={() => setIsSidebarOpen(false)}
                          >
                            Protection Calculator
                          </Link>
                        </li>
                      </ul>
                      <ul className="flex flex-col xmd:p-4 !p-0 space-y-4 lg:text-black text-white">
                        <li>
                          <Link
                            href="/portfolio-risk-Weather"
                            aria-label="nav-link"
                            role="link"
                            className="hover:lg:text-blue w-full"
                            onClick={() => setIsSidebarOpen(false)}
                          >
                            Risk Weather
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/callwriting"
                            aria-label="nav-link"
                            role="link"
                            className="hover:lg:text-blue w-full"
                            onClick={() => setIsSidebarOpen(false)}
                          >
                            Call Writing
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="relative w-full lg:w-auto">
                  {/* Button */}
                  <Link
                    href="#"
                    role="button"
                    className="group flex items-center justify-between lg:text-black text-white hover:lg:text-blue cursor-pointer w-full lg:w-auto"
                    ref={(el) => {
                      if (el) {
                        setDropdownRef(2, el, dropdownMenus.current[2]);
                      }
                    }}
                  >
                    Tools
                    <span className="down-arrow ml-2">
                      <svg
                        className="transition-colors duration-300 !fill-white lg:!fill-black group-hover:fill-blue"
                        height="14"
                        width="14"
                        viewBox="0 0 330 330"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z" />
                      </svg>
                    </span>
                  </Link>
                  {/* Menu */}
                  <div
                    className="dropdown-content single-column static lg:absolute left-1/2 top-full lg:bg-white bg-transparent rounded overflow-hidden transition-all duration-300 max-h-0 lg:max-h-0 z-10 lg:w-[20vw] w-full lg:-translate-x-[60%] lg:shadow-xl shadow-[0px_4px_10px_rgba(255,255,255,0.5)] border-t border-t-black-200 opacity-0 invisible"
                    ref={(el) => {
                      if (el) {
                        dropdownMenus.current[2] = el;
                        setDropdownRef(2, dropdownRefs.current[2]?.button, el);
                      }
                    }}
                    data-dropdown-menu
                  >
                    <div className="listing grid grid-cols-1 gap-4 p-4">
                      <ul className="flex flex-col xmd:p-4 !p-0 space-y-4 lg:text-black text-white w-full">
                        <li>
                          <Link
                            href="/protection-calculator"
                            aria-label="nav-link"
                            role="link"
                            className="hover:lg:text-blue w-full"
                            onClick={() => setIsSidebarOpen(false)}
                          >
                            Protection Calculator
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/risk-contribution"
                            aria-label="nav-link"
                            role="link"
                            className="hover:lg:text-blue w-full"
                            onClick={() => setIsSidebarOpen(false)}
                          >
                            Risk Contribution
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/forward-test"
                            aria-label="nav-link"
                            role="link"
                            className="hover:lg:text-blue w-full"
                            onClick={() => setIsSidebarOpen(false)}
                          >
                            Forward Test
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/risk-weather"
                            aria-label="nav-link"
                            role="link"
                            className="hover:lg:text-blue w-full"
                            onClick={() => setIsSidebarOpen(false)}
                          >
                            Risk Weather
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li>
                  <Link href="#">Pricing</Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    aria-label="nav-link"
                    role="link"
                    className="hover:lg:text-blue w-full"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    aria-label="nav-link"
                    role="link"
                    className="hover:lg:text-blue w-full"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Faq
                  </Link>
                </li>
              </ul>

              {/* Buttons */}
              <div className="button-area flex items-center">
                <div className="btn-link *:text-4 border-green hover:border-black cursor-pointer">
                  <Link href="#" role="link">
                    Sign In
                  </Link>
                </div>
                <div className="btn-green *:text-4">
                  <Link href="#" role="link">
                    Sign Up
                  </Link>
                </div>
              </div>
            </nav>
          </div>

          {/* Hamburger menu for mobile */}
          <div
            className="menu w-10 h-10 p-1 flex flex-col justify-center items-center gap-1 border-blue border-[1px] border-solid cursor-pointer lg:hidden"
            onClick={toggleSidebar}
          >
            <div className="bg-blue w-8 h-[3px]"></div>
            <div className="bg-blue w-8 h-[3px]"></div>
            <div className="bg-blue w-8 h-[3px]"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

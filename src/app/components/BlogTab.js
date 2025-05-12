"use client";
import React, { useState, useMemo } from "react";
import BlogSection from "./BlogSection";
import SearchInput from "./SearchInput";

const BlogTab = ({ AllpostData, AllCategorys }) => {
  const [activeTab, setActiveTab] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const displayCategories = AllCategorys?.filter(
    (cat) => cat.name !== "Uncategorized"
  );

  const categoryNameFromSlug = useMemo(() => {
    return displayCategories?.find((cat) => cat.slug === activeTab)?.name;
  }, [activeTab, displayCategories]);

  const filteredByCategory = useMemo(() => {
    if (activeTab === "All") {
      return AllpostData || [];
    } else {
      return (AllpostData || []).filter((blog) =>
        blog.category_names?.includes(categoryNameFromSlug)
      );
    }
  }, [AllpostData, activeTab, categoryNameFromSlug]);

  const searchedBlogs = useMemo(() => {
    const lowerSearchTerm = searchTerm.toLowerCase();

    // If "All" is selected, filter posts by category name typed in search
    let blogsToSearch = AllpostData || [];

    if (activeTab === "All" && searchTerm) {
      const matchedCategories = displayCategories.filter((cat) =>
        cat.name.toLowerCase().includes(lowerSearchTerm)
      );

      if (matchedCategories.length > 0) {
        // Filter blogs by matching category if a category name is typed
        blogsToSearch = AllpostData.filter((blog) =>
          blog.category_names?.some((category) =>
            matchedCategories.some(
              (matchedCat) =>
                category.toLowerCase() === matchedCat.name.toLowerCase()
            )
          )
        );
      }
    } else if (activeTab !== "All") {
      // In other tabs (specific category selected), search within that category
      blogsToSearch = filteredByCategory;
    }

    return blogsToSearch.filter((blog) => {
      const title = blog.title?.rendered || "";
      const titleMatch = title.toLowerCase().includes(lowerSearchTerm);

      // Check for a match in categories if the search term matches the category
      const categoryMatch =
        blog.category_names?.some((category) =>
          category.toLowerCase().includes(lowerSearchTerm)
        ) || false;

      return titleMatch || categoryMatch; // Return blogs that match either title or category
    });
  }, [
    activeTab,
    AllpostData,
    filteredByCategory,
    searchTerm,
    displayCategories,
  ]);

  const renderBlogSections = () => {
    if (!searchedBlogs || searchedBlogs.length === 0) {
      return (
        <div className="text-center py-10">
          <img
            src="/img/noResultFOund.png"
            alt="No results found"
            className="mx-auto max-w-[300px]"
          />
          <p className="text-gray-600">No results found.</p>
        </div>
      );
    }

    return (
      <BlogSection
        key={activeTab}
        blogs={searchedBlogs}
        title={activeTab === "All" ? null : categoryNameFromSlug}
        activeTab={activeTab}
      />
    );
  };

  return (
    <section className="hero-section pt-[100px] border-b border-black-200 bg-white-100">
      <div className="flex justify-start items-start relative xmd:flex-row flex-col">
        {/* Sidebar Categories */}
        <div className="flex items-center justify-center px-2 py-6 xmd:w-[20%] w-full xmd:sticky top-[120px] shadow-lg xmd:shadow-none">
          <div className="container">
            <div className="relative flex items-center w-full">
              <div className="main-btns flex xmd:flex-col flex-row sm:gap-2 gap-6 sm:overflow-x-visible overflow-x-auto sm:whitespace-pre-wrap whitespace-nowrap scroll-smooth no-scrollbar text-black w-full text-body font-medium font-inter xmd:justify-start sm:justify-center justify-start">
                <button
                  className={`menut-btn p-2 w-full xmd:text-left text-center ${
                    activeTab === "All" ? "bg-pink-80 font-semibold" : ""
                  }`}
                  onClick={() => setActiveTab("All")}
                >
                  {"All"}
                </button>
                {displayCategories?.map((tab) => (
                  <button
                    key={tab.slug}
                    className={`menut-btn p-2 w-full xmd:text-left text-center ${
                      activeTab === tab.slug ? "bg-pink-80 font-semibold" : ""
                    }`}
                    onClick={() => setActiveTab(tab.slug)}
                  >
                    {tab.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <div className="inner xmd:px-10 px-2 py-10 xmd:w-[80%] w-full">
          <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          {renderBlogSections()}
        </div>
      </div>
    </section>
  );
};

export default BlogTab;

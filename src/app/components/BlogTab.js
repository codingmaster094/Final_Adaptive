"use client";
import React, { useState } from "react";
import BlogSection from "./BlogSection";
import SearchInput from "./SearchInput";

const BlogTab = ({ AllpostData, AllCategorys }) => {
  const [activeTab, setActiveTab] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const displayCategories = AllCategorys?.filter(
    (cat) => cat.name !== "Uncategorized"
  );

  const categoryNameFromSlug = displayCategories.find(
    (cat) => cat.slug === activeTab
  )?.name;

  const searchedBlogs = AllpostData?.filter((blog) => {
    return blog.title?.rendered
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  });


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

    if (activeTab === "All") {
      return (
        <>
          {displayCategories.map((category) => {
            const categoryBlogs = searchedBlogs.filter((b) =>
              b.category_names.includes(category.name)
            );
            return categoryBlogs.length > 0 ? (
              <BlogSection
                key={category.slug}
                title={category.name}
                description=""
                blogs={categoryBlogs}
              />
            ) : null;
          })}
        </>
      );
    } else {
      const categoryBlogs = searchedBlogs.filter((b) =>
        b.category_names.includes(categoryNameFromSlug)
      );
      return categoryBlogs.length > 0 ? (
        <BlogSection
          key={activeTab}
          title={categoryNameFromSlug}
          description=""
          blogs={categoryBlogs}
        />
      ) : (
        <div className="text-center py-10">
          <img
            src="/img/noResultFOund.png"
            alt="No results found"
            className="mx-auto max-w-[300px]"
          />
          <p className="mt-4 text-gray-600">No blogs found in this category.</p>
        </div>
      );
    }
  };


  return (
    <section className="hero-section pt-[100px] border-b border-black-200 bg-white-100">
      <div className="flex justify-start items-start relative xmd:flex-row flex-col">
        <div className="flex items-center justify-center px-2 py-6 xmd:w-[20%] w-full xmd:sticky top-[120px] shadow-lg xmd:shadow-none">
          <div className="container">
            <div className="relative flex items-center w-full">
              <div className="main-btns flex xmd:flex-col flex-row lg:gap-8 gap-4 sm:overflow-x-visible overflow-x-auto sm:whitespace-pre-wrap whitespace-nowrap scroll-smooth no-scrollbar text-black w-full text-body font-medium font-inter xmd:justify-start sm:justify-center justify-start">
                <button
                  className={`menut-btn p-2 w-full xmd:text-left text-center ${
                    activeTab === "All" ? "bg-pink-80 font-semibold" : ""
                  }`}
                  onClick={() => setActiveTab("All")}
                >
                  {"All"}
                </button>
                {displayCategories?.map((tab) => {
                  return (
                    <button
                      key={tab.slug}
                      className={`menut-btn p-2 w-full xmd:text-left text-center ${
                        activeTab === tab.slug ? "bg-pink-80 font-semibold" : ""
                      }`}
                      onClick={() => setActiveTab(tab.slug)}
                    >
                      {tab.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="inner xmd:px-10 px-2 py-10 xmd:w-[80%] w-full">
          <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          {renderBlogSections()}
        </div>
      </div>
    </section>
  );
};

export default BlogTab;

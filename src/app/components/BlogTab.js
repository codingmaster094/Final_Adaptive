"use client";
import React, { useState, useMemo, useEffect } from "react";
import BlogSection from "./BlogSection";
import SearchInput from "./SearchInput";

const BlogTab = ({ AllpostData, AllCategorys }) => {
  const [activeTab, setActiveTab] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(3);
  const [loadingMore, setLoadingMore] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const displayCategories = AllCategorys?.filter(
    (cat) => cat.name !== "Uncategorized"
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categoryNameFromSlug = useMemo(() => {
    return displayCategories?.find((cat) => cat.slug === activeTab)?.name;
  }, [activeTab, displayCategories]);

  // Filter posts by category
  const filteredByCategory = useMemo(() => {
    if (activeTab === "All") {
      return AllpostData || [];
    } else {
      return (AllpostData || []).filter((blog) =>
        blog.category_names?.some(
          (category) =>
            category.trim().toLowerCase() ===
            categoryNameFromSlug?.trim().toLowerCase()
        )
      );
    }
  }, [AllpostData, activeTab, categoryNameFromSlug]);

  // Sanitize posts
  const sanitizedPosts = useMemo(() => {
    return (AllpostData || []).filter(
      (blog) =>
        blog?.title?.rendered &&
        Array.isArray(blog.category_names) &&
        blog.category_names.length > 0
    );
  }, [AllpostData]);

  // Search and filter posts
  const searchedBlogs = useMemo(() => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    let blogsToSearch = sanitizedPosts;

    if (activeTab === "All") {
      if (searchTerm) {
        const matchedCategories = displayCategories.filter((cat) =>
          cat.name.toLowerCase().includes(lowerSearchTerm)
        );

        if (matchedCategories.length > 0) {
          blogsToSearch = sanitizedPosts.filter((blog) =>
            blog.category_names?.some((category) =>
              matchedCategories.some(
                (matchedCat) =>
                  category.toLowerCase() === matchedCat.name.toLowerCase()
              )
            )
          );
        }
      }
    } else {
      blogsToSearch = filteredByCategory;
    }

    return blogsToSearch.filter((blog) => {
      const title = blog.title?.rendered?.toLowerCase() || "";
      const titleMatch = title.includes(lowerSearchTerm);

      const categoryMatch = blog.category_names?.some((category) =>
        category.toLowerCase().includes(lowerSearchTerm)
      );

      return titleMatch || categoryMatch;
    });
  }, [
    activeTab,
    searchTerm,
    displayCategories,
    filteredByCategory,
    sanitizedPosts,
  ]);

  // Function to load more posts
  const loadMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 3);
      setLoadingMore(false);
    }, 300); // simulate delay
  };

  // Detect when near bottom of page to load more
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = document.body.offsetHeight - 100; // 100px from bottom

      if (
        scrollPosition >= threshold &&
        !loadingMore &&
        searchedBlogs.length > visibleCount
      ) {
        loadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [searchedBlogs, visibleCount, loadingMore]);

  // Show only posts up to visibleCount
  const postsToDisplay = searchedBlogs.slice(0, visibleCount);

  const renderBlogSections = () => {
    if (!postsToDisplay || postsToDisplay.length === 0) {
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
        title={activeTab === "All" ? null : categoryNameFromSlug}
        description={null}
        blogs={postsToDisplay}
        loadMore={loadMore}
        loading={loadingMore}
        hasMore={searchedBlogs.length > visibleCount}
      />
    );
  };

  return (
    <section className="hero-section pt-[100px] border-b border-black-200 bg-white-100">
      <div className="flex justify-start items-start relative xmd:flex-row flex-col">
        {/* Sidebar for categories */}
        <div className="flex items-center justify-center px-2 py-6 xmd:w-[20%] w-full xmd:sticky top-[120px] shadow-lg xmd:shadow-none">
          <div className="container">
            <div className="relative flex items-center w-full">
              <div className="main-btns flex xmd:flex-col flex-row sm:gap-2 gap-6 sm:overflow-x-visible overflow-x-auto sm:whitespace-pre-wrap whitespace-nowrap scroll-smooth no-scrollbar text-black w-full text-body font-medium font-inter xmd:justify-start sm:justify-center justify-start">
                <button
                  className={`menut-btn p-2 w-full xmd:text-left text-center ${
                    activeTab === "All" ? "bg-pink-80 font-semibold" : ""
                  }`}
                  onClick={() => {
                    setActiveTab("All");
                    setVisibleCount(3);
                  }}
                >
                  {"All"}
                </button>
                {displayCategories?.map((tab) => (
                  <button
                    key={tab.slug}
                    className={`menut-btn p-2 w-full xmd:text-left text-center ${
                      activeTab === tab.slug ? "bg-pink-80 font-semibold" : ""
                    }`}
                    onClick={() => {
                      setActiveTab(tab.slug);
                      setVisibleCount(3);
                    }}
                  >
                    {tab.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <div className="inner xmd:px-10 py-10 xmd:w-[80%]  px-2 w-full">
          {/* Sticky Search Bar Container */}
          <div
            className={`sticky top-[90px] xmd:px-0 px-2 z-50 py-4 ${
              isScrolled ? "bg-white-100" : "bg-transparent"
            }`}
          >
            <SearchInput
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          </div>
          {renderBlogSections()}
        </div>
      </div>
    </section>
  );
};

export default BlogTab;

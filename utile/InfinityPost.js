export default async function InfinityPost(page = 1, activeTab = "All") {
  try {
    let categoryParam = "";

    // If not "All", fetch category ID from slug
    if (activeTab !== "All") {
      // Fetch all categories to find the matching one
      const categoriesResponse = await fetch(
        `https://adaptive.rocket-wp.com/wp-json/wp/v2/categories?slug=${activeTab}`,
        { cache: "no-store" }
      );
      const categories = await categoriesResponse.json();
      const category = categories[0]; // assuming slug is unique

      if (category) {
        categoryParam = `&categories=${category.id}`;
      }
    }

    const response = await fetch(
      `https://adaptive.rocket-wp.com/wp-json/wp/v2/posts?page=${page}&per_page=3${categoryParam}`,
      { cache: "no-store" }
    );

    console.log("Fetching page:", page, "Tab:", activeTab);

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("Error body:", errorBody);
      throw new Error(
        `Failed to fetch data: ${response.statusText || response.status}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in InfinityPost:", error);
    throw error;
  }
}

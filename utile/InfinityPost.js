export default async function InfinityPost(page = 1, activeTab = "All") {
  try {
    let categoryParam = "";

    if (activeTab !== "All") {
      const categoriesResponse = await fetch(
        `https://adaptive.rocket-wp.com/wp-json/custom/v1/posts-by-category/${activeTab}`,
        { cache: "no-store" }
      );
      const categories = await categoriesResponse.json();
      const category = categories[0];
      if (category) {
        categoryParam = `&categories=${category.id}`;
      }
    }

    const response = await fetch(
      `https://adaptive.rocket-wp.com/wp-json/wp/v2/posts?page=${page}&per_page=3${categoryParam}`,
      { cache: "no-store" }
    );

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

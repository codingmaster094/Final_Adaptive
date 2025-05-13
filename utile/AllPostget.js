export default async function AllPostGet() {
  const allPosts = [];
  let page = 1;
  let totalPages = 1;

  try {
    while (page <= totalPages) {
      const response = await fetch(
        `https://adaptive.rocket-wp.com/wp-json/wp/v2/posts?page=${page}&per_page=100`,
        {
          cache: "no-store",
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }

      const data = await response.json();
      allPosts.push(...data);

      // Read total pages from response headers
      if (page === 1) {
        totalPages = parseInt(response.headers.get("X-WP-TotalPages")) || 1;
      }

      page++;
    }

    return allPosts;
  } catch (error) {
    console.error("Error in Alldata:", error);
    throw error;
  }
}

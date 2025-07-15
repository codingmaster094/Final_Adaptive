export default async function SinglePostGet(slug) {
  const url = `https://app.dev.adaptive-investments.com/wp-json/wp/v2/posts?slug=${slug}`;
  console.log("Fetching URL:", url);
  try {
    const response = await fetch(url, { next: { revalidate: 60 } });
    console.log("Response status:", response.status);
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error response:", errorText);
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in fetch:", error);
    throw error;
  }
}

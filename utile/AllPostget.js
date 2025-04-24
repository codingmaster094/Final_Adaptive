export default async function AllPostGet(params) {
  try {
    const response = await fetch(
      `https://adaptive.rocket-wp.com/wp-json/wp/v2/posts`,
      {
        cache: "no-store",
      }
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in Alldata:", error);
    throw error; // Rethrow the error to be caught in the calling component
  }
}

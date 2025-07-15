export default async function AllCategorys() {
  try {
    const response = await fetch(
      `https://adaptive.rocket-wp.com/wp-json/wp/v2/categories`,
      {
        next: { revalidate: 60 },
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

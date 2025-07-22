export default async function AllCategorys() {
  try {
    const response = await fetch(
      `https://app.dev.adaptive-investments.com/wp-json/wp/v2/categories`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in Alldata:", error);
    throw error; 
  }
}

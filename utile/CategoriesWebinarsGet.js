export default async function CategoriesWebinars() {
  try {
    const response = await fetch(
      `https://app.dev.adaptive-investments.com/wp-json/custom-api/v1/webinar-categories` ,
      {
          cache: "no-store", // 💡 this is key to solving cache issue
        }
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

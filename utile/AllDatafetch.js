export default async function Alldata(params) {
  try {
    const response = await fetch(
      `https://app.dev.adaptive-investments.com/wp-json/custom/v1/page-acf-data?slug=${params}`
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

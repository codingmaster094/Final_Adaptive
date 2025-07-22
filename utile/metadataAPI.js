export default async function MetaDataAPIS(params) {
  try {
    const response = await fetch(
      `https://app.dev.adaptive-investments.com/wp-json/rankmath/v1/getHead?url=https://app.dev.adaptive-investments.com${params}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const data = await response.json();
    return data ;
  } catch (error) {
    console.error("Error in Alldata:", error);
    throw error; // Rethrow the error to be caught in the calling component
  }
}

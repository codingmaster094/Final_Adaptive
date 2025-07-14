export default async function FaqPost() {
    try {
      const response = await fetch(
        `https://app.dev.adaptive-investments.com/wp-json/custom/v1/combined-faq-categories-with-posts`,
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
  
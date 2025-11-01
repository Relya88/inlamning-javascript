export async function getTestimonials() {
  try {
    const response = await fetch(
      "https://win25-jsf-assignment.azurewebsites.net/api/testimonials"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch testimonials");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return [];
  }
}
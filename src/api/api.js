
//skapade en separat fil för api:erna för att ha alla samlade på samma ställe

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

export async function getBlogs() {
  try {
    const response = await fetch("https://win25-jsf-assignment.azurewebsites.net/api/blogs");
    if (!response.ok) {
      throw new Error("Failed to fetch blogs");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

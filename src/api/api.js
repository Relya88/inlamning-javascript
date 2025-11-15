
//skapade en separat fil för api:erna för att ha alla samlade på samma ställe, mest bara för mig själv att hålla koll på

//GET för testomonials, blogs och faq

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

export async function getFaqs() {
  const response = await fetch("https://win25-jsf-assignment.azurewebsites.net/api/faqs");
  if (!response.ok) {
    throw new Error("Failed to fetch FAQs");
  }
  return await response.json();
}



//POST för Subscribe, contact us och bookingformuläret

export const subscribe = async (email) => {
  try {
    const response = await fetch("https://win25-jsf-assignment.azurewebsites.net/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) throw new Error("Failed to subscribe");
    return await response.json();
  } catch (error) {
    console.error("Error subscribing:", error);
    throw error;
  }
};




export async function sendContactForm(formData) {
  try {
    const response = await fetch("https://win25-jsf-assignment.azurewebsites.net/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phoneNumber: formData.telephone,
        subject: formData.subject,
        comment: formData.comments,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to send contact form");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in sendContactForm:", error);
    throw error;
  }
}



export const postBooking = async (bookingData) => {
  try {
    const response = await fetch("https://win25-jsf-assignment.azurewebsites.net/api/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Booking request failed:", error);
    throw error;
  }
};

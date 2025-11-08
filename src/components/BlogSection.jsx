import { useState, useEffect } from "react";
import { getBlogs } from "../api/api";
import "../styles/BlogSection.css";
import calendarIcon from "../assets/icons/calendar-icon.svg";

function BlogSection() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      const data = await getBlogs();
      setBlogs(data);
    }
    fetchBlogs();
  }, []);
// såg till att id, created, title, description och imageUrl skulle hämtas från api:et
// tog hjälp av ChatGPT för att lägga till toLocaleDateString för att få rätt datumformat
// och att korta ner bloggtexten till 120 tecken med "slice"-funktionen
  return (
<section className="blog-section">
  <div className="container">
    <div className="section-top">
      <div className="section-left">
        <p className="section-label">Latest Blog and News</p>
        <h2>Check Out Our Latest Blog and News Update</h2>
      </div>
      <div className="section-right">
        <p className="section-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie
          nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi
          non sodales augue. Phasellus eget elit gravida.
        </p>
      </div>
    </div>
  
    <div className="blog-cards">
      {blogs.map((blog) => (
        <div className="blog-card" key={blog.id}>
          <img className="blog-image" src={blog.imageUrl} alt={blog.title} />
          <div className="blog-info">
            <div className="blog-date">
              <img src={calendarIcon} alt="calendar icon" />
              <span>
                {new Date(blog.created).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
            <h3>{blog.title}</h3>
            <p>{blog.description.slice(0, 120)}...</p>
            <a href="#">Read more →</a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  );
}

export default BlogSection;

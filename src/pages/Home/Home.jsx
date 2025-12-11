import React, { useEffect, useState } from "react";
import "./Home.css";
import Navbar from "../../components/posts/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  const [categories, setCategories] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const data = {
      FrontEnd: [
        { file: "firstpost", title: "My First Blog Post", desc: "Why I started with React + .NET" },
        { file: "secondpost", title: "My Second Blog Post", desc: "Clean architecture journey" },
        { file: "axiosvsfetch", title: "Axios vs Fetch", desc: "What’s the Difference and Which One Should You Use?" },
        { file: "axiosinterceptorspost", title: "Axios Interceptors", desc: " Understanding Axios Interceptors" },
      ],
      Backend: [
       
      ],
      Server: [
        { file: "httpvshttps", title: "HTTP vs HTTPS", desc: "Understanding secure networking" },
      ],
      Others: [
         
      ],
    };

    setCategories(data);
  }, []);

  const categoryNames = ["All", ...Object.keys(categories)];

  const getFilteredPosts = () => {
    if (selectedCategory === "All") {
      return Object.entries(categories).flatMap(([cat, items]) =>
        items.map((post) => ({ ...post, category: cat }))
      );
    }
    return categories[selectedCategory].map((post) => ({
      ...post,
      category: selectedCategory,
    }));
  };

  return (
    <div className="home-background">
      {/* HEADER */}
    <Navbar/>

      {/* MAIN SECTION */}
      <main className="container py-5">
        <h2 className="section-title mb-4">Latest Articles</h2>

        {/* CATEGORY DROPDOWN */}
        <div className="mb-4">
          <select
            className="form-select category-dropdown"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categoryNames.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* POSTS GRID → CARDS */}
        <div className="row g-4">
          {getFilteredPosts().map((post, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-4">
              <div className="card post-card h-100">
                <div className="card-body d-flex flex-column">
                  <h5 className="post-title">{post.title}</h5>
                  <p className="post-desc">{post.desc}</p>

                  <div className="badge category-badge">{post.category}</div>

                  <Link to={`/post/${post.file}`} className="stretched-link"></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;

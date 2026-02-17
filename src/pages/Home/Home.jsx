import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

const Home = () => {
  const [categories, setCategories] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const data = {
      FrontEnd: [
        { file: "firstpost", title: "My First Blog Post", desc: "Why I started with React + .NET" },
        { file: "secondpost", title: "My Second Blog Post", desc: "Clean architecture journey" },
        { file: "axiosvsfetch", title: "Axios vs Fetch", desc: "What's the Difference and Which One Should You Use?" },
        { file: "axiosinterceptorspost", title: "Axios Interceptors", desc: "Understanding Axios Interceptors" },
        { file: "reactcrud", title: "React CRUD", desc: "Understanding CRUD in React" },
      ],
      Backend: [],
      Server: [
        { file: "httpvshttps", title: "HTTP vs HTTPS", desc: "Understanding secure networking" },
      ],
      Others: [],
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
    return (categories[selectedCategory] || []).map((post) => ({
      ...post,
      category: selectedCategory,
    }));
  };

  const posts = getFilteredPosts();

  return (
    <div className="flex min-h-screen flex-col bg-surface-900">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-surface-700 bg-gradient-to-b from-surface-800/50 to-surface-900 px-4 py-16 sm:px-6 sm:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(14,165,233,0.12),transparent)]" />
          <div className="relative mx-auto max-w-4xl text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Latest <span className="text-brand-400">Articles</span>
            </h1>
            <p className="mt-4 text-lg text-slate-400 sm:text-xl">
              React, .NET, and full-stack development — lessons and patterns from the journey.
            </p>
          </div>
        </section>

        {/* Categories + Posts */}
        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="mb-8 flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-slate-500">Category:</span>
            {categoryNames.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  selectedCategory === cat
                    ? "bg-brand-500 text-white shadow-lg shadow-brand-500/25"
                    : "bg-surface-700 text-slate-400 hover:bg-surface-600 hover:text-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, idx) => (
              <Link
                key={idx}
                to={`/post/${post.file}`}
                className="group relative flex flex-col rounded-2xl border border-surface-600 bg-surface-800/50 p-6 transition hover:border-brand-500/50 hover:bg-surface-800 hover:shadow-xl hover:shadow-brand-500/5"
              >
                <span className="absolute right-4 top-4 rounded-full bg-surface-700 px-3 py-1 text-xs font-medium text-brand-400">
                  {post.category}
                </span>
                <h2 className="font-display pr-24 text-xl font-semibold text-white transition group-hover:text-brand-400">
                  {post.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                  {post.desc}
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-brand-400">
                  Read article
                  <span className="ml-1 transition group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))}
          </div>

          {posts.length === 0 && (
            <p className="py-12 text-center text-slate-500">No articles in this category yet.</p>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;

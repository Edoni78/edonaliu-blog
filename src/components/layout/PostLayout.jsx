import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const PostLayout = ({ title, date, readTime, children, image }) => {
  return (
    <div className="flex min-h-screen flex-col bg-surface-900">
      <Header />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
        <Link
          to="/"
          className="mb-6 inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-brand-400"
        >
          <span aria-hidden>←</span> Back to home
        </Link>
        <article>
          <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h1>
          <p className="mt-2 text-sm font-medium text-slate-500">
            {date} · {readTime}
          </p>
          {image && (
            <div className="mt-6">
              {image}
            </div>
          )}
          <hr className="my-6 border-surface-600" />
          <div className="article-prose">{children}</div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default PostLayout;

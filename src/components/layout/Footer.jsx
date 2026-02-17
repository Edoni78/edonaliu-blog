import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-surface-700 bg-surface-800/50">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <Link
            to="/"
            className="font-display text-lg font-semibold text-white transition hover:text-brand-400"
          >
            Edon's Tech Blog
          </Link>
          <div className="flex gap-6 text-sm text-slate-500">
            <a
              href="https://www.linkedin.com/in/edon-aliu-78b086265/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-brand-400"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <p className="mt-4 text-center text-sm text-slate-600 sm:text-left">
          © {new Date().getFullYear()} Edon Aliu. Thoughts on React, .NET & full-stack development.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

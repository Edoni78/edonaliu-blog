import React from "react";
import { Link } from "react-router-dom";
import profileImg from "../../assets/images/EDON.JPG";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-surface-600/80 bg-surface-900/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link
          to="/"
          className="font-display text-2xl font-bold tracking-tight text-white transition hover:text-brand-400 sm:text-3xl"
        >
          Edon's Tech Blog
        </Link>
        <div className="flex items-center gap-2">
          <span className="text-sm text-slate-500">by</span>
          <a
            href="https://www.linkedin.com/in/edon-aliu-78b086265/"
            target="_blank"
            rel="noreferrer"
            className="ring-brand-500/50 rounded-full ring-2 transition hover:ring-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400"
            aria-label="Edon Aliu on LinkedIn"
          >
            <img
              src={profileImg}
              alt="Edon Aliu"
              className="h-12 w-12 rounded-full object-cover sm:h-14 sm:w-14"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

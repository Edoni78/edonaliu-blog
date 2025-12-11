import React from "react";
import "./SecondPost.css";
import Navbar from "../Navbar";

const SecondPost = () => {
  return (
    <div className="post-background">

   <Navbar/>

      {/* CONTENT */}
      <div className="container py-5">

        <a href="/" className="btn btn-secondary mb-4">← Back</a>

        <h1 className="post-title">
          How to Structure a Large React Project (The Folder Structure That Scales)
        </h1>

        <p className="fw-bold">Published: Nov 2025 • 10 min read</p>

        <hr className="divider" />

        <p>
          As your React application grows, the codebase becomes harder to maintain. Files start piling up,
          components get mixed together, API calls appear everywhere, and you end up with <em>spaghetti architecture</em>.
        </p>

        <p>
          A scalable and modular folder structure is not just “clean code”.  
          It gives your project:
        </p>

        <ul>
          <li>Maintainability</li>
          <li>Reusability</li>
          <li>Team scalability</li>
          <li>Separation of concerns</li>
          <li>Long-term flexibility</li>
        </ul>

        <p>
          Below is a <strong>battle-tested React architecture</strong> used in real enterprise-level applications.
          This structure also matches perfectly the way I build React projects.
        </p>

        <h3 className="section-heading">Recommended Folder Structure</h3>

        <pre><code>
{`src/
│
├── assets/
│   ├── images/
│   ├── icons/
│   └── styles/
│
├── components/
│   ├── shared/
│   │   ├── Navbar/
│   │   ├── Footer/
│   │   └── Button/
│   │
│   └── pages/
│       ├── Home/
│       ├── About/
│       ├── Contact/
│       └── Product/
│
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   └── Product.jsx
│
├── hooks/
│   ├── useFetch.js
│   ├── useAuth.js
│   └── useLanguage.js
│
├── utils/
│   ├── api.js
│   ├── format.js
│   └── constants.js
│
├── services/
│   ├── apiClient.js
│   ├── productService.js
│   └── userService.js
│
├── context/
│   ├── AuthContext.jsx
│   └── LanguageContext.jsx
│
├── App.jsx
└── main.jsx`}
        </code></pre>

        <h3 className="section-heading">How This Structure Works</h3>

        <p>Here’s a breakdown of each folder and why this structure scales extremely well.</p>

        <h4 className="sub-heading">1. /assets</h4>
        <p>
          Contains everything static: images, icons, fonts, global CSS.
          Keeping these in one place keeps your project tidy and predictable.
        </p>

        <h4 className="sub-heading">2. /components</h4>
        <p>This is where your UI logic lives. It is separated into:</p>

        <h5 className="mini-heading">✔ components/shared/</h5>
        <p>Reusable components like:</p>

        <ul>
          <li>Navbar</li>
          <li>Footer</li>
          <li>Buttons</li>
          <li>Card</li>
          <li>Modal</li>
        </ul>

        <h5 className="mini-heading">✔ components/pages/</h5>
        <p>These are components that belong to a specific page.</p>

        <pre><code>
{`components/pages/Home/
    HeroSection.jsx
    Features.jsx
    Slider.jsx`}
        </code></pre>

        <h4 className="sub-heading">3. /pages</h4>

        <p>
          These are your top-level React Router pages. They only contain layout-level structure and import UI
          components from <em>components/pages/</em>.
        </p>

<pre><code>
{`import HeroSection from "../components/pages/Home/HeroSection";
import Features from "../components/pages/Home/Features";
import Footer from "../components/shared/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <Footer />
    </>
  );
}`}
</code></pre>

        <h4 className="sub-heading">4. /hooks</h4>
        <ul>
          <li>useFetch</li>
          <li>useAuth</li>
          <li>useLanguage</li>
          <li>useLocalStorage</li>
        </ul>

        <h4 className="sub-heading">5. /utils</h4>

        <ul>
          <li>formatPrice</li>
          <li>formatDate</li>
          <li>validators</li>
          <li>constant values</li>
        </ul>

        <h4 className="sub-heading">6. /services</h4>

<pre><code>
{`import apiClient from "./apiClient";

export function getProducts() {
  return apiClient.get("/products");
}`}
</code></pre>

        <h4 className="sub-heading">7. /context</h4>

        <ul>
          <li>AuthContext</li>
          <li>LanguageContext</li>
          <li>ThemeContext</li>
        </ul>

        <h3 className="section-heading">Why This Structure Fits My Workflow</h3>

        <p>This is exactly how I work on real-world projects:</p>

        <ul>
          <li>/pages → route-level components</li>
          <li>/components/pages → UI sections for each page</li>
          <li>/components/shared → navbar, footer</li>
          <li>/services → axios calls</li>
          <li>/utils → helpers</li>
          <li>/hooks → reusable logic</li>
        </ul>

        <h3 className="section-heading">Final Thoughts</h3>

        <p>
          A clean and scalable folder structure is one of the most important parts of building a real React application.
          This architecture will help you:
        </p>

        <ul>
          <li>Scale your app without rewriting everything</li>
          <li>Onboard new developers easily</li>
          <li>Avoid repeated code</li>
          <li>Keep frontend clean and maintainable</li>
        </ul>

        <p>
          Whether you're building a CMS, an eCommerce store, or a modern SaaS — this structure will support your growth for years.
        </p>

      </div>
    </div>
  );
};

export default SecondPost;

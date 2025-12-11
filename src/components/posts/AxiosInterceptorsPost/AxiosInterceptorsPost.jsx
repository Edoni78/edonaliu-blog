import React from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

const AxiosInterceptorsPost = () => {
  return (
    <div style={{ backgroundColor: "var(--backGroundColor)", color: "white" }}>
      {/* HEADER */}
      <Navbar />

      {/* BLOG CONTENT */}
      <div className="container py-5">
        <Link to="/" className="btn btn-secondary mb-4">← Back</Link>

        <h1 className="fw-bold" style={{ color: "var(--primaryColor)" }}>
          Understanding Axios Interceptors: How They Work and Why They’re Essential in Modern Frontend Apps
        </h1>

        <p className="text-white fw-bold">Published: Dec 2025 • 8 min read</p>

        <hr style={{ borderColor: "#333" }} />

        <p>
          When building modern web applications—especially React, Vue, or Angular—network requests play a major role. 
          As your application grows, manually handling authentication tokens, errors, or response formatting becomes 
          repetitive and difficult to maintain.
        </p>

        <p>This is where Axios interceptors become a powerful tool.</p>

        <p>
          Interceptors let you intercept and modify HTTP requests and responses before they reach your application logic. 
          Think of them as middleware for your API calls.
        </p>

        <p>
          In this article, you’ll learn what Axios interceptors are, how they work, and why they are essential in real-world applications.
        </p>

        {/* WHAT ARE INTERCEPTORS */}
        <h3 className="mt-4 fw-bold" style={{ color: "var(--primaryColor)" }}>What Are Axios Interceptors?</h3>

        <p>Axios interceptors are functions that run automatically:</p>

        <ul>
          <li>Before a request is sent (Request Interceptor)</li>
          <li>After a response arrives but before your <code>.then()</code> or <code>await</code> handles it (Response Interceptor)</li>
        </ul>

        <p>
          They allow you to add logic globally for every Axios request, instead of repeating the same code in every API call.
        </p>

        {/* WHY USE INTERCEPTORS */}
        <h3 className="mt-4 fw-bold" style={{ color: "var(--primaryColor)" }}>Why Are Interceptors Useful?</h3>

        <p>Interceptors help you centralize logic that normally you’d have to repeat in every request.</p>

        <p className="fw-bold">Common real-world use cases:</p>

        <ul>
          <li>Automatically attach authentication tokens (JWT)</li>
          <li>Handle expired tokens and refresh them</li>
          <li>Global error handling</li>
          <li>Transform or validate data</li>
          <li>Add custom headers or API keys</li>
          <li>Logging and debugging</li>
        </ul>

        <p>Interceptors make your code cleaner, more maintainable, and more secure.</p>

        {/* REQUEST INTERCEPTORS */}
        <h3 className="mt-4 fw-bold" style={{ color: "var(--primaryColor)" }}>How Request Interceptors Work</h3>

        <p>
          A request interceptor runs before Axios sends the request to the server.
          This is a perfect place to attach headers, tokens, or custom configurations.
        </p>

        <p className="fw-bold">Example: Adding JWT Token to All Requests</p>

        <pre style={{
          backgroundColor: "#1e1e1e",
          border: "1px solid #333",
          padding: "16px",
          overflowX: "auto",
          borderRadius: "5px",
        }}>
  <code style={{ fontFamily: "Consolas", fontSize: "15px", color: "#d4d4d4" }}>{`axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = \`Bearer \${token}\`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);`}
  </code>
</pre>

        <p>Now every request automatically carries the authentication header.</p>

        {/* RESPONSE INTERCEPTORS */}
        <h3 className="mt-4 fw-bold" style={{ color: "var(--primaryColor)" }}>How Response Interceptors Work</h3>

        <p>
          A response interceptor runs after the server responds, but before your code handles the response.
          This is useful for:
        </p>

        <ul>
          <li>catching global errors</li>
          <li>refreshing tokens</li>
          <li>transforming response data</li>
          <li>redirecting users if needed</li>
        </ul>

        <p className="fw-bold">Example: Automatically Refresh JWT Token on 401</p>

        <pre style={{
          backgroundColor: "#1e1e1e",
          border: "1px solid #333",
          padding: "16px",
          overflowX: "auto",
          borderRadius: "5px",
        }}>
  <code style={{ fontFamily: "Consolas", fontSize: "15px", color: "#d4d4d4" }}>{`axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Example refresh logic
      const newToken = await refreshToken();

      localStorage.setItem("token", newToken);

      error.config.headers.Authorization = \`Bearer \${newToken}\`;
      return axios(error.config); // retry original request
    }

    return Promise.reject(error);
  }
);`}
  </code>
</pre>

        <p>
          This keeps your users logged in without requiring them to manually refresh or re-login.
        </p>

        {/* INTERCEPTORS VS NO INTERCEPTORS */}
        <h3 className="mt-4 fw-bold" style={{ color: "var(--primaryColor)" }}>
          Interceptors vs No Interceptors
        </h3>

        <p>Without interceptors, you would need to add logic like this in every request:</p>

        <pre style={{
          backgroundColor: "#1e1e1e",
          border: "1px solid #333",
          padding: "16px",
          overflowX: "auto",
          borderRadius: "5px",
        }}>
  <code style={{ fontFamily: "Consolas", fontSize: "15px", color: "#d4d4d4" }}>{`const token = localStorage.getItem("token");

const res = await axios.get("/api/data", {
  headers: {
    Authorization: \`Bearer \${token}\`,
  },
});`}
  </code>
</pre>

        <p>With interceptors, the request stays clean:</p>

        <pre style={{
          backgroundColor: "#1e1e1e",
          border: "1px solid #333",
          padding: "16px",
          overflowX: "auto",
          borderRadius: "5px",
        }}>
  <code style={{ fontFamily: "Consolas", fontSize: "15px", color: "#d4d4d4" }}>{`const res = await axios.get("/api/data");`}
  </code>
</pre>

        <p>
          Interceptors remove redundancy and make your API layer much cleaner.
        </p>

        {/* BEST PRACTICES */}
        <h3 className="mt-4 fw-bold" style={{ color: "var(--primaryColor)" }}>
          Best Practices for Using Axios Interceptors
        </h3>

        <ul>
          <li>Create a dedicated Axios instance</li>
          <li>Add request + response interceptors to the instance</li>
          <li>Always handle errors gracefully</li>
          <li>Clean up interceptors in React (optional)</li>
        </ul>

        <p className="fw-bold">Example of creating an Axios instance:</p>

        <pre style={{
          backgroundColor: "#1e1e1e",
          border: "1px solid #333",
          padding: "16px",
          overflowX: "auto",
          borderRadius: "5px",
        }}>
  <code style={{ fontFamily: "Consolas", fontSize: "15px", color: "#d4d4d4" }}>{`const api = axios.create({
  baseURL: "/api",
});`}
  </code>
</pre>

        {/* CONCLUSION */}
        <h3 className="mt-4 fw-bold" style={{ color: "var(--primaryColor)" }}>
          Conclusion
        </h3>

        <p>
          Axios interceptors are one of the most powerful features Axios provides. They allow you to:
        </p>

        <ul>
          <li>attach tokens automatically</li>
          <li>handle global errors</li>
          <li>refresh tokens seamlessly</li>
          <li>centralize your API logic</li>
          <li>simplify your entire networking layer</li>
        </ul>

        <p>
          If you're building anything more complex than a simple demo app, interceptors will dramatically improve your code quality and developer experience.
        </p>

        <p>
          Whether you're working on authentication, large-scale APIs, SaaS dashboards, or multi-language CMS systems—interceptors are essential for building robust frontend applications.
        </p>
      </div>
    </div>
  );
};

export default AxiosInterceptorsPost;

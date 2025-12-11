import React from "react";
import "./AxiosVsFetch.css";
import Navbar from "../Navbar";
import { Link} from "react-router-dom";

const AxiosVsFetch = () => {
  return (
    <div style={{ backgroundColor: "var(--backGroundColor)", color: "white" }}>
      {/* HEADER */}
      <Navbar />

      {/* BLOG CONTENT */}
      <div className="container py-5">
        <Link to="/" className="btn btn-secondary mb-4">← Back</Link>

        <h1 className="fw-bold" style={{ color: "var(--primaryColor)" }}>
          Axios vs Fetch: What’s the Difference and Which One Should You Use?
        </h1>

        <p className="text-white fw-bold">Published: Dec 2025 • 8 min read</p>

        <hr style={{ borderColor: "#333" }} />

        <p>
          Making HTTP requests is a core part of every modern frontend application—especially in React, Vue, or even vanilla JavaScript. 
          Two popular ways to handle network requests are:
        </p>

        <ul>
          <li>Fetch API (built into the browser)</li>
          <li>Axios (a popular third-party library)</li>
        </ul>

        <p>
          Even though both solve the same problem, they behave quite differently. Understanding their strengths and weaknesses helps you choose the right tool for your project.
          This article breaks down clear differences, developer experience, features, and real-world scenarios where one is better than the other.
        </p>

        {/* SECTION 1 - FETCH */}
        <h3 className="mt-4 fw-bold" style={{ color: "var(--primaryColor)" }}>1. What is Fetch?</h3>

        <p>
          Fetch API is a native browser function that lets you make HTTP requests without installing anything.
        </p>

        <pre style={{
          backgroundColor: "#1e1e1e",
          border: "1px solid #333",
          padding: "16px",
          overflowX: "auto",
          borderRadius: "5px",
        }}>
          <code style={{ fontFamily: "Consolas", fontSize: "15px", color: "#d4d4d4" }}>{`fetch("/api/users")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));`}
          </code>
        </pre>

        <p className="fw-bold">Pros of Fetch:</p>
        <ul>
          <li>Built-in, no installation required</li>
          <li>Modern Promise-based API</li>
          <li>Works in browsers and Node (with polyfills)</li>
          <li>Lightweight</li>
        </ul>

        <p className="fw-bold">Cons of Fetch:</p>
        <ul>
          <li>Error handling is NOT intuitive</li>
          <li>Doesn’t reject on HTTP errors (like 404 or 500)</li>
          <li>No automatic request cancellation</li>
          <li>No request/response interceptors</li>
          <li>Need to manually transform data</li>
          <li>Need to manually set many headers</li>
        </ul>

        {/* SECTION 2 - AXIOS */}
        <h3 className="mt-4 fw-bold" style={{ color: "var(--primaryColor)" }}>2. What is Axios?</h3>

        <p>
          Axios is a third-party HTTP client with a more powerful and developer-friendly API.
        </p>

        <pre style={{
          backgroundColor: "#1e1e1e",
          border: "1px solid #333",
          padding: "16px",
          overflowX: "auto",
          borderRadius: "5px",
        }}>
          <code style={{ fontFamily: "Consolas", fontSize: "15px", color: "#d4d4d4" }}>{`axios.get("/api/users")
  .then(res => console.log(res.data))
  .catch(err => console.error(err));`}
          </code>
        </pre>

        <p className="fw-bold">Pros of Axios:</p>
        <ul>
          <li>Automatically converts JSON</li>
          <li>Rejects promises on HTTP errors</li>
          <li>Supports request & response interceptors</li>
          <li>Automatically sets common headers</li>
          <li>Easier POST form submissions</li>
          <li>Works the same in both Browser & Node</li>
          <li>Allows request cancellation</li>
          <li>Supports timeouts out of the box</li>
        </ul>

        <p className="fw-bold">Cons of Axios:</p>
        <ul>
          <li>Requires installation</li>
          <li>Slightly larger bundle size than Fetch</li>
        </ul>

        {/* SECTION 3 - TABLE */}
        <h3 className="mt-4 fw-bold" style={{ color: "var(--primaryColor)" }}>
          3. Main Differences (Side-by-Side)
        </h3>

        <div className="table-responsive">
          <table className="table table-dark table-bordered">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Fetch</th>
                <th>Axios</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Built-in</td><td>Yes</td><td>No, Requires install</td></tr>
              <tr><td>JSON Parse</td><td>must do res.json()</td><td>Automatic</td></tr>
              <tr><td>Error Handling</td><td>Does not fail on 400/500</td><td>Auto reject</td></tr>
              <tr><td>Interceptors</td><td>No</td><td>Yes</td></tr>
              <tr><td>Cancel Requests</td><td>Complex</td><td>Simple</td></tr>
              <tr><td>Timeout Support</td><td>Manual</td><td>Built-in</td></tr>
              <tr><td>Upload/Download Progress</td><td>Limited</td><td>Great support</td></tr>
              <tr><td>Transform Request Data</td><td>Manual</td><td>Auto</td></tr>
            </tbody>
          </table>
        </div>

        <p >
          Click <Link to ="/post/AxiosInterceptorsPost">here</Link> to see what are Interceptors!
        </p>

        {/* SECTION 4 - ERROR HANDLING */}
        <h3 className="mt-4 fw-bold" style={{ color: "var(--primaryColor)" }}>
          4. Error Handling: The Biggest Difference
        </h3>

        <p>Fetch example (HTTP 404 does NOT throw an error):</p>

        <pre style={{
          backgroundColor: "#1e1e1e",
          border: "1px solid #333",
          padding: "16px",
          overflowX: "auto",
          borderRadius: "5px",
        }}>
          <code style={{ fontFamily: "Consolas", fontSize: "15px", color: "#d4d4d4" }}>{`const res = await fetch("/api/users");

if (!res.ok) {
  throw new Error("Request failed");
}`}
          </code>
        </pre>

        <p>You must manually check <code>res.ok</code>.</p>

        <p>Axios example (404 automatically throws):</p>

        <pre style={{
          backgroundColor: "#1e1e1e",
          border: "1px solid #333",
          padding: "16px",
          overflowX: "auto",
          borderRadius: "5px",
        }}>
          <code style={{ fontFamily: "Consolas", fontSize: "15px", color: "#d4d4d4" }}>{`const res = await axios.get("/api/users");`}
          </code>
        </pre>

        <p>
          If the server returns an error, Axios rejects the Promise automatically.  
          This is why Axios feels cleaner and easier to use.
        </p>

        {/* SECTION 5 - INTERCEPTORS */}
        <h3 className="mt-4 fw-bold" style={{ color: "var(--primaryColor)" }}>
          5. Interceptors (Axios Advantage)
        </h3>

        <p>
          Axios allows you to run logic before a request or after a response, often used for authentication tokens.
        </p>

        <pre style={{
          backgroundColor: "#1e1e1e",
          border: "1px solid #333",
          padding: "16px",
          overflowX: "auto",
          borderRadius: "5px",
        }}>
          <code style={{ fontFamily: "Consolas", fontSize: "15px", color: "#d4d4d4" }}>{`axios.interceptors.request.use(config => {
  config.headers.Authorization = \`Bearer \${localStorage.getItem("token")}\`;
  return config;
});`}
          </code>
        </pre>

        <p>Fetch does NOT support this natively.  
          You must manually wrap Fetch to achieve similar behavior.</p>

        {/* SECTION 6 - JSON */}
        <h3 className="mt-4 fw-bold" style={{ color: "var(--primaryColor)" }}>
          6. Working with JSON (Another Axios Win)
        </h3>

        <p>Fetch:</p>

        <pre style={{
          backgroundColor: "#1e1e1e",
          border: "1px solid #333",
          padding: "16px",
          overflowX: "auto",
          borderRadius: "5px",
        }}>
          <code style={{ fontFamily: "Consolas", fontSize: "15px", color: "#d4d4d4" }}>{`const res = await fetch("/api/users");
const data = await res.json();`}
          </code>
        </pre>

        <p>Axios:</p>

        <pre style={{
          backgroundColor: "#1e1e1e",
          border: "1px solid #333",
          padding: "16px",
          overflowX: "auto",
          borderRadius: "5px",
        }}>
          <code style={{ fontFamily: "Consolas", fontSize: "15px", color: "#d4d4d4" }}>{`const { data } = await axios.get("/api/users");`}
          </code>
        </pre>

        <p>Axios removes one step automatically.</p>

        {/* SECTION 7 - WHICH ONE */}
        <h3 className="mt-4 fw-bold" style={{ color: "var(--primaryColor)" }}>
          7. Which One Should You Use?
        </h3>

        <p className="fw-bold">Use Fetch if:</p>
        <ul>
          <li>You want minimal bundle size</li>
          <li>You prefer using native APIs</li>
          <li>You handle very simple requests</li>
          <li>You don’t need interceptors, request cancellation, or advanced features</li>
        </ul>

        <p className="fw-bold">Use Axios if:</p>
        <ul>
          <li>You're building a React/SPA application</li>
          <li>You use JWT authentication</li>
          <li>You need interceptors for tokens</li>
          <li>You want cleaner syntax and better error handling</li>
          <li>You need timeouts, progress upload, or cancellation</li>
          <li>You want consistent behaviour between browser & Node</li>
        </ul>

        {/* SECTION 8 - FINAL VERDICT */}
        <h3 className="mt-4 fw-bold" style={{ color: "var(--primaryColor)" }}>
          8. Final Verdict
        </h3>

        <p>
          Fetch is great for simple tasks.  
          Axios is better for real-world applications.
        </p>

        <p>
          For professional frontend development—especially in frameworks like React—Axios is usually the better choice because:
        </p>

        <ul>
          <li>Cleaner and safer error handling</li>
          <li>Automatic JSON transform</li>
          <li>Request/response interceptors</li>
          <li>Timeout and cancellation support</li>
          <li>Better developer experience</li>
        </ul>

        <p>
          If your project is small or you want zero dependencies, Fetch is perfectly fine.  
          But for production-grade applications, Axios is the industry standard.
        </p>
      </div>
    </div>
  );
};

export default AxiosVsFetch;

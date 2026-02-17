import React from "react";
import { Link } from "react-router-dom";
import PostLayout from "../../layout/PostLayout";

const AxiosVsFetch = () => {
  return (
    <PostLayout
      title="Axios vs Fetch: What's the Difference and Which One Should You Use?"
      date="Dec 2025"
      readTime="8 min read"
    >
      <p>
        Making HTTP requests is a core part of every modern frontend application—especially in React, Vue, or even
        vanilla JavaScript. Two popular ways to handle network requests are:
      </p>
      <ul>
        <li>Fetch API (built into the browser)</li>
        <li>Axios (a popular third-party library)</li>
      </ul>
      <p>
        Even though both solve the same problem, they behave quite differently. Understanding their strengths and
        weaknesses helps you choose the right tool for your project. This article breaks down clear differences,
        developer experience, features, and real-world scenarios where one is better than the other.
      </p>

      <h3>1. What is Fetch?</h3>
      <p>Fetch API is a native browser function that lets you make HTTP requests without installing anything.</p>
      <pre><code>{`fetch("/api/users")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));`}</code></pre>
      <p className="font-semibold text-slate-200">Pros of Fetch:</p>
      <ul>
        <li>Built-in, no installation required</li>
        <li>Modern Promise-based API</li>
        <li>Works in browsers and Node (with polyfills)</li>
        <li>Lightweight</li>
      </ul>
      <p className="font-semibold text-slate-200">Cons of Fetch:</p>
      <ul>
        <li>Error handling is NOT intuitive</li>
        <li>Doesn't reject on HTTP errors (like 404 or 500)</li>
        <li>No automatic request cancellation</li>
        <li>No request/response interceptors</li>
        <li>Need to manually transform data and set many headers</li>
      </ul>

      <h3>2. What is Axios?</h3>
      <p>Axios is a third-party HTTP client with a more powerful and developer-friendly API.</p>
      <pre><code>{`axios.get("/api/users")
  .then(res => console.log(res.data))
  .catch(err => console.error(err));`}</code></pre>
      <p className="font-semibold text-slate-200">Pros of Axios:</p>
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
      <p className="font-semibold text-slate-200">Cons of Axios:</p>
      <ul>
        <li>Requires installation</li>
        <li>Slightly larger bundle size than Fetch</li>
      </ul>

      <h3>3. Main Differences (Side-by-Side)</h3>
      <div className="overflow-x-auto">
        <table>
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
      <p>
        Click <Link to="/post/axiosinterceptorspost" className="text-brand-400 hover:underline">here</Link> to see what
        Interceptors are!
      </p>

      <h3>4. Error Handling: The Biggest Difference</h3>
      <p>Fetch example (HTTP 404 does NOT throw an error):</p>
      <pre><code>{`const res = await fetch("/api/users");

if (!res.ok) {
  throw new Error("Request failed");
}`}</code></pre>
      <p>You must manually check <code>res.ok</code>.</p>
      <p>Axios example (404 automatically throws):</p>
      <pre><code>{`const res = await axios.get("/api/users");`}</code></pre>
      <p>
        If the server returns an error, Axios rejects the Promise automatically. This is why Axios feels cleaner and
        easier to use.
      </p>

      <h3>5. Interceptors (Axios Advantage)</h3>
      <p>
        Axios allows you to run logic before a request or after a response, often used for authentication tokens.
      </p>
      <pre><code>{`axios.interceptors.request.use(config => {
  config.headers.Authorization = \`Bearer \${localStorage.getItem("token")}\`;
  return config;
});`}</code></pre>
      <p>Fetch does NOT support this natively. You must manually wrap Fetch to achieve similar behavior.</p>

      <h3>6. Working with JSON (Another Axios Win)</h3>
      <p>Fetch:</p>
      <pre><code>{`const res = await fetch("/api/users");
const data = await res.json();`}</code></pre>
      <p>Axios:</p>
      <pre><code>{`const { data } = await axios.get("/api/users");`}</code></pre>
      <p>Axios removes one step automatically.</p>

      <h3>7. Which One Should You Use?</h3>
      <p className="font-semibold text-slate-200">Use Fetch if:</p>
      <ul>
        <li>You want minimal bundle size</li>
        <li>You prefer using native APIs</li>
        <li>You handle very simple requests</li>
        <li>You don't need interceptors, request cancellation, or advanced features</li>
      </ul>
      <p className="font-semibold text-slate-200">Use Axios if:</p>
      <ul>
        <li>You're building a React/SPA application</li>
        <li>You use JWT authentication</li>
        <li>You need interceptors for tokens</li>
        <li>You want cleaner syntax and better error handling</li>
        <li>You need timeouts, progress upload, or cancellation</li>
        <li>You want consistent behaviour between browser & Node</li>
      </ul>

      <h3>8. Final Verdict</h3>
      <p>Fetch is great for simple tasks. Axios is better for real-world applications.</p>
      <p>
        For professional frontend development—especially in frameworks like React—Axios is usually the better choice
        because: cleaner and safer error handling, automatic JSON transform, request/response interceptors, timeout and
        cancellation support, and better developer experience.
      </p>
      <p>
        If your project is small or you want zero dependencies, Fetch is perfectly fine. But for production-grade
        applications, Axios is the industry standard.
      </p>
    </PostLayout>
  );
};

export default AxiosVsFetch;

import React from "react";
import PostLayout from "../../layout/PostLayout";

const AxiosInterceptorsPost = () => {
  return (
    <PostLayout
      title="Understanding Axios Interceptors: How They Work and Why They're Essential in Modern Frontend Apps"
      date="Dec 2025"
      readTime="8 min read"
    >
      <p>
        When building modern web applications—especially React, Vue, or Angular—network requests play a major role. As
        your application grows, manually handling authentication tokens, errors, or response formatting becomes
        repetitive and difficult to maintain.
      </p>
      <p>This is where Axios interceptors become a powerful tool.</p>
      <p>
        Interceptors let you intercept and modify HTTP requests and responses before they reach your application logic.
        Think of them as middleware for your API calls.
      </p>
      <p>
        In this article, you'll learn what Axios interceptors are, how they work, and why they are essential in
        real-world applications.
      </p>

      <h3>What Are Axios Interceptors?</h3>
      <p>Axios interceptors are functions that run automatically:</p>
      <ul>
        <li>Before a request is sent (Request Interceptor)</li>
        <li>After a response arrives but before your <code>.then()</code> or <code>await</code> handles it (Response Interceptor)</li>
      </ul>
      <p>
        They allow you to add logic globally for every Axios request, instead of repeating the same code in every API
        call.
      </p>

      <h3>Why Are Interceptors Useful?</h3>
      <p>Interceptors help you centralize logic that normally you'd have to repeat in every request.</p>
      <p className="font-semibold text-slate-200">Common real-world use cases:</p>
      <ul>
        <li>Automatically attach authentication tokens (JWT)</li>
        <li>Handle expired tokens and refresh them</li>
        <li>Global error handling</li>
        <li>Transform or validate data</li>
        <li>Add custom headers or API keys</li>
        <li>Logging and debugging</li>
      </ul>
      <p>Interceptors make your code cleaner, more maintainable, and more secure.</p>

      <h3>How Request Interceptors Work</h3>
      <p>
        A request interceptor runs before Axios sends the request to the server. This is a perfect place to attach
        headers, tokens, or custom configurations.
      </p>
      <p className="font-semibold text-slate-200">Example: Adding JWT Token to All Requests</p>
      <pre><code>{`axios.interceptors.request.use(
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
);`}</code></pre>
      <p>Now every request automatically carries the authentication header.</p>

      <h3>How Response Interceptors Work</h3>
      <p>
        A response interceptor runs after the server responds, but before your code handles the response. This is
        useful for: catching global errors, refreshing tokens, transforming response data, redirecting users if
        needed.
      </p>
      <p className="font-semibold text-slate-200">Example: Automatically Refresh JWT Token on 401</p>
      <pre><code>{`axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      const newToken = await refreshToken();
      localStorage.setItem("token", newToken);
      error.config.headers.Authorization = \`Bearer \${newToken}\`;
      return axios(error.config);
    }
    return Promise.reject(error);
  }
);`}</code></pre>
      <p>This keeps your users logged in without requiring them to manually refresh or re-login.</p>

      <h3>Interceptors vs No Interceptors</h3>
      <p>Without interceptors, you would need to add logic like this in every request:</p>
      <pre><code>{`const token = localStorage.getItem("token");

const res = await axios.get("/api/data", {
  headers: {
    Authorization: \`Bearer \${token}\`,
  },
});`}</code></pre>
      <p>With interceptors, the request stays clean:</p>
      <pre><code>{`const res = await axios.get("/api/data");`}</code></pre>
      <p>Interceptors remove redundancy and make your API layer much cleaner.</p>

      <h3>Best Practices for Using Axios Interceptors</h3>
      <ul>
        <li>Create a dedicated Axios instance</li>
        <li>Add request + response interceptors to the instance</li>
        <li>Always handle errors gracefully</li>
        <li>Clean up interceptors in React (optional)</li>
      </ul>
      <p className="font-semibold text-slate-200">Example of creating an Axios instance:</p>
      <pre><code>{`const api = axios.create({
  baseURL: "/api",
});`}</code></pre>

      <h3>Conclusion</h3>
      <p>Axios interceptors are one of the most powerful features Axios provides. They allow you to:</p>
      <ul>
        <li>attach tokens automatically</li>
        <li>handle global errors</li>
        <li>refresh tokens seamlessly</li>
        <li>centralize your API logic</li>
        <li>simplify your entire networking layer</li>
      </ul>
      <p>
        If you're building anything more complex than a simple demo app, interceptors will dramatically improve your
        code quality and developer experience. Whether you're working on authentication, large-scale APIs, SaaS
        dashboards, or multi-language CMS systems—interceptors are essential for building robust frontend applications.
      </p>
    </PostLayout>
  );
};

export default AxiosInterceptorsPost;

import React from "react";
import "./FirstPost.css"
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

const FirstPost = () => {
  return (
    <div style={{ backgroundColor: "var(--backGroundColor)", color: "white" }}>
      {/* HEADER */}
    <Navbar/>

      {/* BLOG CONTENT */}
      <div className="container py-5">

        <Link to="/" className="btn btn-secondary mb-4">← Back</Link>

        <h1 className="fw-bold" style={{ color: "var(--primaryColor)" }}>
          My First Blog Post
        </h1>
        <p className="text-white fw-bold">Published: Nov 2025 • 7 min read</p>

        <hr style={{ borderColor: "#333" }} />

        <p>
          Welcome to my first blog post! My name is Edon, and I’m a junior full-stack developer focusing on building
          modern web applications with <strong>React</strong> on the frontend and <strong>.NET</strong> on the backend.
          I decided to start this blog to document my journey, the problems I face, and the solutions I find along the way.
          Hopefully, it helps other beginners who are trying to break into full-stack development.
        </p>

        {/* React Section */}
        <h3 className="mt-4 fw-bold" style={{ color: "var(--primaryColor)" }}>
          Why I Chose React
        </h3>

        <p>
          React was the first library that made frontend development feel natural for me.
          The component-based structure, reusable UI blocks, and powerful ecosystem make it ideal for modern web apps.
        </p>

        <p>Here’s a small example of a React component:</p>

        <pre
     
        >
          <code style={{ fontFamily: "Consolas", fontSize: "15px", color: "#d4d4d4" }}>
{`function Welcome() {
  return <h2>Hello from React!</h2>;
}`}
          </code>
        </pre>

        {/* .NET Section */}
        <h3 className="mt-4 fw-bold" style={{ color: "var(--primaryColor)" }}>
          Why I Use .NET for the Backend
        </h3>

        <p>
          On the backend, .NET provides structure, high performance, and an enterprise-level ecosystem.
          With built-in dependency injection, Entity Framework, and middleware, .NET makes backend development efficient and clean.
        </p>

        <p>Example of a simple .NET controller:</p>

        <pre
          style={{
            backgroundColor: "#1e1e1e",
            border: "1px solid #333",
            padding: "16px",
            overflowX: "auto",
            borderRadius: "5px",
          }}
        >
          <code style={{ fontFamily: "Consolas", fontSize: "15px", color: "#d4d4d4" }}>
{`[ApiController]
[Route("api/[controller]")]
public class HelloController : ControllerBase
{
    [HttpGet]
    public IActionResult Get() =>
        Ok("Hello from .NET API!");
}`}
          </code>
        </pre>

        {/* Full Stack Section */}
        <h3 className="mt-4 fw-bold" style={{ color: "var(--primaryColor)" }}>
          Full-Stack Development: Putting It All Together
        </h3>

        <p>
          What I enjoy most is combining React on the frontend with a .NET backend.
          React handles UI and user experience, while .NET provides high-performance APIs, authentication, and database logic.
          I typically connect them using REST APIs, Axios, and JWT authentication.
        </p>

        {/* Goals Section */}
        <h3 className="mt-4 fw-bold" style={{ color: "var(--primaryColor)" }}>
          My Goals Going Forward
        </h3>

        <ul>
          <li>Become advanced in React (hooks, reducers, performance optimization)</li>
          <li>Master .NET 8, Entity Framework, and clean architecture</li>
          <li>Learn DevOps basics (Docker, CI/CD)</li>
          <li>Build real SaaS projects and grow my portfolio</li>
        </ul>

        {/* Final Words */}
        <h3 className="mt-4 fw-bold" style={{ color: "var(--primaryColor)" }}>
          Final Words
        </h3>

        <p>
          This is just the beginning. I will continue posting about my journey — what I build, what I break, what I fix,
          and what I learn. If you're also starting, stay consistent and keep building.
          Experience comes from doing.
        </p>

      </div>
    </div>
  );
};

export default FirstPost;

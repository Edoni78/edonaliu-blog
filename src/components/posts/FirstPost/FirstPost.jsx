import React from "react";
import PostLayout from "../../layout/PostLayout";

const FirstPost = () => {
  return (
    <PostLayout title="My First Blog Post" date="Nov 2025" readTime="7 min read">
      <p>
        Welcome to my first blog post! My name is Edon, and I'm a junior full-stack developer focusing on building
        modern web applications with <strong>React</strong> on the frontend and <strong>.NET</strong> on the backend.
        I decided to start this blog to document my journey, the problems I face, and the solutions I find along the way.
        Hopefully, it helps other beginners who are trying to break into full-stack development.
      </p>

      <h3>Why I Chose React</h3>
      <p>
        React was the first library that made frontend development feel natural for me.
        The component-based structure, reusable UI blocks, and powerful ecosystem make it ideal for modern web apps.
      </p>
      <p>Here's a small example of a React component:</p>
      <pre><code>{`function Welcome() {
  return <h2>Hello from React!</h2>;
}`}</code></pre>

      <h3>Why I Use .NET for the Backend</h3>
      <p>
        On the backend, .NET provides structure, high performance, and an enterprise-level ecosystem.
        With built-in dependency injection, Entity Framework, and middleware, .NET makes backend development efficient and clean.
      </p>
      <p>Example of a simple .NET controller:</p>
      <pre><code>{`[ApiController]
[Route("api/[controller]")]
public class HelloController : ControllerBase
{
    [HttpGet]
    public IActionResult Get() =>
        Ok("Hello from .NET API!");
}`}</code></pre>

      <h3>Full-Stack Development: Putting It All Together</h3>
      <p>
        What I enjoy most is combining React on the frontend with a .NET backend.
        React handles UI and user experience, while .NET provides high-performance APIs, authentication, and database logic.
        I typically connect them using REST APIs, Axios, and JWT authentication.
      </p>

      <h3>My Goals Going Forward</h3>
      <ul>
        <li>Become advanced in React (hooks, reducers, performance optimization)</li>
        <li>Master .NET 8, Entity Framework, and clean architecture</li>
        <li>Learn DevOps basics (Docker, CI/CD)</li>
        <li>Build real SaaS projects and grow my portfolio</li>
      </ul>

      <h3>Final Words</h3>
      <p>
        This is just the beginning. I will continue posting about my journey — what I build, what I break, what I fix,
        and what I learn. If you're also starting, stay consistent and keep building.
        Experience comes from doing.
      </p>
    </PostLayout>
  );
};

export default FirstPost;

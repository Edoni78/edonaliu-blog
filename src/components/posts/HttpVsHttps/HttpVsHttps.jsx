import React from "react";
import "./HttpVsHttps.css";
import httpsDiagram from "../../../assets/images/HTTPS.drawio.png";
import Navbar from "../Navbar";

const HttpVsHttps = () => {
  return (
    <div className="post-background">

      <Navbar />

      <div className="container py-5">

        <a href="/" className="btn btn-secondary mb-4">← Back</a>

        <h1 className="post-title">HTTP vs HTTPS</h1>
        <p className="fw-bold">Published: Dec 2025 • 6 min read</p>

        <hr className="divider" />

        <p>
          When browsing the web, you might have noticed URLs starting with <strong>http://</strong> or
          <strong> https://</strong>.
          These prefixes define how data is transmitted between your browser and the website you are accessing.
          While both HTTP and HTTPS are communication protocols, they differ significantly—especially in terms of
          <strong> security</strong>.
          This article explains what HTTP and HTTPS are, their characteristics, and why HTTPS is now the standard.
        </p>

        {/* IMAGE */}
        <img src={httpsDiagram} alt="HTTPS Diagram" className="post-image" />

        {/* ================= WHAT IS HTTP ================= */}
        <h3 className="section-heading mt-4">What is HTTP?</h3>

        <p>
          HTTP stands for <strong>HyperText Transfer Protocol</strong>. It was invented by Tim Berners-Lee.
          HyperText refers to structured text linked using the HyperText Markup Language (HTML).
          HTTP defines the rules for communication between a web browser and a server.
          It is used to transfer data such as text, images, or multimedia across the internet.
        </p>

        <p>
          HTTP is an <strong>application-level protocol</strong> used for distributed, collaborative, hypermedia
          information systems.
          Every time a user opens a website, they indirectly interact with HTTP.
        </p>

        <h4 className="sub-heading">Characteristics of HTTP</h4>
        <ul>
          <li>HTTP is an IP-based communication protocol used to exchange data between client and server.</li>
          <li>Any type of content can be shared as long as both sides support it.</li>
          <li>HTTP works using a request–response model.</li>
        </ul>

        <h4 className="sub-heading">HTTP Request</h4>
        <p>
          An HTTP request is a message sent by the client (usually a browser) to the server requesting a resource.
          A request includes:
        </p>
        <ul>
          <li>A request method (GET, POST, etc.)</li>
          <li>Headers containing important metadata</li>
          <li>An optional body carrying data</li>
        </ul>

        <h4 className="sub-heading">HTTP Response</h4>
        <p>
          A response is a message sent by the server back to the client. It contains:
        </p>
        <ul>
          <li>A status code describing the result</li>
          <li>Response headers</li>
          <li>A body containing data or an error message</li>
        </ul>

        <h4 className="sub-heading">How Does HTTP Work?</h4>

        <p>
          HTTP uses a simple request-response mechanism. The client sends a request to the server; the server processes
          it and returns the requested data or an error.
          HTTP typically operates over <strong>port 80</strong>.
        </p>

        {/* ================= WHAT IS HTTPS ================= */}
        <h3 className="section-heading mt-4">What is HTTPS?</h3>

        <p>
          HTTPS stands for <strong>HyperText Transfer Protocol Secure</strong>.
          It is simply HTTP combined with SSL/TLS encryption to provide secure communication and authentication.
          HTTPS ensures that the data transferred between the browser and server is encrypted and cannot be intercepted.
        </p>

        <p>
          A website using HTTPS is considered secure, whereas a site using only HTTP is not.
          This is why browsers often display a lock icon for HTTPS websites.
        </p>

        <h4 className="sub-heading">Characteristics of HTTPS</h4>
        <ul>
          <li>HTTPS encrypts all message content—including headers and data.</li>
          <li>It requires SSL/TLS certificates validated by trusted third parties.</li>
          <li>HTTPS is now more widely used than HTTP, especially for login pages, payment systems, and sensitive data.</li>
        </ul>

        <h3 className="section-heading mt-4">Why HTTPS is More Secure</h3>

        <p>
          HTTPS securely encrypts all data exchanged between client and server, preventing interception or tampering.
          This is essential for modern web applications handling sensitive information.
        </p>

        <h4 className="sub-heading">How Does HTTPS Work?</h4>

        <p>
          HTTPS functions similarly to HTTP but adds encryption. When a client requests a resource, both sides first agree
          on encryption keys via an SSL/TLS handshake. All data transferred in that session is then encrypted.
          This prevents attackers from reading or modifying the exchanged information.
        </p>

        <hr className="divider" />

        <h3 className="section-heading mt-4">Conclusion</h3>
        <p>
          HTTP and HTTPS are both communication protocols used on the web.  
          However, <strong>HTTPS is significantly more secure</strong> because it encrypts all transmitted data.
          For this reason, nearly all websites today use HTTPS instead of HTTP.
        </p>

      </div>
    </div>
  );
};

export default HttpVsHttps;

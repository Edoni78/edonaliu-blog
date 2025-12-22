import React from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

const ReactCrud = () => {
  return (
    <div style={{ backgroundColor: "var(--backGroundColor)", color: "white" }}>
      {/* HEADER */}
      <Navbar />

      {/* BLOG CONTENT */}
      <div className="container py-5">
        <Link to="/" className="btn btn-secondary mb-4">← Back</Link>

        <h1 className="fw-bold" style={{ color: "var(--primaryColor)" }}>
          CRUD (Create Read Update Delete)
        </h1>

        <p className="text-white fw-bold">Published: Dec 2025 • 12 min read</p>

        <hr style={{ borderColor: "#333" }} />

        <p>
          CRUD is a fundamental concept in software engineering that describes the four basic operations a developer perform on data in any application. Almost every system that works with a database relies on CRUD in one form or another.
        </p>

        <p className="fw-bold">What CRUD stands for</p>
        <ul>
          <li>Create – add new data</li>
          <li>Read  - retrieve existing data</li>
          <li>Update – modify existing data</li>
          <li>Delete – remove data</li>
        </ul>

        <p className="fw-bold">HTTP Methods used in CRUDs:</p>
        <ul>
          <li>GET – to retrieve data</li>
          <li>POST – to create new data</li>
          <li>PUT – to update existent data</li>
          <li>DELETE – to remove data</li>
        </ul>

        <h3 className="mt-4 fw-bold" style={{ color: "var(--primaryColor)" }}>
          How CRUD is used in programming
        </h3>

        <p className="fw-bold">1. Create (uses POST)</p>
        <p>This operation inserts new records into a system</p>

        <p className="fw-bold">Examples:</p>
        <ul>
          <li>Registering a new user</li>
          <li>Creating a new order</li>
          <li>Adding a new blog post</li>
        </ul>

        <p className="fw-bold">2. Read (uses GET)</p>
        <p>This operation fetches data without changing it</p>

        <p className="fw-bold">Examples:</p>
        <ul>
          <li>Displaying a list of products</li>
          <li>Viewing a user profile</li>
          <li>Loading dashboard statistics</li>
        </ul>

        <p className="fw-bold">3. Update (uses PUT)</p>
        <p>This operation modifies existing data</p>

        <p className="fw-bold">Examples:</p>
        <ul>
          <li>Editing a profile</li>
          <li>Updating order status</li>
          <li>Changing a password</li>
        </ul>

        <p className="fw-bold">4. Delete (uses DELETE)</p>
        <p>This operation removes data from the system</p>

        <p className="fw-bold">Examples:</p>
        <ul>
          <li>Deleting an account</li>
          <li>Remvoing a product</li>
          <li>Cancelling an order</li>
        </ul>

        <h3 className="mt-4 fw-bold" style={{ color: "var(--primaryColor)" }}>
          CRUD in real-world application architecture:
        </h3>

        <p className="fw-bold">Frontend:</p>
        <ul>
          <li>Forms for create/update</li>
          <li>Tables or lists for read</li>
          <li>Buttons or actions for delete</li>
        </ul>

        <p className="fw-bold">Backend (API)</p>
        <ul>
          <li>Controllers expose CRUD endpoints</li>
          <li>Services contain business logic</li>
          <li>Repositories handle database access</li>
        </ul>

        <p className="fw-bold">Database:</p>
        <ul>
          <li>Table store entities</li>
          <li>Primary Keys identify records</li>
          <li>Foreign keys define relationships</li>
        </ul>

        <h3 className="mt-4 fw-bold" style={{ color: "var(--primaryColor)" }}>
          Why CRUD is important
        </h3>

        <ul>
          <li>It’s the foundation of data-driven applications</li>
          <li>It standardizes how data is managed</li>
          <li>It makes APIs predictable and scalable</li>
          <li>It maps cleanly to HTTP methods and database operations</li>
        </ul>

        <h3 className="mt-4 fw-bold" style={{ color: "var(--primaryColor)" }}>
          Below is an example of a CRUD in React.Js
        </h3>


        <h3 className="mt-4 fw-bold" style={{ color: "var(--primaryColor)" }}>
        1. Creating a Reusable Axios Instance
        </h3>


        <pre style={{ backgroundColor: "#1e1e1e", border: "1px solid #333", padding: "16px", borderRadius: "5px" }}>
          <code>{`Import axios from “axios”;

const api = axios.create({
  baseURL: https://api.example.com,
  headers: {
    “Content-Type” : “application/json”
  }
});`}</code>
        </pre>

        <p>
          Instead of calling axios.get() or axios.post() directly every time, we create a preconfigured Axios Instance
        </p>

        <ul>
          <li>baseURL ensures all requests automatically target the same API domain</li>
          <li>Default headers are applied consistently</li>
          <li>Centralized configuration makes future changes easier (auth tokens, interceptors, logging)</li>
        </ul>

         <h3 className="mt-4 fw-bold" style={{ color: "var(--primaryColor)" }}>
        2. Reading Data
        </h3>


        <pre style={{ backgroundColor: "#1e1e1e", border: "1px solid #333", padding: "16px", borderRadius: "5px" }}>
          <code>{`export const getProducts = async () => {
  const res = await api.get(“/products”)
  return res.data;
};`}</code>
        </pre>

        <p>This function performs a GET request to retrieve all products</p>

        <p className="fw-bold">Key points:</p>
        <ul>
          <li>Uses HTTP GET</li>
          <li>Returns only res.data, keeping components clean</li>
          <li>Ideal for product lists, dashboards, and tables</li>
        </ul>

        <p className="fw-bold">Get product by ID</p>

        <pre style={{ backgroundColor: "#1e1e1e", border: "1px solid #333", padding: "16px", borderRadius: "5px" }}>
          <code>{`export const getProductById = async (id) => {
  const res = await api.get(\`/products/\${id}\`);
  return res.data;
};`}</code>
        </pre>

        <ul>
          <li>Uses dynamic URL parameters</li>
          <li>Commonly used for detail pages or edit forms</li>
        </ul>

        <h3 className="mt-4 fw-bold" style={{ color: "var(--primaryColor)" }}>
  3. Creating Data (CREATE)
</h3>

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
{`export const createProduct = async (payload) => {
  const res = await api.post(“/products”, payload);
  return res.data;
};`}
  </code>
</pre>

<p>
  This function sends a POST request (mentonied earlier) to create a new product
</p>

<ul>
  <li>payload contains the request body (JSON)</li>
  <li>Backend validates and persists the data</li>
  <li>Returns the newly created resource</li>
</ul>

<h3 className="mt-4 fw-bold" style={{ color: "var(--primaryColor)" }}>
  4. Updating Data (UPDATE)
</h3>

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
{`export  const updateProduct = async (id, payload) => {
  const res = await api.put(\`/products/\${id}\`, payload);
  return res.data
};`}
  </code>
</pre>

<ul>
  <li>Uses HTTP PUT for full updates</li>
  <li>Requires both the resource ID and updated data</li>
  <li>Ensures data consistency</li>
</ul>

<h3 className="mt-4 fw-bold" style={{ color: "var(--primaryColor)" }}>
  5. Deleting Data (DELETE)
</h3>

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
{`export const deleteProduct = async (id) => {
  await api.delete(\`/products/\${id}\`);
}`}
  </code>
</pre>

<h3 className="mt-4 fw-bold" style={{ color: "var(--primaryColor)" }}>
  Below is how CRUD is managed in React with a Custom Hook
</h3>

<h4 className="fw-bold mt-3">1. Importing Dependencies</h4>

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
{`import { useEffect, useState } from "react";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct
} from "../api/productsApi";`}
  </code>
</pre>

<p>The hook relies on:</p>
<ul>
  <li>React state and lifecycle hooks</li>
  <li>A dedicated API layer that exposes CRUD functions</li>
</ul>

<h4 className="fw-bold mt-4">2. Internal State Management</h4>

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
{`const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);`}
  </code>
</pre>

<p>The hook maintains three core pieces of state:</p>
<ul>
  <li>products → the current list of products</li>
  <li>loading → used to control spinners or disabled UI states</li>
  <li>error → stores API or network errors for display</li>
</ul>

<h4 className="fw-bold mt-4">3. Loading Data (READ)</h4>

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
{`const loadProducts = async () => {
  try {
    setLoading(true);
    const data = await getProducts();
    setProducts(data);
  } catch (err) {
    setError(err.message || "Failed to load products");
  } finally {
    setLoading(false);
  }
};`}
  </code>
</pre>

<p>This function:</p>
<ul>
  <li>Fetches all products from the API</li>
  <li>Manages loading state automatically</li>
  <li>Handles errors gracefully</li>
</ul>

<h4 className="fw-bold mt-4">4. Creating a Product (CREATE)</h4>

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
{`const addProduct = async (product) => {
  try {
    const created = await createProduct(product);
    setProducts(prev => [...prev, created]);
  } catch (err) {
    setError(err.message || "Create failed");
  }
};`}
  </code>
</pre>

<p>Key design choices:</p>
<ul>
  <li>The API returns the newly created product</li>
  <li>State is updated locally without refetching everything</li>
  <li>Optimized for responsiveness and performance</li>
</ul>

<p>This avoids unnecessary network requests.</p>

<h4 className="fw-bold mt-4">5. Updating a Product (UPDATE)</h4>

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
{`const editProduct = async (id, product) => {
  try {
    const updated = await updateProduct(id, product);
    setProducts(prev =>
      prev.map(p => (p.id === id ? updated : p))
    );
  } catch (err) {
    setError(err.message || "Update failed");
  }
};`}
  </code>
</pre>

<p>Here:</p>
<ul>
  <li>The product is updated on the backend</li>
  <li>The local state is updated immutably</li>
  <li>Only the affected item is replaced</li>
</ul>

<p>This is the correct way to update lists in React.</p>

<h4 className="fw-bold mt-4">6. Deleting a Product (DELETE)</h4>

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
{`const removeProduct = async (id) => {
  try {
    await deleteProduct(id);
    setProducts(prev => prev.filter(p => p.id !== id));
  } catch (err) {
    setError(err.message || "Delete failed");
  }
};`}
  </code>
</pre>

<p>After a successful delete:</p>
<ul>
  <li>The item is removed from local state</li>
  <li>No refetch is required</li>
  <li>UI updates instantly</li>
</ul>

<p>This results in a smooth user experience.</p>

<h4 className="fw-bold mt-4">Auto-Loading Data on Mount</h4>

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
{`useEffect(() => {
  loadProducts();
}, []);`}
  </code>
</pre>

<p>This ensures:</p>
<ul>
  <li>Products are fetched when the component mounts</li>
  <li>The hook behaves like a data provider</li>
  <li>Consumers don’t need to manually trigger loading</li>
</ul>

<h4 className="fw-bold mt-4">Exposing the Public API of the Hook</h4>

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
{`return {
  products,
  loading,
  error,
  loadProducts,
  addProduct,
  editProduct,
  removeProduct
};`}
  </code>
</pre>

<p>The hook exposes:</p>
<ul>
  <li>State (products, loading, error)</li>
  <li>Actions (CRUD functions)</li>
</ul>

<p>This makes it extremely easy to consume:</p>

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
{`const { products, addProduct, removeProduct } = useProducts();`}
  </code>
</pre>

<p className="fw-bold">
  For full code please check the github repo:{" "}
  <a
    href="https://github.com/Edoni78/react-crud.git"
    target="_blank"
    rel="noreferrer"
  >
    https://github.com/Edoni78/react-crud.git
  </a>
</p>

      </div>
    </div>
  );
};

export default ReactCrud;

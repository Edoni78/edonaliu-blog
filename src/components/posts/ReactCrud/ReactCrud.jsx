import React from "react";
import PostLayout from "../../layout/PostLayout";

const ReactCrud = () => {
  return (
    <PostLayout title="CRUD (Create Read Update Delete)" date="Dec 2025" readTime="12 min read">
      <p>
        CRUD is a fundamental concept in software engineering that describes the four basic operations a developer
        performs on data in any application. Almost every system that works with a database relies on CRUD in one form
        or another.
      </p>
      <p className="font-semibold text-slate-200">What CRUD stands for</p>
      <ul>
        <li>Create – add new data</li>
        <li>Read – retrieve existing data</li>
        <li>Update – modify existing data</li>
        <li>Delete – remove data</li>
      </ul>
      <p className="font-semibold text-slate-200">HTTP Methods used in CRUDs:</p>
      <ul>
        <li>GET – to retrieve data</li>
        <li>POST – to create new data</li>
        <li>PUT – to update existent data</li>
        <li>DELETE – to remove data</li>
      </ul>

      <h3>How CRUD is used in programming</h3>
      <p className="font-semibold text-slate-200">1. Create (uses POST)</p>
      <p>This operation inserts new records into a system. Examples: Registering a new user, creating a new order, adding a new blog post.</p>
      <p className="font-semibold text-slate-200">2. Read (uses GET)</p>
      <p>This operation fetches data without changing it. Examples: Displaying a list of products, viewing a user profile, loading dashboard statistics.</p>
      <p className="font-semibold text-slate-200">3. Update (uses PUT)</p>
      <p>This operation modifies existing data. Examples: Editing a profile, updating order status, changing a password.</p>
      <p className="font-semibold text-slate-200">4. Delete (uses DELETE)</p>
      <p>This operation removes data from the system. Examples: Deleting an account, removing a product, cancelling an order.</p>

      <h3>CRUD in real-world application architecture</h3>
      <p className="font-semibold text-slate-200">Frontend:</p>
      <ul>
        <li>Forms for create/update</li>
        <li>Tables or lists for read</li>
        <li>Buttons or actions for delete</li>
      </ul>
      <p className="font-semibold text-slate-200">Backend (API)</p>
      <ul>
        <li>Controllers expose CRUD endpoints</li>
        <li>Services contain business logic</li>
        <li>Repositories handle database access</li>
      </ul>
      <p className="font-semibold text-slate-200">Database:</p>
      <ul>
        <li>Tables store entities</li>
        <li>Primary Keys identify records</li>
        <li>Foreign keys define relationships</li>
      </ul>

      <h3>Why CRUD is important</h3>
      <ul>
        <li>It's the foundation of data-driven applications</li>
        <li>It standardizes how data is managed</li>
        <li>It makes APIs predictable and scalable</li>
        <li>It maps cleanly to HTTP methods and database operations</li>
      </ul>

      <h3>Below is an example of a CRUD in React.Js</h3>

      <h3>1. Creating a Reusable Axios Instance</h3>
      <pre><code>{`import axios from "axios";

const api = axios.create({
  baseURL: "https://api.example.com",
  headers: {
    "Content-Type": "application/json"
  }
});`}</code></pre>
      <p>
        Instead of calling axios.get() or axios.post() directly every time, we create a preconfigured Axios Instance:
        baseURL ensures all requests automatically target the same API domain; default headers are applied consistently;
        centralized configuration makes future changes easier (auth tokens, interceptors, logging).
      </p>

      <h3>2. Reading Data</h3>
      <pre><code>{`export const getProducts = async () => {
  const res = await api.get("/products");
  return res.data;
};`}</code></pre>
      <p>This function performs a GET request to retrieve all products. Uses HTTP GET; returns only res.data; ideal for product lists, dashboards, and tables.</p>
      <p className="font-semibold text-slate-200">Get product by ID</p>
      <pre><code>{`export const getProductById = async (id) => {
  const res = await api.get(\`/products/\${id}\`);
  return res.data;
};`}</code></pre>

      <h3>3. Creating Data (CREATE)</h3>
      <pre><code>{`export const createProduct = async (payload) => {
  const res = await api.post("/products", payload);
  return res.data;
};`}</code></pre>
      <p>This function sends a POST request to create a new product. payload contains the request body (JSON); backend validates and persists the data; returns the newly created resource.</p>

      <h3>4. Updating Data (UPDATE)</h3>
      <pre><code>{`export const updateProduct = async (id, payload) => {
  const res = await api.put(\`/products/\${id}\`, payload);
  return res.data;
};`}</code></pre>
      <p>Uses HTTP PUT for full updates; requires both the resource ID and updated data; ensures data consistency.</p>

      <h3>5. Deleting Data (DELETE)</h3>
      <pre><code>{`export const deleteProduct = async (id) => {
  await api.delete(\`/products/\${id}\`);
};`}</code></pre>

      <h3>Below is how CRUD is managed in React with a Custom Hook</h3>

      <h4>1. Importing Dependencies</h4>
      <pre><code>{`import { useEffect, useState } from "react";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct
} from "../api/productsApi";`}</code></pre>

      <h4>2. Internal State Management</h4>
      <pre><code>{`const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);`}</code></pre>
      <p>products → the current list; loading → for spinners; error → for display.</p>

      <h4>3. Loading Data (READ)</h4>
      <pre><code>{`const loadProducts = async () => {
  try {
    setLoading(true);
    const data = await getProducts();
    setProducts(data);
  } catch (err) {
    setError(err.message || "Failed to load products");
  } finally {
    setLoading(false);
  }
};`}</code></pre>

      <h4>4. Creating a Product (CREATE)</h4>
      <pre><code>{`const addProduct = async (product) => {
  try {
    const created = await createProduct(product);
    setProducts(prev => [...prev, created]);
  } catch (err) {
    setError(err.message || "Create failed");
  }
};`}</code></pre>

      <h4>5. Updating a Product (UPDATE)</h4>
      <pre><code>{`const editProduct = async (id, product) => {
  try {
    const updated = await updateProduct(id, product);
    setProducts(prev =>
      prev.map(p => (p.id === id ? updated : p))
    );
  } catch (err) {
    setError(err.message || "Update failed");
  }
};`}</code></pre>

      <h4>6. Deleting a Product (DELETE)</h4>
      <pre><code>{`const removeProduct = async (id) => {
  try {
    await deleteProduct(id);
    setProducts(prev => prev.filter(p => p.id !== id));
  } catch (err) {
    setError(err.message || "Delete failed");
  }
};`}</code></pre>

      <h4>Auto-Loading Data on Mount</h4>
      <pre><code>{`useEffect(() => {
  loadProducts();
}, []);`}</code></pre>

      <h4>Exposing the Public API of the Hook</h4>
      <pre><code>{`return {
  products,
  loading,
  error,
  loadProducts,
  addProduct,
  editProduct,
  removeProduct
};`}</code></pre>
      <p>Consume with: <code>{`const { products, addProduct, removeProduct } = useProducts();`}</code></p>

      <p className="font-semibold text-slate-200">
        For full code please check the github repo:{" "}
        <a
          href="https://github.com/Edoni78/react-crud.git"
          target="_blank"
          rel="noreferrer"
          className="text-brand-400 hover:underline"
        >
          https://github.com/Edoni78/react-crud.git
        </a>
      </p>
    </PostLayout>
  );
};

export default ReactCrud;

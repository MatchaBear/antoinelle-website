import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./index.css";

import Home from "./routes/home";
import Contact from "./routes/contact";

const date = new Date();
const year = date.getFullYear();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <header>
      <nav>
        <Link to="/">
          <h1 className="logo">Antoinelle</h1>
        </Link>
      </nav>
    </header>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>

    <footer className="footer">
      <p>Copyright {year} Antoinelle</p>
    </footer>
  </BrowserRouter>
);

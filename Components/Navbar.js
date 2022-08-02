import React, { useEffect } from "react";
// import "../css/Navbar.css";
import { FiSettings } from "react-icons/fi";

import Link from "next/link";

const Navbar = ({ color, currPage, showSettings }) => {
  useEffect(() => {
    document.documentElement.style.setProperty("--theme-color", `${color} `);
  });

  return (
    <header>
      <div className="Highlight"></div>
      <nav>
        <Link href="/" id="Logo">
          <>
            <span>/</span>acmahaja
          </>
        </Link>
        <ul>
          <Link
            href="/"
            className={`active ${currPage === "home" ? "selected" : null}`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`${currPage === "about" ? "selected" : null}`}
          >
            About
          </Link>
          <Link
            href="/projects"
            className={`${currPage === "projects" ? "selected" : null}`}
          >
            Projects
          </Link>
          <Link
            href="/blog"
            className={`${currPage === "blog" ? "selected" : null}`}
          >
            Blog
          </Link>
          <Link
            href="/resume"
            className={`${currPage === "resume" ? "selected" : null}`}
          >
            Resume
          </Link>
          <FiSettings id="settingsIcon" fontSize={20} onClick={showSettings} />
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

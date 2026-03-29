"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const links = ["Home", "Works", "About", "Contact"];

export default function Navbar() {
  const [active, setActive] = useState("Home");

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div
        style={{
          background: "#F9F9F9",
          border: "1px solid #EBEBEB",
          borderRadius: "4px",
          padding: "6px",
          display: "flex",
          gap: "2px",
        }}
      >
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={() => setActive(link)}
            style={{
              padding: "8px 24px",
              borderRadius: "3px",
              fontSize: "15px",
              fontFamily: "var(--font-karla)",
              fontWeight: 500,
              color: "#303030",
              textDecoration: "none",
              transition: "background 0.2s",
              background: active === link ? "#FFFFFF" : "transparent",
              boxShadow:
                active === link ? "0px 1px 3px rgba(0,0,0,0.08)" : "none",
            }}
            onMouseEnter={(e) => {
              if (active !== link) {
                (e.currentTarget as HTMLElement).style.background = "#f0f0f0";
              }
            }}
            onMouseLeave={(e) => {
              if (active !== link) {
                (e.currentTarget as HTMLElement).style.background =
                  "transparent";
              }
            }}
          >
            {link}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}

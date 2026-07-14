"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function MokoBot() {
  return (
    <main
      style={{
        background: "#ffffff",
        minHeight: "100vh",
        fontFamily: "var(--font-karla)",
      }}
    >
      <style>{`
        .mb-back        { padding: 32px 60px 0 !important; }
        .mb-hero        { padding: 100px 60px 60px !important; }
        .mb-prob-cards  { padding: 36px !important; grid-template-columns: 1fr 1fr !important; }
        .mb-dt-row      { flex-direction: row !important; }
        .mb-persona-top { flex-direction: row !important; }
        .mb-persona-cards { grid-template-columns: 1fr 1fr !important; }

        @media (max-width: 768px) {
          .mb-back       { padding: 20px 24px 0 !important; }
          .mb-hero       { padding: 72px 24px 40px !important; }
          .mb-prob-cards { padding: 20px !important; grid-template-columns: 1fr !important; }
          .mb-dt-row     { flex-direction: column !important; align-items: flex-start !important; gap: 24px !important; }
          .mb-dt-line    { display: none !important; }
          .mb-dt-item    { flex-direction: row !important; align-items: center !important; gap: 16px !important; flex: unset !important; width: 100% !important; }
          .mb-dt-text    { text-align: left !important; max-width: unset !important; }
          .mb-persona-top  { flex-direction: column !important; }
          .mb-persona-cards { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ── Back button ── */}
      <div
        className="mb-back"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 50,
        }}
      >
        <Link
          href="/#works"
          style={{
            fontFamily: "var(--font-karla)",
            fontSize: "15px",
            color: "#818181",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(255,255,255,0.85)",
            backdropFilter: "blur(8px)",
            padding: "8px 18px",
            borderRadius: "999px",
            border: "1px solid #e5e5e5",
            transition: "color 0.2s",
          }}
        >
          ← Back
        </Link>
      </div>

      {/* ── Hero area ── */}
      <div
        className="mb-hero"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{
            fontFamily: "var(--font-space)",
            fontSize: "clamp(22px, 2.8vw, 40px)",
            fontWeight: 500,
            color: "#1A1A1A",
            lineHeight: 1.2,
            maxWidth: "900px",
            margin: "0 0 16px 0",
          }}
        >
          MokoBot - A smart vending experience
        </motion.h1>

        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          style={{ marginBottom: "48px" }}
        >
          <span
            style={{
              fontFamily: "var(--font-karla)",
              fontSize: "13px",
              fontWeight: 600,
              color: "#1A1A1A",
              background: "#ffffff",
              border: "1.5px solid #c9c9c9",
              borderRadius: "999px",
              padding: "6px 16px",
              display: "inline-block",
              letterSpacing: "0.3px",
            }}
          >
            Product Designer | Brand Identity | UX Research
          </span>
        </motion.div>

        {/* Cover image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          style={{
            width: "100%",
            borderRadius: "12px",
            overflow: "hidden",
            marginBottom: "60px",
            background: "#D9D9D9",
            aspectRatio: "16/9",
          }}
        >
          <Image
            src="https://res.cloudinary.com/dna2qtnfv/image/upload/v1784054634/Pagecover_sneidr.png"
            alt="HydroSmart Cover"
            width={1200}
            height={675}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
            priority
          />
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          style={{ maxWidth: "1080px" }}
        >
          <p
            style={{
              fontFamily: "var(--font-karla)",
              fontSize: "clamp(16px, 1.4vw, 20px)",
              color: "#818181",
              lineHeight: 1.85,
              margin: 0,
            }}
          >
            Mokobot is a smart vending mobile app designed to make every snack
            run faster, smarter, and more rewarding. I led the end-to-end
            product design from brand identity and UX research through to a full
            high-fidelity UI, reimagining the vending experience for a cashless,
            connected generation.
          </p>
        </motion.div>

        {/* ── Problem Definition Section ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          style={{ marginTop: "80px" }}
        >
          <div style={{ maxWidth: "1080px" }}>
            <p
              style={{
                fontFamily: "var(--font-karla)",
                fontSize: "13px",
                fontWeight: 700,
                color: "#cc6b1c",
                letterSpacing: "2px",
                textTransform: "uppercase",
                margin: "0 0 16px 0",
              }}
            >
              Define
            </p>

            <h2
              style={{
                fontFamily: "var(--font-space)",
                fontSize: "clamp(22px, 2.8vw, 38px)",
                fontWeight: 500,
                color: "#1A1A1A",
                lineHeight: 1.25,
                margin: "0 0 20px 0",
              }}
            >
              Who are we designing for?
            </h2>

            <p
              style={{
                fontFamily: "var(--font-karla)",
                fontSize: "clamp(15px, 1.2vw, 18px)",
                color: "#818181",
                lineHeight: 1.8,
                margin: "0 0 48px 0",
              }}
            >
              Two distinct users drive the product. A convenience-first daily
              buyer and an engagement-driven loyalist. Both need the experience
              to feel instant and rewarding.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

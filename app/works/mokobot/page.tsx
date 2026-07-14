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

        {/* ── Research & Discovery Section ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          style={{ marginTop: "80px" }}
        >
          <div style={{ maxWidth: "1080px" }}>
            {/* Eyebrow + Heading + Subtext */}
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
              Research & Discovery
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
              Starting with the right questions
            </h2>

            <p
              style={{
                fontFamily: "var(--font-karla)",
                fontSize: "clamp(15px, 1.2vw, 18px)",
                color: "#818181",
                lineHeight: 1.8,
                margin: "0 0 56px 0",
              }}
            >
              Before designing a single screen, I needed to understand how
              people actually interact with vending machines today — and what it
              would take to make them reach for an app instead.
            </p>

            {/* Research Goals */}
            <p
              style={{
                fontFamily: "var(--font-karla)",
                fontSize: "13px",
                fontWeight: 700,
                color: "#1A1A1A",
                letterSpacing: "2px",
                textTransform: "uppercase",
                margin: "0 0 24px 0",
              }}
            >
              Research goals
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "16px",
              }}
            >
              {[
                {
                  num: "01",
                  question:
                    "How do people currently interact with vending machines — and where do they drop off?",
                },
                {
                  num: "02",
                  question:
                    "What makes a cashless payment feel trustworthy enough to use at a machine?",
                },
                {
                  num: "03",
                  question:
                    "What would genuinely motivate someone to open an app just to buy from a vending machine?",
                },
              ].map((goal) => (
                <div
                  key={goal.num}
                  style={{
                    backgroundColor: "#F7F7F7",
                    borderRadius: "16px",
                    padding: "28px 24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-karla)",
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "#cc6b1c",
                      letterSpacing: "1px",
                    }}
                  >
                    {goal.num}
                  </span>
                  <p
                    style={{
                      fontFamily: "var(--font-karla)",
                      fontSize: "clamp(14px, 1.1vw, 16px)",
                      color: "#1A1A1A",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {goal.question}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Methods Used */}
        <div style={{ marginTop: "56px" }}>
          <p
            style={{
              fontFamily: "var(--font-karla)",
              fontSize: "13px",
              fontWeight: 700,
              color: "#1A1A1A",
              letterSpacing: "2px",
              textTransform: "uppercase",
              margin: "0 0 24px 0",
            }}
          >
            Methods used
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            {[
              {
                label: "Competitive analysis",
                icon: (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="3" width="7" height="7" rx="1" />
                    <rect x="3" y="14" width="7" height="7" rx="1" />
                    <rect x="14" y="14" width="7" height="7" rx="1" />
                  </svg>
                ),
              },
              {
                label: "User interviews",
                icon: (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                ),
              },
              {
                label: "Journey mapping",
                icon: (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="5" cy="12" r="2" />
                    <circle cx="19" cy="12" r="2" />
                    <path d="M7 12h10" />
                    <path d="M15 8l4 4-4 4" />
                  </svg>
                ),
              },
              {
                label: "Heuristic review",
                icon: (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 11l3 3L22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                ),
              },
            ].map((method, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 20px",
                  borderRadius: "100px",
                  border: "1px solid #E0E0E0",
                  backgroundColor: "#F7F7F7",
                  color: "#1A1A1A",
                }}
              >
                <span
                  style={{
                    color: "#cc6b1c",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {method.icon}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-karla)",
                    fontSize: "clamp(13px, 1vw, 15px)",
                    fontWeight: 500,
                    color: "#1A1A1A",
                    whiteSpace: "nowrap",
                  }}
                >
                  {method.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Observation and design implications */}
        <div style={{ marginTop: "56px" }}>
          <p
            style={{
              fontFamily: "var(--font-karla)",
              fontSize: "13px",
              fontWeight: 700,
              color: "#1A1A1A",
              letterSpacing: "2px",
              textTransform: "uppercase",
              margin: "0 0 24px 0",
            }}
          >
            Observation and Design Implications
          </p>

          <div
            className="mb-prob-cards"
            style={{
              background: "#fcf3eb",
              border: "1.5px dashed #E3A15C",
              borderRadius: "16px",
              display: "grid",
              gap: "20px",
            }}
          >
            {[
              {
                observation:
                  "Users distrust QR payments they can't verify in real time.",
                implication:
                  "Every payment state — pending, confirmed, failed — needs a clear, instant visual response on screen.",
                accentColor: "#cc6b1c",
              },
              {
                observation:
                  "Loyalty only works if the reward feels immediate, not something to collect later.",
                implication:
                  "Points credited and animated on the same screen as purchase confirmation — not buried in a wallet tab.",
                accentColor: "#cc6b1c",
              },
              {
                observation:
                  "People abandon machines after walking to them and finding items out of stock.",
                implication:
                  "Stock visibility before navigation is non-negotiable — the map must show availability, not just location.",
                accentColor: "#cc6b1c",
              },
              {
                observation:
                  "Existing vending apps feel like utility tools — nobody opens them unless they have to.",
                implication:
                  "Mini-games and rewards give users a reason to open the app independently of a purchase.",
                accentColor: "#cc6b1c",
              },
            ].map((insight, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "10px",
                  padding: "28px 24px",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {/* Observation */}
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-karla)",
                      fontSize: "clamp(14px, 1.1vw, 16px)",
                      color: "#1A1A1A",
                      lineHeight: 1.6,
                      fontStyle: "italic",
                      margin: 0,
                    }}
                  >
                    "{insight.observation}"
                  </p>
                </div>

                {/* Divider arrow */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      height: "1px",
                      backgroundColor: "#E0E0E0",
                    }}
                  />
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 2V12M7 12L3 8M7 12L11 8"
                      stroke="#cc6b1c"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div
                    style={{
                      flex: 1,
                      height: "1px",
                      backgroundColor: "#E0E0E0",
                    }}
                  />
                </div>

                {/* Implication */}
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-karla)",
                      fontSize: "clamp(14px, 1.1vw, 16px)",
                      color: "#818181",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {insight.implication}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

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

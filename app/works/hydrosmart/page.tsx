"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HydroSmart() {
  return (
    <main
      style={{
        background: "#ffffff",
        minHeight: "100vh",
        fontFamily: "var(--font-karla)",
      }}
    >
      <style>{`
        .hs-back        { padding: 32px 60px 0 !important; }
        .hs-hero        { padding: 100px 60px 60px !important; }
        .hs-prob-cards  { padding: 36px !important; grid-template-columns: 1fr 1fr !important; }
        .hs-dt-row      { flex-direction: row !important; }
        .hs-persona-top { flex-direction: row !important; }
        .hs-persona-cards { grid-template-columns: 1fr 1fr !important; }

        @media (max-width: 768px) {
          .hs-back       { padding: 20px 24px 0 !important; }
          .hs-hero       { padding: 72px 24px 40px !important; }
          .hs-prob-cards { padding: 20px !important; grid-template-columns: 1fr !important; }
          .hs-dt-row     { flex-direction: column !important; align-items: flex-start !important; gap: 24px !important; }
          .hs-dt-line    { display: none !important; }
          .hs-dt-item    { flex-direction: row !important; align-items: center !important; gap: 16px !important; flex: unset !important; width: 100% !important; }
          .hs-dt-text    { text-align: left !important; max-width: unset !important; }
          .hs-persona-top  { flex-direction: column !important; }
          .hs-persona-cards { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ── Back button ── */}
      <div
        className="hs-back"
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
        className="hs-hero"
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
            margin: "0 0 48px 0",
          }}
        >
          HydroSmart — Smart Water Management System for Rainwater Harvesting
          Tanks
        </motion.h1>

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
          }}
        >
          <Image
            src="https://res.cloudinary.com/dna2qtnfv/image/upload/v1779167433/caseStudy1_q81umx.png"
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
            The Smart Water Management System is a mobile-based solution
            designed to help rural households in Sri Lanka manage their
            rainwater harvesting tanks more effectively. Hydrosmart app provides
            real-time monitoring of water levels and quality, predicts future
            water availability, and enables easy communication with water
            distributors and neighboring households. By combining IoT technology
            with a user-friendly interface, the system aims to ensure safe,
            efficient, and sustainable water usage.
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
                color: "#6B9FD4",
                letterSpacing: "2px",
                textTransform: "uppercase",
                margin: "0 0 16px 0",
              }}
            >
              Problem Definition
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
              What challenges do rural households face?
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
              Through field interviews conducted with households in
              Parasangaswewa, Anuradhapura, we uncovered four critical pain
              points that make daily water management unsafe, inefficient, and
              stressful for families dependent on rainwater harvesting tanks.
            </p>
          </div>

          {/* Cards container */}
          <div
            className="hs-prob-cards"
            style={{
              background: "#F0F7FF",
              border: "1.5px dashed #A8CDEF",
              borderRadius: "16px",
              display: "grid",
              gap: "20px",
            }}
          >
            {[
              {
                heading: "No visibility into water levels",
                body: "Families have no real-time insight into how much water remains in their tank, making it impossible to plan usage before a shortage hits.",
              },
              {
                heading: "No way to detect contamination",
                body: "There is no system to monitor water quality, so households unknowingly consume water that may contain debris or harmful contaminants.",
              },
              {
                heading: "Difficult to reach water distributors",
                body: "No direct channel exists to contact distributors or schedule deliveries, leaving families waiting days without access to clean water.",
              },
              {
                heading: "Water sharing relies on physical visits",
                body: "When a tank runs dry, residents must visit neighbours in person to request water — a slow and inconvenient process with no guarantee of help.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                style={{
                  background: "#ffffff",
                  borderRadius: "10px",
                  padding: "28px 24px",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-space)",
                    fontSize: "clamp(14px, 1.1vw, 17px)",
                    fontWeight: 600,
                    color: "#1A1A1A",
                    margin: "0 0 10px 0",
                    lineHeight: 1.4,
                  }}
                >
                  {card.heading}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-karla)",
                    fontSize: "clamp(13px, 1vw, 15px)",
                    color: "#818181",
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {card.body}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Research Approach Section ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
          style={{ marginTop: "80px" }}
        >
          <p
            style={{
              fontFamily: "var(--font-karla)",
              fontSize: "13px",
              fontWeight: 700,
              color: "#6B9FD4",
              letterSpacing: "2px",
              textTransform: "uppercase",
              margin: "0 0 16px 0",
            }}
          >
            Research Approach
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
            How did we understand the problem?
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
            To design a solution grounded in real needs, we followed the Design
            Thinking methodology — conducting field interviews with households
            in Parasangaswewa, Anuradhapura to empathize with users and define
            the core problems to solve.
          </p>

          {/* Design Thinking stages */}
          <div style={{ padding: "0 4px", marginTop: "80px" }}>
            <div
              className="hs-dt-row"
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                position: "relative",
              }}
            >
              {/* Connecting line */}
              <div
                className="hs-dt-line"
                style={{
                  position: "absolute",
                  top: "16px",
                  left: "10%",
                  right: "10%",
                  height: "2px",
                  background: "#A8CDEF",
                  zIndex: 0,
                }}
              />

              {[
                {
                  stage: "Empathize",
                  desc: "Field interviews with rural households",
                },
                { stage: "Define", desc: "Identified 4 core pain points" },
                { stage: "Ideate", desc: "Brainstormed features and flows" },
                { stage: "Prototype", desc: "Built interactive UI mockups" },
                { stage: "Test", desc: "Validated with target users" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="hs-dt-item"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "12px",
                    zIndex: 1,
                    flex: 1,
                  }}
                >
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      background: "#6B9FD4",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      boxShadow: "0 0 0 4px #ffffff",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-space)",
                        fontSize: "12px",
                        fontWeight: 700,
                        color: "#ffffff",
                      }}
                    >
                      {i + 1}
                    </span>
                  </div>

                  <p
                    style={{
                      fontFamily: "var(--font-space)",
                      fontSize: "clamp(12px, 0.9vw, 14px)",
                      fontWeight: 600,
                      color: "#1A1A1A",
                      margin: 0,
                      textAlign: "center",
                    }}
                  >
                    {item.stage}
                  </p>

                  <p
                    className="hs-dt-text"
                    style={{
                      fontFamily: "var(--font-karla)",
                      fontSize: "clamp(11px, 0.8vw, 13px)",
                      color: "#818181",
                      margin: 0,
                      textAlign: "center",
                      lineHeight: 1.5,
                      maxWidth: "100px",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── User Persona Section ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
          style={{ marginTop: "80px" }}
        >
          <p
            style={{
              fontFamily: "var(--font-karla)",
              fontSize: "13px",
              fontWeight: 700,
              color: "#6B9FD4",
              letterSpacing: "2px",
              textTransform: "uppercase",
              margin: "0 0 16px 0",
            }}
          >
            User Persona
          </p>

          <h2
            style={{
              fontFamily: "var(--font-space)",
              fontSize: "clamp(22px, 2.8vw, 38px)",
              fontWeight: 500,
              color: "#1A1A1A",
              lineHeight: 1.25,
              margin: "0 0 48px 0",
            }}
          >
            Who are we designing for?
          </h2>

          {/* Top row — photo + tags + bio */}
          <div
            className="hs-persona-top"
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "32px",
              marginBottom: "40px",
            }}
          >
            {/* Photo */}
            <div
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                overflow: "hidden",
                flexShrink: 0,
                border: "3px solid #A8CDEF",
              }}
            >
              <Image
                src="https://res.cloudinary.com/dna2qtnfv/image/upload/v1779179341/user_kw8eaw.png"
                alt="Kalyani Athukorala"
                width={120}
                height={120}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>

            {/* Tags + bio */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                flex: 1,
              }}
            >
              {/* Tags row */}
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                {["Kalyani Athukorala", "Anuradhapura", "45 Years"].map(
                  (tag) => (
                    <div
                      key={tag}
                      style={{
                        border: "1.5px solid #6B9FD4",
                        borderRadius: "6px",
                        padding: "6px 18px",
                        fontFamily: "var(--font-karla)",
                        fontSize: "13px",
                        color: "#6B9FD4",
                        fontWeight: 500,
                        background: "#ffffff",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {tag}
                    </div>
                  ),
                )}
              </div>

              {/* Bio */}
              <p
                style={{
                  fontFamily: "var(--font-karla)",
                  fontSize: "clamp(15px, 1.2vw, 18px)",
                  color: "#818181",
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                A stay-at-home mother whose family depends on rainwater
                harvesting. When the tank runs dry, she borrows from neighbours
                or travels kilometres to fetch water. She needs a simple way to
                monitor and plan daily water usage.
              </p>
            </div>
          </div>

          {/* Bottom two cards */}
          <div
            className="hs-persona-cards"
            style={{
              display: "grid",
              gap: "24px",
            }}
          >
            {/* Pain Points */}
            <div
              style={{
                border: "1.5px solid #A8CDEF",
                borderRadius: "16px",
                padding: "32px 28px",
                background: "#ffffff",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-space)",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#1A1A1A",
                  margin: "0 0 20px 0",
                }}
              >
                Pain Points
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {[
                  "No real-time visibility into water levels",
                  "No way to detect water contamination",
                  "Manual and time-consuming water collection",
                  "Difficulty planning daily water usage",
                  "No direct contact with water distributors",
                ].map((point, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        background: "#6B9FD4",
                        marginTop: "8px",
                        flexShrink: 0,
                      }}
                    />
                    <p
                      style={{
                        fontFamily: "var(--font-karla)",
                        fontSize: "clamp(12px, 0.9vw, 14px)",
                        color: "#818181",
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Motivations & Needs */}
            <div
              style={{
                border: "1.5px solid #A8CDEF",
                borderRadius: "16px",
                padding: "32px 28px",
                background: "#ffffff",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-space)",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#1A1A1A",
                  margin: "0 0 20px 0",
                }}
              >
                Motivations & Needs
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {[
                  "Ensure her family has clean, safe water always",
                  "Simple way to track water availability",
                  "Reduce the burden of fetching water manually",
                  "Timely alerts for low water levels",
                  "Easier way to request water from neighbours",
                ].map((point, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        background: "#6B9FD4",
                        marginTop: "8px",
                        flexShrink: 0,
                      }}
                    />
                    <p
                      style={{
                        fontFamily: "var(--font-karla)",
                        fontSize: "clamp(12px, 0.9vw, 14px)",
                        color: "#818181",
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── User Flow Section ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
          style={{ marginTop: "80px" }}
        >
          <p
            style={{
              fontFamily: "var(--font-karla)",
              fontSize: "13px",
              fontWeight: 700,
              color: "#6B9FD4",
              letterSpacing: "2px",
              textTransform: "uppercase",
              margin: "0 0 16px 0",
            }}
          >
            User Flow
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
            How do users navigate the app?
          </h2>

          <p
            style={{
              fontFamily: "var(--font-karla)",
              fontSize: "clamp(15px, 1.2vw, 18px)",
              color: "#818181",
              lineHeight: 1.8,
              margin: "0 0 48px 0",
              maxWidth: "1080px",
            }}
          >
            Visualise the steps users take within the app from start to finish
            highlighting key actions, decisions, and interactions to design
            smooth, goal-oriented experiences.
          </p>

          {/* Flow chart image */}
          <div
            style={{
              width: "100%",
              borderRadius: "12px",
              overflow: "hidden",
              background: "#1A1A2E",
            }}
          >
            <Image
              src="https://res.cloudinary.com/dna2qtnfv/image/upload/v1779180993/userflow_hsy6bo.png"
              alt="HydroSmart User Flow"
              width={1200}
              height={800}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </div>
        </motion.div>

        {/* ── Wireframes Section ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0, ease: "easeOut" }}
          style={{ marginTop: "80px" }}
        >
          <p
            style={{
              fontFamily: "var(--font-karla)",
              fontSize: "13px",
              fontWeight: 700,
              color: "#6B9FD4",
              letterSpacing: "2px",
              textTransform: "uppercase",
              margin: "0 0 16px 0",
            }}
          >
            Wireframes
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
            Sketching the structure before the details
          </h2>

          <p
            style={{
              fontFamily: "var(--font-karla)",
              fontSize: "clamp(15px, 1.2vw, 18px)",
              color: "#818181",
              lineHeight: 1.8,
              maxWidth: "1080px",
            }}
          >
            Low-fidelity wireframes were created to map out the layout and
            structure of each screen before moving into visual design — keeping
            the focus on functionality and user flow.
          </p>

          {/* Wireframes image */}
          <div
            style={{
              width: "100%",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            <Image
              src="https://res.cloudinary.com/dna2qtnfv/image/upload/v1779181978/wireframes_jidoza.png"
              alt="HydroSmart Wireframes"
              width={1200}
              height={800}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </div>
        </motion.div>

        {/* ── High Fidelity Mockups Section ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1, ease: "easeOut" }}
          style={{ marginTop: "80px", paddingBottom: "80px" }}
        >
          <p
            style={{
              fontFamily: "var(--font-karla)",
              fontSize: "13px",
              fontWeight: 700,
              color: "#6B9FD4",
              letterSpacing: "2px",
              textTransform: "uppercase",
              margin: "0 0 16px 0",
            }}
          >
            High Fidelity Mockups
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
            Bringing the design to life
          </h2>

          <p
            style={{
              fontFamily: "var(--font-karla)",
              fontSize: "clamp(15px, 1.2vw, 18px)",
              color: "#818181",
              lineHeight: 1.8,
              maxWidth: "1080px",
            }}
          >
            High-fidelity mockups translate the wireframe structure into a fully
            visual interface — incorporating colour, typography, and real
            content to reflect the final product experience across all key
            screens.
          </p>

          {/* Mockups image */}
          <div
            style={{
              width: "100%",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            <Image
              src="https://res.cloudinary.com/dna2qtnfv/image/upload/v1779183960/highFedility_xpelvm.png"
              alt="HydroSmart High Fidelity Mockups"
              width={1200}
              height={800}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </div>
        </motion.div>
      </div>
    </main>
  );
}

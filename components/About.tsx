"use client";
import { motion, easeOut } from "framer-motion";
import Image from "next/image";

const experiences = [
  {
    id: 1,
    role: "UI/UX Designer",
    company: "Spherehead Technologies",
    period: "Sep 2025 - Current",
    logo: "/images/sh.png",
  },
  {
    id: 2,
    role: "Creative Designer",
    company: "Meridian Creative Solutions",
    period: "Jan 2025 - Aug 2025",
    logo: "/images/meridian.png",
  },
  {
    id: 3,
    role: "Junior UI/ UX Designer",
    company: "Infragist",
    period: "May 2023 - Oct 2023",
    logo: "/images/infra.png",
  },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: easeOut },
});

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: "#ffffff",
        padding: "150px 100px",
        display: "grid",
        gridTemplateColumns: "420px 1fr",
        gap: "80px",
        alignItems: "start",
        overflow: "hidden",
      }}
    >
      {/* ── LEFT — Avatar stack ── */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ position: "relative", height: "720px" }}
      >
        {/* Real photo — circular, behind avatar */}
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "50px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            overflow: "hidden",
            border: "4px solid #ffffff",
            boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
            zIndex: 1,
          }}
        >
          <Image
            src="/images/profileDP.png"
            alt="Sandali"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* "About Me" badge — bottom of photo circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          style={{
            position: "absolute",
            top: "255px",
            left: "230px",
            background: "#A87BB4",
            color: "#fff",
            fontFamily: "var(--font-karla)",
            fontWeight: 700,
            fontSize: "16px",
            padding: "10px 22px",
            borderRadius: "6px",
            boxShadow: "3px 3px 0px #111",
            zIndex: 4,
          }}
        >
          About Me
        </motion.div>

        {/* Full 3D avatar — in front, overlapping photo */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: "180px",
            left: "10px",
            width: "200px",
            zIndex: 2,
          }}
        >
          <Image
            src="/images/fullavatar.png"
            alt="3D Avatar"
            width={380}
            height={560}
            style={{ objectFit: "contain", width: "100%", height: "auto" }}
          />
        </motion.div>
      </motion.div>

      {/* ── RIGHT — Bio + Experience ── */}
      <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
        {/* Bio text */}
        <motion.div {...fadeUp(0.2)} style={{ position: "relative" }}>
          <p
            style={{
              fontFamily: "var(--font-karla)",
              fontSize: "clamp(15px, 1.3vw, 20px)",
              color: "#818181",
              lineHeight: 1.7,
              margin: 0,
              position: "relative",
              zIndex: 1,
            }}
          >
            I didn't begin in design. My journey started as a Software
            Engineering intern, understanding how systems work behind the
            scenes. While creating digital art and experimenting with branding
            as a hobby, I discovered a true passion for design and its ability
            to transform how people experience a brand. Blending my technical
            background with creativity led me toward user-centered and
            thoughtful design. Today, I work as a{" "}
            <strong style={{ color: "#A87BB4", fontWeight: 600 }}>
              UI/UX Designer, Brand Designer, and Brand Strategist
            </strong>
            , creating experiences that balance creativity, strategy, and
            purpose.
          </p>
        </motion.div>

        {/* Work Experience */}
        <motion.div
          {...fadeUp(0.35)}
          style={{ display: "flex", flexDirection: "column", gap: "0px" }}
        >
          {/* Section heading */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "32px",
            }}
          >
            <Image src="/icons/files.svg" alt="" width={32} height={32} />
            <span
              style={{
                fontFamily: "var(--font-karla)",
                fontSize: "clamp(15px, 1.2vw, 19px)",
                fontWeight: 600,
                color: "#A87BB4",
              }}
            >
              Work Experience
            </span>
          </div>

          {/* Experience rows */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.12, duration: 0.6 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  padding: "20px 0",
                  borderBottom:
                    i < experiences.length - 1 ? "1px solid #F0F0F0" : "none",
                }}
              >
                {/* Company logo */}
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "10px",
                    overflow: "hidden",
                    flexShrink: 0,
                    background: "#f5f5f5",
                  }}
                >
                  <Image
                    src={exp.logo}
                    alt={exp.company}
                    width={48}
                    height={48}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>

                {/* Role + company */}
                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      fontFamily: "var(--font-karla)",
                      fontSize: "clamp(14px, 1.1vw, 18px)",
                      fontWeight: 600,
                      color: "#1A1A1A",
                      margin: 0,
                    }}
                  >
                    {exp.role}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-karla)",
                      fontSize: "clamp(12px, 0.9vw, 15px)",
                      color: "#818181",
                      margin: "3px 0 0",
                    }}
                  >
                    {exp.company}
                  </p>
                </div>

                {/* Period */}
                <p
                  style={{
                    fontFamily: "var(--font-karla)",
                    fontSize: "clamp(12px, 0.9vw, 15px)",
                    color: "#AAAAAA",
                    margin: 0,
                    flexShrink: 0,
                  }}
                >
                  {exp.period}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

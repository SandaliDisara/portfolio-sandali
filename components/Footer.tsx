"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const socialLinks = [
  { name: "Behance", icon: "/icons/behance.svg", href: "#" },
  { name: "Dribbble", icon: "/icons/dribble.svg", href: "#" },
  { name: "LinkedIn", icon: "/icons/linkedin.svg", href: "#" },
  { name: "Instagram", icon: "/icons/instagram.svg", href: "#" },
  { name: "YouTube", icon: "/icons/youtube.svg", href: "#" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        background: "#ffffff",
        position: "relative",
        overflow: "hidden",
        display: "grid",
        gridTemplateColumns: "1fr auto",
        alignItems: "stretch",
        minHeight: "260px",
        padding: "50px 100px 0px",
        border: "1px solid #F0F0F0",
        borderRadius: "8px 8px 0 0",
        margin: "0 16px",
      }}
    >
      {/* Grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
      linear-gradient(to right, #e8e8e8 1px, transparent 1px),
      linear-gradient(to bottom, #e8e8e8 1px, transparent 1px)
    `,
          backgroundSize: "60px 60px",
          opacity: 0.4,
          zIndex: 0,
          pointerEvents: "none",
          borderRadius: "16px 16px 0 0",
        }}
      />
      {/* ── LEFT ── */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          paddingBottom: "50px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            fontFamily: "var(--font-space)",
            fontSize: "clamp(48px, 6.5vw, 100px)",
            fontWeight: 400,
            color: "#111",
            margin: 0,
            lineHeight: 1,
          }}
        >
          Let's Connect
        </motion.h2>

        {/* Bottom group — Say Hi + email + socials */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              fontFamily: "var(--font-karla)",
              fontSize: "clamp(14px, 1.2vw, 20px)",
              fontWeight: 700,
              color: "#A87BB4",
              margin: 0,
            }}
          >
            Say Hi!
          </motion.p>

          <motion.a
            href="mailto:sandalicreates@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ color: "#A87BB4" }}
            style={{
              fontFamily: "var(--font-karla)",
              fontSize: "clamp(16px, 1.8vw, 28px)",
              fontWeight: 400,
              color: "#111",
              textDecoration: "none",
              display: "block",
              transition: "color 0.2s",
            }}
          >
            sandalicreates@gmail.com
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              marginTop: "4px",
            }}
          >
            {socialLinks.map((s, i) => (
              <motion.a
                key={s.name}
                href={s.href}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.08 }}
                whileHover={{ scale: 1.2, y: -3 }}
                title={s.name}
                style={{ display: "flex", alignItems: "center" }}
              >
                <Image src={s.icon} alt={s.name} width={26} height={26} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── RIGHT — Avatar + rotating badge ── */}
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "flex-end",
          marginRight: "-100px",
          marginBottom: "-120px",
          zIndex: 1,
          overflow: "visible",
        }}
      >
        {/* Rotating CONTACT badge — top right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{
            position: "absolute",
            top: "1px",
            right: "95px",
            width: "100px",
            height: "100px",
            zIndex: 2,
          }}
        >
          <div
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              background: "#CAFF4C",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              style={{ position: "absolute", width: "100%", height: "100%" }}
            >
              <svg
                viewBox="0 0 100 100"
                style={{ width: "100%", height: "100%" }}
              >
                <defs>
                  <path
                    id="contactCircle"
                    d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                  />
                </defs>
                <text
                  style={{
                    fontSize: "11px",
                    fill: "#111",
                    fontFamily: "var(--font-space)",
                    fontWeight: 700,
                    letterSpacing: "3px",
                  }}
                >
                  <textPath href="#contactCircle">CONTACT CONTACT </textPath>
                </text>
              </svg>
            </motion.div>
            <Image
              src="/icons/call.svg"
              alt="contact"
              width={28}
              height={28}
              style={{ zIndex: 1 }}
            />
          </div>
        </motion.div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <Image
            src="/images/connectavatar.png"
            alt="Sandali on phone"
            width={420}
            height={400}
            style={{
              objectFit: "contain",
              objectPosition: "bottom",
              height: "100%",
              width: "auto",
              maxWidth: "clamp(260px, 24vw, 400px)",
              display: "block",
            }}
          />
        </motion.div>
      </div>
    </footer>
  );
}

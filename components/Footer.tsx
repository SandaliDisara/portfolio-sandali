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
        padding: "80px 100px 60px",
        position: "relative",
        overflow: "hidden",
        display: "grid",
        gridTemplateColumns: "1fr auto",
        alignItems: "flex-end",
        minHeight: "380px",
      }}
    >
      {/* ── LEFT ── */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
        {/* "Let's Connect" heading with rotating badge */}
        <div style={{ position: "relative", display: "inline-block" }}>
          {/* Rotating CONTACT badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            style={{
              position: "absolute",
              top: "20px",
              left: "-10px",
              width: "110px",
              height: "110px",
              zIndex: 2,
            }}
          >
            {/* Outer green circle */}
            <div
              style={{
                width: "110px",
                height: "110px",
                borderRadius: "50%",
                background: "#CAFF4C",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              {/* Rotating text */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                }}
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
                      fontSize: "12px",
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

              {/* Call icon in centre */}
              <Image
                src="/icons/call.svg"
                alt="contact"
                width={32}
                height={32}
                style={{ zIndex: 1 }}
              />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              fontFamily: "var(--font-space)",
              fontSize: "clamp(52px, 7vw, 110px)",
              fontWeight: 400,
              color: "#111",
              margin: 0,
              lineHeight: 1,
            }}
          >
            Let's Connect
          </motion.h2>
        </div>

        {/* Spacer */}
        <div style={{ height: "clamp(40px, 5vw, 80px)" }} />

        {/* Say Hi! */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            fontFamily: "var(--font-karla)",
            fontSize: "clamp(16px, 1.4vw, 22px)",
            fontWeight: 700,
            color: "#A87BB4",
            margin: "0 0 10px 0",
          }}
        >
          Say Hi!
        </motion.p>

        {/* Email */}
        <motion.a
          href="mailto:sandalicreates@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          whileHover={{ color: "#A87BB4" }}
          style={{
            fontFamily: "var(--font-karla)",
            fontSize: "clamp(18px, 2vw, 32px)",
            fontWeight: 400,
            color: "#111",
            textDecoration: "none",
            margin: "0 0 24px 0",
            display: "block",
            transition: "color 0.2s",
          }}
        >
          sandalicreates@gmail.com
        </motion.a>

        {/* Social icons — individual, no container box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{ display: "flex", gap: "12px", alignItems: "center" }}
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
              <Image src={s.icon} alt={s.name} width={28} height={28} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* ── RIGHT — Sitting avatar ── */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        style={{
          display: "flex",
          alignItems: "flex-end",
          marginRight: "-100px", // bleeds to edge
        }}
      >
        <Image
          src="/images/sitavatar.png"
          alt="Sandali sitting"
          width={500}
          height={460}
          style={{
            objectFit: "contain",
            width: "clamp(320px, 30vw, 500px)",
            height: "auto",
          }}
        />
      </motion.div>
    </footer>
  );
}

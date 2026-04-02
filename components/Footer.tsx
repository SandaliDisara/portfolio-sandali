"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const socialLinks = [
  {
    name: "Behance",
    icon: "/icons/behance.svg",
    href: "https://www.behance.net/SandaliDisaraArt",
  },
  {
    name: "Dribbble",
    icon: "/icons/dribble.svg",
    href: "https://dribbble.com/Sandali_Disara",
  },
  {
    name: "LinkedIn",
    icon: "/icons/linkedin.svg",
    href: "https://www.linkedin.com/in/sandalidisara",
  },
  {
    name: "Instagram",
    icon: "/icons/instagram.svg",
    href: "https://www.instagram.com/islandtree_creations/",
  },
  {
    name: "YouTube",
    icon: "/icons/youtube.svg",
    href: "https://www.youtube.com/@SandaliDisara",
  },
];

export default function Footer() {
  return (
    <>
      <style>{`
        .footer-section {
          background: #ffffff;
          position: relative;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: stretch;
          min-height: 260px;
          padding: 50px 100px 0px;
          border: 1px solid #F0F0F0;
          border-radius: 8px 8px 0 0;
          margin: 0 16px;
        }

        .footer-left {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding-bottom: 50px;
          position: relative;
          z-index: 1;
        }

        .footer-right {
          position: relative;
          display: flex;
          align-items: flex-end;
          margin-right: -100px;
          margin-bottom: -120px;
          z-index: 1;
          overflow: visible;
        }

        .footer-heading {
          font-family: var(--font-space);
          font-size: clamp(48px, 6.5vw, 100px);
          font-weight: 400;
          color: #111;
          margin: 0;
          line-height: 1;
        }

        .footer-badge {
          position: absolute;
          top: 1px;
          right: 95px;
          width: 100px;
          height: 100px;
          z-index: 2;
        }

        .footer-avatar {
          object-fit: contain;
          object-position: bottom;
          height: 100%;
          width: auto;
          max-width: clamp(260px, 24vw, 400px);
          display: block;
        }

        @media (max-width: 768px) {
          .footer-section {
            margin: 0 !important;
            border-radius: 0 !important;
            padding: 40px 24px 0px !important;
            min-height: 220px !important;
            border-left: none !important;
            border-right: none !important;
          }

          .footer-heading {
            font-size: clamp(38px, 12vw, 60px) !important;
          }

          .footer-left {
            padding-bottom: 36px !important;
          }

          .footer-right {
            margin-right: -24px !important;
            margin-bottom: -60px !important;
          }

          .footer-avatar {
            max-width: 160px !important;
          }

          .footer-badge {
            top: -30px !important;
            right: 24px !important;
            width: 72px !important;
            height: 72px !important;
          }
        }
      `}</style>

      <footer id="contact" className="footer-section">
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
            borderRadius: "8px 8px 0 0",
          }}
        />

        {/* ── LEFT ── */}
        <div className="footer-left">
          <motion.h2
            className="footer-heading"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Let's Connect
          </motion.h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
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
                margin: "0 0 2px 0",
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
                fontSize: "clamp(13px, 1.8vw, 28px)",
                fontWeight: 400,
                color: "#111",
                textDecoration: "none",
                display: "block",
                transition: "color 0.2s",
                marginTop: "-4px",
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
                  target="_blank"
                  rel="noopener noreferrer"
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

        {/* ── RIGHT — Avatar + badge ── */}
        <div className="footer-right">
          {/* Rotating CONTACT badge */}
          <motion.div
            className="footer-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
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
              className="footer-avatar"
            />
          </motion.div>
        </div>
      </footer>
    </>
  );
}

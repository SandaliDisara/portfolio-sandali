"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const socialLinks = [
  { name: "Behance", icon: "/icons/behance.svg", href: "#" },
  { name: "Dribbble", icon: "/icons/dribble.svg", href: "#" },
  { name: "LinkedIn", icon: "/icons/linkedin.svg", href: "#" },
  { name: "Instagram", icon: "/icons/instagram.svg", href: "#" },
  { name: "YouTube", icon: "/icons/youtube.svg", href: "#" },
  { name: "Gmail", icon: "/icons/gmail.svg", href: "#" },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
});

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        height: "100vh",
        maxHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        paddingTop: "clamp(60px, 6vw, 80px)",
        paddingLeft: "clamp(40px, 5.8vw, 100px)",
        paddingRight: "clamp(40px, 5.8vw, 100px)",
        paddingBottom: "0px",
        position: "relative",
        overflow: "hidden",
        background: "#ffffff",
        boxSizing: "border-box",
      }}
    >
      {/* ── TOP: "Hi! I am" + Full-width name ── */}
      <div
        style={{
          paddingTop: "clamp(8px, 1.5vw, 20px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexShrink: 0,
        }}
      >
        <div style={{ display: "inline-block", position: "relative" }}>
          <motion.p
            {...fadeUp(0.1)}
            style={{
              fontFamily: "var(--font-space)",
              fontSize: "clamp(18px, 2.6vw, 45px)",
              color: "#A87BB4",
              fontWeight: 600,
              marginBottom: "0px",
              textAlign: "left",
            }}
          >
            Hi! I am
          </motion.p>

          <motion.h1
            {...fadeUp(0.2)}
            style={{
              fontFamily: "var(--font-space)",
              fontSize: "clamp(52px, 8vw, 138px)",
              fontWeight: 400,
              lineHeight: 0.95,
              color: "#1A1A1A",
              textAlign: "left",
              letterSpacing: "-2px",
              whiteSpace: "nowrap",
              margin: 0,
            }}
          >
            SANDALI DISARA
          </motion.h1>

          {/* ── "Creative Designer" badge — anchored to bottom-right of name ── */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotate: 3 }}
            animate={{ opacity: 1, x: 0, rotate: -6 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            whileHover={{ rotate: 0, scale: 1.05 }}
            style={{
              position: "absolute",
              bottom: "-30px",
              right: "-20px",
              background: "#A87BB4",
              color: "#fff",
              padding: "clamp(8px, 0.8vw, 12px) clamp(14px, 1.6vw, 24px)",
              borderRadius: "8px",
              fontFamily: "var(--font-karla)",
              fontWeight: 700,
              fontSize: "clamp(13px, 1.2vw, 18px)",
              boxShadow: "4px 4px 0px #111",
              cursor: "default",
              zIndex: 10,
              whiteSpace: "nowrap",
            }}
          >
            Creative Designer
          </motion.div>
        </div>
      </div>

      {/* ── BOTTOM: 3-column layout ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr 1fr",
          flex: 1,
          minHeight: 0,
        }}
      >
        {/* ── LEFT COLUMN ── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            paddingBottom: "clamp(24px, 3vw, 40px)",
            gap: "clamp(10px, 1.2vw, 16px)",
            minHeight: 0,
          }}
        >
          {/* Playlist card */}
          <motion.div
            initial={{ opacity: 0, rotate: -6, y: 20 }}
            animate={{ opacity: 1, rotate: -12, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            whileHover={{ rotate: 0, scale: 1.04 }}
            style={{
              borderRadius: "3px",
              width: "clamp(100px, 9vw, 155px)",
              cursor: "pointer",
              boxShadow: "3px 3px 0px #111",
              position: "relative",
              overflow: "hidden",
              lineHeight: 0,
              flexShrink: 0,
              alignSelf: "center",
            }}
          >
            <Image
              src="/icons/playlist.svg"
              alt="Playlist"
              width={200}
              height={200}
              style={{
                borderRadius: "3px",
                display: "block",
                width: "100%",
                height: "auto",
              }}
            />
          </motion.div>

          {/* Quote */}
          <motion.p
            {...fadeUp(0.6)}
            style={{
              fontFamily: "var(--font-karla)",
              fontSize: "clamp(10px, 1vw, 15px)",
              color: "#818181",
              fontWeight: 400,
              lineHeight: 1.5,
              maxWidth: "clamp(140px, 13vw, 200px)",
              margin: 0,
              flexShrink: 0,
              alignSelf: "flex-end",
              paddingRight: "clamp(8px, 1.2vw, 16px)",
              marginTop: "clamp(6px, 0.8vw, 12px)",
            }}
          >
            My music taste travels more than I do. New language, new genre, new
            mood every hour.
          </motion.p>

          {/* Scroll Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            style={{
              width: "clamp(80px, 8.5vw, 145px)",
              height: "clamp(80px, 8.5vw, 145px)",
              borderRadius: "50%",
              background: "#A87BB4",
              border: "2px solid #A87BB4",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              flexShrink: 0,
              alignSelf: "flex-start",
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
                    id="circle"
                    d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <text
                  style={{
                    fontSize: "11.5px",
                    fill: "#ffffff",
                    fontFamily: "var(--font-space)",
                    fontWeight: 600,
                    letterSpacing: "5px",
                  }}
                >
                  <textPath href="#circle">SCROLL FOR MORE !.!.! </textPath>
                </text>
              </svg>
            </motion.div>
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ filter: "brightness(0) invert(1)" }}
            >
              <Image
                src="/icons/hand.svg"
                alt="Scroll down"
                width={28}
                height={28}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* ── CENTER COLUMN — Avatar ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            minHeight: 0,
          }}
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{
              maxHeight: "100%",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <Image
              src="/images/hero-avatar.png"
              alt="Sandali Disara"
              width={480}
              height={560}
              style={{ objectFit: "contain", maxHeight: "72vh", width: "auto" }}
              priority
            />
          </motion.div>
        </motion.div>

        {/* ── RIGHT COLUMN ── */}
        <div
          style={{
            display: "grid",
            gridTemplateRows: "1fr auto",
            paddingLeft: "clamp(16px, 2.4vw, 32px)",
            paddingBottom: "clamp(20px, 2.2vw, 30px)",
            minHeight: 0,
          }}
        >
          {/* Description */}
          <motion.p
            {...fadeUp(0.5)}
            style={{
              fontFamily: "var(--font-karla)",
              fontSize: "clamp(13px, 1.6vw, 26px)",
              fontWeight: 400,
              color: "#818181",
              lineHeight: 1.4,
              maxWidth: "80%",
              margin: 0,
              alignSelf: "flex-end",
              paddingBottom: "clamp(24px, 4vw, 60px)",
            }}
          >
            Creative Designer blending UI/UX, branding, and strategy to build
            impactful design solutions.
          </motion.p>

          {/* Bottom group */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "clamp(8px, 1vw, 14px)",
            }}
          >
            {/* CTA + heart */}
            <motion.div
              {...fadeUp(0.65)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "clamp(6px, 0.8vw, 10px)",
                marginBottom: "clamp(16px, 2.5vw, 40px)",
              }}
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image src="/icons/love.svg" alt="" width={30} height={30} />
              </motion.div>
              <motion.a
                href="#works"
                whileHover={{ scale: 1.05, background: "#AAEE30" }}
                whileTap={{ scale: 0.97 }}
                style={{
                  background: "#CAFF4C",
                  color: "#111",
                  padding: "clamp(8px, 0.8vw, 11px) clamp(16px, 1.8vw, 26px)",
                  borderRadius: "10px",
                  fontFamily: "var(--font-karla)",
                  fontWeight: 600,
                  fontSize: "clamp(12px, 1vw, 16px)",
                  textDecoration: "none",
                  boxShadow: "3px 3px 0px #111",
                  transition: "background 0.2s",
                  display: "inline-block",
                  whiteSpace: "nowrap",
                }}
              >
                Take a Tour
              </motion.a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              style={{
                display: "flex",
                gap: "clamp(4px, 0.5vw, 6px)",
                flexWrap: "nowrap",
                background: "#f5f5f5",
                border: "1px solid #e5e5e5",
                borderRadius: "12px",
                padding: "clamp(6px, 0.6vw, 8px) clamp(8px, 0.9vw, 12px)",
                width: "fit-content",
                alignSelf: "flex-start",
              }}
            >
              {socialLinks.map((s, i) => (
                <motion.a
                  key={s.name}
                  href={s.href}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + i * 0.08 }}
                  whileHover={{ scale: 1.2, y: -3 }}
                  style={{
                    width: "clamp(24px, 2vw, 30px)",
                    height: "clamp(24px, 2vw, 30px)",
                    borderRadius: "6px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  title={s.name}
                >
                  <Image src={s.icon} alt={s.name} width={20} height={20} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

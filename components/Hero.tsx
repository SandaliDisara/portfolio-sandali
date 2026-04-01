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
    <>
      <style>{`
        .hero-section {
          height: 100vh;
          max-height: 100vh;
          display: flex;
          flex-direction: column;
          padding-top: clamp(60px, 6vw, 80px);
          padding-left: clamp(40px, 5.8vw, 100px);
          padding-right: clamp(40px, 5.8vw, 100px);
          padding-bottom: 0px;
          position: relative;
          overflow: hidden;
          background: #ffffff;
          box-sizing: border-box;
        }
        .hero-three-col {
          display: grid;
          grid-template-columns: 1fr 1.2fr 1fr;
          flex: 1;
          min-height: 0;
        }
        .hero-left-col {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding-bottom: clamp(24px, 3vw, 40px);
          gap: clamp(10px, 1.2vw, 16px);
          min-height: 0;
        }
        .hero-right-col {
          display: grid;
          grid-template-rows: 1fr auto;
          padding-left: clamp(16px, 2.4vw, 32px);
          padding-bottom: clamp(20px, 2.2vw, 30px);
          min-height: 0;
        }
        .hero-mobile-stack {
          display: none;
        }
        @media (max-width: 768px) {
          .hero-section {
            height: auto;
            min-height: 100vh;
            max-height: none;
            padding: 80px 24px 40px;
            overflow: visible;
          }
          .hero-name-wrapper {
            text-align: center !important;
            align-items: center !important;
          }
          .hero-name-wrapper h1 {
            font-size: clamp(64px, 18vw, 100px) !important;
            text-align: center !important;
            white-space: normal !important;
            line-height: 0.9 !important;
          }
          .hero-name-wrapper p {
            text-align: center !important;
          }
          .hero-badge {
  bottom: -10px !important;
  right: -10px !important;
  transform: rotate(-6deg) !important;
}
          .hero-three-col {
            display: none !important;
          }
          .hero-mobile-stack {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            margin-top: 50px;
            padding-bottom: 40px;
          }
        }
      `}</style>

      <section id="home" className="hero-section">
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
          }}
        />

        {/* ── TOP: Hi + Name ── */}
        <div
          style={{
            paddingTop: "clamp(8px, 1.5vw, 20px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flexShrink: 0,
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            className="hero-name-wrapper"
            style={{ display: "inline-block", position: "relative" }}
          >
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

            <motion.div
              className="hero-badge"
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

        {/* ── DESKTOP: 3-column layout ── */}
        <div
          className="hero-three-col"
          style={{ position: "relative", zIndex: 1 }}
        >
          {/* LEFT */}
          <div className="hero-left-col">
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
              }}
            >
              My music taste travels more than I do. New language, new genre,
              new mood every hour.
            </motion.p>

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

          {/* CENTER */}
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
                style={{
                  objectFit: "contain",
                  maxHeight: "72vh",
                  width: "auto",
                }}
                priority
              />
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <div className="hero-right-col">
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

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: "clamp(8px, 1vw, 14px)",
              }}
            >
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
                  Contact Me
                </motion.a>
              </motion.div>

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

        {/* ── MOBILE: stacked layout ── */}
        <div
          className="hero-mobile-stack"
          style={{ position: "relative", zIndex: 1 }}
        >
          {/* Description */}
          <motion.p
            {...fadeUp(0.3)}
            style={{
              fontFamily: "var(--font-karla)",
              fontSize: "16px",
              fontWeight: 400,
              color: "#818181",
              lineHeight: 1.6,
              margin: 0,
              textAlign: "center",
            }}
          >
            Creative Designer blending UI/UX, branding, and strategy to build
            impactful design solutions.
          </motion.p>

          {/* Social icons pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{
              display: "flex",
              gap: "6px",
              flexWrap: "nowrap",
              background: "#f5f5f5",
              border: "1px solid #e5e5e5",
              borderRadius: "12px",
              padding: "8px 12px",
              width: "fit-content",
              alignSelf: "center",
            }}
          >
            {socialLinks.map((s, i) => (
              <motion.a
                key={s.name}
                href={s.href}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.08 }}
                whileHover={{ scale: 1.2, y: -3 }}
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                title={s.name}
              >
                <Image src={s.icon} alt={s.name} width={22} height={22} />
              </motion.a>
            ))}
          </motion.div>

          {/* Avatar row */}
          <div
            style={{
              position: "relative",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              minHeight: "380px",
            }}
          >
            {/* Playlist card — left */}
            <motion.div
              initial={{ opacity: 0, rotate: -6, y: 20 }}
              animate={{ opacity: 1, rotate: -10, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              style={{
                position: "absolute",
                left: "0px",
                top: "0px",
                width: "75px",
                zIndex: 2,
                borderRadius: "3px",
                boxShadow: "3px 3px 0px #111",
                overflow: "hidden",
                lineHeight: 0,
              }}
            >
              <Image
                src="/icons/playlist.svg"
                alt="Playlist"
                width={100}
                height={100}
                style={{ display: "block", width: "100%", height: "auto" }}
              />
            </motion.div>

            {/* Heart — right */}
            <motion.div
              animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                right: "10px",
                top: "60px",
                zIndex: 2,
              }}
            >
              <Image src="/icons/love.svg" alt="" width={28} height={28} />
            </motion.div>

            {/* Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
              style={{
                width: "90%",
                maxWidth: "340px",
                zIndex: 1,
                alignSelf: "flex-end",
              }}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/images/hero-avatar.png"
                  alt="Sandali Disara"
                  width={340}
                  height={400}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "auto",
                  }}
                  priority
                />
              </motion.div>
            </motion.div>

            {/* Scroll badge — bottom left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              style={{
                position: "absolute",
                bottom: "0px",
                left: "0px",
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                background: "#A87BB4",
                border: "2px solid #A87BB4",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2,
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
                      id="mobileCircle"
                      d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    />
                  </defs>
                  <text
                    style={{
                      fontSize: "11.5px",
                      fill: "#ffffff",
                      fontFamily: "var(--font-space)",
                      fontWeight: 600,
                      letterSpacing: "4px",
                    }}
                  >
                    <textPath href="#mobileCircle">SCROLL MORE !.!.! </textPath>
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
                  width={22}
                  height={22}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

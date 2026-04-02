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
    <>
      <style>{`
        .about-section {
          background: #ffffff;
          padding: 150px 100px 60px;
          display: grid;
          grid-template-columns: 420px 1fr;
          gap: 80px;
          align-items: start;
          overflow: hidden;
        }
        .about-left {
          position: relative;
          height: 720px;
        }
        .about-right {
          display: flex;
          flex-direction: column;
          gap: 48px;
        }
        .about-mobile-visual {
          display: none;
        }
        .period-mobile {
          display: none;
        }

        @media (max-width: 768px) {
          .about-section {
            padding: 120px 24px 60px !important;
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .about-left {
            display: none !important;
          }
          .about-right {
            gap: 16px !important;
          }
          .about-mobile-visual {
            display: flex;
            justify-content: center;
            align-items: flex-end;
            position: relative;
            height: 280px;
            margin-bottom: 0px;
          }
          .about-bio-text {
            text-align: center !important;
          }
          .about-exp-heading {
            justify-content: center !important;
          }
          .about-exp-period {
            display: none !important;
          }
          .period-mobile {
            display: block !important;
          }
        }
      `}</style>

      <section id="about" className="about-section">
        {/* ── DESKTOP LEFT — Avatar stack ── */}
        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
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
        <div className="about-right">
          {/* ── MOBILE ONLY visual ── */}
          <div className="about-mobile-visual">
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "220px",
                height: "220px",
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

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              style={{
                position: "absolute",
                top: "185px",
                left: "50%",
                transform: "translateX(20px) rotate(-6deg)",
                background: "#A87BB4",
                color: "#fff",
                fontFamily: "var(--font-karla)",
                fontWeight: 700,
                fontSize: "14px",
                padding: "8px 18px",
                borderRadius: "6px",
                boxShadow: "3px 3px 0px #111",
                zIndex: 4,
                whiteSpace: "nowrap",
              }}
            >
              About Me
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                bottom: "40px",
                left: "20%",
                transform: "translateX(-50%)",
                width: "80px",
                zIndex: 2,
              }}
            >
              <Image
                src="/images/fullavatar.png"
                alt="3D Avatar"
                width={200}
                height={300}
                style={{ objectFit: "contain", width: "100%", height: "auto" }}
              />
            </motion.div>
          </div>

          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            style={{ position: "relative" }}
          >
            <p
              className="about-bio-text"
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0px",
              marginTop: "32px",
            }}
          >
            <div
              className="about-exp-heading"
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

            <div style={{ display: "flex", flexDirection: "column" }}>
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
                    gap: "16px",
                    padding: "20px 0",
                    borderBottom:
                      i < experiences.length - 1 ? "1px solid #F0F0F0" : "none",
                  }}
                >
                  {/* Logo */}
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "6px",
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
                        margin: "2px 0 0",
                      }}
                    >
                      {exp.company}
                    </p>
                  </div>

                  {/* Desktop period — single line */}
                  <p
                    className="about-exp-period"
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

                  {/* Mobile period — two lines */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      flexShrink: 0,
                    }}
                  >
                    {exp.period.split(" - ").map((part, idx) => (
                      <span
                        key={idx}
                        className="period-mobile"
                        style={{
                          fontFamily: "var(--font-karla)",
                          fontSize: "11px",
                          color: "#AAAAAA",
                          lineHeight: 1.6,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {part}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

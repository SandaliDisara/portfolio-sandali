"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const works = [
  {
    id: 1,
    title: "Brand Identity",
    category: "Web Experience",
    media:
      "https://res.cloudinary.com/dna2qtnfv/image/upload/v1774860286/artsb_cover.png",
    type: "image",
    slug: null,
    cursorColor: "#A87BB4",
    disabled: true,
  },
  {
    id: 2,
    title: "Mobile App UI",
    category: "UI/UX",
    media:
      "https://res.cloudinary.com/dna2qtnfv/video/upload/v1774862518/hydrosmart_work_q9sfgo.mp4",
    type: "video",
    slug: "/works/hydrosmart",
    cursorColor: "#6B9FD4",
  },
  {
    id: 3,
    title: "Web Experience",
    category: "UI/UX",
    media:
      "https://res.cloudinary.com/dna2qtnfv/video/upload/v1774857092/beach_export.mp4",
    type: "video",
    slug: null,
    cursorColor: "#5f5b3f",
    disabled: true,
  },
  {
    id: 4,
    title: "Packaging Design",
    category: "Packaging",
    media:
      "https://res.cloudinary.com/dna2qtnfv/video/upload/v1774861212/sanas_v2_z5azgs.mp4",
    type: "video",
    slug: null,
    cursorColor: "#F4A261",
    disabled: true,
  },
  {
    id: 5,
    title: "Poster Campaign",
    category: "Branding",
    media:
      "https://res.cloudinary.com/dna2qtnfv/image/upload/v1774863763/xiaobao_mfctxd.png",
    type: "image",
    slug: null,
    cursorColor: "#E76F51",
    disabled: true,
  },
  {
    id: 6,
    title: "Company Promo",
    category: "Web UI",
    media:
      "https://res.cloudinary.com/dna2qtnfv/video/upload/v1774864894/Astroweb_babcut.mp4",
    type: "video",
    slug: null,
    cursorColor: "#1c1e1e",
    disabled: true,
  },
];

const rows = works.reduce((acc: (typeof works)[], item, i) => {
  const rowIndex = Math.floor(i / 3);
  if (!acc[rowIndex]) acc[rowIndex] = [];
  acc[rowIndex].push(item);
  return acc;
}, []) as (typeof works)[];

const mobileRows = works.reduce((acc: (typeof works)[], item, i) => {
  const rowIndex = Math.floor(i / 2);
  if (!acc[rowIndex]) acc[rowIndex] = [];
  acc[rowIndex].push(item);
  return acc;
}, []) as (typeof works)[];

function CustomCursor({ color }: { color: string }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      style={{
        position: "fixed",
        pointerEvents: "none",
        zIndex: 9999,
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        background: color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "2px",
        transform: "translate(-50%, -50%)",
      }}
      id="custom-cursor"
    >
      <span
        style={{
          fontSize: "18px",
          lineHeight: 1,
          color: color === "#CAFF4C" ? "#111" : "#fff",
        }}
      >
        →
      </span>
      <span
        style={{
          fontFamily: "var(--font-karla)",
          fontSize: "10px",
          fontWeight: 700,
          color: color === "#CAFF4C" ? "#111" : "#fff",
          whiteSpace: "nowrap",
          letterSpacing: "0.5px",
        }}
      >
        View Work
      </span>
    </motion.div>
  );
}

function CardMedia({ item }: { item: (typeof works)[0] }) {
  return (
    <>
      {item.media && item.type === "image" && (
        <img
          src={item.media}
          alt={item.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      )}
      {item.media && item.type === "video" && (
        <video
          src={item.media}
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      )}
    </>
  );
}

function WorkCard({ item, index }: { item: (typeof works)[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const card = (
    <motion.div
      className="work-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.75, delay: index * 0.12, ease: "easeOut" }}
      onMouseEnter={() => !item.disabled && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => !item.disabled && handleMouseMove(e)}
      style={{
        flex: "0 0 calc(31%)",
        minWidth: 0,
        aspectRatio: "4/5",
        borderRadius: "3px",
        overflow: "hidden",
        background: "#D9D9D9",
        position: "relative",
        cursor: item.disabled ? "default" : "none",
        pointerEvents: item.disabled ? "none" : "auto",
      }}
    >
      <CardMedia item={item} />

      {hovered && (
        <div
          style={{
            position: "fixed",
            left: cursorPos.x,
            top: cursorPos.y,
            pointerEvents: "none",
            zIndex: 9999,
          }}
        >
          <CustomCursor color={item.cursorColor} />
        </div>
      )}
    </motion.div>
  );

  if (item.slug) {
    return (
      <Link
        href={item.slug}
        style={{
          flex: "0 0 calc(31%)",
          textDecoration: "none",
          display: "block",
          cursor: "none",
        }}
      >
        {card}
      </Link>
    );
  }

  return card;
}

function MobileWorkCard({
  item,
  index,
}: {
  item: (typeof works)[0];
  index: number;
}) {
  const card = (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.75, delay: index * 0.12, ease: "easeOut" }}
      style={{
        flex: "1 1 0",
        minWidth: 0,
        aspectRatio: "3/4",
        borderRadius: "3px",
        overflow: "hidden",
        background: "#D9D9D9",
        position: "relative",
        cursor: item.slug ? "pointer" : "default",
      }}
    >
      <CardMedia item={item} />
    </motion.div>
  );

  if (item.slug) {
    return (
      <Link
        href={item.slug}
        style={{ flex: "1 1 0", textDecoration: "none", display: "block" }}
      >
        {card}
      </Link>
    );
  }

  return card;
}

export default function Works() {
  return (
    <>
      <style>{`
        .works-desktop { display: flex; }
        .works-mobile  { display: none; }

        @media (max-width: 768px) {
          .works-desktop { display: none !important; }
          .works-mobile  { display: flex !important; }
          .works-intro { padding: 60px 24px 80px !important; }
          .works-intro p { font-size: 15px !important; }
        }
      `}</style>

      <section
        id="works"
        style={{
          background: "#ffffff",
          paddingBottom: "0px",
          overflow: "hidden",
        }}
      >
        {/* Intro text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="works-intro"
          style={{ textAlign: "center", padding: "120px 100px 140px" }}
        >
          <p
            style={{
              fontFamily: "var(--font-space)",
              fontSize: "clamp(16px, 1.5vw, 22px)",
              color: "#818181",
              lineHeight: 1.7,
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            <Image
              src="/icons/computer.svg"
              alt=""
              width={30}
              height={30}
              style={{
                display: "inline-block",
                verticalAlign: "middle",
                marginRight: "8px",
              }}
            />{" "}
            Based in{" "}
            <strong style={{ color: "#1A1A1A", fontWeight: 700 }}>
              Sri Lanka,
            </strong>{" "}
            I design brands and digital experiences through a blend of
            creativity, strategy, and user-centered thinking.{" "}
            <Image
              src="/icons/shapes.svg"
              alt=""
              width={30}
              height={30}
              style={{
                display: "inline-block",
                verticalAlign: "middle",
                marginLeft: "6px",
              }}
            />
          </p>
        </motion.div>

        {/* Desktop grid */}
        <div
          className="works-desktop"
          style={{ flexDirection: "column", gap: "3.5vw", padding: "0" }}
        >
          {rows.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: rowIndex * 0.08 }}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              {row.map((item, i) => (
                <WorkCard key={item.id} item={item} index={i} />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Mobile grid */}
        <div
          className="works-mobile"
          style={{ flexDirection: "column", gap: "8px", padding: "0" }}
        >
          {mobileRows.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: rowIndex * 0.08 }}
              style={{ display: "flex", gap: "8px" }}
            >
              {row.map((item, i) => (
                <MobileWorkCard key={item.id} item={item} index={i} />
              ))}
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

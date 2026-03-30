"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const works = [
  {
    id: 1,
    title: "Brand Identity",
    category: "Web Experience",
    media:
      "https://res.cloudinary.com/dna2qtnfv/image/upload/v1774860286/artsb_cover.png",
    type: "image",
  },
  {
    id: 2,
    title: "Mobile App UI",
    category: "UI/UX",
    media:
      "https://res.cloudinary.com/dna2qtnfv/video/upload/v1774862518/hydrosmart_work_q9sfgo.mp4",
    type: "video",
  },
  {
    id: 3,
    title: "Web Experience",
    category: "UI/UX",
    media:
      "https://res.cloudinary.com/dna2qtnfv/video/upload/v1774857092/beach_export.mp4",
    type: "video",
  },
  {
    id: 4,
    title: "Packaging Design",
    category: "Packaging",
    media:
      "https://res.cloudinary.com/dna2qtnfv/video/upload/v1774861212/sanas_v2_z5azgs.mp4",
    type: "video",
  },
  {
    id: 5,
    title: "Poster Campaign",
    category: "Branding",
    media:
      "https://res.cloudinary.com/dna2qtnfv/image/upload/v1774863763/xiaobao_mfctxd.png",
    type: "image",
  },
  {
    id: 6,
    title: "Company Promo",
    category: "Web UI",
    media:
      "https://res.cloudinary.com/dna2qtnfv/video/upload/v1774864894/Astroweb_babcut.mp4",
    type: "video",
  },
];

// splits into rows of 3
const rows = works.reduce((acc: (typeof works)[], item, i) => {
  const rowIndex = Math.floor(i / 3);
  if (!acc[rowIndex]) acc[rowIndex] = [];
  acc[rowIndex].push(item);
  return acc;
}, []) as (typeof works)[];

function WorkCard({ item, index }: { item: (typeof works)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.75, delay: index * 0.12, ease: "easeOut" }}
      style={{
        flex: "0 0 calc(31% )",
        minWidth: 0,
        aspectRatio: "4/5",
        borderRadius: "3px",
        overflow: "hidden",
        background: "#D9D9D9",
        position: "relative",
      }}
    >
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
    </motion.div>
  );
}

export default function Works() {
  return (
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
        style={{
          textAlign: "center",
          padding: "120px 100px 100px",
        }}
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
          I design brands and digital experiences through a blend of creativity,
          strategy, and user-centered thinking.{" "}
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

      {/* Grid — all rows identical */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "3.5vw",
          padding: "0",
        }}
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
    </section>
  );
}

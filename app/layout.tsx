import type { Metadata } from "next";
import { Space_Grotesk, Karla } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["300", "400", "500", "600", "700"],
});

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Sandali Disara — Creative Designer",
  description: "Creative Designer blending UI/UX, branding, and strategy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ background: "#ffffff" }}>
      <body
        className={`${spaceGrotesk.variable} ${karla.variable}`}
        style={{ background: "#ffffff" }}
      >
        {children}
      </body>
    </html>
  );
}
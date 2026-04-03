import type { Metadata } from "next";
import { Space_Grotesk, Karla } from "next/font/google";
import Script from "next/script";
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EBFS14WD60"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EBFS14WD60');
          `}
        </Script>
      </head>
      <body
        className={`${spaceGrotesk.variable} ${karla.variable}`}
        style={{ background: "#ffffff" }}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./_components/GoogleAnalytic";

const inter = Inter({ subsets: ["latin"] });
const ibmMono = IBM_Plex_Mono({ weight: ['100', '200', '300', '400', '500', '600', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Hi! I am Hudy",
  description: "Web Developer turned Indie Hacker. I love building things and sharing knowledges. Very active on X, Discord.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body className={ibmMono.className}>{children}</body>
      <GoogleAnalytics />
    </html>
  );
}

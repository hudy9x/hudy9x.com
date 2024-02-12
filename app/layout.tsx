import type { Metadata } from "next";
import { Jost, Outfit } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const jost = Jost({ subsets: ['latin'] })
const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "hudy9x.com",
  description: "Hi ! It's hudy here. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fonts = [
    // jost.className,
    outfit.className
  ]
  return (
    <html lang="en">
      <body className={fonts.join(' ')}>{children}</body>
    </html>
  );
}

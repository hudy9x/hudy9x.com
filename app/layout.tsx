import type { Metadata } from "next";
import { Jost, Outfit } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const jost = Jost({ subsets: ['latin'] })
const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Hudy9x - A web developer who traveling to app places.",
  description: "Hi ! It's hudy here. As you may know I speak web languages. Love to turn ideas into apps for customers and myself. Keep coding, keep learning. Find me on ",
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

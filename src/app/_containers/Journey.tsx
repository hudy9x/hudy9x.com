import RandomTextReveal from "../_components/RandomTextReveal";
import Link from "next/link";

export default function Journey() {
  return <section className="section">
    <h3><RandomTextReveal onHover={true} text="Journey" /></h3>
    <p>
      I&apos;m on an exciting journey to make $1000 in 60 days as an Indie Hacker. 
      Follow along as I document my progress, share learnings, and build in public.{' '}
      <Link href="/journey" className="text-blue-500 hover:underline">
        View my journey →
      </Link>
    </p>
  </section>
}

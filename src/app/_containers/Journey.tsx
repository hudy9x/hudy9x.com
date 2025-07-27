import RandomTextReveal from "../_components/RandomTextReveal";
import Link from "next/link";
import SocialMediaLinks from "../_components/SocialMediaLinks";

export default function Journey() {
  return <section className="section">
    <h3><RandomTextReveal onHover={true} text="Journey" /></h3>
    <p>
      I&apos;m on an exciting journey to make $1000 in 60 days as an Indie Hacker. 
      Follow along as I document my progress, share learnings, and build in public.{' '}
      <Link href="/journey" className="text-blue-500 hover:underline pt-3">
      View my journey →
    </Link>
    </p>
   
    <div className="flex flex-wrap gap-4 mt-4">
      <SocialMediaLinks />
    </div>
  </section>
}

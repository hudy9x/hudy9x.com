import Link from "next/link";

export default function Mywork() {
  return <section id="work" className="section pt-[100px]">
    <button className="btn uppercase text-xs mb-[10px]">My side projects</button>
    <h2><Link href={"#work"}>Check out my work</Link></h2>
    <p>I’ve worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.</p>
  </section>
}

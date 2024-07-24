import Link from "next/link";

export default function GetInTouch() {
  return <section className="section mt-[100px] pb-[100px]">
    <button className="btn uppercase text-xs mb-[10px]">My contact</button>
    <h2>Get in touch</h2>
    <p>Want to chat? Just shoot me a dm <Link className="link" href="https://x.com/@hudy09" target="_blank">with a direct question on X</Link> and I'll respond whenever I can. Otherwise, send me an email to <Link className="link" href={"mailto:hi@hudy9x.com"}>hi@hudy9x.com</Link>.</p>
  </section>
}

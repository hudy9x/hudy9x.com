import RandomTextReveal from "../_components/RandomTextReveal";

export default function Header() {
  return <header id="about" className="section flex items-start gap-7">
    <div>
      <h1><RandomTextReveal onHover={true} text="Hi, I am Hudy" /></h1>

      <p>Obsessed with building products that people love. Indie hacker sharing the ups, downs, and everything in between on X and Discord.</p>
    </div>

    <img src="/avatar.png" className="shrink-0 w-16 h-16 sm:w-24 sm:h-24 rounded-full shadow" />

  </header>
}

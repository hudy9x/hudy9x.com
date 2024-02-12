import Link from "next/link";
import React from "react";
import Particles from "./components/Particles";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xl duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="z-10 font-extrabold text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
        hudy9x
      </h1>

      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-xl text-zinc-500 ">
          {"I'm building "}
          <Link
            target="_blank"
            href="https://namviek.com"
            className="underline duration-500 hover:text-zinc-300"
          >
            namviek.com
          </Link> to help small startups managing tasks with points easily.
        </h2>
      </div>
    </div>
  );

}


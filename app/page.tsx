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
              className="uppercase duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in-1000"
        quantity={100}
      />
      <h1 className=" animate-fade-in-2000 z-10 font-extrabold text-5xl text-transparent duration-1000 bg-white cursor-default text-edge-outline font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
        hudy9x
      </h1>

      <div className="my-16 text-center animate-fade-in mx-10 space-y-3 sm:mx-0 text-sm sm:text-xl">
        <h2 className="text-zinc-500 ">I speak web languages. Turning ideas into apps for customers and myself. Always coding, always learning.</h2>
        <h2 className="text-zinc-500 ">
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

